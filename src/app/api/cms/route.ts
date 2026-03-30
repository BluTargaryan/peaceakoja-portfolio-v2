import { NextResponse } from "next/server";
import introData from "@/app/data/intro.json";

export const revalidate = 300;

export async function GET() {
  // Sheets CMS version (kept for reference)
  // import { fetchSheet } from "@/app/lib/fetchSheet";
  // const url = process.env.SHEETS_INTRO_URL;
  // if (!url) {
  //   return NextResponse.json(
  //     { error: "Missing SHEETS_INTRO_URL environment variable" },
  //     { status: 500 }
  //   );
  // }
  // try {
  //   const intro = await fetchSheet(url);
  //   return NextResponse.json({ intro }, { status: 200 });
  // } catch (error) {
  //   const message =
  //     error instanceof Error ? error.message : "Unknown error while fetching sheet";
  //   return NextResponse.json({ error: message }, { status: 500 });
  // }

  return NextResponse.json({ intro: introData }, { status: 200 });
}

