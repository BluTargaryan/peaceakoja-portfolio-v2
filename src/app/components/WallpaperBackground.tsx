"use client";

import { useEffect, useRef, useState } from "react";

const VIEWPORT_BREAKPOINT = 1024; // portrait for phone + tablet, landscape for desktop
const WALLPAPER_CACHE_KEY = "wallpaper_cache";

type Attribution = { name: string; link: string; photoLink: string } | null;

type CachedEntry = {
  url: string;
  user: { name: string; link: string } | null;
  photoLink: string;
};

type CachedWallpaper = {
  portrait: CachedEntry | null;
  landscape: CachedEntry | null;
};

function getOrientation(): "portrait" | "landscape" {
  if (typeof window === "undefined") return "landscape";
  return window.innerWidth < VIEWPORT_BREAKPOINT ? "portrait" : "landscape";
}

function getSize(): "regular" | "full" {
  if (typeof window === "undefined") return "regular";
  return window.innerWidth >= VIEWPORT_BREAKPOINT ? "full" : "regular";
}

function applyBackground(url: string) {
  document.body.style.backgroundImage = `url(${url})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundAttachment = "fixed";
}

function applyFromEntry(entry: CachedEntry | null, setAttribution: (a: Attribution) => void) {
  if (!entry?.url) return;
  applyBackground(entry.url);
  setAttribution(
    entry.user ?
      {
        name: entry.user.name,
        link: entry.user.link,
        photoLink: entry.photoLink ?? "https://unsplash.com",
      }
    : null
  );
}

export default function WallpaperBackground() {
  const [attribution, setAttribution] = useState<Attribution>(null);
  const resizeCleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    try {
      const cached = sessionStorage.getItem(WALLPAPER_CACHE_KEY);
      const orientation = getOrientation();

      if (cached) {
        const data: CachedWallpaper = JSON.parse(cached);
        const entry = orientation === "portrait" ? data.portrait : data.landscape;
        if (entry?.url) {
          applyFromEntry(entry, setAttribution);

          const handleResize = () => {
            const next = getOrientation();
            const nextEntry = next === "portrait" ? data.portrait : data.landscape;
            if (nextEntry?.url) applyFromEntry(nextEntry, setAttribution);
          };
          window.addEventListener("resize", handleResize);
          resizeCleanupRef.current = () => window.removeEventListener("resize", handleResize);
          return () => {
            resizeCleanupRef.current?.();
            resizeCleanupRef.current = null;
          };
        }
      }

      Promise.all([
        fetch("/api/wallpaper?orientation=portrait&size=regular").then((r) => r.json()),
        fetch("/api/wallpaper?orientation=landscape&size=full").then((r) => r.json()),
      ]).then(([portraitData, landscapeData]) => {
        const portrait: CachedEntry | null =
          portraitData?.url ?
            {
              url: portraitData.url,
              user: portraitData.user ?? null,
              photoLink: portraitData.photoLink ?? "https://unsplash.com",
            }
          : null;
        const landscape: CachedEntry | null =
          landscapeData?.url ?
            {
              url: landscapeData.url,
              user: landscapeData.user ?? null,
              photoLink: landscapeData.photoLink ?? "https://unsplash.com",
            }
          : null;

        sessionStorage.setItem(
          WALLPAPER_CACHE_KEY,
          JSON.stringify({ portrait, landscape })
        );

        const data: CachedWallpaper = { portrait, landscape };
        const entry = orientation === "portrait" ? data.portrait : data.landscape;
        if (entry?.url) applyFromEntry(entry, setAttribution);

        const handleResize = () => {
          const next = getOrientation();
          const nextEntry = next === "portrait" ? data.portrait : data.landscape;
          if (nextEntry?.url) applyFromEntry(nextEntry, setAttribution);
        };
        window.addEventListener("resize", handleResize);
        resizeCleanupRef.current = () => window.removeEventListener("resize", handleResize);
      }).catch(() => {});

      return () => {
        resizeCleanupRef.current?.();
        resizeCleanupRef.current = null;
      };
    } catch {
      // leave body background as-is
      return () => {};
    }
  }, []);

  return attribution ? (
    <span
      className="fixed bottom-2 right-2 z-50 text-xs text-white/80 hover:text-white"
      style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
    >
      Photo by{" "}
      <a href={attribution.link} target="_blank" rel="noopener noreferrer" className="underline">
        {attribution.name}
      </a>{" "}
      on{" "}
      <a href={attribution.photoLink} target="_blank" rel="noopener noreferrer" className="underline">
        Unsplash
      </a>
    </span>
  ) : null;
}
