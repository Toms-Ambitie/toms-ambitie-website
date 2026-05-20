import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getNewsBySlug, formatNewsDate, publishedNews, type NewsItem } from "@/data/news";
import { applySEO } from "@/lib/seo";

/* ─── Helpers ───────────────────────────────────────────────────────── */

const accentFor = (category: string): string => {
  switch (category) {
    case "Venture update": return "#00DC93";
    case "Nieuw project": return "#C8F000";
    case "Past project": return "#FFAA00";
    case "Manifest": return "#CC007E";
    default: return "#C8F000";
  }
};

const gradientFor = (category: string): string => {
  switch (category) {
    case "Venture update": return "linear-gradient(135deg, #0A1820 0%, #0D2318 100%)";
    case "Nieuw project": return "linear-gradient(135deg, #1A2010 0%, #243018 100%)";
    case "Past project": return "linear-gradient(135deg, #1A1408 0%, #201A08 100%)";
    case "Manifest": return "linear-gradient(135deg, #1A0010 0%, #200018 100%)";
    default: return "linear-gradient(135deg, #111110 0%, #1A1A18 100%)";
  }
};

/* ─── Newsletter inline ─────────────────────────────────────────────── */

const NewsletterInline = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Nieuwsbrief", email, interest: "nieuws", message: "Nieuwsbrief aanmelding" }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return <div className="font-sans" style={{ fontSize: 16, color: "#C8F000" }}>Je leest mee. Welkom.</div>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 2 }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="naam@bedrijf.nl"
        required
        style={{
          flex: 1,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "#F4F1E8",
          padding: "14px 16px",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 15,
          borderRadius: 0,
          outline: "none",
        }}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="font-mono font-bold uppercase hover:bg-[#DCF55E] transition-colors"
        style={{
          background: "#C8F000",
          color: "#0E0E0C",
          fontSize: 11,
          letterSpacing: "0.12em",
          padding: "14px 20px",
          border: "none",
          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        {status === "sending" ? "..." : "INSCHRIJVEN →"}
      </button>
    </form>
  );
};

/* ─── Related article card ──────────────────────────────────────────── */

const RelatedCard = ({ item }: { item: NewsItem }) => (
  <Link
    to={`/nieuws/${item.slug}`}
    style={{ display: "block", textDecoration: "none", background: "#FBFAF6" }}
    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#FFFFFF"; }}
    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#FBFAF6"; }}
  >
    <div
      style={{
        background: gradientFor(item.category),
        height: 140,
        borderTop: `3px solid ${accentFor(item.category)}`,
        display: "flex",
        alignItems: "flex-end",
        padding: "16px",
      }}
    >
      <span
        className="font-mono uppercase"
        style={{ fontSize: 9, letterSpacing: "0.12em", color: accentFor(item.category), background: "rgba(0,0,0,0.5)", padding: "2px 6px" }}
      >
        {item.category}
      </span>
    </div>
    <div style={{ padding: "20px" }}>
      <h3
        className="font-display"
        style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 0.95, color: "#0E0E0C", marginBottom: 8 }}
      >
        {item.title.toUpperCase()}
      </h3>
      <div className="font-mono" style={{ fontSize: 9, color: "rgba(14,14,12,0.4)", letterSpacing: "0.1em", marginTop: 12 }}>
        Tom Mulder · {formatNewsDate(item.date)}
      </div>
    </div>
  </Link>
);

