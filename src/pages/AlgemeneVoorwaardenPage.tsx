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
    <div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--inkt-30)', marginBottom: 12, textTransform: 'uppercase' }}>
        {String(num).padStart(2, '0')}
      </div>
      <h2 className="display" style={{ fontSize: 'clamp(22px, 2vw, 30px)', lineHeight: 0.95, color: 'var(--inkt)' }}>
        {title}
      </h2>
    </div>
    <div style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-80)' }}>
      {children}
    </div>
  </div>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ marginBottom: 16, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-80)' }}>{children}</p>
);

/* ── Page ── */

const AlgemeneVoorwaardenPage = () => {
  useEffect(() => {
    applySEO({
      title: 'Algemene Voorwaarden — Toms Ambitie',
      description: 'Duidelijke afspraken voor ventures, platformen, software, diensten en samenwerkingen van Toms Ambitie.',
      canonical: 'https://www.toms-ambitie.nl/voorwaarden',
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
            <h1 className="display" style={{ fontSize: 'clamp(56px, 8vw, 130px)', lineHeight: 0.84, marginTop: 24, letterSpacing: '-0.02em', color: 'var(--wit-warm)' }}>
              Algemene<br />voorwaarden.
            </h1>
            <p style={{ marginTop: 40, fontSize: 22, lineHeight: 1.55, maxWidth: 560, color: 'rgba(244,241,232,0.7)', fontFamily: 'var(--body)' }}>
              Duidelijke afspraken voor ventures, platformen, software, diensten en samenwerkingen.
            </p>
            <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.65, maxWidth: 560, color: 'rgba(244,241,232,0.5)', fontFamily: 'var(--body)' }}>
              Toms Ambitie bouwt eigen ventures, digitale producten, AI toepassingen, platformen en samenwerkingen. Deze voorwaarden gelden voor Toms Ambitie en alle ventures, handelsnamen en platformen die daaronder vallen zolang zij geen eigen rechtspersoon hebben. Geen juridische rookgordijnen. Wel duidelijke afspraken.
            </p>
          </div>
        </section>

        {/* ═══ CONTENT ═════════════════════════════════════════════ */}
        <section style={{ background: 'var(--wit-warm)', padding: '0 0 160px' }}>
          <div className="container-wide">

            <LegalSection num={1} title="Definities">
              <P>In deze voorwaarden bedoelen we met Toms Ambitie: Toms Ambitie en alle handelsnamen, ventures, platformen, softwareproducten, AI toepassingen, e-commerce concepten en diensten die daaronder vallen.</P>
              <P>Daaronder kunnen onder andere vallen:</P>
              <Bullets items={[
                'Plug and Power',
                'EmmaStudio',
                'PostPilot',
                'OAK Marketing',
                'toekomstige ventures en platformen',
              ]} />
              <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-60)' }}>
                Zolang een venture geen eigen rechtspersoon of KvK inschrijving heeft, is Toms Ambitie de contractspartij.
              </p>
              <p style={{ marginTop: 12, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-80)' }}>
                Met gebruiker, klant of opdrachtgever bedoelen we iedere persoon of organisatie die gebruikmaakt van een website, platform, dienst, product, abonnement of samenwerking van Toms Ambitie.
              </p>
            </LegalSection>

            <LegalSection num={2} title="Toepasselijkheid">
              <P>Deze voorwaarden zijn van toepassing op:</P>
              <Bullets items={[
                'websites',
                'platformen',
                'software',
                'SaaS diensten',
                'AI tools',
                'e-commerce activiteiten',
                'abonnementen',
                'consultancy',
                'samenwerkingen',
                'participaties',
                'offertes',
                'opdrachten',
                'digitale producten',
                'toekomstige ventures',
              ]} />
              <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-60)' }}>
                Afwijkingen gelden alleen wanneer deze schriftelijk zijn bevestigd. Wanneer een venture later een eigen rechtspersoon krijgt, kunnen daarvoor nieuwe voorwaarden gaan gelden.
              </p>
            </LegalSection>

            <LegalSection num={3} title="Ventures en ontwikkeling">
              <P>Toms Ambitie werkt ondernemend, snel en iteratief. Dat betekent dat ventures, platformen en producten tijdens ontwikkeling kunnen veranderen.</P>
              <P>Functionaliteiten kunnen worden toegevoegd, aangepast of verwijderd. Roadmaps kunnen wijzigen. Concepten kunnen worden stopgezet wanneer validatie ontbreekt of marktomstandigheden veranderen. Dat hoort bij bouwen in vroege fase.</P>
              <P>Toms Ambitie garandeert niet dat iedere venture, functie of roadmap daadwerkelijk wordt gelanceerd of blijft bestaan.</P>
            </LegalSection>

            <LegalSection num={4} title="Accounts en gebruik van platformen">
              <P>Voor sommige platformen kan een account nodig zijn.</P>
              <P>Gebruikers zijn zelf verantwoordelijk voor:</P>
              <Bullets items={[
                'juiste en volledige informatie',
                'veilig bewaren van inloggegevens',
                'gebruik van het platform volgens de wet',
                'controle van ingevoerde gegevens',
                'beslissingen op basis van output of inzichten',
              ]} />
              <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-60)' }}>
                Toms Ambitie mag accounts tijdelijk beperken of beëindigen bij misbruik, fraude, wanbetaling, overtreding van voorwaarden of gedrag dat schade kan veroorzaken.
              </p>
            </LegalSection>

            <LegalSection num={5} title="SaaS, digitale diensten en abonnementen">
              <P>Voor SaaS platformen, digitale diensten en abonnementen geldt dat functionaliteiten kunnen wijzigen.</P>
              <P>Wij proberen onze platformen beschikbaar en veilig te houden, maar garanderen geen foutloze of ononderbroken werking. Beta functies, AI functies en nieuwe modules kunnen fouten bevatten of tijdelijk wijzigen.</P>
              <P>Tenzij anders vermeld, zijn abonnementen maandelijks opzegbaar. Prijzen worden vooraf gecommuniceerd. Opzegging kan via het account, per e-mail of via een andere duidelijke methode die door het platform wordt aangeboden.</P>
            </LegalSection>

            <LegalSection num={6} title="Consumenten en herroepingsrecht">
              <P>Wanneer een consument online een overeenkomst sluit met Toms Ambitie of een venture die onder Toms Ambitie valt, kan een wettelijke bedenktijd van 14 dagen gelden.</P>
              <P>Voor digitale diensten of software kan deze bedenktijd vervallen wanneer de consument:</P>
              <Bullets items={[
                'expliciet akkoord geeft op directe levering',
                'erkent dat het herroepingsrecht vervalt zodra de levering is gestart of volledig is uitgevoerd',
              ]} />
              <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-60)' }}>
                Wanneer dit van toepassing is, vragen wij hiervoor duidelijk toestemming tijdens aankoop, registratie of onboarding. Voor zakelijke klanten geldt het herroepingsrecht voor consumenten niet.
              </p>
            </LegalSection>

            <LegalSection num={7} title="E-commerce en fysieke producten">
              <P>Voor ventures die fysieke producten verkopen, zoals e-commerce concepten, gelden aanvullende regels voor levering, retouren, garantie en consumentenrecht.</P>
              <P>Wanneer een venture fysieke producten verkoopt, worden aanvullende productvoorwaarden, retourvoorwaarden of verzendvoorwaarden op het betreffende platform vermeld.</P>
              <P>Bij strijdigheid tussen deze algemene voorwaarden en specifieke productvoorwaarden, gaan de specifieke productvoorwaarden voor.</P>
            </LegalSection>

            <LegalSection num={8} title="Offertes, opdrachten en samenwerking">
              <P>Offertes zijn vrijblijvend tenzij anders vermeld.</P>
              <P>Een overeenkomst ontstaat wanneer:</P>
              <Bullets items={[
                'een offerte schriftelijk wordt geaccepteerd',
                'een opdracht wordt bevestigd',
                'een abonnement wordt gestart',
                'een betaling wordt gedaan',
                'of werkzaamheden feitelijk starten',
              ]} />
              <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-60)' }}>
                Toms Ambitie werkt bewust selectief en mag aanvragen of samenwerkingen weigeren.
              </p>
            </LegalSection>

            <LegalSection num={9} title="Betaling">
              <P>Facturen moeten binnen de afgesproken termijn worden betaald.</P>
              <P>Bij uitblijvende betaling mag Toms Ambitie:</P>
              <Bullets items={[
                'werkzaamheden opschorten',
                'toegang tot platformen beperken',
                'abonnementen pauzeren',
                'extra kosten in rekening brengen',
                'de samenwerking beëindigen',
              ]} />
              <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-60)' }}>
                Voor online betalingen kan gebruik worden gemaakt van Stripe of vergelijkbare betaalproviders.
              </p>
            </LegalSection>

            <LegalSection num={10} title="Intellectueel eigendom">
              <P>Alle rechten op concepten, software, code, strategieën, ontwerpen, teksten, AI workflows, prompts, systemen, databases, documentatie, prototypes, interfaces en venture ideeën blijven eigendom van Toms Ambitie tenzij schriftelijk anders afgesproken.</P>
              <P>Gebruikers, klanten of opdrachtgevers krijgen alleen een gebruiksrecht voor zover dat nodig is voor de afgesproken dienst.</P>
              <P>Zonder schriftelijke toestemming mogen onderdelen van Toms Ambitie of haar ventures niet worden gekopieerd, verkocht, doorontwikkeld of commercieel gebruikt.</P>
            </LegalSection>

            <LegalSection num={11} title="Data en input van gebruikers">
              <P>Gebruikers blijven eigenaar van gegevens die zij zelf invoeren, voor zover zij daar rechten op hebben.</P>
              <P>Gebruikers geven Toms Ambitie toestemming om die gegevens te verwerken voor het leveren, verbeteren en beveiligen van de dienst.</P>
              <P>Gebruikers zijn zelf verantwoordelijk voor de juistheid, rechtmatigheid en volledigheid van ingevoerde gegevens.</P>
            </LegalSection>

            <LegalSection num={12} title="AI toepassingen">
              <P>Sommige ventures gebruiken AI voor content, analyse, automatisering, aanbevelingen of inzichten.</P>
              <P>AI output is ondersteunend en kan fouten bevatten. Toms Ambitie geeft via AI functionaliteiten geen juridisch, financieel, fiscaal, boekhoudkundig of bindend advies, tenzij dat expliciet schriftelijk is afgesproken.</P>
              <P>Gebruikers blijven altijd zelf verantwoordelijk voor controle, interpretatie, publicatie en beslissingen. Dit is extra belangrijk bij platformen zoals EmmaStudio en PostPilot.</P>
            </LegalSection>

            <LegalSection num={13} title="Geen garanties op resultaat">
              <P>Toms Ambitie bouwt met ambitie, snelheid en zorg. Maar wij garanderen geen specifiek commercieel, financieel, juridisch, marketingtechnisch of operationeel resultaat.</P>
              <P>Voorbeelden, prognoses, business cases, analyses of verwachtingen zijn indicatief. Resultaten hangen altijd af van markt, uitvoering, timing, budget, gebruikersgedrag en externe omstandigheden.</P>
            </LegalSection>

            <LegalSection num={14} title="Participaties en investeringen">
              <P>Investeren in ventures brengt risico's met zich mee. Deze algemene voorwaarden vormen geen beleggingsadvies, prospectus of investeringsaanbod.</P>
              <P>Iedere investeerder of participant blijft zelf verantwoordelijk voor eigen onderzoek, due diligence en besluitvorming.</P>
              <P>Specifieke afspraken over participatie, aandelen, leningen, winstverdeling of investering worden altijd afzonderlijk schriftelijk vastgelegd.</P>
            </LegalSection>

            <LegalSection num={15} title="Vertrouwelijkheid">
              <P>Partijen gaan vertrouwelijk om met bedrijfsinformatie, ideeën, concepten, data, strategieën, investeringsinformatie en technische informatie die niet publiek bekend is.</P>
              <P>Deze verplichting blijft ook gelden na beëindiging van de samenwerking.</P>
            </LegalSection>

            <LegalSection num={16} title="Externe diensten">
              <P>Toms Ambitie maakt gebruik van externe diensten en platforms zoals Vercel, Supabase, Resend, Stripe, Google Analytics, Google Tag Manager en andere tools.</P>
              <P>Wij zijn niet aansprakelijk voor storingen, fouten, dataverlies of schade veroorzaakt door externe diensten, tenzij sprake is van opzet of bewuste roekeloosheid aan onze kant.</P>
            </LegalSection>

            <LegalSection num={17} title="Beschikbaarheid en onderhoud">
              <P>Wij proberen websites en platformen goed beschikbaar te houden. Toch kunnen storingen, onderhoud, updates of externe problemen optreden.</P>
              <P>Toms Ambitie mag platformen tijdelijk offline halen voor onderhoud, veiligheid of verbetering.</P>
            </LegalSection>

            <LegalSection num={18} title="Aansprakelijkheid">
              <P>Toms Ambitie is alleen aansprakelijk voor directe schade die het rechtstreekse gevolg is van een toerekenbare tekortkoming.</P>
              <P>Wij zijn niet aansprakelijk voor:</P>
              <Bullets items={[
                'indirecte schade',
                'gevolgschade',
                'gemiste omzet',
                'gemiste winst',
                'dataverlies',
                'reputatieschade',
                'fouten in AI output',
                'beslissingen op basis van software output',
                'storingen bij externe diensten',
                'verlies door verkeerd gebruik van platformen',
              ]} />
              <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.75, color: 'var(--inkt-60)' }}>
                Voor zover wettelijk toegestaan, is de aansprakelijkheid beperkt tot het bedrag dat voor de betreffende dienst is betaald in de drie maanden voorafgaand aan de schade. Voor consumenten geldt deze beperking alleen voor zover de wet dat toestaat.
              </p>
            </LegalSection>

            <LegalSection num={19} title="Overmacht">
              <P>Toms Ambitie is niet aansprakelijk wanneer verplichtingen niet kunnen worden nagekomen door omstandigheden buiten onze macht.</P>
              <P>Daaronder vallen onder andere storingen bij externe leveranciers, internetstoringen, cyberincidenten, overheidsmaatregelen, betalingsproviderproblemen, hostingproblemen of andere situaties waarop wij geen directe invloed hebben.</P>
            </LegalSection>

            <LegalSection num={20} title="Beëindiging">
              <P>Toms Ambitie mag een samenwerking, account, abonnement of toegang beëindigen wanneer:</P>
              <Bullets items={[
                'voorwaarden worden geschonden',
                'betaling uitblijft',
                'vertrouwen ontbreekt',
                'sprake is van misbruik',
                'wetgeving wordt overtreden',
                'voortzetting redelijkerwijs niet van ons kan worden verwacht',
              ]} />
            </LegalSection>

            <LegalSection num={21} title="Klachten">
              <P>Klachten kunnen worden gestuurd naar: <MailLink address="hallo@toms-ambitie.nl" /></P>
              <P>Wij proberen klachten binnen een redelijke termijn inhoudelijk te behandelen.</P>
            </LegalSection>

            <LegalSection num={22} title="Wijzigingen">
              <P>Toms Ambitie mag deze voorwaarden wijzigen wanneer wetgeving, ventures, platformen, tools of werkwijzen veranderen.</P>
              <P>De meest actuele versie staat altijd op deze pagina. Bij ingrijpende wijzigingen proberen wij gebruikers of klanten tijdig te informeren.</P>
            </LegalSection>

            <LegalSection num={23} title="Toepasselijk recht">
              <P>Op alle overeenkomsten, platformen, diensten en samenwerkingen is Nederlands recht van toepassing.</P>
              <P>Geschillen worden voorgelegd aan de bevoegde rechter in Nederland, tenzij de wet voor consumenten een andere bevoegde rechter aanwijst.</P>
            </LegalSection>

            <LegalSection num={24} title="Contact">
              <div style={{ padding: '20px 24px', background: 'var(--papier)', borderLeft: '3px solid var(--volt)' }}>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--inkt-80)', margin: 0 }}>
                  <strong style={{ color: 'var(--inkt)', fontWeight: 600 }}>Toms Ambitie</strong><br />
                  Zwolle, Nederland<br />
                  <MailLink address="hallo@toms-ambitie.nl" /><br />
                  <WebLink url="www.toms-ambitie.nl" />
                </p>
              </div>
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

export default AlgemeneVoorwaardenPage;
