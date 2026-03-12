import Image from "next/image";
import HeroHome from "./components/home/sections/HeroHome";
import ProjectsHome from "./components/home/sections/ProjectsHome";
import ScrollingText from "./components/home/subComps/ScrollingText";
import AboutHome from "./components/home/sections/AboutHome";
import Footer from "./components/global/Footer";

export default function Home() {
  return (
    <main className="w-full bg-selfPrimary overflow-x-hidden scroll-smooth">
      <HeroHome />
      <ProjectsHome />
      <ScrollingText />
      <AboutHome />
      <Footer />
    </main>
  );
}