/* ─── Page ──────────────────────────────────────────────────────────── */

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
          author: { "@type": "Person", name: "Tom Mulder" },
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
      <main style={{ minHeight: "100vh", background: "#F4F1E8" }}>
        <Navbar />
        <section style={{ paddingTop: 120, paddingBottom: 80 }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
            <h1 className="font-display" style={{ fontSize: "clamp(48px, 8vw, 96px)", color: "#0E0E0C", lineHeight: 0.9, marginBottom: 24 }}>
              BERICHT NIET<br /><span style={{ color: "#C8F000" }}>GEVONDEN.</span>
            </h1>
            <Link
              to="/nieuws"
              className="font-mono uppercase inline-flex items-center"
              style={{ fontSize: 11, letterSpacing: "0.12em", color: "#0E0E0C", textDecoration: "none", borderBottom: "2px solid #C8F000", paddingBottom: 2 }}
            >
              ← Terug naar nieuws
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const list = publishedNews();
  const idx = list.findIndex((n) => n.slug === item.slug);
  const related = list.filter((n) => n.slug !== item.slug).slice(0, 3);
  const accent = accentFor(item.category);

  return (
    <main style={{ minHeight: "100vh", background: "#F4F1E8" }}>
      <Navbar />

      <article>
        {/* ── HERO — light, large title ─────────────────────── */}
        <header style={{ background: "#F4F1E8", paddingTop: 64 }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px 48px" }}>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 40 }}>
              <Link
                to="/nieuws"
                className="font-mono uppercase"
                style={{ fontSize: 10, letterSpacing: "0.14em", color: "rgba(14,14,12,0.45)", textDecoration: "none" }}
              >
                Nieuws
              </Link>
              <span style={{ color: "rgba(14,14,12,0.3)", fontSize: 10 }}>›</span>
              <span
                className="font-mono uppercase"
                style={{ fontSize: 10, letterSpacing: "0.14em", color: accent }}
              >
                {item.category}
              </span>
            </div>

            <h1
              className="font-display"
              style={{
                fontSize: "clamp(48px, 7vw, 112px)",
                lineHeight: 0.88,
                color: "#0E0E0C",
                marginBottom: 32,
              }}
            >
              {item.title.toUpperCase()}
            </h1>

            {/* Author bar */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 0 }}>
              <div style={{ width: 32, height: 32, background: "#0E0E0C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#C8F000", fontSize: 14, fontWeight: "bold" }}>T</span>
              </div>
              <div>
                <div className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: "0.12em", color: "#0E0E0C" }}>
                  Tom Mulder
                </div>
                <time dateTime={item.date} className="font-mono" style={{ fontSize: 9, color: "rgba(14,14,12,0.45)", letterSpacing: "0.1em" }}>
                  {formatNewsDate(item.date)}
                </time>
              </div>
            </div>
          </div>
        </header>

        {/* Featured image placeholder */}
        <div
          style={{
            background: gradientFor(item.category),
            borderTop: `4px solid ${accent}`,
            height: 360,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="font-display" style={{ fontSize: 80, color: "rgba(255,255,255,0.05)", userSelect: "none" }}>
            TOMS AMBITIE
          </div>
        </div>

        {/* ── BODY ─────────────────────────────────────────── */}
        <div style={{ background: "#FBFAF6", padding: "72px 0" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 32px" }}>
            <p className="font-sans" style={{ fontSize: 18, lineHeight: 1.75, color: "rgba(14,14,12,0.7)", marginBottom: 32, fontWeight: 500 }}>
              {item.excerpt}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {item.body.map((para, i) => {
                // Detect if this looks like a heading (short, no period at end, all caps or starts uppercase)
                const isHeading = para.length < 60 && !para.endsWith(".") && para === para.toUpperCase();
                // Detect pull quote (starts and ends with quotes)
                const isQuote = para.startsWith('"') && para.endsWith('"');

                if (isHeading) {
                  return (
                    <h2
                      key={i}
                      className="font-display"
                      style={{ fontSize: "clamp(24px, 3vw, 40px)", lineHeight: 0.95, color: "#0E0E0C", marginTop: 16 }}
                    >
                      {para}
                    </h2>
                  );
                }

                if (isQuote) {
                  return (
                    <blockquote
                      key={i}
                      style={{
                        borderLeft: `4px solid ${accent}`,
                        paddingLeft: 24,
                        margin: "16px 0",
                      }}
                    >
                      <p
                        className="font-display"
                        style={{ fontSize: "clamp(20px, 2.5vw, 32px)", lineHeight: 1.05, color: "#0E0E0C" }}
                      >
                        {para}
                      </p>
                    </blockquote>
                  );
                }

                return (
                  <p
                    key={i}
                    className="font-sans"
                    style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(14,14,12,0.75)" }}
                  >
                    {para}
                  </p>
                );
              })}
            </div>

            {/* CTA block */}
            {item.cta && (
              <div
                style={{
                  marginTop: 48,
                  background: "#0E0E0C",
                  padding: "32px",
                  borderTop: `4px solid ${accent}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 24,
                  flexWrap: "wrap",
                }}
              >
                <div className="font-display" style={{ fontSize: "clamp(20px, 2.5vw, 32px)", color: "#F4F1E8", lineHeight: 1 }}>
                  {item.tag ? `MEER WETEN OVER ${item.tag.toUpperCase()}?` : "MEER WETEN?"}
                </div>
                <Link
                  to={item.cta.href}
                  className="font-mono font-bold uppercase inline-flex items-center hover:bg-[#DCF55E] transition-colors"
                  style={{
                    background: "#C8F000",
                    color: "#0E0E0C",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    padding: "12px 24px",
                    textDecoration: "none",
                  }}
                >
                  {item.cta.label} →
                </Link>
              </div>
            )}

            {/* Back nav */}
            <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(14,14,12,0.1)" }}>
              <Link
                to="/nieuws"
                className="font-mono uppercase inline-flex items-center"
                style={{ fontSize: 11, letterSpacing: "0.12em", color: "rgba(14,14,12,0.5)", textDecoration: "none" }}
              >
                ← Alle werknotities
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* ── LEES VERDER ──────────────────────────────────────── */}
      {related.length > 0 && (
        <section style={{ background: "#F4F1E8", padding: "96px 0" }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(56px, 8vw, 120px)", lineHeight: 0.85, color: "#0E0E0C", marginBottom: 48 }}
            >
              LEES VERDER.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2, background: "#C0BDB0" }}>
              {related.map((r) => (
                <RelatedCard key={r.slug} item={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── NEWSLETTER ───────────────────────────────────────── */}
      <section style={{ background: "#0E0E0C", padding: "96px 0" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="article-newsletter-grid"
        >
          <div>
            <h2 className="font-display" style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 0.9, color: "#F4F1E8", marginBottom: 8 }}>
              LEES MEE TERWIJL
            </h2>
            <h2 className="font-display" style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 0.9, color: "rgba(255,255,255,0.25)" }}>
              WE BOUWEN.
            </h2>
          </div>
          <NewsletterInline />
        </div>
      </section>

      {/* ── VENTURE STRIP ────────────────────────────────────── */}
      <section style={{ background: "#0E0E0C", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "48px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 2 }}>
            {[
              { name: "Post Pilot", slug: "post-pilot", accent: "#00DC93", url: "postpilotapp.nl" },
              { name: "Pactly", slug: "pactly", accent: "#CC007E", url: "pactly.nl" },
              { name: "OAK Marketing", slug: "oak-marketing", accent: "#1B3A8A", url: "oakmarketing.nl" },
              { name: "Plug and Power", slug: "plug-and-power", accent: "#FFAA00", url: "plugandpower.nl" },
            ].map((v) => (
              <Link
                key={v.slug}
                to={`/ventures/${v.slug}`}
                style={{ display: "block", textDecoration: "none", padding: "24px 0" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ width: 6, height: 6, background: v.accent, display: "inline-block" }} />
                  <span className="font-mono uppercase" style={{ fontSize: 11, color: "#F4F1E8", letterSpacing: "0.1em" }}>
                    {v.name}
                  </span>
                </div>
                <div className="font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em", paddingLeft: 14 }}>
                  {v.url}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NewsArticle;
