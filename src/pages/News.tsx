import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { publishedNews, formatNewsDate, type NewsCategory, type NewsItem } from "@/data/news";
import { applySEO } from "@/lib/seo";

// Editorial categorieën (mapping van bron-categorie naar build log labels).
const EDITORIAL_CATEGORIES = [
  "ALLES",
  "ORIGIN STORIES",
  "ACTIVE VENTURES",
  "BUILDING IN PUBLIC",
  "OBSERVATIONS",
  "OPERATIONS",
  "AI & SYSTEMS",
] as const;
type Editorial = (typeof EDITORIAL_CATEGORIES)[number];

const mapCategory = (c: NewsCategory): Exclude<Editorial, "ALLES"> => {
  switch (c) {
    case "Past project":
      return "ORIGIN STORIES";
    case "Venture update":
      return "ACTIVE VENTURES";
    case "Nieuw project":
      return "BUILDING IN PUBLIC";
    case "Manifest":
      return "OBSERVATIONS";
    case "Algemeen":
    default:
      return "OPERATIONS";
  }
};

// Schatting van leesduur op basis van excerpt + body lengte.
const readTime = (item: NewsItem): number => {
  const words = (item.excerpt + " " + item.body.join(" ")).split(/\s+/).length;
  return Math.max(2, Math.round(words / 220));
};

const FEATURED_SLUG = "voordat-toms-ambitie-bestond-was-er-aardbei";

