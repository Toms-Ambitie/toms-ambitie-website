import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { applySEO } from "@/lib/seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHead } from "@/components/site/PageHead";
import { PFilm } from "@/components/site/PFilm";
import { Count } from "@/components/site/Count";
import { VSteps, type VStep } from "@/components/site/VSteps";
import { Cta, HlInk } from "@/components/site/Cta";

const STEPS: VStep[] = [
  { n: "01", wk: "Week 1", title: "Probleem identificeren", body: "Elk venture begint met een probleem dat we zelf voelen, of iemand in onze directe omgeving. Geen denkbeeldige klant. Geen marktonderzoek op papier. Echte frustratie, echte behoefte.", note: "eigen ervaring als validatie", tool: "Eigen ervaring" },
  { n: "02", wk: "Week 1", title: "Valideren met AI", body: "Is het probleem valide? Bestaat er al iets soortgelijks? AI kijkt mee. Concurrentieanalyse, marktonderzoek, probleemvalidatie. In uren. Niet weken.", note: "concurrentie · markt · probleem", tool: "Claude · Perplexity · ChatGPT" },
  { n: "03", wk: "Week 2–3", title: "Werkende demo bouwen", body: "We bouwen eerst iets simpels dat werkt. Geen features. Geen eindeloze roadmap. Gewoon kijken of het probleem echt bestaat. De oplossing moet voelbaar zijn voordat er gerekend wordt.", note: "oplossing vóór business case", tool: "Lovable · Replit · Claude Design" },
  { n: "04", wk: "Week 3", title: "Business case maken", body: "Pas als de oplossing staat, kijken we of er een bedrijf in zit. Businessmodel, verdienmodel, marktgrootte. Met AI uitgewerkt. Altijd in die volgorde.", note: "pas als de oplossing staat", tool: "Claude · business case" },
  { n: "05", wk: "Week 4", title: "Brand book maken", body: "Elke oplossing krijgt direct een identiteit. Logo, kleuren, toon. Zodat alles er van dag één professioneel uitziet. En consistent blijft naarmate het groeit.", note: "identiteit van dag één", tool: "Claude · brand systeem" },
  { n: "06", wk: "Week 4–5", title: "Eerste platform bouwen", body: "We bouwen een eerste werkende versie. Geen uitgebreid dev-traject. Snel, functioneel, testbaar door echte gebruikers. Perfectionisme is voor later.", note: "functioneel, niet perfect", tool: "Claude · Lovable · Cursor" },
  { n: "07", wk: "Week 6", title: "Lanceren", body: "Live. Echte gebruikers, echte feedback, echte data. Pas daarna beslissen we of we doorgaan, opschalen of stoppen. Niet eerder.", note: "echte gebruikers, echte data", tool: "Marketing-DNA + automatisering" },
];

const HoeWeBouwenPage = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    applySEO({
      title: "Hoe wij bedrijven bouwen · de werkwijze van Toms Ambitie",
      description:
        "Van echt probleem naar werkend product. Zo gaat Toms Ambitie van idee naar live venture: welke stappen, welke keuzes en wanneer we stoppen met iets.",
      canonical: "https://www.toms-ambitie.nl/werkwijze",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Hoe We Bouwen — Werkwijze Toms Ambitie",
        url: "https://www.toms-ambitie.nl/werkwijze",
        description: "De werkwijze van Toms Ambitie: van frustratie naar venture in zes weken.",
        isPartOf: { "@id": "https://www.toms-ambitie.nl/#website" },
        about: { "@id": "https://www.toms-ambitie.nl/#organization" },
      },
    });
  }, []);

  return (
    <SiteLayout>
      <div ref={rootRef}>
        <PageHead
          eyebrow="De werkwijze"
          titleStyle={{ fontSize: "clamp(31px,5.5vw,84px)" }}
          title={
            <>
              Wij zijn altijd zelf de <span className="hl">testgroep.</span>
            </>
          }
          lead="Wij bouwen vanuit frustratie, gedrag en echte problemen. Niet vanuit brainstorms. Voelt een oplossing intern goed? Dan testen we hem direct in de praktijk. Pas daarna ontstaat soms een venture."
          aside={<PFilm name="film-markeren" note="zeven stappen, zes weken" />}
        />

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="nums n3">
              <div className="num rv">
                <Count to={7} />
                <span>Stappen</span>
                <small>Vast systeem</small>
              </div>
              <div className="num rv">
                <Count to={6} />
                <span>Weken maximaal</span>
                <small>Tot de eerste versie</small>
              </div>
              <div className="num z rv">
                <b className="d">AI</b>
                <span>Versnelling</span>
                <small style={{ color: "var(--inkt)" }}>Op elke stap</small>
              </div>
            </div>

            <VSteps steps={STEPS} />

            <div className="state rv">
              <p className="d">
                De oplossing staat altijd voorop. De business case volgt. <HlInk>Altijd.</HlInk>
              </p>
              <p className="sub">
                Een business case die een slechte oplossing rechtvaardigt is waardeloos. Een goede oplossing die nog geen business case heeft, is een
                kans.
              </p>
            </div>
          </div>
        </section>

        <Cta
          eyebrow="Volgende stap"
          title={
            <>
              Heb je een probleem dat een bedrijf <HlInk>verdient?</HlInk>
            </>
          }
          peek={{
            src: "/ta/tom-zittend-817.webp",
            srcSet: "/ta/tom-zittend-560.webp 560w, /ta/tom-zittend-817.webp 817w",
            width: 817,
            height: 1100,
          }}
        >
          <div className="acts">
            <Link className="btn inv" to="/meebouwen">
              Start gesprek <i>→</i>
            </Link>
            <Link className="txt-l" to="/ventures">
              bekijk ventures →
            </Link>
          </div>
        </Cta>
      </div>
    </SiteLayout>
  );
};

export default HoeWeBouwenPage;
