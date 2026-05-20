import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";
import { applySEO } from "@/lib/seo";

const NotFound = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  useEffect(() => {
    applySEO({
      title: "Pagina niet gevonden (404) — Toms Ambitie",
      description:
        "Deze pagina bestaat niet of is verplaatst. Bekijk onze ventures of ga terug naar de homepage van Toms Ambitie.",
      canonical: "https://www.toms-ambitie.nl/404",
      noindex: true,
    });
  }, []);

  return (
    <div ref={rootRef} style={{ background: 'var(--inkt)' }}>
      <Navbar />
      <main id="main-content">

        <section style={{ minHeight: '80vh', padding: 'clamp(120px, 20vh, 200px) 0 120px', display: 'flex', alignItems: 'flex-start' }}>
          <div className="container-wide">
            <p className="eyebrow reveal" style={{ color: 'var(--oranje)', marginBottom: 24 }}>
              404 — PAGINA NIET GEVONDEN
            </p>

            <h1 className="clip-reveal display" style={{ fontSize: 'clamp(80px, 12vw, 192px)', lineHeight: 0.88, color: 'var(--wit-warm)', marginBottom: 32 }}>
              <span>HIER STOND<br /><span style={{ color: 'var(--volt)' }}>NIKS.</span></span>
            </h1>

            <p className="lead reveal" style={{ color: 'rgba(244,241,232,0.55)', maxWidth: 480, marginBottom: 56 }}>
              Deze pagina bestaat niet. Misschien verplaatst, misschien nooit gebouwd.
              Geen zorgen, we bouwen snel genoeg.
            </p>

            <div className="reveal" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/" className="btn btn-volt">Terug naar home →</Link>
              <Link to="/ventures" className="btn-ghost" style={{ padding: '14px 32px', border: '1px solid rgba(244,241,232,0.3)', color: 'rgba(244,241,232,0.85)', fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>Bekijk ventures</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
