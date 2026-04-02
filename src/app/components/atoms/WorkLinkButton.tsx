"use client";

import Image from "next/image";
import wwwIcon from "@/app/assets/images/www-icon.svg";
import githubIcon from "@/app/assets/images/github-icon.svg";
import dribbbleIcon from "@/app/assets/images/dribbble-icon.svg";
import badge from "@/app/assets/images/badgeVerified.svg";

type WorkLinkButtonProps = {
  name: string;
  url: string;
};

const ICON_MAP: Record<string, { src: string; alt: string }> = {
  Website: { src: wwwIcon, alt: "Website" },
  Github: { src: githubIcon, alt: "GitHub" },
  Dribbble: { src: dribbbleIcon, alt: "Dribbble" },
  Credential: { src: badge, alt: "Credential" },
};

const WorkLinkButton = ({ name, url }: WorkLinkButtonProps) => {
  const icon = ICON_MAP[name];

  return (
    <button
      onClick={() => window.open(url, "_blank")}
      className={`h-10 text-sm ${name === "Website" ? "bg-accent" : "bg-secondary"} font-orbitron font-semibold border-3 border-text px-3 py-1 hover:bg-background transition-all duration-300 flex items-center justify-between gap-1.5`}
    >
      
      {name}
      {icon && (
        <Image src={icon.src} alt={icon.alt} width={16} height={16} 
        className={`${name === "Credential" ? "w-4 h-4" : "w-5 h-auto"}`}
        />
      )}
    </button>
  );
};

export default WorkLinkButton;
