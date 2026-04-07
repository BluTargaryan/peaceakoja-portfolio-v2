import type { Metadata } from "next";
import {Orbitron, Inter} from "next/font/google";
import "./globals.css";
import WallpaperBackground from "./components/atoms/WallpaperBackground";
import Nav from "./components/sections/Nav";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peace Akoja Portfolio",
  description: "A simple, but arty portfolio for THE frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${orbitron.variable} ${inter.variable} antialiased
          px-4 py-11 md:px-10 
          h-full w-full overflow-hidden box-border 
          `}
      >
        <WallpaperBackground />
        <div className="w-full h-full bg-background border-3 border-text flex flex-col">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
