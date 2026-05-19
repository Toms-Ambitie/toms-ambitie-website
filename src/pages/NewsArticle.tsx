import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getNewsBySlug, formatNewsDate, publishedNews } from "@/data/news";
import { applySEO } from "@/lib/seo";

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? getNewsBySlug(slug) : undefined;

  useEffect(() => {
    if (item) {
      const url = `https://www.toms-ambitie.nl/nieuws/${item.slug}`;
      applySEO({
        title: `${item.title} — Nieuws | Toms Ambitie`,
        description: item.excerpt,
        canonical: url,
        type: "article",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: item.title,
          description: item.excerpt,
          datePublished: item.date,
          dateModified: item.date,
          inLanguage: "nl-NL",
          articleSection: item.category,
          keywords: item.tag,
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          url,
          author: { "@type": "Organization", name: "Toms Ambitie", url: "https://www.toms-ambitie.nl/" },
          publisher: {
            "@type": "Organization",
            name: "Toms Ambitie",
            url: "https://www.toms-ambitie.nl/",
            logo: { "@type": "ImageObject", url: "https://www.toms-ambitie.nl/favicon.png" },
          },
        },
      });
    } else {
      applySEO({
        title: "Bericht niet gevonden. Toms Ambitie",
        description: "Dit nieuwsbericht bestaat niet (meer).",
        noindex: true,
      });
    }
  }, [item]);

  if (!item) {
    return (
      <main className="min-h-screen bg-paper">
        <Navbar />
        <section className="pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-[800px] mx-auto px-6 md:px-10 text-center">
            <p className="stag text-ink/65 mb-4">404 — Nieuws</p>
            <h1 className="font-display text-ink text-4xl md:text-6xl leading-[0.95] mb-6">
              BERICHT NIET
              <br />
              <span className="text-orange">GEVONDEN</span>.
            </h1>
            <p className="text-ink/75 text-lg mb-8">
              Het bericht dat je zoekt bestaat niet of is verplaatst.
            </p>
            <Link
              to="/nieuws"
              className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 font-mono text-xs uppercase tracking-[0.12em] hover:bg-orange hover:text-ink transition-colors duration-200"
            >
              ← Terug naar nieuws
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  // Vorige / volgende navigatie. alleen tussen reeds gepubliceerde berichten.
  const list = publishedNews();
  const idx = list.findIndex((n) => n.slug === item.slug);
  const prev = idx > 0 ? list[idx - 1] : null;
  const next = idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null;

  return (
    <main className="min-h-screen bg-paper">
      <Navbar />

      <article>
        <header className="bg-ink pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="max-w-[820px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 flex-wrap mb-6">
              <span className="inline-flex items-center gap-2 bg-volt text-ink px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em]">
                {item.category}
              </span>
              <time
                dateTime={item.date}
                className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper/75"
              >
                {formatNewsDate(item.date)}
              </time>
              {item.tag && (
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-orange">
                  → {item.tag}
                </span>
              )}
            </div>
            <h1 className="font-display text-paper text-4xl md:text-6xl leading-[0.95] tracking-wide">
              {item.title}
            </h1>
            <p className="text-paper/85 text-lg md:text-xl leading-relaxed mt-6">
              {item.excerpt}
            </p>
          </div>
        </header>

        <div className="bg-paper py-16 md:py-24">
          <div className="max-w-[720px] mx-auto px-6 md:px-10">
            <div className="space-y-5">
              {item.body.map((para, i) => (
                <p key={i} className="text-ink/85 text-base md:text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {item.cta && (
              <div className="mt-12 border-2 border-ink bg-paper2 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <p className="font-display text-ink text-xl md:text-2xl leading-tight tracking-wide">
                  {item.tag ? `Meer weten over ${item.tag}?` : "Meer weten?"}
                </p>
                <Link
                  to={item.cta.href}
                  className="inline-flex items-center gap-3 bg-ink text-paper px-5 py-3 font-mono text-[11px] uppercase tracking-[0.12em] hover:bg-volt hover:text-ink transition-colors duration-200 self-start md:self-auto"
                >
                  {item.cta.label} →
                </Link>
              </div>
            )}

            <div className="border-t-2 border-ink mt-14 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <Link
                to="/nieuws"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink hover:text-orange transition-colors"
              >
                ← Alle berichten
              </Link>
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 bg-ink text-paper px-5 py-3 font-mono text-[11px] uppercase tracking-[0.12em] hover:bg-orange hover:text-ink transition-colors duration-200"
              >
                Reageer of stel een vraag →
              </a>
            </div>

            {(prev || next) && (
              <nav
                aria-label="Andere berichten"
                className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-ink border-2 border-ink mt-12"
              >
                {prev ? (
                  <Link
                    to={`/nieuws/${prev.slug}`}
                    className="bg-paper2 p-5 md:p-6 hover:bg-volt transition-colors group"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/65 mb-2">
                      ← Nieuwer
                    </p>
                    <p className="font-display text-ink text-lg leading-tight">
                      {prev.title}
                    </p>
                  </Link>
                ) : (
                  <div className="bg-paper2 p-5 md:p-6 opacity-40">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/65">
                      — Nieuwste
                    </p>
                  </div>
                )}
                {next ? (
                  <Link
                    to={`/nieuws/${next.slug}`}
                    className="bg-paper2 p-5 md:p-6 md:text-right hover:bg-volt transition-colors group"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/65 mb-2">
                      Ouder →
                    </p>
                    <p className="font-display text-ink text-lg leading-tight">
                      {next.title}
                    </p>
                  </Link>
                ) : (
                  <div className="bg-paper2 p-5 md:p-6 md:text-right opacity-40">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/65">
                      Oudste —
                    </p>
                  </div>
                )}
              </nav>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default NewsArticle;
