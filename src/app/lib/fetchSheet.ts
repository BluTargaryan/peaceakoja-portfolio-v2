import Papa from "papaparse";

export type SheetRow = Record<string, string>;

export type ArticleRow = {
  title: string;
  date: string;
  description: string;
  docUrl: string;
  image?: string;
};

export async function fetchSheet(url: string): Promise<SheetRow[]> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch sheet: ${res.status} ${res.statusText}`);
  }

  const csv = await res.text();

  const parsed = Papa.parse<SheetRow>(csv, {
    header: true,
    skipEmptyLines: true,
  });

  if (parsed.errors && parsed.errors.length > 0) {
    const firstError = parsed.errors[0];
    throw new Error(
      `Failed to parse CSV: ${firstError.message} at row ${firstError.row ?? "unknown"}`
    );
  }

  return parsed.data;
}

