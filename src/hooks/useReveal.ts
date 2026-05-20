import { useEffect, useLayoutEffect, RefObject } from 'react';

/**
 * Reveals elements with .reveal or .clip-reveal when they scroll into view.
 *
 * Two-phase approach:
 * 1. useLayoutEffect (runs synchronously before browser paint) — immediately
 *    reveals any element already in the viewport at mount time. This prevents
 *    a Flash of Invisible Content (FOIC) on navigation: without this, the
 *    browser paints once with opacity:0 elements, then paints again after
 *    the IntersectionObserver fires.
 * 2. useEffect — sets up IntersectionObserver for elements below the fold.
 */
export function useReveal(ref: RefObject<HTMLElement | null>) {
  // Phase 1: sync check before first paint — reveal elements already in viewport
  useLayoutEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>('.reveal, .clip-reveal');
    if (!els.length) return;

    const vh = window.innerHeight;
    els.forEach((el) => {
      const { top, bottom } = el.getBoundingClientRect();
      // Element is at least partially in viewport — reveal immediately
      if (bottom > 0 && top < vh) {
        el.classList.add('in');
      }
    });
  }, []);

  // Phase 2: IntersectionObserver for elements below the fold
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>('.reveal, .clip-reveal');
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -4% 0px' }
    );

    // Only observe elements not already revealed by the layout phase
    els.forEach((el) => {
      if (!el.classList.contains('in')) io.observe(el);
    });

    return () => io.disconnect();
  }, []);
}
