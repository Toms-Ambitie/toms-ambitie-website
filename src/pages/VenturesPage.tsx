import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { applySEO } from "@/lib/seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHead } from "@/components/site/PageHead";
import { Compare } from "@/components/site/Compare";
import { Cta, HlInk } from "@/components/site/Cta";

/** Old in-page anchors now have their own venture pages. */
const OLD_ANCHORS: Record<string, string> = {
  "#post-pilot": "/ventures/postpilot",
  "#postpilot": "/ventures/postpilot",
  "#emmastudio": "/ventures/emmastudio",
};

const VenturesPage = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const to = OLD_ANCHORS[hash.toLowerCase()];
    if (to) navigate(to, { replace: true });
  }, [hash, navigate]);

  useEffect(() => {
    applySEO({
      title: "Onze ventures · de bedrijven van Toms Ambitie",
      description:
        "Een overzicht van alle ventures van Toms Ambitie: wat er live staat, wat er is verkocht en wat er is gestopt. Inclusief wat elk traject ons heeft geleerd.",
      canonical: "https://www.toms-ambitie.nl/ventures",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Ventures van Toms Ambitie",
        url: "https://www.toms-ambitie.nl/ventures",
        description: "Twee eigen ventures, allebei live, gebouwd vanuit echte problemen. Open voor investeerders, co-founders en specialisten.",
        isPartOf: { "@id": "https://www.toms-ambitie.nl/#website" },
        author: { "@id": "https://www.toms-ambitie.nl/#tom-mulder" },
      },
    });
  }, []);

  return (
    <SiteLayout>
      <div ref={rootRef}>
        <PageHead
          wide
          eyebrow="De ventures"
          title={
            <>
              Waar we nu aan <span className="hl">bouwen.</span>
            </>
          }
          hand="twee live, één gestopt"
          lead="Geen losse ideeën. Twee ventures gebouwd vanuit echte frustratie, behoefte of marktkans."
        />

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <article className="case rv">
              <Compare
                sketch="pp"
                label="Schuif tussen krabbel en product, PostPilot"
                img={{
                  src: "/ta/postpilot-1200.webp",
                  srcSet: "/ta/postpilot-700.webp 700w, /ta/postpilot-1200.webp 1200w",
                  alt: "De PostPilot-app: waar wil je vandaag zichtbaar over zijn?",
                }}
              />
              <div className="case-t">
                <span className="live">Venture 01 · LinkedIn AI · Live</span>
                <h2 className="d">PostPilot</h2>
                <p className="tl">Van idee naar LinkedIn-post in seconden.</p>
                <p>
                  Je spreekt dertig seconden in wat je denkt. PostPilot maakt er een LinkedIn-post van in jouw toon. Publiceren gaat via de officiële
                  LinkedIn-koppeling, dus zonder je wachtwoord af te geven.
                </p>
                <div className="facts">
                  <div className="fact">
                    <b>Spraak</b>
                    <span>Hoofdroute</span>
                  </div>
                  <div className="fact">
                    <b>Jouw toon</b>
                    <span>Vier presets</span>
                  </div>
                  <div className="fact">
                    <b>Officieel</b>
                    <span>LinkedIn-koppeling</span>
                  </div>
                </div>
                <div className="acts" style={{ marginTop: 4 }}>
                  <Link className="btn" to="/ventures/postpilot">
                    Lees het verhaal <i>→</i>
                  </Link>
                  <a className="txt-l" href="https://postpilotapp.nl">
                    postpilotapp.nl →
                  </a>
                </div>
              </div>
            </article>

            <article className="case rv">
              <Compare
                sketch="em"
                label="Schuif tussen krabbel en product, EmmaStudio"
                img={{
                  src: "/ta/emma-1200.webp",
                  srcSet: "/ta/emma-700.webp 700w, /ta/emma-1200.webp 1200w",
                  alt: "Homepage van EmmaStudio",
                }}
              />
              <div className="case-t">
                <span className="live">Venture 02 · SaaS voor ondernemers · Live</span>
                <h2 className="d">EmmaStudio</h2>
                <p className="tl">Je omzet en je kosten zien elkaar nooit.</p>
                <p>
                  EmmaStudio brengt omzet en kosten voor het eerst op dezelfde dag bij elkaar. Acht modules, elk los af te nemen. Vijf draaien live,
                  dagelijks in gebruik bij kapsalon Blondes Incognito in Heeten.
                </p>
                <div className="facts">
                  <div className="fact">
                    <b>5 van 8</b>
                    <span>Modules live</span>
                  </div>
                  <div className="fact">
                    <b>Salons</b>
                    <span>Eerste branche</span>
                  </div>
                  <div className="fact">
                    <b>14 dagen</b>
                    <span>Gratis proberen</span>
                  </div>
                </div>
                <div className="acts" style={{ marginTop: 4 }}>
                  <Link className="btn" to="/ventures/emmastudio">
                    Lees het verhaal <i>→</i>
                  </Link>
                  <a className="txt-l" href="https://emmastudio.nl">
                    emmastudio.nl →
                  </a>
                </div>
              </div>
            </article>

            <div className="stopt on-ink rv">
              <div className="row">
                <span className="nm d">
                  <s>Plug and Power</s>
                </span>
                <div>
                  <span className="st">Gestopt · 2025–2026 · Energy tech</span>
                  <p className="ls">We laten ook zien wat niet doorging.</p>
                  <Link className="txt-l" to="/nieuws">
                    lees wat we leerden →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sec how">
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <p className="eyebrow">Eigen merk</p>
                <h2 className="d" style={{ marginTop: 16 }}>
                  Elke venture staat op eigen <span className="hl">benen.</span>
                </h2>
              </div>
              <p>
                Eigen naam, eigen logo, eigen website. De link met Toms Ambitie is subtiel maar altijd aanwezig: dezelfde werkwijze, dezelfde drive,
                dezelfde standaard.
              </p>
            </div>
            <div className="cards">
              <div className="card pap rv">
                <span className="n d">01</span>
                <h3 className="d">Eigen identiteit</h3>
                <p>Logo, kleuren, lettertypen. Eigen beeldtaal. Eigen verhaal.</p>
              </div>
              <div className="card pap rv">
                <span className="n d">02</span>
                <h3 className="d">Eigen website</h3>
                <p>Eigen domein. Eigen platform. Eigen weg naar de markt.</p>
              </div>
              <div className="card pap rv">
                <span className="n d">03</span>
                <h3 className="d">Toms Ambitie als motor</h3>
                <p>Dezelfde werkwijze en principes. Gebouwd om te groeien.</p>
              </div>
            </div>
            <div className="endo rv">
              <span className="hand">zo staat het onder elke venture-site ↓</span>
              <div className="endo-b">
                <img src="/ta/beeldmerk.svg" alt="" width={30} height={30} />
                <span>een Toms Ambitie venture</span>
              </div>
            </div>
          </div>
        </section>

        <Cta
          eyebrow="Wat volgt"
          title={
            <>
              Het doel is niet één succesvol <HlInk>bedrijf.</HlInk>
            </>
          }
          text="Het doel is een omgeving bouwen waarin ventures sneller ontstaan, getest worden en kunnen groeien. Heb je een probleem dat een bedrijf verdient? Begin daar."
        >
          <div className="acts">
            <Link className="btn inv" to="/meebouwen">
              Start gesprek <i>→</i>
            </Link>
            <Link className="txt-l" to="/werkwijze">
              bekijk de werkwijze →
            </Link>
          </div>
        </Cta>
      </div>
    </SiteLayout>
  );
};

export default VenturesPage;
