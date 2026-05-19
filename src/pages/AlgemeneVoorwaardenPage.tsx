import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { applySEO } from "@/lib/seo";

const AlgemeneVoorwaardenPage = () => {
  useEffect(() => {
    applySEO({
      title: "Algemene Voorwaarden. Toms Ambitie",
      description: "Duidelijke afspraken over samenwerkingen, diensten en ventures van Toms Ambitie.",
      canonical: "https://www.toms-ambitie.nl/voorwaarden",
    });
  }, []);

  return (
    <main className="min-h-screen" style={{ background: "hsl(var(--ink))" }}>
      <Navbar />

      {/* ── HERO ── */}
      <header className="px-5 sm:px-10 pt-28 sm:pt-40 pb-16 sm:pb-24 max-w-[800px] mx-auto">
        <span
          className="font-mono uppercase typo-sm tracking-[0.15em] block mb-4"
          style={{ color: "hsl(var(--volt))" }}
        >
          Juridisch
        </span>

        <h1
          className="font-display uppercase"
          style={{
            fontSize: "clamp(2.4rem, 7vw, 5rem)",
            color: "#FFFFFF",
            lineHeight: 0.9,
            marginBottom: "1.5rem",
          }}
        >
          Algemene
          <br />
          voorwaarden.
        </h1>

        <p
          className="font-sans typo-lg"
          style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: 520 }}
        >
          Duidelijke afspraken voorkomen gedoe.
        </p>

        <p
          className="font-sans typo-base mt-4"
          style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 520 }}
        >
          Deze voorwaarden zijn van toepassing op samenwerkingen, diensten, ventures en andere activiteiten van Toms Ambitie.
        </p>
      </header>

      {/* ── CONTENT ── */}
      <article className="bg-paper">
        <div className="px-5 sm:px-10 py-16 sm:py-24 max-w-[720px] mx-auto">
          <div className="space-y-14 font-sans typo-base" style={{ color: "hsl(var(--ink))", lineHeight: 1.75 }}>

            <Section title="1. Over Toms Ambitie">
              <p>
                Toms Ambitie is een venture club uit Zwolle die bedrijven, platformen en digitale producten ontwikkelt.
              </p>
              <p className="mt-3">
                Naast eigen ventures kan Toms Ambitie samenwerken met externe partijen, participeren in projecten of
                ondersteuning bieden bij conceptontwikkeling, strategie, marketing, automatisering en digitale
                productontwikkeling.
              </p>
            </Section>

            <Section title="2. Toepasselijkheid">
              <p>Deze voorwaarden zijn van toepassing op:</p>
              <List items={[
                "samenwerkingen",
                "offertes",
                "overeenkomsten",
                "participaties",
                "diensten",
                "digitale producten",
                "ventures en platformen van Toms Ambitie",
              ]} />
              <p className="mt-3" style={{ color: "hsl(var(--muted-text))" }}>
                Afwijkingen zijn alleen geldig wanneer deze schriftelijk zijn bevestigd.
              </p>
            </Section>

            <Section title="3. Samenwerkingen en projecten">
              <p>
                Toms Ambitie werkt vaak op ondernemende basis samen met partners, specialisten en bedrijven.
              </p>
              <p className="mt-3">Dat betekent dat:</p>
              <List items={[
                "niet elk idee automatisch een samenwerking wordt",
                "plannen kunnen veranderen tijdens ontwikkeling",
                "projecten kunnen stoppen wanneer er onvoldoende potentie of validatie is",
              ]} />
              <p className="mt-3" style={{ color: "hsl(var(--muted-text))" }}>
                We bouwen snel, testen vroeg en sturen bij wanneer nodig.
              </p>
            </Section>

            <Section title="4. Offertes en afspraken">
              <p>Offertes en voorstellen zijn vrijblijvend tenzij anders aangegeven.</p>
              <p className="mt-3">
                Wanneer een samenwerking wordt gestart, worden afspraken zoveel mogelijk schriftelijk bevestigd.
              </p>
            </Section>

            <Section title="5. Betalingen">
              <p>Facturen dienen binnen de afgesproken termijn betaald te worden.</p>
              <p className="mt-3">Wanneer betalingen uitblijven, behoudt Toms Ambitie het recht om:</p>
              <List items={[
                "werkzaamheden op te schorten",
                "toegang tot systemen tijdelijk te beperken",
                "samenwerkingen te beëindigen",
              ]} />
            </Section>

            <Section title="6. Intellectueel eigendom">
              <p>
                Alles wat door Toms Ambitie wordt ontwikkeld blijft eigendom van Toms Ambitie, tenzij schriftelijk
                anders overeengekomen.
              </p>
              <p className="mt-3">Denk aan:</p>
              <List items={[
                "concepten",
                "software",
                "designs",
                "strategieën",
                "content",
                "systemen",
                "documentatie",
              ]} />
              <p className="mt-3" style={{ color: "hsl(var(--muted-text))" }}>
                Bij gezamenlijke ventures of participaties kunnen afwijkende afspraken gelden.
              </p>
            </Section>

            <Section title="7. Aansprakelijkheid">
              <p>We bouwen zorgvuldig en professioneel.</p>
              <p className="mt-3">
                Maar ondernemen en innovatie brengen altijd risico's met zich mee.
              </p>
              <p className="mt-3">Toms Ambitie is niet aansprakelijk voor:</p>
              <List items={[
                "indirecte schade",
                "gevolgschade",
                "omzetverlies",
                "gemiste kansen",
                "schade door externe systemen of platforms",
              ]} />
              <p className="mt-3" style={{ color: "hsl(var(--muted-text))" }}>
                De aansprakelijkheid is altijd beperkt tot het bedrag dat voor de betreffende werkzaamheden is
                gefactureerd.
              </p>
            </Section>

            <Section title="8. Externe partijen">
              <p>
                Binnen projecten en ventures kan Toms Ambitie samenwerken met externe specialisten, leveranciers of
                partners.
              </p>
              <p className="mt-3" style={{ color: "hsl(var(--muted-text))" }}>
                Hoewel we bewust kiezen met wie we werken, zijn we niet verantwoordelijk voor fouten of schade
                veroorzaakt door externe partijen.
              </p>
            </Section>

            <Section title="9. Vertrouwelijkheid">
              <p>We gaan vertrouwelijk om met gedeelde informatie, ideeën en bedrijfsgegevens.</p>
              <p className="mt-3">Van partners en relaties verwachten we hetzelfde.</p>
            </Section>

            <Section title="10. Ventures en participaties">
              <p>
                Investeringen, deelnames en participaties in ventures brengen risico's met zich mee.
              </p>
              <p className="mt-3">Resultaten uit het verleden bieden geen garantie voor de toekomst.</p>
              <p className="mt-3" style={{ color: "hsl(var(--muted-text))" }}>
                Iedere partij blijft verantwoordelijk voor eigen keuzes en due diligence.
              </p>
            </Section>

            <Section title="11. Wijzigingen">
              <p>
                Toms Ambitie behoudt zich het recht voor deze voorwaarden aan te passen wanneer ventures, werkwijzen
                of samenwerkingen veranderen.
              </p>
              <p className="mt-3" style={{ color: "hsl(var(--muted-text))" }}>
                De meest actuele versie staat altijd op deze pagina.
              </p>
            </Section>

            <Section title="12. Toepasselijk recht">
              <p>Op alle overeenkomsten en samenwerkingen is Nederlands recht van toepassing.</p>
              <p className="mt-3">
                Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Toms Ambitie
                <br />
                Zwolle, Nederland
              </p>
              <p className="mt-3">
                <a
                  href="mailto:info@toms-ambitie.nl"
                  className="underline hover:opacity-70 transition-opacity"
                  style={{ color: "hsl(var(--ink))" }}
                >
                  info@toms-ambitie.nl
                </a>
              </p>
            </Section>

          </div>

          {/* ── FOOTER META ── */}
          <p
            className="font-mono typo-sm mt-16 pt-8"
            style={{ color: "hsl(var(--muted-text))", borderTop: "1px solid hsl(var(--steen))" }}
          >
            Laatst bijgewerkt: mei 2026
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
};

/* ── Reusable sub-components ── */

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2
      className="font-display uppercase"
      style={{
        fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
        color: "hsl(var(--ink))",
        lineHeight: 1.05,
        marginBottom: "0.85rem",
      }}
    >
      {title}
    </h2>
    {children}
  </section>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="mt-2 space-y-1 pl-0" style={{ listStyle: "none" }}>
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2">
        <span className="shrink-0 mt-[0.55em] w-[6px] h-[6px]" style={{ background: "hsl(var(--volt))" }} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default AlgemeneVoorwaardenPage;
