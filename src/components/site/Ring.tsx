import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { RING_PATH } from "./ringPath";
import { reducedMotion } from "./motion";

/** The marker circle, defined once per page and reused by every <Ring>. */
export const RingSymbol = () => (
  <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
    <defs>
      <symbol id="ring" viewBox="0 0 120 100" preserveAspectRatio="none">
        <path fillRule="evenodd" d={RING_PATH} />
      </symbol>
    </defs>
  </svg>
);

type RingProps = {
  className?: string;
  style?: CSSProperties;
  /** ms after coming into view before the circle draws itself */
  delay?: number;
  /** When set, the parent decides: true draws the circle, false hides it again. */
  play?: boolean;
};

/** Draws itself in 0.9s, behind the letters, by unmasking along the marker stroke. */
export function Ring({ className = "", style, delay = 250, play }: RingProps) {
  const id = "rm" + useId().replace(/:/g, "");
  const svgRef = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (reducedMotion() || play !== undefined) return;
    const svg = svgRef.current;
    if (!svg) return;
    let t: number | undefined;
    const io = new IntersectionObserver(
      ([en]) => {
        if (!en.isIntersecting) return;
        t = window.setTimeout(() => setDrawn(true), delay);
        io.disconnect();
      },
      { threshold: 0.35 },
    );
    io.observe(svg);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [play, delay]);

  useEffect(() => {
    if (reducedMotion() || play === undefined) return;
    if (!play) {
      setDrawn(false);
      return;
    }
    const t = window.setTimeout(() => setDrawn(true), delay);
    return () => window.clearTimeout(t);
  }, [play, delay]);

  // With reduced motion or without script the mask is switched off in site.css, so the circle simply stands there.
  return (
    <svg
      ref={svgRef}
      className={`ring ${className}`.trim()}
      style={style}
      viewBox="0 0 120 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <mask id={id} maskUnits="userSpaceOnUse" x={-10} y={-10} width={140} height={120}>
        <ellipse
          cx={60}
          cy={50}
          rx={50}
          ry={40}
          fill="none"
          stroke="#fff"
          strokeWidth={34}
          pathLength={1}
          strokeDasharray="1 1"
          strokeDashoffset={drawn ? 0 : 1}
          transform="rotate(-62 60 50)"
          style={{ transition: drawn ? "stroke-dashoffset .9s cubic-bezier(.4,.1,.2,1)" : "none" }}
        />
      </mask>
      <use href="#ring" width={120} height={100} mask={`url(#${id})`} />
    </svg>
  );
}
