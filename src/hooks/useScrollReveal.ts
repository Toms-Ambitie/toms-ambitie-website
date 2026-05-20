import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  // Start visible if element is in viewport at mount — prevents FOIC on navigation
  const [visible, setVisible] = useState(false);

  // Sync check before paint: reveal immediately if already in viewport
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { top, bottom } = el.getBoundingClientRect();
    if (bottom > 0 && top < window.innerHeight) {
      setVisible(true);
    }
  }, []);

  // IO for elements below the fold
  useEffect(() => {
    if (visible) return; // already revealed by layout check
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, visible]);

  return { ref, visible };
};
