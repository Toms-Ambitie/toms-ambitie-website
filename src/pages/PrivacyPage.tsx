import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { applySEO } from '@/lib/seo';

/* ── Sub-components ── */

const Bullets = ({ items }: { items: string[] }) => (
  <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'grid', gap: 8 }}>
    {items.map((item) => (
      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <span style={{ width: 6, height: 6, background: 'var(--volt)', flexShrink: 0, marginTop: '0.5em' }} />
        <span style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--inkt-80)' }}>{item}</span>
      </li>
    ))}
  </ul>
);

const MailLink = ({ address }: { address: string }) => (
  <a
    href={`mailto:${address}`}
    style={{ color: 'var(--inkt)', borderBottom: '1px solid var(--inkt-30)', textDecoration: 'none', transition: 'border-color .2s' }}
    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'var(--inkt)'; }}
    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'var(--inkt-30)'; }}
  >
    {address}
  </a>
);

const WebLink = ({ url }: { url: string }) => (
  <a
    href={`https://${url}`}
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: 'var(--inkt)', borderBottom: '1px solid var(--inkt-30)', textDecoration: 'none', transition: 'border-color .2s' }}
    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'var(--inkt)'; }}
    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'var(--inkt-30)'; }}
  >
    {url}
  </a>
);

interface LegalSectionProps {
  num: number;
  title: string;
  children: React.ReactNode;
}

const LegalSection = ({ num, title, children }: LegalSectionProps) => (
  <div
    className="legal-section"
    style={{
      display: 'grid',
      gridTemplateColumns: '260px 1fr',
      gap: '48px',
      padding: '56px 0',
      borderTop: '1px solid var(--inkt-10)',
    }}
  >
    {/* Left: number + title */}
    <div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--inkt-30)', marginBottom: 12, textTransform: 'uppercase' }}>
        {String(num).padStart(2, '0')}
      </div>
      <h2 className="display" style={{ fontSize: 'clamp(22px, 2vw, 30px)', lineHeight: 0.95, color: 'var(--inkt)' }}>
        {title}
      </h2>
    </div>
    {/* Right: content */}
    <div style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-80)' }}>
      {children}
    </div>
  </div>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ marginBottom: 16, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-80)' }}>{children}</p>
);

/* ── Page ── */

