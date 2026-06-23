import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { applySEO } from "@/lib/seo";
import { useEffect } from "react";
import { getVentureBySlug, getVentureStatusMeta } from "@/data/ventures";
import { ArrowUpRight, Mail, ArrowLeft } from "lucide-react";

const isExternalHref = (href: string) => /^https?:\/\//i.test(href) || href.startsWith("mailto:");

const renderParagraphs = (text: string, className: string, style?: React.CSSProperties) =>
  text
    .split(/\n\n+/)
    .map((p, i) => (
      <p key={i} className={className} style={{ ...style, marginTop: i === 0 ? 0 : "1.25rem" }}>
        {p}
      </p>
    ));

type CtaLike = { label: string; href: string; external?: boolean };

const CtaButton = ({
  cta,
  variant = "primary",
}: {
  cta: CtaLike;
  variant?: "primary" | "secondary";
}) => {
  const external = cta.external ?? isExternalHref(cta.href);
  const isMail = cta.href.startsWith("mailto:");
  const internal = !external && cta.href.startsWith("/");
  const Icon = external && !isMail ? ArrowUpRight : isMail ? Mail : null;

  const baseClass =
    "inline-flex items-center justify-center gap-2 font-mono uppercase typo-btn transition-all min-h-[48px]";
  const styleByVariant: React.CSSProperties =
    variant === "primary"
      ? { background: "#C8F000", color: "#0E0E0C", padding: "12px 24px", textDecoration: "none", fontWeight: 700 }
      : { border: "1.5px solid rgba(255,255,255,0.4)", color: "#F4F1E8", padding: "12px 24px", textDecoration: "none", fontWeight: 700 };

  const content = (
    <>
      {cta.label}
      {Icon ? <Icon className="w-4 h-4" /> : null}
    </>
  );

  if (internal) {
    return (
      <Link to={cta.href} className={`${baseClass} hover:bg-white`} style={styleByVariant}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={cta.href}
      {...(external && !isMail ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${baseClass} hover:bg-white`}
      style={styleByVariant}
    >
      {content}
    </a>
  );
};

/* Per-venture SEO titles — keyword-rich, investor/co-founder angle */
const VENTURE_TITLES: Record<string, string> = {
  "post-pilot":
    "PostPilot — AI Content Platform voor LinkedIn | Toms Ambitie",
  "pactly":
    "Pactly — Grip op Vaste Lasten en Contracten | Toms Ambitie",
  "oak-marketing":
    "OAK Marketing — Hybride Marketingbureau voor Groei-MKB | Toms Ambitie",
  "plug-and-power":
    "Plug and Power — Plug-and-Play Energie-oplossingen | Toms Ambitie",
  "emmastudio":
    "Emma — AI-productfamilie voor Ondernemers | Toms Ambitie",
};

/* Per-venture meta descriptions — action-oriented, mention opportunity */
const VENTURE_DESCRIPTIONS: Record<string, string> = {
  "post-pilot":
    "PostPilot automatiseert LinkedIn-content met AI. Live SaaS-platform v2.0 met betalende gebruikers. Schrijft in jouw eigen toon. Toms Ambitie zoekt co-founders en growth-specialisten voor de volgende groeifase.",
  "pactly":
    "Pactly brengt contracten, abonnementen en vaste lasten samen op één plek. Consumer fintech in vroeg stadium vanuit Zwolle. Toms Ambitie zoekt investeerders en co-founders om Pactly groot te maken.",
  "oak-marketing":
    "OAK Marketing is het hybride marketingbureau van Toms Ambitie. AI waar het kan, mensen waar het moet. Actief en winstgevend. Interesse in samenwerking of partnership? Start een gesprek.",
  "plug-and-power":
    "Plug and Power bouwt hét e-commerce platform voor plug-and-play energie. In opbouw vanuit Zwolle. Toms Ambitie zoekt kapitaal, kennis en netwerk om dit energieventure te versnellen.",
  "emmastudio":
    "Emma is een AI-productfamilie voor ondernemers. Acht losse modules van boekhouden tot content. In ontwikkeling. Toms Ambitie zoekt co-founders en early adopters.",
};

const VentureDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const venture = slug ? getVentureBySlug(slug) : undefined;

  useEffect(() => {
    if (venture) {
      const url = `https://www.toms-ambitie.nl/ventures/${venture.slug}`;
      const title = VENTURE_TITLES[venture.slug] ?? `${venture.name} — Toms Ambitie`;
      const description = VENTURE_DESCRIPTIONS[venture.slug] ?? venture.tagline;
      applySEO({
        title,
        description,
        canonical: url,
        jsonLd: [
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            "name": title,
            "url": url,
            "description": description,
            "isPartOf": { "@id": "https://www.toms-ambitie.nl/#website" },
            "about": { "@id": "https://www.toms-ambitie.nl/#organization" },
            "author": { "@id": "https://www.toms-ambitie.nl/#tom-mulder" },
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": venture.name,
            "url": venture.url ?? url,
            "description": description,
            "parentOrganization": { "@id": "https://www.toms-ambitie.nl/#organization" },
            "founder": { "@id": "https://www.toms-ambitie.nl/#tom-mulder" },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Zwolle",
              "addressCountry": "NL",
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "hallo@toms-ambitie.nl",
              "contactType": "partnerships",
              "url": "https://www.toms-ambitie.nl/meebouwen",
            },
          },
        ],
      });
    }
  }, [venture]);

  if (!venture) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <section className="pt-40 pb-20" style={{ background: "#0E0E0C", minHeight: "60vh" }}>
          <div className="max-w-[1200px] mx-auto px-5 sm:px-10 text-center">
            <h1 className="font-display typo-heading-dark" style={{ fontSize: "3rem" }}>VENTURE NIET GEVONDEN.</h1>
            <Link to="/ventures" className="font-mono inline-flex items-center mt-8 typo-btn min-h-[48px]" style={{ color: "#C8F000", textDecoration: "none" }}>
              ← Terug naar ventures
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const status = getVentureStatusMeta(venture.slug);
  const accent = venture.identity.accent;
  const accentInk = venture.identity.accentInk;

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="page-hero pb-16 sm:pb-20" style={{ background: "#0E0E0C", borderTop: `5px solid ${accent}`, paddingTop: "calc(80px + 64px)" }}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <Link to="/ventures" className="font-mono inline-flex items-center gap-2 mb-8 typo-sm typo-caption-dark min-h-[44px]" style={{ textDecoration: "none" }}>
            <ArrowLeft className="w-3.5 h-3.5" />
            Alle ventures
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <img src={venture.logo} alt={`${venture.name} logo`} className="w-14 h-14 object-contain" loading="lazy" decoding="async" style={{ borderRadius: venture.slug === 'post-pilot' ? 8 : 0 }} />
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-[6px] h-[6px] ${status.isLive ? "animate-pulse-live" : ""}`}
                      style={{ background: status.color }}
                    />
                    <span className="font-mono uppercase typo-label" style={{ color: status.color }}>{status.label}</span>
                    <span className="font-mono uppercase typo-label" style={{ color: "rgba(255,255,255,0.35)" }}>·</span>
                    <span className="font-mono uppercase typo-label" style={{ color: accent }}>{venture.identity.vibe}</span>
                  </div>
                  <p className="font-mono uppercase typo-xs typo-caption-dark mt-1">{venture.category}</p>
                </div>
              </div>

              <h1 className="font-display typo-heading-dark mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: "var(--leading-tight)" }}>
                {venture.name}
              </h1>

              <div style={{ borderLeft: `3px solid ${accent}`, paddingLeft: "1rem" }}>
                <p className="font-sans typo-body-dark" style={{ fontSize: 18, maxWidth: 620, lineHeight: "var(--leading-normal)" }}>
                  {venture.tagline}
                </p>
              </div>

              {venture.intro && (
                <p className="font-sans typo-body-dark mt-5" style={{ fontSize: 16, maxWidth: 620, lineHeight: "var(--leading-loose)", opacity: 0.85 }}>
                  {venture.intro}
                </p>
              )}

              {venture.tags && venture.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {venture.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono uppercase typo-label"
                      style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#F4F1E8", padding: "6px 10px" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex-shrink-0 flex flex-col gap-3">
              <CtaButton cta={venture.cta} variant="primary" />
              {venture.secondaryCta && <CtaButton cta={venture.secondaryCta} variant="secondary" />}
            </div>
          </div>
        </div>
      </section>

      {/* PROOF / TRACTIE STRIP */}
      <section style={{ background: "#111110", borderTop: `1px solid ${accent}`, borderBottom: `1px solid ${accent}` }}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10 py-5 flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="font-mono uppercase typo-label" style={{ color: accent, letterSpacing: "0.18em" }}>
            Tractie ·
          </span>
          {venture.identity.proof.map((p) => (
            <span
              key={p}
              className="font-mono uppercase typo-xs typo-caption-dark inline-flex items-center gap-2"
            >
              <span className="w-[6px] h-[6px]" style={{ background: accent, display: "inline-block" }} />
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* ORIGIN */}
      <section className="py-20 sm:py-28" style={{ background: "#F4F1E8" }}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-20">
              <div>
                <p className="font-mono uppercase typo-label typo-caption mb-4">01 — Origineel probleem</p>
                <h2 className="font-display typo-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "var(--leading-tight)" }}>
                  {venture.origin.title.toUpperCase()}
                </h2>
                <div style={{ width: 48, height: 3, background: accent, marginTop: 16 }} />
              </div>
              <div>
                {renderParagraphs(
                  venture.origin.story,
                  "font-sans typo-lg typo-body",
                  { lineHeight: "var(--leading-loose)" },
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MODEL */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-20">
              <div>
                <p className="font-mono uppercase typo-label typo-caption mb-4">02 — Model</p>
                <h2 className="font-display typo-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "var(--leading-tight)" }}>
                  {venture.businessModel.title.toUpperCase()}
                </h2>
                <div style={{ width: 48, height: 3, background: accent, marginTop: 16 }} />
              </div>
              <div>
                {renderParagraphs(
                  venture.businessModel.description,
                  "font-sans typo-lg typo-body",
                  { lineHeight: "var(--leading-loose)" },
                )}
                <ul className="mt-5" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {venture.businessModel.points.map((point, i) => (
                    <li key={i} className="font-sans flex items-start gap-3 typo-md typo-body min-h-[44px] py-2" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                      <span style={{ color: accent, fontWeight: 700, fontSize: 16 }}>→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* STATUS */}
      <section className="py-20 sm:py-28" style={{ background: "#0E0E0C" }}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-20">
              <div>
                <p className="font-mono uppercase typo-label typo-muted-dark mb-4">03 — Status</p>
                <h2 className="font-display typo-heading-dark" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "var(--leading-tight)" }}>
                  {venture.currentStatus.title.toUpperCase()}
                </h2>
                <div style={{ width: 48, height: 3, background: accent, marginTop: 16 }} />
              </div>
              <div>
                {renderParagraphs(
                  venture.currentStatus.description,
                  "font-sans typo-lg typo-body-dark",
                  { lineHeight: "var(--leading-loose)" },
                )}
                <ul className="mt-5" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {venture.currentStatus.milestones.map((m, i) => (
                    <li key={i} className="font-sans flex items-start gap-3 typo-md typo-body-dark min-h-[44px] py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <span className="w-[6px] h-[6px] mt-2 flex-shrink-0" style={{ background: accent, display: "inline-block" }} />
                      {m}
                    </li>
                  ))}
                </ul>
                {venture.currentStatus.extra && (
                  <p className="font-sans typo-md typo-body-dark mt-6" style={{ lineHeight: "var(--leading-loose)" }}>
                    {venture.currentStatus.extra}
                  </p>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* VISION. uses venture accent as background */}
      <section className="py-20 sm:py-28" style={{ background: accent, color: accentInk }}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <ScrollReveal>
            <div style={{ maxWidth: 720 }}>
              <p className="font-mono uppercase typo-label mb-4" style={{ color: accentInk, opacity: 0.7 }}>04 — Visie</p>
              <h2 className="font-display mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "var(--leading-tight)", color: accentInk }}>
                {venture.vision.title.toUpperCase()}
              </h2>
              {renderParagraphs(
                venture.vision.description,
                "font-sans typo-lg",
                { lineHeight: "var(--leading-loose)", color: accentInk },
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <div style={{ height: 5, background: accent }} />
      <section className="py-16 sm:py-20" style={{ background: "#0E0E0C" }}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10 flex flex-col items-center text-center">
          <h3 className="font-display typo-heading-dark mb-5" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: "var(--leading-tight)" }}>
            {venture.ctaBlock?.title ?? `INTERESSE IN ${venture.name}?`}
          </h3>
          {venture.ctaBlock?.description && (
            <p className="font-sans typo-md typo-body-dark mb-6" style={{ maxWidth: 720, lineHeight: "var(--leading-loose)" }}>
              {venture.ctaBlock.description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            <CtaButton cta={venture.ctaBlock?.primary ?? venture.cta} variant="primary" />
            {venture.ctaBlock?.secondary ? (
              <CtaButton cta={venture.ctaBlock.secondary} variant="secondary" />
            ) : venture.secondaryCta ? (
              <CtaButton cta={venture.secondaryCta} variant="secondary" />
            ) : (
              <Link
                to="/meebouwen"
                className="inline-flex items-center justify-center font-mono uppercase typo-btn transition-colors typo-heading-dark min-h-[48px] px-7"
                style={{ border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}
              >
                Instappen in dit project
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default VentureDetailPage;
