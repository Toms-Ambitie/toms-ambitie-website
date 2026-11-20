import { useEffect, useRef, useState } from "react";
import { reducedMotion } from "./motion";

/** A figure tile number (<b>) that counts up from 0 when it comes into view. */
export function Count({ to, className = "d" }: { to: number; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [n, setN] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    setN(0);
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
