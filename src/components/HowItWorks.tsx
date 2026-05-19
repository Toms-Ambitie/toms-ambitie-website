import { ScrollReveal } from "@/components/ScrollReveal";

const steps = [
  { num: "01", name: "PROBLEEM", desc: "We voelen het zelf. Elk venture begint met een echte frustratie of behoefte. Van onszelf of van mensen om ons heen." },
  { num: "02", name: "IDEE", desc: "We bedenken een oplossing. Snel en concreet, zonder eindeloze vergaderingen." },
  { num: "03", name: "PLAN", desc: "Een business case, een model, een eerste schets. Niet mega uitgebreid, maar altijd onderbouwd." },
  { num: "04", name: "BUILD", desc: "MVP bouwen met AI als versneller en vaste tech-partners. Zo snel mogelijk live en getest." },
  { num: "05", name: "SCHAAL", desc: "Als het werkt: opschalen. Als het niet werkt: stoppen en leren. Zo simpel is het." },
];

export const HowItWorks = () => {
  return (
    <section>
      <div style={{ height: 5, background: "#C8F000" }} />
      <div className="bg-white py-20 sm:py-28 md:py-32">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <ScrollReveal>
            <p className="font-mono uppercase typo-label typo-caption mb-4" style={{ letterSpacing: "0.18em" }}>
              — Operating model
            </p>
            <h2 className="font-display typo-section-heading typo-heading">
              HOE HET WERKT.
            </h2>
            <p className="font-sans typo-lg typo-body mt-5 mb-10 sm:mb-16" style={{ maxWidth: 560, lineHeight: "var(--leading-loose)" }}>
              Ieder platform en elk bedrijf dat we bouwen begon ooit als een probleem of behoefte die we zelf ervaarden. Sommigen noemen dat growth hacking. Wij noemen het ondernemen. Dat zit in ons DNA.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5" style={{ gap: 1, background: "#0E0E0C" }}>
              {steps.map((s) => (
                <div key={s.num} className="bg-white p-6 sm:p-8 md:p-9">
                  <div className="font-mono uppercase typo-label typo-caption">{s.num}</div>
                  <div className="font-display mt-3" style={{ fontSize: "2rem", lineHeight: "var(--leading-tight)", color: "var(--color-heading)" }}>{s.name}</div>
                  <p className="font-sans typo-base typo-body mt-4" style={{ lineHeight: "var(--leading-loose)" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p
              className="font-display mt-12 sm:mt-16 max-w-[760px]"
              style={{ fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: "var(--leading-tight)", color: "var(--color-heading)" }}
            >
              Snel falen is goedkoper dan{" "}
              <span style={{ background: "#C8F000", padding: "0 6px" }}>langzaam vergaderen</span>.
            </p>
            <p className="font-mono uppercase typo-label typo-caption mt-4" style={{ letterSpacing: "0.16em" }}>
              — We geloven meer in bouwen dan in brainstormen.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};