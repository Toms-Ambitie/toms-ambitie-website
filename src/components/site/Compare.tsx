import { useEffect, useRef, useState } from "react";
import { SKETCHES, type SketchKey } from "./sketches";
import { reducedMotion, useScrollFrame } from "./motion";

type CompareProps = {
  sketch: SketchKey;
  img: { src: string; srcSet: string; alt: string };
  label: string;
  big?: boolean;
};

/** Slider: left the scribble, right what it became. Follows the scroll until the visitor grabs it. */
export function Compare({ sketch, img, label, big }: CompareProps) {
  const ref = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const touched = useRef(false);
  const [p, setP] = useState(45);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || svg.childNodes.length) return;
    SKETCHES[sketch](svg);
  }, [sketch]);

  useScrollFrame(() => {
    const el = ref.current;
    if (!el || touched.current || reducedMotion()) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    if (r.bottom < 0 || r.top > vh) return;
    const prog = 1 - Math.min(1, Math.max(0, (r.top + r.height * 0.25) / (vh * 0.85)));
    setP(Math.round(92 - prog * 84));
  });

  return (
    <div ref={ref} className={`cmp${big ? " big" : ""}`} style={{ ["--p" as string]: `${p}%` }}>
      <svg ref={svgRef} className="sk" viewBox="0 0 800 500" aria-hidden="true" />
      <div className="shot">
        <img src={img.src} srcSet={img.srcSet} sizes="(max-width:820px) 92vw, 62vw" alt={img.alt} loading="lazy" decoding="async" />
      </div>
      <span className="tag a" aria-hidden="true">
        krabbel
      </span>
      <span className="tag b" aria-hidden="true">
        gebouwd
      </span>
      <div className="bar" />
      <input
        type="range"
        min={0}
        max={100}
        value={p}
        aria-label={label}
        onChange={(e) => {
          touched.current = true;
          setP(+e.target.value);
        }}
      />
    </div>
  );
}
