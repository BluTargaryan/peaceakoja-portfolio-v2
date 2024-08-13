import Image from "next/image";
import HeroHome from "./components/home/sections/HeroHome";
import ProjectsHome from "./components/home/sections/ProjectsHome";

export default function Home() {
  return (
    <main className="w-full bg-selfPrimary">
      <HeroHome />
      <ProjectsHome />
    </main>
  );
}
