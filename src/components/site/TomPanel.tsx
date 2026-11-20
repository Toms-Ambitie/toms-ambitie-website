import { useRef, useState } from "react";
import { reducedMotion, useScrollFrame } from "./motion";

type TomPanelProps = {
  img: { src: string; srcSet: string; width: number; height: number };
  note: string;
  className?: string;
};

/** Tom as a sticker on a ballpoint-blue panel; drifts a little with the scroll. */
export function TomPanel({ img, note, className = "" }: TomPanelProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [py, setPy] = useState(0);

  useScrollFrame(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    const vh = window.innerHeight;
    const r = el.getBoundingClientRect();
    if (r.bottom > 0 && r.top < vh) setPy(((r.top + r.height) / (vh + r.height)) * 30 - 8);
  });

  return (
    <div className={`tompanel ${className}`.trim()}>
      <img
        ref={ref}
        className="stk"
        src={img.src}
        srcSet={img.srcSet}
        sizes="(max-width:820px) 85vw, 40vw"
        width={img.width}
        height={img.height}
        alt="Tom Mulder"
        loading="lazy"
        decoding="async"
        style={{ ["--py" as string]: `${py.toFixed(1)}px` }}
      />
      <span className="hand">{note}</span>
    </div>
  );
}
