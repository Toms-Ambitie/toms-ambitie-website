import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
}

export function Counter({ to, suffix = '', duration = 1400 }: CounterProps) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const step = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setVal(Math.round(eased * to));
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className="num">
      {val}{suffix}
    </span>
  );
}
