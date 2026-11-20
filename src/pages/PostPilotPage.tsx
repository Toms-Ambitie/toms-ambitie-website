import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHead } from "@/components/site/PageHead";
import { Ring } from "@/components/site/Ring";
import { Compare } from "@/components/site/Compare";
import { Cta, HlInk } from "@/components/site/Cta";
import { applyVentureSEO } from "@/components/site/ventureSeo";

const PostPilotPage = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    applyVentureSEO({
      slug: "postpilot",
      name: "PostPilot",
      site: "https://postpilotapp.nl",
      title: "PostPilot · LinkedIn-tool · een venture van Toms Ambitie",
      description:
        "PostPilot maakt van een ingesproken gedachte een LinkedIn-post in jouw toon. Nederlandstalig, gebouwd door Toms Ambitie in Zwolle. Lees het verhaal.",
    });
  }, []);

  return (
    <SiteLayout>
      <div ref={rootRef}>
        <PageHead
          wide
          back={{ to: "/ventures", label: "← alle ventures" }}
          eyebrow="Venture 01 · LinkedIn AI · Live"
          title={
            <span className="rw">
              PostPilot
              <Ring />
            </span>
          }
          hand="spreek het in. PostPilot schrijft."
          lead="Van gesproken gedachte naar LinkedIn-post in 30 seconden. Spreek een idee in of typ een paar steekwoorden. Jij keurt goed en publiceert."
        />

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="rv">
              <Compare
                big
                sketch="pp"
                label="Schuif tussen krabbel en product, PostPilot"
                img={{
                  src: "/ta/postpilot-1200.webp",
                  srcSet: "/ta/postpilot-700.webp 700w, /ta/postpilot-1200.webp 1200w",
                  alt: "De PostPilot-app: waar wil je vandaag zichtbaar over zijn?",
                }}
              />
            </div>

            <div className="story">
              <div className="st-r rv">
                <p className="eyebrow">Stap 1</p>
                <div>
                  <h2 className="d">
                    Spreek het <span className="hl">in.</span>
                  </h2>
                  <p>Spreek een idee in of typ een paar steekwoorden. Je praat zoals het komt, PostPilot haalt de kern eruit.</p>
                </div>
              </div>
              <div className="st-r rv">
                <p className="eyebrow">Stap 2</p>
                <div>
                  <h2 className="d">PostPilot schrijft in jouw toon.</h2>
                  <p>
                    Een complete post met voorbeeld. Je kiest een toon (reflectief, direct, verhalend of analytisch) of geeft drie eerdere posts mee.
                    Bijstellen kan met één klik.
                  </p>
                </div>
              </div>
              <div className="st-r rv">
                <p className="eyebrow">Stap 3</p>
                <div>
                  <h2 className="d">Jij keurt goed en publiceert.</h2>
                  <p>Direct of ingepland, via de officiële LinkedIn-koppeling. Zonder je wachtwoord te delen. Niets gaat live zonder jouw akkoord.</p>
                </div>
              </div>
              <div className="st-r rv">
                <p className="eyebrow">Wat we leerden</p>
                <div>
                  <h2 className="d">Versie één was een betere schrijftool. Versie twee haalt het lege scherm weg.</h2>
                  <p>
                    Dat verschil bleek groter dan we dachten. Daarom is PostPilot opnieuw opgebouwd rond spraak. Tom heeft PostPilot helemaal zelf
                    ontwikkeld.
                  </p>
                  <Link className="txt-l" to="/nieuws/postpilot-v2-spraak">
                    lees het artikel →
                  </Link>
                </div>
              </div>
            </div>

            <div className="nums n3" style={{ marginTop: "clamp(48px,7vw,110px)" }}>
              <div className="num rv">
                <b className="d sm">Spraak</b>
                <span>Hoofdroute</span>
                <small>Inspreken of steekwoorden typen</small>
              </div>
              <div className="num rv">
                <b className="d sm">Jouw toon</b>
                <span>Vier presets</span>
                <small>Nederlands, ook met dialect, en Engels</small>
              </div>
              <div className="num z rv">
                <b className="d sm">Officieel</b>
                <span>LinkedIn-koppeling</span>
                <small style={{ color: "var(--inkt)" }}>Zonder wachtwoord te delen</small>
              </div>
            </div>
          </div>
        </section>

        <Cta
          eyebrow="Zelf proberen"
          title={
            <>
              Spreek je eerste post <HlInk>in.</HlInk>
            </>
          }
        >
          <div className="acts">
            <a className="btn inv" href="https://postpilotapp.nl">
              Naar postpilotapp.nl <i>→</i>
            </a>
            <Link className="txt-l" to="/ventures/emmastudio">
              volgende venture: EmmaStudio →
            </Link>
          </div>
        </Cta>
      </div>
    </SiteLayout>
  );
};

export default PostPilotPage;
