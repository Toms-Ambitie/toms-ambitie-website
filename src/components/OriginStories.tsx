import { ScrollReveal } from "@/components/ScrollReveal";

const cards = [
  { venture: "PACTLY", quote: "IK WILDE WETEN WAAR MIJN GELD STILLETJES WEGLEKTE.", desc: "Een bankapp laat zien wat er is afgeschreven. Een spreadsheet moet je zelf bijhouden. Een vergelijker helpt pas als je zelf gaat zoeken. Pactly brengt contracten, abonnementen en vaste lasten samen en laat op tijd zien waar je kunt besparen.", link: { label: "Bekijk Pactly →", href: "/ventures/pactly" } },
  { venture: "POST PILOT", quote: "IK WIL ACTIEF ZIJN OP LINKEDIN. MAAR DE DISCIPLINE ONTBREEKT ME.", desc: "Ik weet dat zichtbaarheid belangrijk is. Maar meerdere keren per week iets posten lukt gewoon niet consequent. Tussen werk, meetings en dagelijkse drukte verdwijnt LinkedIn telkens naar de achtergrond. Ideeën zijn er genoeg. Tijd, ritme en discipline niet. Post Pilot helpt om zichtbaar te blijven zonder dat content een dagtaak wordt. Jij bepaalt de richting. AI helpt met de uitvoering.", link: { label: "Bekijk Post Pilot →", href: "/ventures/post-pilot" } },
  { venture: "OAK MARKETING", quote: "ONZE MARKETING VOELT ALS LOSSE ACTIES ZONDER RICHTING.", desc: "De website is verouderd. Campagnes draaien wel, maar zonder duidelijke strategie. Marketing voelt meer als losse acties dan als een groeimachine. Het team werkt hard, maar mist structuur, richting en data om betere keuzes te maken. OAK Marketing helpt bedrijven om marketing weer logisch, schaalbaar en meetbaar te maken, van strategie tot uitvoering.", link: { label: "Bekijk OAK Marketing →", href: "/ventures/oak-marketing" } },
  { venture: "PLUG AND POWER", quote: "IK WIL GEWOON EEN SLIMME THUISBATTERIJ. ZONDER GEDOE.", desc: "Iedereen heeft het over thuisbatterijen. Maar zodra je je erin verdiept, zie je door de merken, installateurs en technische verhalen het overzicht niet meer. De ene partij verkoopt installatiewerk. De andere alleen zijn eigen merk. Plug and Power helpt consumenten bij het kiezen van slimme plug-and-play energieoplossingen, zonder ingewikkeld installatieproces of verkooppraatjes.", link: { label: "Bekijk Plug and Power →", href: "/ventures/plug-and-power" } },
];

export const OriginStories = () => {
  return (
    <section>
      <div style={{ height: 5, background: "#C8F000" }} />
      <div className="py-16 sm:py-24" style={{ background: "#0E0E0C" }}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <ScrollReveal>
            <h2 className="font-display typo-section-heading typo-heading-dark">
              ALLES BEGINT MET EEN PROBLEEM, BEHOEFTE OF GEWOON EEN "GOUDEN" IDEE.
            </h2>
            <p className="font-sans typo-lg typo-caption-dark mt-4 mb-8 sm:mb-12" style={{ maxWidth: 540 }}>
              Geen idee uit het niets. Geen boardroom-sessie. Gewoon: iets wat ons irriteerde, ontbrak of beter kon. En toen hebben we het gebouwd.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: 2, background: "rgba(255,255,255,0.1)" }}>
              {cards.map((c, i) => (
                <div key={i} className="p-6 sm:p-10" style={{ background: "#111110" }}>
                  <div className="font-display" style={{ fontSize: "1.4rem", color: "#C8F000", letterSpacing: "0.03em", lineHeight: "var(--leading-snug)" }}>{c.quote}</div>
                  <p className="font-sans typo-base typo-body-dark mt-4">{c.desc}</p>
                  {c.link ? (
                    <a href={c.link.href} className="font-mono block typo-sm min-h-[44px] flex items-center" style={{ color: "#C8F000", marginTop: "1.25rem", textDecoration: "none" }}>{c.link.label}</a>
                  ) : null}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};