'use client';
import experienceData from "@/app/data/experience.json";
import Image, { StaticImageData } from "next/image";
import firstguide from "@/app/assets/images/experience/firstguide.png";
import artbox from "@/app/assets/images/experience/artbox.png";
import theitapprentice from "@/app/assets/images/experience/theitapprentice.png";
import rccg from "@/app/assets/images/experience/rccg.png";
import freelance from "@/app/assets/images/experience/freelance.png";
import { useState, useRef, useEffect, useCallback } from "react";
import MaskIcon from "../atoms/MaskIcon";
import arrow from "@/app/assets/images/arrow.svg";

const IMAGE_MAP: Record<string, StaticImageData> = {
  "firstguide.png": firstguide,
  "artbox.png": artbox,
  "theitapprentice.png": theitapprentice,
  "rccg.png": rccg,
  "freelance.png": freelance,
};

const entryKey = (e: (typeof experienceData)[number]) =>
  `${e.title}::${e.duration}`;

const ExperienceSection = () => {
  const [currentKey, setCurrentKey] = useState(entryKey(experienceData[0]));
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateCenteredItem = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closest = entryKey(experienceData[0]);
    let closestDist = Infinity;

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const dist = Math.abs(itemCenter - containerCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = entryKey(experienceData[i]);
      }
    });

    setCurrentKey(closest);
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

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
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
    experienceData.find((e) => entryKey(e) === currentKey) ??
    experienceData[0];
  const currentIndex = Math.max(
    0,
    experienceData.findIndex((e) => entryKey(e) === currentKey)
  );
  const lastIndex = experienceData.length - 1;

  return (
    <>
      <div className="flex flex-col items-center text-center gap-4 w-[260px] ">
        <h2>Experience</h2>
        <p>Where I have worked and the roles I have held.</p>
      </div>
      <section className="flex flex-col items-center text-center gap-9 w-[260px] ">
        <div className="flex flex-col items-center text-center gap-9 w-full ">
          <div
            id="experience-slideshow"
            className="w-full h-[447px] flex flex-col gap-12 "
          >
            <div
              ref={scrollRef}
              className="relative w-full h-full flex items-center gap-6 overflow-x-scroll px-16 scroll-smooth snap-x snap-proximity"
            >
              {experienceData.map((entry, i) => (
                <div
                  key={entryKey(entry)}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className={`w-40 h-56 border-3 shrink-0 snap-center transition-all duration-300 ${currentKey === entryKey(entry) ? "border-accent p-2.5 scale-110" : "border-text scale-90"}`}
                >
                  {IMAGE_MAP[entry.image] && (
                    <Image
                      src={IMAGE_MAP[entry.image]}
                      alt={`${entry.title} at ${entry.body}`}
                      width={260}
                      height={447}
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between w-full ">
              <button
                type="button"
                aria-label="Previous role"
                disabled={currentIndex <= 0}
                onClick={() => scrollItemToCenter(currentIndex - 1)}
                className="flex items-center justify-center w-6 h-6 bg-text shrink-0 disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer hover:opacity-90 transition-opacity"
              >
                <MaskIcon
                  src={arrow.src}
                  alt=""
                  className="w-2 h-2 pointer-events-none"
                  style={{ backgroundColor: "var(--background)" }}
                />
              </button>

              <div className="flex items-center justify-center gap-6">
                {experienceData.map((entry, i) => (
                  <span
                    key={`${entryKey(entry)}-dot`}
                    onClick={() => scrollItemToCenter(i)}
                    className={`w-3 h-3 cursor-pointer transition-all duration-300 ${currentKey === entryKey(entry) ? "bg-accent" : "bg-text"}`}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next role"
                disabled={currentIndex >= lastIndex}
                onClick={() => scrollItemToCenter(currentIndex + 1)}
                className="flex items-center justify-center w-6 h-6 bg-text shrink-0 disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer hover:opacity-90 transition-opacity"
              >
                <MaskIcon
                  src={arrow.src}
                  alt=""
                  className="w-2 h-2 rotate-180 pointer-events-none"
                  style={{ backgroundColor: "var(--background)" }}
                />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-9 w-full ">
            <div className="flex flex-col items-center text-center gap-4 w-full ">
              <h3>Role</h3>
              <span className="text-xl font-orbitron font-bold text-primary">
                {active.title}
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-4 w-full ">
              <h3>Organisation</h3>
              <span className="text-xl font-orbitron font-bold text-primary">
                {active.body}
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-4 w-full ">
              <h3>Engagement</h3>
              <span className="text-xl font-orbitron font-medium text-primary">
                {active.type} <br/>({active.location}, {active.duration})
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-4 w-full ">
          <h3>Highlights</h3>
          <p className="whitespace-pre-line">{active.skills}</p>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
