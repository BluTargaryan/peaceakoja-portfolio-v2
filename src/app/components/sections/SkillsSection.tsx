'use client';
import skillsData from "@/app/data/skills.json";
import Image, { StaticImageData } from "next/image";
import figma from "@/app/assets/images/skills/Figma.png";
import nextjs from "@/app/assets/images/skills/Next.js.png";
import reactjs from "@/app/assets/images/skills/React.png";
import supabase from "@/app/assets/images/skills/Supabase.png";
import firebase from "@/app/assets/images/skills/Firebase.png";
import nodejs from "@/app/assets/images/skills/Node.png";
import vercel from "@/app/assets/images/skills/Vercel.png";
import aws from "@/app/assets/images/skills/AWS.png";
import { useState, useRef, useLayoutEffect, useCallback } from "react";
import MaskIcon from "../atoms/MaskIcon";
import arrow from "@/app/assets/images/arrow.svg";

const IMAGE_MAP: Record<string, StaticImageData> = {
  "figma.png": figma,
  "nextjs.png": nextjs,
  "reactjs.png": reactjs,
  "supabase.png": supabase,
  "firebase.png": firebase,
  "nodejs.png": nodejs,
  "vercel.png": vercel,
  "aws.png": aws,
};

const SkillsSection = () => {
  const [currentName, setCurrentName] = useState(skillsData[0].name);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateCenteredItem = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closest = skillsData[0].name;
    let closestDist = Infinity;

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const dist = Math.abs(itemCenter - containerCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = skillsData[i].name;
      }
    });

    setCurrentName(closest);
  }, []);

  const scrollItemToCenter = useCallback((i: number) => {
    const container = scrollRef.current;
    const item = itemRefs.current[i];
    if (!container || !item) return;
    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const delta =
      (itemRect.left + itemRect.width / 2) -
      (containerRect.left + containerRect.width / 2);
    container.scrollBy({ left: delta, behavior: "smooth" });
  }, []);


  useLayoutEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateCenteredItem();
    container.addEventListener("scroll", updateCenteredItem, { passive: true });
    const ro = new ResizeObserver(() => updateCenteredItem());
    ro.observe(container);
    return () => {
      container.removeEventListener("scroll", updateCenteredItem);
      ro.disconnect();
    };
  }, [updateCenteredItem]);

  const active =
    skillsData.find((e) => e.name === currentName) ?? skillsData[0];
  const currentIndex = Math.max(
    0,
    skillsData.findIndex((e) => e.name === currentName)
  );
  const lastIndex = skillsData.length - 1;

  return (
    <>
      <div className="flex flex-col items-center text-center gap-4 w-[260px] md:w-[323px] ">
            <h2>Toolkit</h2>
            <p>Tools and technologies I use to build products.</p>
        </div>
    <section className="flex flex-col items-center text-center gap-9 w-full">
      
  
        <div className="flex flex-col items-center text-center gap-9 w-full md:gap-7">
          <div
            id="skills-slideshow"
            className="w-full h-[300px] flex flex-col md:h-[447px]"
          >
            <div
              ref={scrollRef}
              className="relative w-full h-full flex items-center gap-20 overflow-x-scroll px-30 scroll-smooth snap-x snap-proximity
              md:px-80 md:gap-32
              lg:px-120
              "
            >
              {skillsData.map((entry, i) => (
                <div
                  key={entry.name}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className={`shrink-0 snap-center h-15 transition-all duration-300 md:h-20 ${currentName === entry.name ? "scale-175" : ""}`}
                >
                  {IMAGE_MAP[entry.image] && (
                    <Image
                      src={IMAGE_MAP[entry.image]}
                      alt={entry.name}
                      width={260}
                      height={447}
                      className="w-auto h-full"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between w-full ">
              <button
                type="button"
                aria-label="Previous skill"
                disabled={currentIndex <= 0}
                onClick={() => scrollItemToCenter(currentIndex - 1)}
                className="flex items-center justify-center w-6 h-6 bg-text shrink-0 disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer hover:opacity-90 transition-opacity
                md:w-9 md:h-9
                "
              >
                <MaskIcon
                  src={arrow.src}
                  alt=""
                  className="w-2 h-2 pointer-events-none md:w-3 md:h-3"
                  style={{ backgroundColor: "var(--background)" }}
                />
              </button>

              <div className="flex items-center justify-center gap-3 md:gap-6">
                {skillsData.map((entry, i) => (
                  <span
                    key={`${entry.name}-dot`}
                    onClick={() => scrollItemToCenter(i)}
                    className={`w-3 h-3 cursor-pointer transition-all duration-300 ${currentName === entry.name ? "bg-accent" : "bg-text"}
                    md:w-5 md:h-5
                    `}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next skill"
                disabled={currentIndex >= lastIndex}
                onClick={() => scrollItemToCenter(currentIndex + 1)}
                className="flex items-center justify-center w-6 h-6 bg-text shrink-0 disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer hover:opacity-90 transition-opacity
                md:w-9 md:h-9"
              >
                <MaskIcon
                  src={arrow.src}
                  alt=""
                  className="w-2 h-2 rotate-180 pointer-events-none md:w-3 md:h-3"
                  style={{ backgroundColor: "var(--background)" }}
                />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-9 w-[260px] md:w-[323px] md:gap-7">
            <div className="flex flex-col items-center text-center gap-4 w-full ">
              <h3>Tool</h3>
              <span className="text-xl font-orbitron font-bold text-primary">
                {active.name}
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-4 w-full ">
              <h3>About</h3>
              <p className="whitespace-pre-line">{active.description}</p>
            </div>
          </div>
        </div>
      
    </section>
    </>
  );
};

export default SkillsSection;
