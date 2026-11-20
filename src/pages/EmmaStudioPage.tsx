import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHead } from "@/components/site/PageHead";
import { Ring } from "@/components/site/Ring";
import { Compare } from "@/components/site/Compare";
import { Cta, HlInk } from "@/components/site/Cta";
import { applyVentureSEO } from "@/components/site/ventureSeo";

const MODULES = [
  { name: "EmmaBoekt", text: "Boekhouden zonder dat je je boekhoudsoftware zelf aanraakt.", live: true },
  { name: "EmmaWaakt", text: "Het financiële brein van je zaak.", live: true },
  { name: "EmmaLoont", text: "Loon en contracten, zonder gedoe.", live: true },
  { name: "EmmaVindt", text: "Personeel vinden dat past.", live: true },
  { name: "EmmaZiet", text: "Inzicht in wat concurrenten in de buurt doen.", live: true },
  { name: "EmmaCoacht", text: "Coaching en voortgang voor jou en je team.", live: false },
  { name: "EmmaSchrijft", text: "Teksten die bij jou passen.", live: false },
  { name: "EmmaPromoot", text: "Laat zien welke euro echt omzet oplevert.", live: false },
];

const EmmaStudioPage = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    applyVentureSEO({
      slug: "emmastudio",
      name: "EmmaStudio",
      site: "https://emmastudio.nl",
      title: "EmmaStudio · software voor ondernemers · Toms Ambitie",
      description:
        "EmmaStudio is de softwareventure van Toms Ambitie: boekhouden, loon, personeel en marketing in één platform. Ontstaan in een kapsalon in Heeten.",
    });
  }, []);

  return (
    <SiteLayout>
      <div ref={rootRef}>
        <PageHead
          wide
          back={{ to: "/ventures", label: "← alle ventures" }}
          eyebrow="Venture 02 · SaaS voor ondernemers · Live"
          title={
            <span className="rw">
              EmmaStudio
              <Ring />
            </span>
          }
          hand="jij doet je werk. Emma de rest."
          lead="Acht modules die het saaie werk overnemen: boekhouden, cijfers, personeel en marketing. Voor zelfstandige ondernemers en kleine bedrijven in Nederland."
        />

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="rv">
              <Compare
                big
                sketch="em"
                label="Schuif tussen krabbel en product, EmmaStudio"
                img={{
                  src: "/ta/emma-1200.webp",
                  srcSet: "/ta/emma-700.webp 700w, /ta/emma-1200.webp 1200w",
                  alt: "Homepage van EmmaStudio",
                }}
              />
            </div>

            <div className="story">
              <div className="st-r rv">
                <p className="eyebrow">Het probleem</p>
                <div>
                  <h2 className="d">
                    8 tot 12 uur per week kwijt aan <span className="hl">administratie.</span>
                  </h2>
                  <p>Dat is tijd die een ondernemer niet in zijn werk steekt. En je omzet en je kosten zien elkaar nooit.</p>
                </div>
              </div>
              <div className="st-r rv">
                <p className="eyebrow">Hoe het begon</p>
                <div>
                  <h2 className="d">
                    Ontwikkeld bij Blondes <span className="hl">Incognito.</span>
                  </h2>
                  <p>
                    De bedrijfslogica is ontwikkeld bij Blondes Incognito, de kapsalon van Ilze Spannenberg in Heeten, Overijssel. Daar is het
                    dagelijks in gebruik. Daarna is het losgemaakt tot een platform voor meer ondernemers.
                  </p>
                </div>
              </div>
              <div className="st-r rv">
                <p className="eyebrow">De oplossing</p>
                <div>
                  <h2 className="d">Emma leest, rekent en stelt voor. Jij bevestigt.</h2>
                  <p>
                    Er gebeurt niets zonder jouw akkoord. De modules lezen elkaars gegevens, met één waarheid per cijfer. Je neemt alleen wat je nodig
                    hebt.
                  </p>
                </div>
              </div>
            </div>

            <div className="mods">
              {MODULES.map((m) => (
                <div key={m.name} className={`mod${m.live ? " on" : ""} rv`}>
                  {m.live ? <span className="live">Live</span> : <span className="soon">binnenkort</span>}
                  <h3 className="d">{m.name}</h3>
                  <p>{m.text}</p>
                </div>
              ))}
            </div>

            <div className="nums n3" style={{ marginTop: "clamp(48px,7vw,110px)" }}>
              <div className="num rv">
                <b className="d sm">5 van 8</b>
                <span>Modules live</span>
                <small>Elk los af te nemen, geen verplicht pakket</small>
              </div>
              <div className="num rv">
                <b className="d sm">Salons</b>
                <span>Eerste branche</span>
                <small>Horeca en installateurs volgen</small>
              </div>
              <div className="num z rv">
                <b className="d sm">14 dagen</b>
                <span>Gratis proberen</span>
                <small style={{ color: "var(--inkt)" }}>Maandelijks opzegbaar</small>
              </div>
            </div>
          </div>
        </section>

        <Cta
          eyebrow="Zelf bekijken"
          title={
            <>
              Jij doet je werk. Emma de <HlInk>rest.</HlInk>
            </>
          }
        >
          <div className="acts">
            <a className="btn inv" href="https://emmastudio.nl">
              Naar emmastudio.nl <i>→</i>
            </a>
            <Link className="txt-l" to="/ventures/postpilot">
              vorige venture: PostPilot →
            </Link>
          </div>
        </Cta>
      </div>
    </SiteLayout>
  );
};

export default EmmaStudioPage;
