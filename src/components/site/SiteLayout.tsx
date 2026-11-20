import type { ReactNode } from "react";
import { RingSymbol } from "./Ring";
import { InkTrail } from "./InkTrail";
import { Intro } from "./Intro";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <RingSymbol />
      <InkTrail />
      <Intro />
      <a className="skip" href="#main-content">
        Naar de inhoud
      </a>
      <SiteNav />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
