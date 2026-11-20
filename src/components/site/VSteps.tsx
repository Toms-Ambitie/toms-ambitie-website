import { useRef, useState } from "react";
import { useScrollFrame } from "./motion";

export type VStep = { n: string; wk: string; title: string; body: string; note: string; tool: string };

/** Vertical step list: the ballpoint line on the left grows along, the active number turns blue. */
export function VSteps({ steps }: { steps: VStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [fill, setFill] = useState(0);
  const [active, setActive] = useState<boolean[]>(() => steps.map(() => false));

  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const line = window.innerHeight * 0.55;
    const r = el.getBoundingClientRect();
    if (!r.height) return;
    setFill(Math.min(1, Math.max(0, (line - r.top) / r.height)));
    const rows = el.querySelectorAll<HTMLElement>(".vstep");
    const next = Array.from(rows, (row) => row.getBoundingClientRect().top < line);
    setActive((prev) => (prev.every((v, i) => v === next[i]) ? prev : next));
  });

  return (
    <div className="vsteps" ref={ref}>
      <i className="vline" aria-hidden="true">
        <b style={{ ["--h" as string]: `${(fill * 100).toFixed(1)}%` }} />
      </i>
      {steps.map((s, i) => (
        <article key={s.n} className={`vstep${active[i] ? " act" : ""}`}>
          <div>
            <span className="n d">{s.n}</span>
            <span className="wk">{s.wk}</span>
          </div>
          <div>
            <h2 className="d">{s.title}</h2>
            <p>{s.body}</p>
          </div>
          <div>
            <span className="hand">{s.note}</span>
            <span className="tool">{s.tool}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
