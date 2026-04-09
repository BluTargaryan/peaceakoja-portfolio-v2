"use client";

import React, { useState, useRef, useEffect } from "react";
import MaskIcon from "./MaskIcon";
import longArrowIcon from "@/app/assets/images/longArrowRight.svg";

export type LinkItemProps = {
  name: string;
  description: string;
  linkText: string;
  link: string;
  headerIconSrc: string;
  headerIconAlt: string;
};

export default function LinkItem({
  name,
  description,
  linkText,
  link,
  headerIconSrc,
  headerIconAlt,
}: LinkItemProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const isExternal = /^https?:\/\//i.test(link);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (ev: PointerEvent) => {
      const root = rootRef.current;
      if (!root) return;
      const target = ev.target;
      if (target instanceof Node && root.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="flex flex-col bg-accent w-full border-3 border-text xl:w-[322px]"
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`w-full h-10 flex items-center justify-between p-2.5 bg-secondary ${open ? "border-b-3 border-text" : ""}
          hover:bg-background transition-all duration-300
          md:h-12
          xl:h-16 
          `}
      >
        <span className="font-orbitron font-medium text-text">{name}</span>
        <MaskIcon
          src={headerIconSrc}
          alt={headerIconAlt}
          className="w-5 h-5 md:w-6 md:h-6"
          style={{ backgroundColor: "var(--text)" }}
        />
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="flex flex-col gap-7 p-2.5 xl:gap-10">
            <p className="xl:text-base!">{description}</p>

            <a
              href={link}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex items-center justify-between p-2 bg-text text-background"
            >
              <span className="font-orbitron text-background">{linkText}</span>
              <MaskIcon
                src={longArrowIcon.src}
                alt="Open link"
                className="w-5 h-5"
                style={{ backgroundColor: "var(--background)" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
