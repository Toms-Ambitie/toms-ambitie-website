import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { gtmEvent } from "@/lib/gtm";
import { ArrowRight } from "lucide-react";

const blocks = [
  {
    label: "01 — HEEL TOMS AMBITIE",
    name: "INVESTEER IN DE CLUB.",
    desc: "Geloof je in het model als geheel? Stap in op de overkoepelende organisatie en wordt onderdeel van alles wat er nu en in de toekomst gebouwd wordt. Niet één venture, maar het systeem erachter.",
    cta: "Start een gesprek",
    href: "/meebouwen",
  },
  {
    label: "02 — ÉÉN VENTURE",
    name: "STAP IN BIJ EEN PROJECT.",
    desc: "Spreekt een specifieke venture je aan? Stap in bij Post Pilot, Pactly, Plug and Power of OAK Marketing als investeerder, partner of co-builder. Gerichte betrokkenheid, concrete afspraken.",
    cta: "Vertel me welke venture",
    href: "/ventures",
  },
  {
    label: "03 — JOUW IDEE",
    name: "BRENG EEN PROBLEEM IN.",
    desc: "Heb jij een probleem dat opgelost moet worden? Stuur het in. Als het ons aanspreekt, maken we een plan. Als het plan goed is, bouwen we het samen. jouw domeinkennis, ons systeem.",
    cta: "Stuur je idee in",
    href: "/meebouwen",
  },
];

export const MeedoenCTA = () => {
  return (
    <section>
      <div style={{ height: 5, background: "#C8F000" }} />
      <div className="py-24 sm:py-32" style={{ background: "#0E0E0C" }}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <ScrollReveal>
            <p className="font-mono uppercase typo-label mb-5" style={{ color: "#C8F000", letterSpacing: "0.2em" }}>
              Bouw mee · Investeer · Breng in
            </p>
            <h2 className="font-display typo-heading-dark" style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)", lineHeight: "var(--leading-tight)" }}>
              DOE MEE.<br />OP JOUW MANIER.
            </h2>
            <p className="font-sans typo-lg typo-caption-dark mt-6 mb-10 sm:mb-16" style={{ maxWidth: 620, lineHeight: "var(--leading-loose)" }}>
              Drie manieren om in te stappen. Investeer in de club als geheel, sluit aan bij één van de ventures, of breng een probleem in dat opgelost moet worden. Eén ding is zeker: hier wordt gebouwd.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 2, background: "rgba(255,255,255,0.08)" }}>
              {blocks.map((b, i) => (
                <div
                  key={i}
                  className="p-8 sm:p-10 lg:p-12 flex flex-col"
                  style={{ background: "#111110", borderLeft: "3px solid #C8F000", minHeight: 360 }}
                >
                  <div className="font-mono uppercase mb-6" style={{ color: "#C8F000", fontSize: 10, letterSpacing: "0.18em" }}>{b.label}</div>
                  <div className="font-display mb-4" style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.25rem)", color: "#FFFFFF", lineHeight: "var(--leading-tight)" }}>{b.name}</div>
                  <p className="font-sans mb-8 flex-1" style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{b.desc}</p>
                  <Link
                    to={b.href}
                    className="font-mono inline-flex items-center gap-2 group/cta self-start"
                    style={{ fontSize: 12, color: "#C8F000", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", borderBottom: "1px solid rgba(200,240,0,0.4)", paddingBottom: 4 }}
                    onClick={() => gtmEvent("cta_click", { cta_label: b.label, cta_destination: b.href })}
                  >
                    {b.cta}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div
              className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-7 sm:p-9"
              style={{ background: "#1A1A18", borderLeft: "3px solid #C8F000" }}
            >
              <div className="flex-1">
                <div className="font-mono uppercase mb-3" style={{ color: "#C8F000", fontSize: 10, letterSpacing: "0.18em" }}>
                  Liever direct schakelen?
                </div>
                <p className="font-sans typo-md typo-body-dark" style={{ maxWidth: 520, lineHeight: "var(--leading-loose)" }}>
                  Plan een gesprek. Geen verkooppraatje, geen pitchdeck. Gewoon kijken of het klikt en waar je waarde kunt toevoegen.
                </p>
              </div>
              <Link
                to="/meebouwen"
                className="font-mono font-bold uppercase inline-flex items-center justify-center gap-2 transition-colors typo-btn min-h-[52px]"
                style={{ background: "#C8F000", color: "#0E0E0C", padding: "0 32px", textDecoration: "none", letterSpacing: "0.1em", whiteSpace: "nowrap" }}
                onClick={() => gtmEvent("cta_click", { cta_label: "plan_gesprek", cta_destination: "/meebouwen" })}
              >
                Plan een gesprek
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-20 sm:mt-28 pt-12 sm:pt-16" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="font-mono uppercase typo-label mb-6 sm:mb-8" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.18em" }}>
                — Slotstatement
              </p>
              <h3
                className="font-display"
                style={{
                  color: "#F4F1E8",
                  fontSize: "clamp(2.5rem, 8vw, 6.5rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.01em",
                }}
              >
                WE BOUWEN WAT WE{" "}
                <span style={{ color: "#C8F000" }}>ZELF MISSEN</span>.
              </h3>
              <p className="font-sans typo-md typo-body-dark mt-8 sm:mt-10 max-w-[620px]" style={{ lineHeight: "var(--leading-loose)" }}>
                Van interne tools tot schaalbare ventures. Gebouwd vanuit frustratie, gedrag en ondernemende nieuwsgierigheid.
              </p>
              <p className="font-mono uppercase typo-label mt-6" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.16em" }}>
                — Niet alles hoeft een venture te worden.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
