import { useEffect } from 'react';
import { SiteLayout } from '@/components/site/SiteLayout';
import { applySEO } from '@/lib/seo';

/* ── Sub-components ── */

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="art-ul">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const MailLink = ({ address }: { address: string }) => <a href={`mailto:${address}`}>{address}</a>;

const WebLink = ({ url }: { url: string }) => (
  <a href={`https://${url}`} target="_blank" rel="noopener noreferrer">
    {url}
  </a>
);

const LegalSection = ({ num, title, children }: { num: number; title: string; children: React.ReactNode }) => (
  <section className="legal">
    <h2 className="d art-h2">
      <span className="legal-n">{String(num).padStart(2, "0")}</span>
      {title}
    </h2>
    {children}
  </section>
);

const P = ({ children }: { children: React.ReactNode; style?: React.CSSProperties }) => <p>{children}</p>;

/* ── Page ── */

const PrivacyPage = () => {
  useEffect(() => {
    applySEO({
      title: 'Privacyverklaring · Toms Ambitie',
      description: 'Hoe Toms Ambitie omgaat met je persoonsgegevens: wat we verwerken, waarom, hoe lang we het bewaren en welke rechten je hebt onder de AVG.',
      canonical: 'https://www.toms-ambitie.nl/privacy',
    });
  }, []);

  return (
    <SiteLayout>
      <article>
        <header className="phead art-h">
          <div className="wrap">
            <p className="eyebrow">Juridisch</p>
            <h1 className="d"><span className="hl">Privacyverklaring</span></h1>
            <p className="lead">Duidelijk over data, formulieren, analytics en platformen.</p>
          </div>
        </header>

        <div className="wrap art">
            <p>Toms Ambitie bouwt ventures, platformen en digitale producten. Daarbij verwerken we soms persoonsgegevens. Niet om gegevens te verkopen, maar om onze websites, platformen, communicatie en diensten goed te laten werken. We verzamelen alleen wat nodig is. En we gaan daar zorgvuldig mee om.</p>

            <LegalSection num={1} title="Wie wij zijn">
              <P>Toms Ambitie is een Nederlandse onderneming uit Zwolle die eigen ventures, platformen, software, AI toepassingen, e-commerce concepten en digitale producten ontwikkelt.</P>
              <P>Onder Toms Ambitie kunnen handelsnamen en ventures vallen zoals Plug and Power, EmmaStudio, PostPilot en toekomstige platformen. Zolang een venture geen eigen rechtspersoon of KvK inschrijving heeft, valt deze juridisch onder Toms Ambitie.</P>
              <div className="side-b legal-box">
                <p>
                  <strong>Toms Ambitie</strong><br />
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
              <P>Het kan gaan om:</P>
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
              <p>
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
              <p>
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
              <p>
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
              <p>
                Deze partijen kunnen persoonsgegevens verwerken wanneer dat nodig is voor het functioneren van onze websites, platformen en diensten. Waar nodig sluiten wij verwerkersovereenkomsten of accepteren wij de verwerkersvoorwaarden van deze partijen.
              </p>
              <p>
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
              <p>
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
              <p>
                Functionele cookies zijn nodig om de website of het platform goed te laten werken. Analytische cookies helpen ons om het gebruik te begrijpen en te verbeteren. Marketing cookies worden alleen gebruikt wanneer wij marketing of retargeting inzetten en wanneer daarvoor toestemming is gegeven als dat wettelijk vereist is.
              </p>
              <p>
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
              <p>
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
              <p>
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
              <p>
                Verzoeken kunnen worden gestuurd naar: <MailLink address="hallo@toms-ambitie.nl" />
              </p>
              <p>
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

            <p className="legal-meta">Laatste update: mei 2026</p>
        </div>
      </article>
    </SiteLayout>
  );
};

export default PrivacyPage;
