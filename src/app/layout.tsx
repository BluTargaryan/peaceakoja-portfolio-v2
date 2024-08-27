import type { Metadata } from "next";
import { Lato, Lustria } from "next/font/google";
import "./globals.css";
import Nav from "./components/global/Nav"

const lato = Lato({
  weight: ["400", "700"],
  subsets:['latin']
});

const lustria = Lustria({
  weight: ["400"],
  subsets:['latin']
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
      <body className={lato.className }>
        <Nav/>
        {children}
        </body>
    </html>
  );
}
