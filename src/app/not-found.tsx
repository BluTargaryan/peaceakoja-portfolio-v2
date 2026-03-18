// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full py-16 text-center">
      <h1 className="text-5xl font-orbitron font-semibold text-accent">404</h1>
      <p className="mt-4 text-text/80">Page not found</p>

      <Link
        href="/"
        className="mt-6 inline-block border-3 border-text px-6 py-2 text-text bg-accent hover:bg-secondary transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}