const PrivacyPage = () => {
  useEffect(() => {
    applySEO({
      title: 'Privacyverklaring — Toms Ambitie',
      description: 'Duidelijk over data, formulieren, analytics en platformen. Toms Ambitie verwerkt persoonsgegevens alleen wanneer dat nodig is.',
      canonical: 'https://www.toms-ambitie.nl/privacy',
    });
  }, []);

  return (
    <div style={{ background: 'var(--wit-warm)' }}>
      <Navbar />
      <main id="main-content">

        {/* ═══ HERO ════════════════════════════════════════════════ */}
        <section style={{ background: 'var(--inkt)', padding: '140px 0 100px' }}>
          <div className="container-wide">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <span className="volt-dot" />
              <span className="eyebrow" style={{ color: 'rgba(244,241,232,0.5)' }}>Juridisch</span>
            </div>
            <h1 className="display" style={{ fontSize: 'clamp(80px, 11vw, 168px)', lineHeight: 0.84, marginTop: 24, letterSpacing: '-0.02em', color: 'var(--wit-warm)' }}>
              Privacy.
            </h1>
            <p style={{ marginTop: 40, fontSize: 22, lineHeight: 1.55, maxWidth: 560, color: 'rgba(244,241,232,0.7)', fontFamily: 'var(--body)' }}>
              Duidelijk over data, formulieren, analytics en platformen.
            </p>
            <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.65, maxWidth: 560, color: 'rgba(244,241,232,0.5)', fontFamily: 'var(--body)' }}>
              Toms Ambitie bouwt ventures, platformen en digitale producten. Daarbij verwerken we soms persoonsgegevens. Niet om gegevens te verkopen, maar om onze websites, platformen, communicatie en diensten goed te laten werken. We verzamelen alleen wat nodig is. En we gaan daar zorgvuldig mee om.
            </p>
          </div>
        </section>

        {/* ═══ CONTENT ═════════════════════════════════════════════ */}
        <section style={{ background: 'var(--wit-warm)', padding: '0 0 160px' }}>
          <div className="container-wide">

            <LegalSection num={1} title="Wie wij zijn">
              <P>Toms Ambitie is een Nederlandse onderneming uit Zwolle die eigen ventures, platformen, software, AI toepassingen, e-commerce concepten en digitale producten ontwikkelt.</P>
              <P>Onder Toms Ambitie kunnen handelsnamen en ventures vallen zoals Pactly, Plug and Power, EmmaBoekt, Post Pilot, OAK Marketing en toekomstige platformen. Zolang een venture geen eigen rechtspersoon of KvK inschrijving heeft, valt deze juridisch onder Toms Ambitie.</P>
              <div style={{ marginTop: 24, padding: '20px 24px', background: 'var(--papier)', borderLeft: '3px solid var(--volt)' }}>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--inkt-80)', margin: 0 }}>
                  <strong style={{ color: 'var(--inkt)', fontWeight: 600 }}>Toms Ambitie</strong><br />
                  Zwolle, Nederland<br />
                  <MailLink address="hallo@toms-ambitie.nl" /><br />
                  <WebLink url="www.toms-ambitie.nl" />
                </p>
              </div>
            </LegalSection>

            <LegalSection num={2} title="Welke gegevens wij verzamelen">
              <P>Wij kunnen persoonsgegevens verzamelen wanneer iemand:</P>
              <Bullets items={[
                'een contactformulier invult',
                'interesse toont in een venture',
                'zich aanmeldt voor updates',
                'een samenwerking aanvraagt',
                'investeringsinteresse toont',
                'een account aanmaakt op een platform',
                'een abonnement afsluit',
                'een betaling doet',
                'onze websites of platformen gebruikt',
              ]} />
              <P style={{ marginTop: 20 }}>Het kan gaan om:</P>
              <Bullets items={[
                'naam',
                'e-mailadres',
                'telefoonnummer',
                'bedrijfsnaam',
                'functie',
                'LinkedIn profiel',
                'berichtinhoud',
                'factuurgegevens',
                'betaalgegevens',
                'accountgegevens',
                'gebruiksgegevens',
                'IP-adres',
                'browsergegevens',
                'technische logging',
                'analytics gegevens',
              ]} />
              <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-60)' }}>
                Wij verzamelen niet meer gegevens dan nodig is voor het doel waarvoor ze worden verwerkt.
              </p>
            </LegalSection>

            <LegalSection num={3} title="Waarom wij gegevens verwerken">
              <P>Wij verwerken persoonsgegevens voor:</P>
              <Bullets items={[
                'contact en communicatie',
                'beantwoorden van aanvragen',
                'beoordelen van samenwerkingen',
                'verwerken van formulieren',
                'aanbieden van platformen en digitale diensten',
                'beheren van accounts',
                'verwerken van betalingen',
                'facturatie en administratie',
                'klantenservice',
                'analyse en verbetering van websites',
                'analyse en verbetering van platformen',
                'beveiliging en monitoring',
                'ontwikkeling van ventures',
                'versturen van updates of nieuws wanneer iemand zich daarvoor aanmeldt',
              ]} />
              <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt)', fontWeight: 600 }}>
                Wij verkopen persoonsgegevens nooit aan derden.
              </p>
            </LegalSection>

            <LegalSection num={4} title="Grondslagen voor verwerking">
              <P>Wij verwerken persoonsgegevens alleen wanneer daar een geldige grondslag voor is.</P>
              <P>Dat kan zijn:</P>
              <Bullets items={[
                'toestemming',
                'uitvoering van een overeenkomst',
                'wettelijke verplichting',
                'gerechtvaardigd belang',
              ]} />
              <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-60)' }}>
                Gerechtvaardigd belang kan bijvoorbeeld gaan over websiteanalyse, beveiliging, communicatie, fraudepreventie of verbetering van onze platformen.
              </p>
            </LegalSection>

            <LegalSection num={5} title="Formulieren en communicatie">
              <P>Wanneer iemand een formulier invult op een website of platform van Toms Ambitie, bewaren wij de ingevulde gegevens om de aanvraag te kunnen beoordelen en beantwoorden.</P>
              <P>Formulieren kunnen worden verwerkt via Resend of vergelijkbare e-maildiensten.</P>
              <P>Gegevens uit formulieren kunnen worden bewaard zolang dat nodig is voor communicatie, opvolging, samenwerking, administratie of wettelijke verplichtingen.</P>
            </LegalSection>

            <LegalSection num={6} title="Hosting, databases en infrastructuur">
              <P>Toms Ambitie en haar ventures maken gebruik van moderne cloud en software infrastructuur.</P>
              <P>Daaronder kunnen vallen:</P>
              <Bullets items={[
                'Vercel voor hosting en deployment',
                'Supabase voor databases, opslag en authenticatie',
                'Resend voor e-mailverwerking',
                'Stripe voor betalingen',
                'Google Analytics voor analyse',
                'Google Tag Manager voor tracking en meetpunten',
                'Claude Code voor ontwikkeling van software en platformen',
              ]} />
              <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-60)' }}>
                Deze partijen kunnen persoonsgegevens verwerken wanneer dat nodig is voor het functioneren van onze websites, platformen en diensten. Waar nodig sluiten wij verwerkersovereenkomsten of accepteren wij de verwerkersvoorwaarden van deze partijen.
              </p>
              <p style={{ marginTop: 12, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-60)' }}>
                Claude Code wordt gebruikt voor de ontwikkeling van code, structuur en platformen. Niet als opslaglocatie voor persoonsgegevens van gebruikers.
              </p>
            </LegalSection>

            <LegalSection num={7} title="Betalingen">
              <P>Wanneer een platform of venture betalingen verwerkt, kan gebruik worden gemaakt van Stripe.</P>
              <P>Stripe verwerkt betaalgegevens zoals naam, e-mailadres, betaalmethode, transactiegegevens en factuurinformatie.</P>
              <P>Toms Ambitie bewaart zelf geen volledige creditcardgegevens of bankkaartgegevens wanneer betalingen via Stripe worden verwerkt.</P>
            </LegalSection>

            <LegalSection num={8} title="Analytics, tracking en performance">
              <P>Wij gebruiken analyse en performance tools om te begrijpen hoe onze websites en platformen worden gebruikt.</P>
              <P>Daarmee meten wij onder andere:</P>
              <Bullets items={[
                'bezoekersaantallen',
                'paginaweergaven',
                'klikken',
                'conversies',
                'technische prestaties',
                'foutmeldingen',
                'gebruikersstromen',
              ]} />
              <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-60)' }}>
                Wij gebruiken onder andere Google Analytics en Google Tag Manager. Waar wettelijk vereist vragen wij toestemming voor cookies en tracking.
              </p>
            </LegalSection>

            <LegalSection num={9} title="Cookies">
              <P>Onze websites en platformen kunnen cookies en vergelijkbare technieken gebruiken.</P>
              <P>Dat kunnen zijn:</P>
              <Bullets items={[
                'functionele cookies',
                'analytische cookies',
                'performance cookies',
                'marketing cookies wanneer die actief worden ingezet',
              ]} />
              <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-60)' }}>
                Functionele cookies zijn nodig om de website of het platform goed te laten werken. Analytische cookies helpen ons om het gebruik te begrijpen en te verbeteren. Marketing cookies worden alleen gebruikt wanneer wij marketing of retargeting inzetten en wanneer daarvoor toestemming is gegeven als dat wettelijk vereist is.
              </p>
              <p style={{ marginTop: 12, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-60)' }}>
                Bezoekers kunnen cookies verwijderen of blokkeren via hun browserinstellingen.
              </p>
            </LegalSection>

            <LegalSection num={10} title="AI en automatisering">
              <P>Sommige ventures gebruiken AI of automatisering voor content, analyse, inzichten, aanbevelingen of ondersteuning.</P>
              <P>AI output blijft ondersteunend. Gebruikers blijven zelf verantwoordelijk voor controle, interpretatie en beslissingen op basis van AI output.</P>
              <P>Toms Ambitie gebruikt AI tools niet om persoonsgegevens onnodig te delen of te verkopen.</P>
            </LegalSection>

            <LegalSection num={11} title="Bewaartermijnen">
              <P>Wij bewaren persoonsgegevens niet langer dan nodig is. De bewaartermijn hangt af van het doel:</P>
              <Bullets items={[
                'contactgegevens worden bewaard zolang er contact of mogelijke samenwerking is',
                'administratieve gegevens worden bewaard zolang de wet dat vereist',
                'accountgegevens worden bewaard zolang het account actief is',
                'analytics gegevens worden bewaard volgens de instellingen van de gebruikte tools',
                'formuliergegevens worden bewaard zolang opvolging redelijkerwijs nodig is',
              ]} />
              <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-60)' }}>
                Wanneer gegevens niet meer nodig zijn, verwijderen of anonimiseren wij ze.
              </p>
            </LegalSection>

            <LegalSection num={12} title="Beveiliging">
              <P>Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, misbruik, onbevoegde toegang en ongewenste openbaarmaking.</P>
              <P>Dat doen wij onder andere door gebruik te maken van professionele hosting, beveiligde verbindingen, toegangsbeheer en betrouwbare externe diensten.</P>
            </LegalSection>

            <LegalSection num={13} title="Delen met derden">
              <P>Wij delen persoonsgegevens alleen met derden wanneer dat nodig is voor:</P>
              <Bullets items={[
                'hosting',
                'databasebeheer',
                'e-mailverwerking',
                'betalingen',
                'analytics',
                'administratie',
                'juridische verplichtingen',
                'uitvoering van onze diensten',
              ]} />
              <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt)', fontWeight: 600 }}>
                Wij verkopen persoonsgegevens niet.
              </p>
            </LegalSection>

            <LegalSection num={14} title="Rechten van gebruikers">
              <P>Iedere gebruiker heeft het recht om:</P>
              <Bullets items={[
                'persoonsgegevens in te zien',
                'persoonsgegevens te laten corrigeren',
                'persoonsgegevens te laten verwijderen',
                'verwerking te laten beperken',
                'bezwaar te maken tegen verwerking',
                'gegevens over te laten dragen',
                'toestemming in te trekken',
              ]} />
              <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-80)' }}>
                Verzoeken kunnen worden gestuurd naar: <MailLink address="hallo@toms-ambitie.nl" />
              </p>
              <p style={{ marginTop: 8, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-60)' }}>
                Wij reageren zo snel mogelijk en uiterlijk binnen de wettelijke termijn.
              </p>
            </LegalSection>

            <LegalSection num={15} title="Klachten">
              <P>Wanneer iemand vindt dat wij niet goed omgaan met persoonsgegevens, kan contact worden opgenomen via: <MailLink address="hallo@toms-ambitie.nl" /></P>
              <P>Ook bestaat het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens.</P>
            </LegalSection>

            <LegalSection num={16} title="Wijzigingen">
              <P>Deze privacyverklaring kan worden aangepast wanneer onze ventures, platformen, tools of werkwijze veranderen.</P>
              <P>De meest actuele versie staat altijd op deze pagina.</P>
            </LegalSection>

            {/* Footer meta */}
            <div style={{ paddingTop: 48, borderTop: '1px solid var(--inkt-10)', marginTop: 24 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--inkt-30)' }}>
                Laatste update: mei 2026
              </span>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
