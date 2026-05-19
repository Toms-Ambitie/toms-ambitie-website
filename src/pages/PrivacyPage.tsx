import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { applySEO } from "@/lib/seo";

const PrivacyPage = () => {
  useEffect(() => {
    applySEO({
      title: "Privacy. Toms Ambitie",
      description: "Hoe Toms Ambitie omgaat met persoonsgegevens. Helder, menselijk en zonder juridisch jargon.",
      canonical: "https://www.toms-ambitie.nl/privacy",
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
            fontSize: "clamp(3rem, 8vw, 6rem)",
            color: "#FFFFFF",
            lineHeight: 0.9,
            marginBottom: "1.5rem",
          }}
        >
          Privacy.
        </h1>

        <p
          className="font-sans typo-lg sm:typo-lg"
          style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: 520 }}
        >
          We bouwen digitale bedrijven.
          <br />
          Daar hoort verantwoordelijkheid bij.
        </p>

        <p
          className="font-sans typo-base mt-4"
          style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 520 }}
        >
          We gaan zorgvuldig om met persoonsgegevens en gebruiken gegevens alleen wanneer dat nodig is.
        </p>
      </header>

      {/* ── CONTENT ── */}
      <article className="bg-paper">
        <div className="px-5 sm:px-10 py-16 sm:py-24 max-w-[720px] mx-auto">
          <div className="space-y-14 font-sans typo-base" style={{ color: "hsl(var(--ink))", lineHeight: 1.75 }}>

            <Section title="Welke gegevens we verzamelen">
              <p>
                Wanneer je contact met ons opneemt, een formulier invult of met een van onze ventures interacteert,
                kunnen we gegevens verzamelen zoals:
              </p>
              <List items={[
                "naam",
                "e-mailadres",
                "telefoonnummer",
                "bedrijfsgegevens",
                "IP-adres",
                "gebruiksgegevens van onze websites of platforms",
              ]} />
              <p className="mt-3" style={{ color: "hsl(var(--muted-text))" }}>
                We verzamelen nooit meer dan nodig is.
              </p>
            </Section>

            <Section title="Waarom we gegevens gebruiken">
              <p>We gebruiken gegevens alleen om:</p>
              <List items={[
                "contact op te nemen",
                "samenwerkingen te beoordelen",
                "onze websites en ventures te verbeteren",
                "analyses uit te voeren",
                "wettelijke verplichtingen na te komen",
              ]} />
              <p className="mt-3 font-medium">
                We verkopen geen persoonsgegevens aan derden.
              </p>
            </Section>

            <Section title="Cookies en analytics">
              <p>
                We gebruiken cookies en analytics om inzicht te krijgen in hoe bezoekers onze websites gebruiken.
              </p>
              <p className="mt-3">
                Niet om mensen te volgen.
                <br />
                Wel om betere producten en platformen te bouwen.
              </p>
              <p className="mt-3" style={{ color: "hsl(var(--muted-text))" }}>
                Sommige ventures binnen Toms Ambitie kunnen aanvullende tools gebruiken voor analytics, advertising
                of automatisering.
              </p>
            </Section>

            <Section title="Delen met derden">
              <p>Soms werken we samen met externe partijen voor:</p>
              <List items={[
                "hosting",
                "analytics",
                "e-mail",
                "development",
                "advertenties",
                "betalingen",
              ]} />
              <p className="mt-3">
                Die partijen krijgen alleen toegang tot gegevens wanneer dat nodig is voor hun werk.
              </p>
            </Section>

            <Section title="Bewaartermijnen">
              <p>We bewaren gegevens niet langer dan nodig is.</p>
              <p className="mt-3" style={{ color: "hsl(var(--muted-text))" }}>
                Sommige gegevens moeten we wettelijk bewaren, bijvoorbeeld voor administratie of facturatie.
              </p>
            </Section>

            <Section title="Jouw rechten">
              <p>Je hebt altijd het recht om:</p>
              <List items={[
                "gegevens in te zien",
                "gegevens aan te passen",
                "gegevens te laten verwijderen",
                "bezwaar te maken tegen verwerking",
              ]} />
              <p className="mt-4">
                Mail hiervoor naar:{" "}
                <a
                  href="mailto:privacy@toms-ambitie.nl"
                  className="underline hover:opacity-70 transition-opacity"
                  style={{ color: "hsl(var(--ink))" }}
                >
                  privacy@toms-ambitie.nl
                </a>
              </p>
            </Section>

            <Section title="Beveiliging">
              <p>We nemen beveiliging serieus en doen er alles aan om gegevens goed te beschermen.</p>
              <p className="mt-3" style={{ color: "hsl(var(--muted-text))" }}>
                Maar eerlijk is eerlijk:
                <br />
                geen enkel digitaal systeem is 100% onkwetsbaar.
              </p>
            </Section>

            <Section title="Wijzigingen">
              <p>
                Deze privacyverklaring kan worden aangepast wanneer onze ventures, systemen of werkwijze veranderen.
              </p>
              <p className="mt-3" style={{ color: "hsl(var(--muted-text))" }}>
                De meest actuele versie staat altijd op deze pagina.
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
                  href="mailto:privacy@toms-ambitie.nl"
                  className="underline hover:opacity-70 transition-opacity"
                  style={{ color: "hsl(var(--ink))" }}
                >
                  privacy@toms-ambitie.nl
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

export default PrivacyPage;
