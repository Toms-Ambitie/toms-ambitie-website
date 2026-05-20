import { useEffect, RefObject } from 'react';

export function useReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>('.reveal, .clip-reveal');
    if (!els.length) return;

    // Safety net: immediately reveal elements already in the viewport at mount time.
    // Without this, a timing race between ScrollToTop's scroll and the IO callback
    // can leave above-fold elements permanently hidden (opacity: 0) after navigation.
    const vh = window.innerHeight;
    els.forEach((el) => {
      const { top, bottom } = el.getBoundingClientRect();
      if (bottom > 0 && top < vh) {
        el.classList.add('in');
      }
    });

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

    // Only observe elements not already revealed
    els.forEach((el) => {
      if (!el.classList.contains('in')) io.observe(el);
    });

    return () => io.disconnect();
  }, []);
}
