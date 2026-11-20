import { useEffect, type RefObject } from "react";

export const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Headings that are wider than their column shrink until they fit. */
export function fitHeadings(root: ParentNode) {
  root.querySelectorAll<HTMLElement>("h1.d,h2.d,h3.d,p.d,.ph-h1>.d").forEach((el) => {
    el.style.fontSize = "";
    if (!el.clientWidth) return;
    let size = parseFloat(getComputedStyle(el).fontSize);
    let n = 0;
    while (el.scrollWidth > el.clientWidth + 1 && size > 16 && n++ < 40) {
      size *= 0.95;
      el.style.fontSize = `${size}px`;
    }
  });
}

/**
 * Page-level motion: marks .rv, .hl, .row and .pad as "in" when they scroll into view
 * (CSS draws the highlight, strike-through and slide-up), and keeps headings fitting.
 */
export function useSiteMotion(ref: RefObject<HTMLElement | null>, key?: unknown) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".rv,.hl,.row,.pad");
    let io: IntersectionObserver | undefined;
    if (reducedMotion()) {
      els.forEach((el) => el.classList.add("in"));
    } else {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            en.target.classList.add("in");
            io?.unobserve(en.target);
          }),
        { threshold: 0.35 },
      );
      els.forEach((el) => io!.observe(el));
    }

    const fit = () => fitHeadings(root);
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener("resize", fit);
    return () => {
      io?.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [ref, key]);
}

/** rAF-throttled scroll + resize listener. */
export function useScrollFrame(cb: () => void, deps: unknown[] = []) {
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        cb();
      });
    };
    cb();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