const News = () => {
  const [filter, setFilter] = useState<Editorial>("ALLES");

  useEffect(() => {
    applySEO({
      title: "Build Log. Toms Ambitie | Origin stories, ventures & observations",
      description:
        "Geen contentkalender. Wel origin stories, venture updates, observaties en lessen uit het bouwen.",
      canonical: "https://www.toms-ambitie.nl/nieuws",
    });
  }, []);

  const all = useMemo(() => publishedNews(), []);
  const featured = useMemo(() => all.find((n) => n.slug === FEATURED_SLUG) ?? all[0], [all]);
  const rest = useMemo(() => all.filter((n) => n.slug !== featured?.slug), [all, featured]);

  const filtered = useMemo(() => {
    if (filter === "ALLES") return rest;
    return rest.filter((n) => mapCategory(n.category) === filter);
  }, [rest, filter]);

  // Visueel ritme: 1 medium (groot), dan 2 small, repeat.
  const rhythm = (i: number): "medium" | "small" =>
    i % 5 === 0 ? "medium" : "small";

  return (
    <main className="min-h-screen" style={{ background: "#F4F1E8" }}>
      <Navbar />

      {/* HERO */}
      <section className="bg-ink pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <p className="font-mono uppercase typo-label text-volt mb-6" style={{ letterSpacing: "0.22em" }}>
            06 — Build log
          </p>
          <h1
            className="font-display text-paper"
            style={{
              fontSize: "clamp(3rem, 11vw, 9rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
            }}
          >
            BUILD <span className="text-volt">LOG.</span>
          </h1>
          <p className="text-paper/75 text-base md:text-lg leading-relaxed max-w-[640px] mt-10">
            Geen contentkalender.
            <br />
            Wel origin stories, venture updates, observaties en lessen uit het bouwen.
          </p>
          <p className="font-mono uppercase typo-label text-paper/45 mt-8" style={{ letterSpacing: "0.18em" }}>
            Een publiek logboek van builders.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      {featured && (
        <section
          className="border-b"
          style={{ background: "#1A2010", borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-24">
            <p
              className="font-mono uppercase typo-label text-volt mb-8"
              style={{ letterSpacing: "0.22em" }}
            >
              ✶ Featured · Origin story
            </p>

            <Link
              to={`/nieuws/${featured.slug}`}
              className="group grid md:grid-cols-12 gap-8 md:gap-12 items-end"
            >
              {/* Visual block — typografisch want geen image-veld in data */}
              <div className="md:col-span-5">
                <div
                  className="aspect-[4/5] w-full flex items-end p-7 md:p-9 border"
                  style={{
                    background:
                      "linear-gradient(160deg, #0E0E0C 0%, #1A2010 60%, #243018 100%)",
                    borderColor: "rgba(200,240,0,0.18)",
                  }}
                >
                  <div>
                    <p
                      className="font-mono uppercase text-volt typo-label mb-4"
                      style={{ letterSpacing: "0.22em" }}
                    >
                      {mapCategory(featured.category)}
                    </p>
                    <p
                      className="font-display text-paper"
                      style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 0.95 }}
                    >
                      2008 — 2017
                    </p>
                    <p className="font-mono text-paper/60 typo-xs uppercase mt-4" style={{ letterSpacing: "0.18em" }}>
                      Notabilis · Aardbei · FreshGuys
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <time
                    dateTime={featured.date}
                    className="font-mono typo-xs uppercase text-paper/55"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    {formatNewsDate(featured.date)}
                  </time>
                  <span className="text-paper/30">·</span>
                  <span
                    className="font-mono typo-xs uppercase text-paper/55"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    {readTime(featured)} min lezen
                  </span>
                </div>

                <h2
                  className="font-display text-paper"
                  style={{
                    fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.005em",
                  }}
                >
                  Voordat Toms Ambitie bestond, was er Aardbei Communicatie.
                </h2>

                <p className="text-paper/75 text-base md:text-lg leading-relaxed mt-8 max-w-[560px]">
                  {featured.excerpt}
                </p>

                <span
                  className="inline-flex items-center gap-3 mt-10 font-mono uppercase typo-btn text-volt border-b border-volt/40 pb-1 group-hover:border-volt transition-colors"
                  style={{ letterSpacing: "0.18em" }}
                >
                  Lees verhaal
                  <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* CATEGORIE FILTER */}
      <section style={{ background: "#F4F1E8" }} className="border-b border-ink/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-8 md:py-10">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <p
              className="font-mono uppercase typo-label text-ink/60"
              style={{ letterSpacing: "0.22em" }}
            >
              Filter
            </p>
            <div className="flex flex-wrap gap-2">
              {EDITORIAL_CATEGORIES.map((c) => {
                const active = filter === c;
                return (
                  <button
                    key={c}
                    onClick={() => setFilter(c)}
                    className="font-mono uppercase typo-xs px-3 py-2 border transition-colors"
                    style={{
                      letterSpacing: "0.18em",
                      borderColor: active ? "#0E0E0C" : "rgba(14,14,12,0.18)",
                      background: active ? "#0E0E0C" : "transparent",
                      color: active ? "#C8F000" : "#0E0E0C",
                    }}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE GRID — editorial ritme */}
      <section style={{ background: "#F4F1E8" }} className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          {filtered.length === 0 ? (
            <p className="font-mono uppercase typo-sm text-ink/60" style={{ letterSpacing: "0.18em" }}>
              Nog geen entries in deze categorie.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-16 md:gap-y-24">
              {filtered.map((item, i) => {
                const size = rhythm(i);
                const cat = mapCategory(item.category);
                const colSpan = size === "medium" ? "md:col-span-12" : "md:col-span-6";

                return (
                  <article key={item.slug} className={colSpan}>
                    <Link
                      to={`/nieuws/${item.slug}`}
                      className="group block border-t border-ink/15 pt-6 md:pt-8 hover:border-ink transition-colors"
                    >
                      <div className="flex items-center justify-between gap-4 mb-6 md:mb-8">
                        <span
                          className="font-mono uppercase typo-xs text-ink"
                          style={{ letterSpacing: "0.22em" }}
                        >
                          {cat}
                        </span>
                        <div className="flex items-center gap-3">
                          <time
                            dateTime={item.date}
                            className="font-mono typo-xs uppercase text-ink/55"
                            style={{ letterSpacing: "0.18em" }}
                          >
                            {formatNewsDate(item.date)}
                          </time>
                          <span className="text-ink/25">·</span>
                          <span
                            className="font-mono typo-xs uppercase text-ink/55"
                            style={{ letterSpacing: "0.18em" }}
                          >
                            {readTime(item)} min
                          </span>
                        </div>
                      </div>

                      <h3
                        className="font-display text-ink"
                        style={{
                          fontSize:
                            size === "medium"
                              ? "clamp(2rem, 5vw, 4rem)"
                              : "clamp(1.5rem, 2.6vw, 2.25rem)",
                          lineHeight: 0.95,
                          letterSpacing: "-0.005em",
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="text-ink/75 leading-relaxed mt-5 md:mt-6"
                        style={{
                          fontSize: size === "medium" ? "1.0625rem" : "0.9375rem",
                          maxWidth: size === "medium" ? 720 : 520,
                        }}
                      >
                        {item.excerpt}
                      </p>

                      <span
                        className="inline-flex items-center gap-2 font-mono uppercase typo-btn text-ink mt-8"
                        style={{ letterSpacing: "0.18em" }}
                      >
                        Lees verder
                        <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </Link>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* SLOTSECTIE */}
      <section className="bg-ink py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <p
            className="font-mono uppercase typo-label text-volt mb-8"
            style={{ letterSpacing: "0.22em" }}
          >
            — Bouwen betekent ook falen
          </p>
          <h2
            className="font-display text-paper"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              maxWidth: 1100,
            }}
          >
            WE DELEN OOK DE STUKKEN <br className="hidden md:block" />
            DIE NIET <span className="text-volt">WERKTEN.</span>
          </h2>
          <div className="mt-10 max-w-[680px] space-y-4 text-paper/80 text-base md:text-lg leading-relaxed">
            <p>
              Niet elke venture wordt succesvol. Niet elk experiment groeit uit tot een bedrijf.
            </p>
            <p>
              Maar alles leert ons sneller bouwen, scherper kijken en beter begrijpen waarom mensen doen wat ze doen.
            </p>
            <p>Dat is uiteindelijk waardevoller dan alleen succesverhalen.</p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              to="/ventures"
              className="inline-flex items-center justify-center gap-3 font-mono uppercase typo-btn px-7 py-4 bg-volt text-ink border border-volt hover:bg-paper hover:border-paper transition-colors"
              style={{ letterSpacing: "0.18em" }}
            >
              Bekijk ventures →
            </Link>
            <Link
              to="/meebouwen"
              className="inline-flex items-center justify-center gap-3 font-mono uppercase typo-btn px-7 py-4 border border-paper/30 text-paper hover:border-volt hover:text-volt transition-colors"
              style={{ letterSpacing: "0.18em" }}
            >
              Bouw mee →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default News;
