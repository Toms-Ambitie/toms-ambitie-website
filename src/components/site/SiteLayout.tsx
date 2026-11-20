import { useRef, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useSiteMotion } from "./motion";
import { RingSymbol } from "./Ring";
import { InkTrail } from "./InkTrail";
import { Intro } from "./Intro";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();
  useSiteMotion(mainRef, pathname);

  return (
    <>
      <RingSymbol />
      <InkTrail />
      <Intro />
      <a className="skip" href="#main-content">
        Naar de inhoud
      </a>
      <SiteNav />
      <main id="main-content" tabIndex={-1} ref={mainRef}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
