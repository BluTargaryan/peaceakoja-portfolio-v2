'use client'

import { useRef } from "react";
import HeroHome from "./sections/HeroHome";
import ProjectsHome from "./sections/ProjectsHome";
import ScrollingText from "./subComps/ScrollingText";
import AboutHome from "./sections/AboutHome";
import Footer from "../global/Footer";

export default function Home() {
  const continueRef = useRef<HTMLDivElement | null>(null)

  return (
    <main className="w-full bg-selfPrimary overflow-x-hidden scroll-smooth">
      <HeroHome />
      <ProjectsHome/>
      <ScrollingText />
      <AboutHome />
      <Footer />
    </main>
  );
}