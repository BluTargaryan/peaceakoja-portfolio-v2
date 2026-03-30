import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { config } from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// Load .env.local
config({ path: path.join(root, ".env.local") });

const require = createRequire(import.meta.url);
const Papa = require("papaparse");

async function fetchCsv(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status} ${res.statusText} — ${url}`);
  }
  return res.text();
}

function parseCsv(csv) {
  const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });
  if (parsed.errors?.length) {
    const e = parsed.errors[0];
    throw new Error(`Parse failed: ${e.message} (row ${e.row ?? "unknown"})`);
  }
  return parsed.data;
}

async function exportSheet(envVar, outputFile) {
  const url = process.env[envVar];
  if (!url) {
    console.error(`  ✗ Missing ${envVar} — skipping ${outputFile}`);
    return;
  }

  console.log(`  Fetching ${envVar}...`);
  const csv = await fetchCsv(url);
  const data = parseCsv(csv);

  const outPath = path.join(root, "src", "app", "data", outputFile);
  await fs.writeFile(outPath, JSON.stringify(data, null, 2));
  console.log(`  ✓ Wrote ${path.relative(root, outPath)} (${data.length} row${data.length === 1 ? "" : "s"})`);
}

async function main() {
  const dataDir = path.join(root, "src", "app", "data");
  await fs.mkdir(dataDir, { recursive: true });
  console.log("Exporting Google Sheets → JSON...");

  await exportSheet("SHEETS_INTRO_URL", "intro.json");
  await exportSheet("SHEETS_PAGETITLE_URL", "pageTitles.json");

  console.log("Done.");
}

main().catch((e) => {
  console.error("Export failed:", e.message);
  process.exit(1);
});
