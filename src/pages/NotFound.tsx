import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { applySEO } from "@/lib/seo";

const NotFound = () => {
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
    <main className="min-h-screen" style={{ background: "#0E0E0C" }}>
      <Navbar />
      <div className="flex flex-col items-start px-5 sm:px-10 max-w-[1200px] mx-auto" style={{ minHeight: "80vh", paddingTop: "clamp(120px, 20vh, 200px)" }}>
        <p className="font-mono uppercase typo-label" style={{ color: "hsl(var(--orange))", marginBottom: 24, letterSpacing: "0.14em" }}>
          404 — PAGINA NIET GEVONDEN
        </p>

        <h1 className="font-display text-paper" style={{ fontSize: "clamp(3rem, 10vw, 8rem)", lineHeight: 0.9, marginBottom: 24 }}>
          HIER STOND
          <br />
          <span className="text-volt">NIKS.</span>
        </h1>

        <p className="font-sans typo-md" style={{ color: "rgba(255,255,255,0.55)", maxWidth: 480, lineHeight: "var(--leading-normal)", marginBottom: 48 }}>
          Deze pagina bestaat niet. Misschien verplaatst, misschien nooit gebouwd.
          Geen zorgen, we bouwen snel genoeg.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/"
            className="font-mono uppercase font-bold transition-colors typo-btn"
            style={{ background: "#C8F000", color: "#0E0E0C", padding: "14px 32px", textDecoration: "none" }}
          >
            Terug naar home →
          </Link>
          <Link
            to="/ventures"
            className="font-mono uppercase typo-btn transition-colors hover:text-volt"
            style={{ border: "1.5px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85)", padding: "14px 32px", textDecoration: "none" }}
          >
            Bekijk ventures
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default NotFound;
