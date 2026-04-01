import type { CSSProperties } from "react";

type MaskIconProps = {
  /** Static import from an SVG, e.g. `import icon from "./x.svg"` → pass `icon.src` if Next gives an object, or the string URL directly */
  src: string;
  alt: string;
  /** CSS color; omit to use `currentColor` (set via parent `color` or Tailwind `text-*`) */
  color?: string;
  className?: string;
  style?: CSSProperties;
};

/**
 * Renders an SVG (URL) as a mask so the visible pixels follow `color` / `currentColor`.
 * Size the icon with `className` (e.g. `h-5 w-5`) — the element has no intrinsic size.
 */
export default function MaskIcon({
  src,
  alt,
  color,
  className = "",
  style,
}: MaskIconProps) {
  const maskStyle: CSSProperties = {
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    backgroundColor: color ?? "currentColor",
    ...style,
  };

  return (
    <span
      role="img"
      aria-label={alt}
      className={`inline-block shrink-0 ${className}`}
      style={maskStyle}
    />
  );
}
