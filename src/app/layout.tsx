import type { Metadata } from "next";
import {Orbitron, Inter} from "next/font/google";
import "./globals.css";
import WallpaperBackground from "./components/WallpaperBackground";

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
    <html lang="en">
      <body
        className={`${orbitron.variable} ${inter.variable} antialiased`}
      >
        <WallpaperBackground />
        {children}
      </body>
    </html>
  );
}
