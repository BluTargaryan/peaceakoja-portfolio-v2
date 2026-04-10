'use client';
import educationData from "@/app/data/education.json";
import WorkLinkButton from "@/app/components/atoms/WorkLinkButton";
import Image, { StaticImageData } from "next/image";
import coventry from "@/app/assets/images/education/coventry.png";
import redeemers from "@/app/assets/images/education/redeemers.png";
import google from "@/app/assets/images/education/google.png";
import aws from "@/app/assets/images/education/aws.png";
import ibm from "@/app/assets/images/education/ibm.png";
import { useState, useRef, useLayoutEffect, useCallback } from "react";
import MaskIcon from "../atoms/MaskIcon";
import arrow from "@/app/assets/images/arrow.svg";

const IMAGE_MAP: Record<string, StaticImageData> = {
  "coventry.png": coventry,
  "redeemers.png": redeemers,
  "google.png": google,
  "aws.png": aws,
  "ibm.png": ibm,
};

const EducationSection = () => {
  const [currentTitle, setCurrentTitle] = useState(educationData[0].title);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateCenteredItem = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closest = educationData[0].title;
    let closestDist = Infinity;

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const dist = Math.abs(itemCenter - containerCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = educationData[i].title;
      }
    });

    setCurrentTitle(closest);
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
    educationData.find((e) => e.title === currentTitle) ?? educationData[0];
  const currentIndex = Math.max(
    0,
    educationData.findIndex((e) => e.title === currentTitle)
  );
  const lastIndex = educationData.length - 1;

  return (
    <>
      <div className="flex flex-col items-center text-center gap-4 w-[260px] md:w-[323px] xl:w-[1144px] xl:items-start xl:text-left">
            <h2>Education</h2>
            <p>Schools attended and qualifications achieved.</p>
        </div>
    <section className="flex flex-col items-center text-center gap-9 w-full xl:w-[1144px] xl:gap-25">
      
  
        <div className="flex flex-col items-center text-center gap-9 w-full md:gap-7 xl:flex-row xl:gap-0 xl:justify-between  xl:items-start">
          <div
            id="education-slideshow"
            className="w-full h-[447px] flex flex-col xl:w-[581px] xl:h-[400px] min-w-0 
            "
          >
            <div
              ref={scrollRef}
              className="relative w-full min-w-0 h-full flex items-center gap-6 overflow-x-scroll  scroll-smooth snap-x snap-proximity
              md:gap-10

              "
            >
               <div
              className="shrink-0 w-16 md:w-70 lg:w-100 xl:w-50"
              aria-hidden
            />
              {educationData.map((entry, i) => (
                <div
                  key={`${entry.title}-${entry.date}`}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className={`w-40 h-56 border-3 shrink-0 snap-center transition-all duration-300 ${currentTitle === entry.title ? "border-accent p-2.5 scale-110" : "border-text scale-90"}
                  md:w-40 md:h-56
                    `}
                >
                  {IMAGE_MAP[entry.image] && (
                    <Image
                      src={IMAGE_MAP[entry.image]}
                      alt={entry.title}
                      width={260}
                      height={447}
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                </div>
              ))}
              <div
              className="shrink-0 w-16 md:w-70 lg:w-100 xl:w-50"
              aria-hidden
            />
            </div>

            <div className="flex items-center justify-between w-full ">
              <button
                type="button"
                aria-label="Previous qualification"
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
                {educationData.map((entry, i) => (
                  <span
                    key={`${entry.title}-${entry.date}-dot`}
                    onClick={() => scrollItemToCenter(i)}
                    className={`w-3 h-3 cursor-pointer transition-all duration-300 ${currentTitle === entry.title ? "bg-accent" : "bg-text"}
                    md:w-5 md:h-5
                    `}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next qualification"
                disabled={currentIndex >= lastIndex}
                onClick={() => scrollItemToCenter(currentIndex + 1)}
                className="flex items-center justify-center w-6 h-6 bg-text shrink-0 disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer hover:opacity-90 transition-opacity
                md:w-9 md:h-9
                "
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

          <div className="flex flex-col items-center text-center gap-9 w-[260px] md:w-[323px] md:gap-7 xl:w-[465px] xl:gap-10 xl:items-start xl:text-left">
            <div className="flex flex-col items-center text-center gap-4 w-full xl:items-start xl:text-left">
              <h3>Qualification</h3>
              <span className="text-xl font-orbitron font-bold text-primary xl:text-4xl">
                {active.title}
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-4 w-full xl:items-start xl:text-left">
              <h3>Issuing institution</h3>
              <span className="text-xl font-orbitron font-bold text-primary xl:text-4xl">
              {active.body} ({active.date})
              </span>
            </div>
            <div className="flex flex-col gap-4 w-full justify-center xl:items-start xl:gap-4">
              <h3>Credentials</h3>
              <div className="flex flex-col gap-3.5 w-full justify-between xl:flex-row xl:flex-wrap xl:items-start xl:gap-6.5 xl:justify-start">
                {active.links.map((link) => (
                  <WorkLinkButton
                    key={`${link.name}-${link.url}`}
                    name={link.name}
                    url={link.url}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-4 w-[260px] md:w-[323px] xl:w-[1144px] xl:gap-10 xl:items-start xl:text-left">
          <h3>Highlights</h3>
          <p className="whitespace-pre-line">{active.skills}</p>
        </div>
      
    </section>
    </>
  );
};

export default EducationSection;
