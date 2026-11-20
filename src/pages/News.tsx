import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { applySEO } from "@/lib/seo";
import { POSTS } from "@/data/posts";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHead } from "@/components/site/PageHead";
import { PFilm } from "@/components/site/PFilm";
import { Cta, HlInk } from "@/components/site/Cta";
import { NEWS_FILTERS, VentureMark, catLabel, hlLast } from "@/components/site/newsHelpers";

const News = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("");

  const visible = POSTS.filter((p) => !p.noindex);
  const featured = visible.find((p) => p.featured) ?? visible[0];
  const rest = visible.filter((p) => p !== featured);

  useEffect(() => {
    applySEO({
      title: "Nieuws en lessen · Toms Ambitie",
      description:
        "Eerlijke verhalen over bouwen, verkopen en stoppen. Wat werkte bij LED IBC, Entranz, PartyBlender en Designershirts, en wat juist niet. Zonder mooipraat.",
      canonical: "https://www.toms-ambitie.nl/nieuws",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Nieuws van Toms Ambitie",
        url: "https://www.toms-ambitie.nl/nieuws",
        isPartOf: { "@id": "https://www.toms-ambitie.nl/#website" },
        hasPart: visible.map((p) => ({
          "@type": "Article",
          headline: p.title,
          url: `https://www.toms-ambitie.nl/nieuws/${p.slug}`,
        })),
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SiteLayout>
      <div ref={rootRef}>
        <PageHead
          eyebrow="Toms Ambitie"
          title={
            <>
              Nieuws<span className="hl">.</span>
            </>
          }
          lead="Geen persberichten. Wel een kijkje in wat we bouwen, testen, lanceren en soms ook weer loslaten. Sommige updates gaan over nieuwe ventures. Andere over fouten, keuzes, lessen of ideeën die uiteindelijk nergens eindigden. Alles hoort erbij."
          aside={<PFilm name="film-doorhalen" note="geen content om het content maken" />}
        />

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            {featured && (
              <Link className="feat rv" to={`/nieuws/${featured.slug}`}>
                <p className="eyebrow">
                  Uitgelicht · {catLabel(featured.statusLabel)}
                  {featured.venture ? ` · ${featured.venture}` : ""}
                </p>
                <h2 className="d">{hlLast(featured.title, true)}</h2>
                <p className="sub">{featured.lead}</p>
                <p className="meta">
                  {featured.date} · {featured.read} lezen
                </p>
                <span className="txt-l">lees artikel →</span>
              </Link>
            )}

            <div className="chips" role="group" aria-label="Filter op soort artikel">
              {["", ...NEWS_FILTERS].map((f) => (
                <button key={f || "alles"} type="button" className="chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>
                  {f ? catLabel(f) : "Alles"}
                </button>
              ))}
            </div>
            <div className="news" aria-live="polite">
              {rest.map((p) => (
                <article key={p.slug} className="nw" hidden={!!filter && p.statusLabel !== filter}>
                  <div className="meta">
                    <b>{catLabel(p.statusLabel)}</b>
                    {p.date}
                  </div>
                  <div>
                    <h3 className="d">
                      <Link to={`/nieuws/${p.slug}`}>{p.title}</Link>
                    </h3>
                    <p>{p.lead}</p>
                  </div>
                  <span className="vt">
                    <VentureMark name={p.venture} />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Cta
          eyebrow="Meedoen"
          title={
            <>
              Heb je iets dat we moeten <HlInk>bouwen?</HlInk>
            </>
          }
          text="Een probleem, markt of idee dat blijft hangen? Stuur het door. Misschien bouwen we het samen."
        >
          <div className="acts">
            <Link className="btn inv" to="/meebouwen">
              Draag idee aan <i>→</i>
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

export default News;
