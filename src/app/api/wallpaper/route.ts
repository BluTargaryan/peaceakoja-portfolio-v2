import { NextRequest, NextResponse } from "next/server";

const ORIENTATIONS = ["portrait", "landscape"] as const;
const SIZES = ["regular", "full"] as const;

export async function GET(request: NextRequest) {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) {
    return NextResponse.json({ url: null }, { status: 200 });
  }

  const orientationParam = request.nextUrl.searchParams.get("orientation");
  const orientation =
    ORIENTATIONS.includes(orientationParam as (typeof ORIENTATIONS)[number]) ?
      orientationParam
    : "landscape";

  const sizeParam = request.nextUrl.searchParams.get("size");
  const size = SIZES.includes(sizeParam as (typeof SIZES)[number]) ? sizeParam : "regular";

  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?query=wallpaper&orientation=${orientation}`,
      {
        headers: {
          Authorization: `Client-ID ${key}`,
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json({ url: null }, { status: 200 });
    }

    const data = await res.json();
    const url =
      size === "full" ?
        (data.urls?.full ?? data.urls?.regular ?? null)
      : (data.urls?.regular ?? data.urls?.full ?? null);
    const user = data.user;
    const userLink = user?.links?.html ?? (user?.username ? `https://unsplash.com/@${user.username}` : null);
    const photoLink = data.links?.html ?? null;

    return NextResponse.json({
      url,
      user: url && user ? { name: user.name ?? "Unknown", link: userLink ?? "https://unsplash.com" } : null,
      photoLink: photoLink ?? "https://unsplash.com",
    });
  } catch {
    return NextResponse.json({ url: null }, { status: 200 });
  }
}
