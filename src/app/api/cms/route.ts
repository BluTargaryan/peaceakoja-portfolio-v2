import { NextResponse } from "next/server";
import { fetchSheet } from "@/app/lib/fetchSheet";

export const revalidate = 300;

export async function GET() {
  const url = process.env.SHEETS_INTRO_URL;

  if (!url) {
    return NextResponse.json(
      { error: "Missing SHEETS_INTRO_URL environment variable" },
      { status: 500 }
    );
  }

  try {
    const intro = await fetchSheet(url);
    return NextResponse.json({ intro }, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error while fetching sheet";

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

