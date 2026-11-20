import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { applySEO } from "@/lib/seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { HeroFilm } from "@/components/site/HeroFilm";
import { Ring } from "@/components/site/Ring";
import { Compare } from "@/components/site/Compare";
import { HowBand } from "@/components/site/HowBand";
import { Count } from "@/components/site/Count";
import { TomPanel } from "@/components/site/TomPanel";
import { Motto } from "@/components/site/Motto";
import { Cta, HlInk } from "@/components/site/Cta";
import { AskForm } from "@/components/site/AskForm";
import { useSiteMotion } from "@/components/site/motion";

const Index = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useSiteMotion(rootRef);

  useEffect(() => {
    applySEO({
      title: "Toms Ambitie · venture club uit Zwolle die zelf bouwt",
      description:
        "Toms Ambitie is de venture club van Tom Mulder in Zwolle. Wij bedenken geen bedrijven, we bouwen ze. EmmaStudio en PostPilot draaien al. Lees hoe we werken.",
      canonical: "https://www.toms-ambitie.nl/",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.toms-ambitie.nl/#webpage",
        name: "Toms Ambitie — Venture Club Zwolle",
        url: "https://www.toms-ambitie.nl/",
        description:
          "Venture studio in Zwolle die eigen bedrijven bouwt vanuit echte problemen. Open voor co-founders, investeerders en specialisten.",
        isPartOf: { "@id": "https://www.toms-ambitie.nl/#website" },
        about: { "@id": "https://www.toms-ambitie.nl/#organization" },
        author: { "@id": "https://www.toms-ambitie.nl/#tom-mulder" },
      },
    });
  }, []);

  return (
    <SiteLayout>
      <div ref={rootRef}>
        <HeroFilm />

        <section className="sec">
          <div className="wrap klad">
            <div className="rv">
              <p className="eyebrow">Het kladblok</p>
              <h2 className="d" style={{ marginTop: 16 }}>
                Elke dag nieuwe ideeën. En dan ook echt <span className="hl">bouwen.</span>
              </h2>
              <p className="hand big">de meeste strepen we door</p>
              <p className="t">
                Dit is het kladblok, sinds 2008. Wat stopte, staat er nog gewoon in. Twee ideeën zijn omcirkeld. Die draaien nu.
              </p>
            </div>
            <aside className="pad rv" aria-label="Kladblok met ideeën">
              <h2>ideeën, sinds 2008</h2>
              <ul>
                <li style={{ ["--i" as string]: 0 }}>
                  <span className="x">DesignerShirts</span>
                </li>
                <li style={{ ["--i" as string]: 1 }}>
                  <span className="x">PartyBlender</span>
                </li>
                <li style={{ ["--i" as string]: 2 }}>
                  <span>Entranz</span>
                  <small>uitgestapt</small>
                </li>
                <li style={{ ["--i" as string]: 3 }}>
                  <span className="sold">LED-IBC</span>
                  <small>verkocht</small>
                </li>
                <li style={{ ["--i" as string]: 4 }}>
                  <span className="x">Plug and Power</span>
                </li>
                <li>
                  <span>
                    PostPilot
                    <Ring delay={1600} />
                  </span>
                </li>
                <li>
                  <span>
                    EmmaStudio
                    <Ring delay={2200} />
                  </span>
                </li>
              </ul>
              <p className="legend">Doorgestreept is gestopt. Omcirkeld is live.</p>
            </aside>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <p className="eyebrow">De ventures</p>
                <h2 className="d" style={{ marginTop: 16 }}>
                  Twee omcirkeld. Allebei <span className="hl">gebouwd.</span>
                </h2>
              </div>
              <p>Allebei gebouwd vanuit echte frustratie. Sleep de streep, of scroll: links de krabbel, rechts wat het werd.</p>
            </div>

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
                <span className="live">Live · LinkedIn AI</span>
                <h3 className="d">PostPilot</h3>
                <p className="tl">Spreek het in. PostPilot schrijft.</p>
                <p>Nederlandstalige LinkedIn-posts uit je eigen stem. Dertig seconden inspreken, klaar om te publiceren.</p>
                <Link className="txt-l" to="/ventures/postpilot">
                  lees het verhaal van PostPilot →
                </Link>
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
                <span className="live">Live · 5 van 8 modules</span>
                <h3 className="d">EmmaStudio</h3>
                <p className="tl">Je omzet en je kosten zien elkaar nooit.</p>
                <p>Acht modules voor ondernemers met personeel. Vijf draaien er live, waaronder boekhouden, loon en concurrentiemonitoring.</p>
                <Link className="txt-l" to="/ventures/emmastudio">
                  lees het verhaal van EmmaStudio →
                </Link>
              </div>
            </article>
            <div className="acts rv" style={{ marginTop: 0 }}>
              <Link className="btn" to="/ventures">
                Alle ventures <i>→</i>
              </Link>
              <Link className="txt-l" to="/over-ons">
                hoe ze eigen merken blijven →
              </Link>
            </div>
          </div>
        </section>

        <HowBand />

        <section className="honest on-ink">
          <div className="wrap sec">
            <p className="eyebrow">Kernwaarde 05 · Eerlijk</p>
            <h2 className="d">
              Ook over wat niet <HlInk>werkte.</HlInk>
            </h2>
            <p className="intro">Over wat werkte. Maar vooral ook over wat niet werkte. Dit is de hele lijst, niet alleen de successen.</p>
            <div className="rows">
              <div className="row">
                <span className="nm d">
                  <s>DesignerShirts</s>
                </span>
                <div>
                  <span className="st">Gestopt · 2010–2014</span>
                  <p className="ls q">Niet extreem winstgevend, maar het gaf energie.</p>
                </div>
              </div>
              <div className="row">
                <span className="nm d">
                  <s>PartyBlender</s>
                </span>
                <div>
                  <span className="st">Gestopt · 2012–2015</span>
                  <p className="ls q">Een goed idee zonder de middelen om het echt groot te maken.</p>
                </div>
              </div>
              <div className="row">
                <span className="nm d">Entranz</span>
                <div>
                  <span className="st">Uitgestapt · 2019–2022</span>
                  <p className="ls q">Soms verlies je niet van concurrentie, maar van timing.</p>
                </div>
              </div>
              <div className="row vk">
                <span className="nm d">LED-IBC</span>
                <div>
                  <span className="st">Verkocht</span>
                  <p className="ls q">Verkocht aan onze Belgische partner Woodpeckers.</p>
                </div>
              </div>
              <div className="row">
                <span className="nm d">
                  <s>Plug and Power</s>
                </span>
                <div>
                  <span className="st">Gestopt · 2025–2026</span>
                  <p className="ls">We laten ook zien wat niet doorging.</p>
                </div>
              </div>
              <div className="row on">
                <span className="nm d">
                  PostPilot
                  <Ring />
                </span>
                <div>
                  <span className="st">● Live</span>
                  <p className="ls">Spreek het in. PostPilot schrijft.</p>
                </div>
              </div>
              <div className="row on">
                <span className="nm d">
                  EmmaStudio
                  <Ring />
                </span>
                <div>
                  <span className="st">● Live · 5 van 8 modules</span>
                  <p className="ls">Je omzet en je kosten zien elkaar nooit.</p>
                </div>
              </div>
            </div>
            <div className="acts rv">
              <Link className="txt-l" to="/nieuws">
                lees de verhalen erachter →
              </Link>
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="nums">
              <div className="num rv">
                <Count to={2} />
                <span>Actieve ventures</span>
                <small>Beide live</small>
              </div>
              <div className="num rv">
                <Count to={18} />
                <span>Jaar bouwervaring</span>
                <small>Sinds 2008</small>
              </div>
              <div className="num rv">
                <Count to={6} />
                <span>Weken, idee naar venture</span>
                <small>Maximale tijd</small>
              </div>
              <div className="num z rv">
                <b className="d">
                  0
                  <Ring style={{ inset: "-18% -30%", width: "160%", height: "136%" }} />
                </b>
                <span>Klantopdrachten</span>
                <small style={{ color: "var(--inkt)" }}>Alleen eigen ventures</small>
              </div>
            </div>
            <div className="founder">
              <TomPanel
                className="rv"
                note="Tom Mulder · founder"
                img={{
                  src: "/ta/tom-staand-jasje-660.webp",
                  srcSet: "/ta/tom-staand-jasje-560.webp 560w, /ta/tom-staand-jasje-660.webp 660w",
                  width: 660,
                  height: 1100,
                }}
              />
              <div className="rv">
                <p className="eyebrow">De founder</p>
                <h2 className="d" style={{ marginTop: 16 }}>
                  18 jaar bouwen. Eén constante: <span className="hl">doen.</span>
                </h2>
                <blockquote>“Elke dag nieuwe ideeën. En dan ook echt bouwen.”</blockquote>
                <p>
                  Tom begon in 2008 met Notabilis, dat later Aardbei Communicatie werd. Verkocht het bureau in 2015. Sindsdien bouwt hij eigen
                  ventures, met dezelfde discipline en AI als versneller.
                </p>
                <p>Ideeën worden pas interessant zodra iemand ze gebruikt. Niet eindeloos brainstormen. Niet vergaderen. Gewoon bouwen.</p>
                <Link className="txt-l" to="/over-ons">
                  meer over Tom en de club →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Motto text="Als je het kunt bedenken, kun je het ook doen." note="Wat niet kan is nog nooit gebeurd." />

        <Cta
          eyebrow="Bouw mee"
          title={
            <>
              Heb je een probleem dat een bedrijf <HlInk>verdient?</HlInk>
            </>
          }
          peek={{
            src: "/ta/tom-staand-lachend-500.webp",
            srcSet: "/ta/tom-staand-lachend-420.webp 420w, /ta/tom-staand-lachend-500.webp 500w",
            width: 500,
            height: 1100,
          }}
        >
          <AskForm />
        </Cta>
      </div>
    </SiteLayout>
  );
};

export default Index;
