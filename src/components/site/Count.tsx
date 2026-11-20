import { useEffect, useRef, useState } from "react";
import { reducedMotion } from "./motion";

/** A figure tile number (<b>). Shows the real figure; once it comes into view it counts up from 0. */
export function Count({ to, className = "d" }: { to: number; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [n, setN] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([en]) => {
        if (!en.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min(1, (now - start) / 900);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <b ref={ref} className={className}>
      {n}
    </b>
  );
}
