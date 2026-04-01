'use client';
import worksData from "@/app/data/works.json";
import WorkLinkButton from "@/app/components/atoms/WorkLinkButton";
import Image, { StaticImageData } from "next/image";
import iimo from "@/app/assets/images/works/iimo.png";
import statify from "@/app/assets/images/works/statify.png";
import artbox from "@/app/assets/images/works/artbox.png";
import threeD from "@/app/assets/images/works/3d.png";
import houzen from "@/app/assets/images/works/houzen.png";
import dimensional from "@/app/assets/images/works/dimensional.png";
import { useState, useRef, useEffect, useCallback } from "react";
import MaskIcon from "../atoms/MaskIcon";
import arrow from "@/app/assets/images/arrow.svg";

const IMAGE_MAP: Record<string, StaticImageData> = {
  "iimo.png": iimo,
  "statify.png": statify,
  "artbox.png": artbox,
  "3d.png": threeD,
  "houzen.png": houzen,
  "dimensional.png": dimensional,
};

const WorkSection = () => {
  const [currentWork, setCurrentWork] = useState(worksData[0].name);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateCenteredItem = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closest = worksData[0].name;
    let closestDist = Infinity;

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const dist = Math.abs(itemCenter - containerCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = worksData[i].name;
      }
    });

    setCurrentWork(closest);
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

  const active = worksData.find((w) => w.name === currentWork) ?? worksData[0];
  const currentIndex = Math.max(0, worksData.findIndex((w) => w.name === currentWork));
  const lastIndex = worksData.length - 1;

  return (
    <section className="flex flex-col items-center text-center gap-9 w-[260px] ">

    <div className="flex flex-col items-center text-center gap-9 w-full ">
      <div className="flex flex-col items-center text-center gap-9 w-full ">
        
        <div id="work-slideshow" className="w-full h-[447px] flex flex-col gap-12 ">
      
          <div
            ref={scrollRef}
            className="relative w-full h-full flex items-center gap-6 overflow-x-scroll px-16 scroll-smooth snap-x snap-proximity"
          >
            {worksData.map((work, i) => (
              <div
                key={work.name}
                ref={(el) => { itemRefs.current[i] = el; }}
                className={`w-40 h-56 border-3 shrink-0 snap-center transition-all duration-300 ${currentWork === work.name ? "border-accent p-2.5 scale-110" : "border-text scale-90"}`}
              >
                {IMAGE_MAP[work.image] && (
                  <Image src={IMAGE_MAP[work.image]} alt={work.name} width={260} height={447} className="w-full h-full object-cover object-center" />
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between w-full ">

          <button
            type="button"
            aria-label="Previous project"
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
            {worksData.map((work, i) => (
              <span
                key={work.name}
                onClick={() => scrollItemToCenter(i)}
                className={`w-3 h-3 cursor-pointer transition-all duration-300 ${currentWork === work.name ? "bg-accent" : "bg-text"}`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next project"
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
          <h3>Project name</h3>
          <span className="text-xl font-orbitron font-bold text-primary">{active.name}</span>
        </div>
        <div className="flex flex-col gap-4 w-50 justify-center">
          <h3>Project links</h3>
          <div className="flex flex-col gap-3.5 w-full justify-between">
            {active.links.map((link) => (
              <WorkLinkButton key={`${link.name}-${link.url}`} name={link.name} url={link.url} />
            ))}
          </div>
        </div>
      </div>


      </div>
      <div className="flex flex-col items-center text-center gap-4 w-full ">
        <h3>Work done</h3>
        <p className="whitespace-pre-line">{active.description}</p>
      </div>
    </div>

</section>
  )
}

export default WorkSection
