import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gtmEvent } from "@/lib/gtm";

const TRACKED_DOMAINS = [
  "oakmarketing.nl",
  "postpilotapp.nl",
  "plugandpower.nl",
  "pactly.nl",
];

/**
 * GTM tracking: page_view on route change + outbound click tracking.
 * Uses a single useEffect to keep hook count stable for HMR.
 */
export function useGtmPageView() {
  const location = useLocation();
  const listenerAttached = useRef(false);

  useEffect(() => {
    // Page view
    gtmEvent("page_view", {
      page_path: location.pathname,
      page_location: window.location.href,
      page_title: document.title,
    });

    // Outbound click listener (attach once)
    if (!listenerAttached.current) {
      listenerAttached.current = true;

      const handler = (e: MouseEvent) => {
        const anchor = (e.target as HTMLElement).closest?.("a[href]") as HTMLAnchorElement | null;
        if (!anchor) return;
        try {
          const url = new URL(anchor.href, window.location.origin);
          const domain = TRACKED_DOMAINS.find(
            (d) => url.hostname === d || url.hostname.endsWith("." + d),
          );
          if (domain) {
            gtmEvent("outbound_click", {
              outbound_url: anchor.href,
              outbound_domain: domain,
              link_text: anchor.textContent?.trim().slice(0, 100) || "",
            });
          }
        } catch {
          // ignore malformed URLs
        }
      };

      document.addEventListener("click", handler, true);
    }
  }, [location.pathname]);
}
