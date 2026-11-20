import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { applySEO } from "@/lib/seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHead } from "@/components/site/PageHead";
import { TomPanel } from "@/components/site/TomPanel";
import { Ring } from "@/components/site/Ring";
import { Motto } from "@/components/site/Motto";
import { Cta, HlInk } from "@/components/site/Cta";

const VALUES = [
  { n: "01", t: "Oplossing eerst", d: "Elk venture begint met iets wat we zelf voelen. Geen spreadsheet als startpunt, geen denkbeeldige markt." },
  { n: "02", t: "Altijd onderbouwd", d: "Elk idee krijgt een plan. Nooit roekeloos. Maar ook nooit zo lang gepland dat het niet gebeurt." },
  { n: "03", t: "AI als versneller", d: "Niet als experiment, maar als werkwijze. Validatie, demo, business case: AI werkt mee van stap één." },
  { n: "04", t: "Samen bouwen", d: "Het liefst met partners, maar ook solo als het moet. Geen ego." },
  { n: "05", t: "Eerlijk", d: "Over wat werkte. Maar vooral ook over wat niet werkte.", z: true },
];

const TIMELINE: { y: string; t: ReactNode; d: string; now?: boolean }[] = [
  { y: "2008", t: "Notabilis", d: "Toms eerste bedrijf, opgericht met Bart Pronk. Marcel Ooink op den Dijk werkte vanaf de start mee en werd in 2009 partner." },
  { y: "2010–14", t: <span className="xs">DesignerShirts</span>, d: "Gestopt. Niet extreem winstgevend, maar het gaf energie." },
  { y: "2012", t: "Aardbei Communicatie", d: "Tom en Marcel kopen Bart uit en gaan samen verder onder een nieuwe naam." },
  { y: "2012–15", t: <span className="xs">PartyBlender</span>, d: "Gestopt. Een goed idee zonder de middelen om het echt groot te maken." },
  { y: "2015", t: "Aardbei verkocht", d: "Tom en Marcel verkopen het bureau aan Brandon Ziel. Het is daarna nog een paar keer verkocht en gaat al jaren verder als Cherry Marketing. Voor Tom het startschot voor Toms Ambitie." },
  { y: "2017–23", t: <span className="sold nobr">LED-IBC</span>, d: "Verkocht aan onze Belgische partner Woodpeckers." },
  { y: "2019–22", t: "Entranz", d: "Uitgestapt." },
  { y: "2025", t: "AI-first", d: "Definitieve omslag. AI niet als experiment, maar als werkwijze." },
  { y: "2025–26", t: <span className="xs">Plug and Power</span>, d: "Gestopt. Met Ernst Meerholz en Nick Neppelenbroek." },
  { y: "2026", t: "PostPilot", d: "Van gesproken gedachte naar LinkedIn-post. Versie 2.0 met spraakinvoer.", now: true },
  { y: "2026", t: "EmmaStudio", d: "Acht modules voor ondernemers. Vijf live. Ontwikkeld bij Blondes Incognito in Heeten.", now: true },
];

