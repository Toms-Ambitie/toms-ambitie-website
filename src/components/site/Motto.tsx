import { useRef, useState } from "react";
import { useScrollFrame } from "./motion";

/** Motto on ballpoint blue: words light up one by one while scrolling. */
export function Motto({ text, note }: { text: string; note: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  const [lit, setLit] = useState(words.length);

  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const vh = window.innerHeight;
    const r = el.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.55)));
    setLit(p * words.length);
  });

  return (
    <section className="motto">
      <div className="wrap">
        <p className="d" ref={ref}>
          <span className="sr-only">{text}</span>
          {words.map((w, i) => (
            <span key={i} aria-hidden="true" className={i > lit ? "dim" : undefined}>
              {w}
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
        <p className="hand">{note}</p>
      </div>
    </section>
  );
}
