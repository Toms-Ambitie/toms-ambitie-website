import { useEffect, useRef } from "react";
import { applySEO } from "@/lib/seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHead } from "@/components/site/PageHead";
import { Cta, HlInk } from "@/components/site/Cta";

const FACTSHEET = [
  ["Bedrijfsnaam", "Toms Ambitie"],
  ["Type", "Venture club · venture builder"],
  ["Opgericht", "2015 (na exit Aardbei Communicatie)"],
  ["Oprichter", "Tom Mulder"],
  ["Locatie", "Zwolle, Nederland"],
  ["Actieve ventures", "2: PostPilot · EmmaStudio"],
  ["Werkwijze", "7-stappen systeem van probleem naar platform in max 6 weken"],
  ["Werkwijze (kort)", "Probleem-first · AI als versneller · oplossing voor business case"],
  ["AI-first sinds", "2025"],
  ["Website", "toms-ambitie.nl"],
  ["Contact", "hallo@toms-ambitie.nl"],
];

type Download = { label: string; file: string; format: string; preview: string; bg: "papier" | "inkt" | "balpen" };

const LOGOS: Download[] = [
  { label: "Logo · kleur", file: "toms-ambitie-logo-kleur.svg", format: "SVG", preview: "toms-ambitie-logo-kleur.svg", bg: "papier" },
  { label: "Logo · negatief", file: "toms-ambitie-logo-negatief.svg", format: "SVG", preview: "toms-ambitie-logo-negatief.svg", bg: "inkt" },
  { label: "Logo · zwart", file: "toms-ambitie-logo-zwart.svg", format: "SVG", preview: "toms-ambitie-logo-zwart.svg", bg: "papier" },
  { label: "Logo · wit", file: "toms-ambitie-logo-wit.svg", format: "SVG", preview: "toms-ambitie-logo-wit.svg", bg: "inkt" },
  { label: "Beeldmerk · kleur", file: "toms-ambitie-beeldmerk-kleur.svg", format: "SVG", preview: "toms-ambitie-beeldmerk-kleur.svg", bg: "papier" },
  { label: "Beeldmerk · negatief", file: "toms-ambitie-beeldmerk-negatief.svg", format: "SVG", preview: "toms-ambitie-beeldmerk-negatief.svg", bg: "inkt" },
  { label: "Beeldmerk · zwart", file: "toms-ambitie-beeldmerk-zwart.svg", format: "SVG", preview: "toms-ambitie-beeldmerk-zwart.svg", bg: "papier" },
  { label: "Beeldmerk · wit", file: "toms-ambitie-beeldmerk-wit.svg", format: "SVG", preview: "toms-ambitie-beeldmerk-wit.svg", bg: "inkt" },
  { label: "Blok · inkt", file: "toms-ambitie-blok-inkt.svg", format: "SVG", preview: "toms-ambitie-blok-inkt.svg", bg: "papier" },
  { label: "Blok · papier", file: "toms-ambitie-blok-papier.svg", format: "SVG", preview: "toms-ambitie-blok-papier.svg", bg: "inkt" },
];

const STICKERS: Download[] = [
  { label: "Tom Mulder · staand, jasje", file: "tom-staand-jasje-sticker.png", format: "PNG", preview: "/ta/tom-staand-jasje-560.webp", bg: "balpen" },
  { label: "Tom Mulder · staand, lachend", file: "tom-staand-lachend-sticker.png", format: "PNG", preview: "/ta/tom-staand-lachend-420.webp", bg: "balpen" },
  { label: "Tom Mulder · staand, wit", file: "tom-staand-wit-sticker.png", format: "PNG", preview: "/ta/tom-staand-wit-560.webp", bg: "balpen" },
  { label: "Tom Mulder · zittend", file: "tom-zittend-sticker.png", format: "PNG", preview: "/ta/tom-zittend-560.webp", bg: "balpen" },
  { label: "Tom Mulder · portret", file: "tom-portret-sticker.png", format: "PNG", preview: "/ta/tom-portret-560.webp", bg: "balpen" },
];

const PHOTOS = [
  { src: "/photos/tom-portrait-dark.webp", label: "Tom Mulder · portret donker", credit: "Wonderwood Fotografie" },
  { src: "/photos/tom-portrait-light.webp", label: "Tom Mulder · portret licht", credit: "Wonderwood Fotografie" },
];

