import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { publishedNews, formatNewsDate, type NewsCategory, type NewsItem } from "@/data/news";
import { applySEO } from "@/lib/seo";
import { ScrollReveal } from "@/components/ScrollReveal";

/* ─── Helpers ───────────────────────────────────────────────────────── */

const FILTERS = ["ALLE", "VENTURES", "BOUWEN", "STRATEGIE", "AI"] as const;
type Filter = (typeof FILTERS)[number];

const mapToFilter = (c: NewsCategory): Exclude<Filter, "ALLE"> => {
  switch (c) {
    case "Venture update":
    case "Nieuw project":
      return "VENTURES";
    case "Past project":
    case "Algemeen":
      return "BOUWEN";
    case "Manifest":
      return "STRATEGIE";
    default:
      return "BOUWEN";
  }
};

const readTime = (item: NewsItem): number => {
  const words = (item.excerpt + " " + item.body.join(" ")).split(/\s+/).length;
  return Math.max(2, Math.round(words / 220));
};

// Category accent colours
const accentFor = (c: NewsCategory): string => {
  switch (c) {
    case "Venture update": return "#00DC93";
    case "Nieuw project": return "#C8F000";
    case "Past project": return "#FFAA00";
    case "Manifest": return "#CC007E";
    default: return "#C8F000";
  }
};

// Placeholder gradient bg for article cards (based on category)
const gradientFor = (c: NewsCategory): string => {
  switch (c) {
    case "Venture update": return "linear-gradient(135deg, #0A1820 0%, #0D2318 100%)";
    case "Nieuw project": return "linear-gradient(135deg, #1A2010 0%, #243018 100%)";
    case "Past project": return "linear-gradient(135deg, #1A1408 0%, #201A08 100%)";
    case "Manifest": return "linear-gradient(135deg, #1A0010 0%, #200018 100%)";
    default: return "linear-gradient(135deg, #111110 0%, #1A1A18 100%)";
  }
};

/* ─── Page ──────────────────────────────────────────────────────────── */

