import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

/**
 * Smooth-scroll polyfill for Safari (iOS & macOS) and older browsers
 * that don't support ScrollToOptions.behavior = "smooth".
 */
const supportsSmooth = (() => {
  if (typeof window === "undefined") return false;
  try {
    // Feature-detect by checking if 'scrollBehavior' exists in a created element's style
    return "scrollBehavior" in document.documentElement.style;
  } catch {
    return false;
  }
})();

function smoothScrollTo(top: number) {
  if (supportsSmooth) {
    window.scrollTo({ top, left: 0, behavior: "smooth" });
  } else {
    // Manual smooth scroll fallback (iOS Safari < 15.4, older Android WebView)
    const start = window.scrollY;
    const distance = top - start;
    const duration = Math.min(Math.abs(distance), 600); // max 600ms
    let startTime: number | null = null;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / Math.max(duration, 1), 1);
      // ease-in-out quad
      const ease = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
      window.scrollTo(0, start + distance * ease);
      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }
}

function smoothScrollToElement(el: Element) {
  if (supportsSmooth) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    const rect = el.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    smoothScrollTo(top);
  }
}

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  const scrollToHash = useCallback((hash: string, attempt = 0) => {
    const el = document.querySelector(hash);
    if (el) {
      smoothScrollToElement(el);
    } else if (attempt < 10) {
      // Element may not be rendered yet after route change. retry with RAF
      requestAnimationFrame(() => scrollToHash(hash, attempt + 1));
    }
  }, []);

  useEffect(() => {
    if (hash) {
      // Small delay to let React render the new page before looking for the anchor
      requestAnimationFrame(() => scrollToHash(hash));
    } else {
      smoothScrollTo(0);
    }
  }, [pathname, hash, scrollToHash]);

  return null;
};

export default ScrollToTop;