const OverOnsPage = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    applySEO({
      title: "Over Toms Ambitie en Tom Mulder · Zwolle",
      description:
        "Wie is Tom Mulder en waarom bestaat Toms Ambitie? Van reclamebureau naar venture club: het verhaal, de mensen en de manier van werken achter de ventures.",
      canonical: "https://www.toms-ambitie.nl/over-ons",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Over Toms Ambitie — Tom Mulder",
          url: "https://www.toms-ambitie.nl/over-ons",
          isPartOf: { "@id": "https://www.toms-ambitie.nl/#website" },
          about: { "@id": "https://www.toms-ambitie.nl/#tom-mulder" },
        },
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://www.toms-ambitie.nl/#tom-mulder",
          name: "Tom Mulder",
          givenName: "Tom",
          familyName: "Mulder",
          jobTitle: "Founder & Venture Builder",
          description:
            "Ondernemer en venture builder uit Zwolle. Tom Mulder bouwt eigen bedrijven vanuit echte frustratie, met AI als versneller. Oprichter van Toms Ambitie, PostPilot en EmmaStudio.",
          url: "https://www.toms-ambitie.nl/over-ons",
          image: "https://www.toms-ambitie.nl/photos/tom-founder-01.webp",
          email: "hallo@toms-ambitie.nl",
          worksFor: { "@id": "https://www.toms-ambitie.nl/#organization" },
          address: { "@type": "PostalAddress", addressLocality: "Zwolle", addressRegion: "Overijssel", addressCountry: "NL" },
        },
      ],
    });
  }, []);

  return (
    <SiteLayout>
      <div ref={rootRef}>
        <PageHead
          wide
          eyebrow="Over ons"
          title={
            <>
              Een venture club. Een vaste <span className="hl">kern.</span>
            </>
          }
          hand="geen bureau, wel bouwers"
          lead="Toms Ambitie is geen agency, geen consultancy, geen fonds. Een actief systeem dat eigen bedrijven bouwt. Vanuit een vaste kern, aangevuld met specialisten waar nodig."
        />

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <p className="eyebrow">01 · Kernwaarden</p>
                <h2 className="d" style={{ marginTop: 16 }}>
                  Vijf principes.
                </h2>
              </div>
              <p className="hand" style={{ fontSize: "clamp(34px,3.6vw,50px)", transform: "rotate(-2deg)" }}>
                de vijfde is de belangrijkste →
              </p>
            </div>
            <div className="cards c5">
              {VALUES.map((v) => (
                <div key={v.n} className={`card${v.z ? " z" : ""} rv`}>
                  <span className="n d">{v.n}</span>
                  <h3 className="d">{v.t}</h3>
                  <p>{v.d}</p>
                </div>
              ))}
            </div>

            <div className="founder">
              <TomPanel
                className="rv"
                note="Tom Mulder · founder"
                img={{
                  src: "/ta/tom-staand-wit-600.webp",
                  srcSet: "/ta/tom-staand-wit-560.webp 560w, /ta/tom-staand-wit-600.webp 600w",
                  width: 599,
                  height: 1100,
                }}
              />
              <div className="rv">
                <p className="eyebrow">02 · De founder</p>
                <h2 className="d" style={{ marginTop: 16 }}>
                  18 jaar bouwen. Eén constante: <span className="hl">doen.</span>
                </h2>
                <blockquote>“Elke dag nieuwe ideeën. En dan ook echt bouwen.”</blockquote>
                <p>
                  Tom begon in 2008 met Notabilis, dat later Aardbei Communicatie werd. Verkocht het bureau in 2015. Sindsdien bouwt hij eigen
                  ventures, met dezelfde discipline en AI als versneller.
                </p>
                <p>Ideeën worden pas interessant zodra iemand ze gebruikt. Niet eindeloos brainstormen. Niet vergaderen. Gewoon bouwen.</p>
                <a className="txt-l" href="mailto:hallo@toms-ambitie.nl">
                  hallo@toms-ambitie.nl →
                </a>
              </div>
            </div>

            <div className="anek rv">
              <p className="eyebrow">Nooit gebouwd</p>
              <p className="d">
                Toiletborstels verhuren.{" "}
                <span className="rw">
                  Serieus.
                  <Ring />
                </span>
              </p>
              <p className="sub">
                toiletborstelhuren.nl was ooit een hersenspinsel van Tom. Er is nooit iets mee gedaan. Niet elke krabbel wordt een bedrijf.
              </p>
            </div>
          </div>
        </section>

        <section className="sec how">
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <p className="eyebrow">03 · Tijdlijn</p>
                <h2 className="d" style={{ marginTop: 16 }}>
                  18 jaar.
                </h2>
              </div>
              <p className="hand" style={{ fontSize: "clamp(34px,3.6vw,50px)", transform: "rotate(-2deg)" }}>
                het kladblok, op volgorde
              </p>
            </div>
            <div className="tl">
              {TIMELINE.map((r, i) => (
                <div key={i} className={`tl-r${r.now ? " now" : ""} rv`}>
                  <span className="y d">{r.y}</span>
                  <h3 className="d">{r.t}</h3>
                  <p>{r.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="sec-head rv" style={{ marginBottom: 0 }}>
              <div>
                <p className="eyebrow">04 · Het team</p>
                <h2 className="d" style={{ marginTop: 16, fontSize: "clamp(26px,5vw,72px)" }}>
                  Vaste kern. Plus <span className="hl">specialisten.</span>
                </h2>
              </div>
              <div>
                <p>
                  We werken met builders, developers, marketeers, designers en operators. Soms fulltime. Soms tijdelijk. Maar altijd mensen die
                  sneller willen bouwen dan traditionele bedrijven bewegen.
                </p>
                <p style={{ marginTop: 14 }}>Developer, designer, marketeer of specialist? Dan praten we graag.</p>
                <Link className="txt-l" to="/meebouwen" style={{ display: "inline-block", marginTop: 10 }}>
                  praat met ons →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Motto text="Als je het kunt bedenken, kun je het ook doen." note="Wat niet kan is nog nooit gebeurd." flush />

        <Cta
          eyebrow="Bouw mee"
          title={
            <>
              Wij zoeken altijd mensen om mee te <HlInk>bouwen.</HlInk>
            </>
          }
          text="Partner, ondernemer, specialist."
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

export default OverOnsPage;