const News = () => {
  const [filter, setFilter] = useState<Filter>("ALLE");

  useEffect(() => {
    applySEO({
      title: "Werknotities. Toms Ambitie",
      description:
        "Geen contentkalender. Wel origin stories, venture updates, observaties en lessen uit het bouwen.",
      canonical: "https://www.toms-ambitie.nl/nieuws",
    });
  }, []);

  const all = useMemo(() => publishedNews(), []);
  const featured = useMemo(() => all[0], [all]);
  const rest = useMemo(() => all.filter((n) => n.slug !== featured?.slug), [all, featured]);

  const filtered = useMemo(() => {
    if (filter === "ALLE") return rest;
    return rest.filter((n) => mapToFilter(n.category) === filter);
  }, [rest, filter]);

  return (
    <main style={{ minHeight: "100vh", background: "#F4F1E8" }}>
      <Navbar />

      {/* ── HERO — light ─────────────────────────────────────── */}
      <section style={{ background: "#F4F1E8", paddingTop: 64 }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "80px 32px 48px" }}>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(80px, 12vw, 200px)",
              lineHeight: 0.85,
              color: "#0E0E0C",
              marginBottom: 24,
            }}
          >
            WERKNOTITIES.
          </h1>
          <p
            className="font-sans"
            style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(14,14,12,0.6)", maxWidth: 560, marginBottom: 40 }}
          >
            Geen contentkalender. Wel notities over ventures, wat werkt en wat niet,
            altijd tijdens het bouwen. Geen spam.
          </p>

          {/* Filter pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="font-mono uppercase"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    padding: "8px 16px",
                    background: active ? "#0E0E0C" : "transparent",
                    color: active ? "#C8F000" : "#0E0E0C",
                    border: `1.5px solid ${active ? "#0E0E0C" : "rgba(14,14,12,0.2)"}`,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ─────────────────────────────────── */}
      {featured && (
        <section style={{ padding: "0 0 2px" }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
            <Link
              to={`/nieuws/${featured.slug}`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                textDecoration: "none",
                background: "#0E0E0C",
                borderTop: `4px solid ${accentFor(featured.category)}`,
              }}
              className="featured-article-grid"
            >
              {/* Left: image/visual placeholder */}
              <div
                style={{
                  background: gradientFor(featured.category),
                  minHeight: 360,
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "32px",
                }}
              >
                <div>
                  <div
                    className="font-mono uppercase"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      color: accentFor(featured.category),
                      marginBottom: 12,
                      background: "rgba(0,0,0,0.5)",
                      display: "inline-block",
                      padding: "4px 10px",
                    }}
                  >
                    {featured.category}
                  </div>
                  <div
                    className="font-display"
                    style={{ fontSize: 48, lineHeight: 0.9, color: "rgba(255,255,255,0.08)" }}
                  >
                    FEATURED
                  </div>
                </div>
              </div>

              {/* Right: content */}
              <div style={{ padding: "48px 48px 48px 40px", display: "flex", flexDirection: "column" }}>
                <div
                  className="font-mono uppercase inline-flex items-center gap-2"
                  style={{ fontSize: 10, color: accentFor(featured.category), letterSpacing: "0.14em", marginBottom: 24 }}
                >
                  <span style={{ width: 6, height: 6, background: accentFor(featured.category), display: "inline-block" }} />
                  {featured.category.toUpperCase()} · {readTime(featured)} MIN LEZEN
                </div>

                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(28px, 3vw, 44px)",
                    lineHeight: 0.95,
                    color: "#F4F1E8",
                    marginBottom: 20,
                    flex: 1,
                  }}
                >
                  {featured.title.toUpperCase()}
                </h2>

                <p
                  className="font-sans"
                  style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.55)", marginBottom: 32, maxWidth: 480 }}
                >
                  {featured.excerpt}
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    className="font-mono uppercase"
                    style={{ fontSize: 11, letterSpacing: "0.12em", color: accentFor(featured.category) }}
                  >
                    LEES MEER →
                  </span>
                  <time
                    dateTime={featured.date}
                    className="font-mono"
                    style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}
                  >
                    {formatNewsDate(featured.date)}
                  </time>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── ARTICLE GRID ─────────────────────────────────────── */}
      <section style={{ background: "#F4F1E8", padding: "64px 0 120px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
          {filtered.length === 0 ? (
            <p className="font-mono uppercase" style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(14,14,12,0.4)" }}>
              Nog geen entries in deze categorie.
            </p>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 2, background: "#C0BDB0" }}>
              {filtered.map((item) => (
                <ScrollReveal key={item.slug}>
                  <Link
                    to={`/nieuws/${item.slug}`}
                    style={{ display: "block", textDecoration: "none", background: "#FBFAF6" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#FFFFFF"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#FBFAF6"; }}
                  >
                    {/* Card image area */}
                    <div
                      style={{
                        background: gradientFor(item.category),
                        height: 180,
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "20px 24px",
                        borderTop: `3px solid ${accentFor(item.category)}`,
                      }}
                    >
                      <div
                        className="font-mono uppercase"
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.14em",
                          color: accentFor(item.category),
                          background: "rgba(0,0,0,0.5)",
                          padding: "3px 8px",
                          display: "inline-block",
                        }}
                      >
                        {item.category}
                      </div>
                    </div>

                    {/* Card content */}
                    <div style={{ padding: "24px 24px 28px" }}>
                      <h3
                        className="font-display"
                        style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 0.95, color: "#0E0E0C", marginBottom: 12 }}
                      >
                        {item.title.toUpperCase()}
                      </h3>
                      <p
                        className="font-sans"
                        style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(14,14,12,0.6)", marginBottom: 16 }}
                      >
                        {item.excerpt.slice(0, 120)}{item.excerpt.length > 120 ? "…" : ""}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span className="font-mono" style={{ fontSize: 9, color: "rgba(14,14,12,0.4)", letterSpacing: "0.1em" }}>
                          Tom Mulder · {formatNewsDate(item.date)}
                        </span>
                        <span style={{ marginLeft: "auto" }}>
                          <span className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: "0.12em", color: accentFor(item.category) }}>
                            {readTime(item)} min →
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

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
          className="news-newsletter-grid"
        >
          <div>
            <p
              className="font-mono uppercase"
              style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}
            >
              — Werknotities
            </p>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 0.9, color: "#F4F1E8", marginBottom: 8 }}
            >
              LEES MEE TERWIJL
            </h2>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 0.9, color: "rgba(255,255,255,0.25)" }}
            >
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

/* ─── Newsletter inline form ────────────────────────────────────────── */

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
    return (
      <div className="font-sans" style={{ fontSize: 18, color: "#C8F000" }}>
        Je leest mee. Welkom.
      </div>
    );
  }

  return (
    <div>
      <p className="font-sans" style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginBottom: 24, maxWidth: 400, lineHeight: 1.6 }}>
        Maandelijkse notities over ventures en alles ertussen. Geen spam. Geen newsletter.
      </p>
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
    </div>
  );
};

export default News;