const DownloadCard = ({ d }: { d: Download }) => {
  const href = `/persmap/${d.file}`;
  const preview = d.preview.startsWith("/") ? d.preview : `/persmap/${d.preview}`;
  return (
    <a className="card dl rv" href={href} download>
      <span className={`dl-img on-${d.bg}`}>
        <img src={preview} alt="" loading="lazy" decoding="async" />
      </span>
      <h3 className="d">{d.label}</h3>
      <p>{d.format} ↓</p>
    </a>
  );
};

const PersMapPage = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    applySEO({
      title: "Persmap · Toms Ambitie",
      description: "Pers- en mediakit van Toms Ambitie. Logo's, foto's, factsheet en contact voor journalisten.",
      canonical: "https://www.toms-ambitie.nl/persmap",
    });
  }, []);

  return (
    <SiteLayout>
      <div ref={rootRef}>
        <PageHead
          eyebrow="Persmap"
          title={
            <>
              Voor de <span className="hl">pers.</span>
            </>
          }
          lead="Schrijf je over Toms Ambitie of een van onze ventures? Hieronder vind je logo's, foto's en alle feiten. Vragen? Stuur een mail."
        />

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <p className="eyebrow">01 · Factsheet</p>
                <h2 className="d" style={{ marginTop: 16 }}>
                  De feiten. In één blik.
                </h2>
              </div>
            </div>
            <dl className="facts-list">
              {FACTSHEET.map(([k, v]) => (
                <div key={k} className="rv">
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="sec how">
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <p className="eyebrow">02 · Logo's & beeldmerken</p>
                <h2 className="d" style={{ marginTop: 16 }}>
                  Brand assets.
                </h2>
              </div>
              <p>Download het Toms Ambitie logo in verschillende varianten. Gebruik altijd de juiste versie voor de achtergrond.</p>
            </div>
            <div className="cards c5">
              {LOGOS.map((d) => (
                <DownloadCard key={d.file} d={d} />
              ))}
            </div>
            <div className="cards" style={{ marginTop: 20 }}>
              <a className="card z dl rv" href="/persmap/Toms-Ambitie-Brand-Book-2.1.pdf" download>
                <p className="eyebrow">Brand Book</p>
                <h3 className="d">Toms Ambitie Brand Book 2.1</h3>
                <p>PDF · 6,6 MB ↓</p>
              </a>
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <p className="eyebrow">03 · Stickers</p>
                <h2 className="d" style={{ marginTop: 16 }}>
                  Stickers van Tom.
                </h2>
              </div>
            </div>
            <div className="cards c5">
              {STICKERS.map((d) => (
                <DownloadCard key={d.file} d={d} />
              ))}
            </div>
          </div>
        </section>

        <section className="sec how">
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <p className="eyebrow">04 · Persfoto's</p>
                <h2 className="d" style={{ marginTop: 16 }}>
                  Beeldmateriaal.
                </h2>
              </div>
            </div>
            <div className="cards">
              {PHOTOS.map((p) => (
                <a key={p.src} className="card pap dl rv" href={p.src} download>
                  <span className="dl-img photo">
                    <img src={p.src} alt={p.label} loading="lazy" decoding="async" />
                  </span>
                  <h3 className="d">{p.label}</h3>
                  <p>© {p.credit} · WEBP ↓</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Cta
          eyebrow="Perscontact"
          title={
            <>
              Vragen? Stuur een <HlInk>mail.</HlInk>
            </>
          }
          text="Tom is direct te bereiken voor pers- en interviewverzoeken. Reactie meestal binnen 24 uur."
        >
          <div className="acts">
            <a className="btn inv" href="mailto:hallo@toms-ambitie.nl">
              hallo@toms-ambitie.nl <i>→</i>
            </a>
            <a className="txt-l" href="https://linkedin.com/in/tommulder" target="_blank" rel="noopener noreferrer">
              LinkedIn: Tom Mulder →
            </a>
          </div>
          <p className="cta-p">Studio: Zwolle, Nederland · bezoek op afspraak</p>
        </Cta>
      </div>
    </SiteLayout>
  );
};

export default PersMapPage;
