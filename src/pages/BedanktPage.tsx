import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { applySEO } from "@/lib/seo";

const BedanktPage = () => {
  useEffect(() => {
    applySEO({
      title: "Bedankt — Toms Ambitie",
      description: "Je bericht is verzonden. We nemen zo snel mogelijk contact met je op.",
      canonical: "https://www.toms-ambitie.nl/bedankt",
      noindex: true,
    });
  }, []);

  return (
    <main className="min-h-screen" style={{ background: "#0E0E0C" }}>
      <Navbar />
      <div className="flex flex-col items-start px-5 sm:px-10 max-w-[1200px] mx-auto" style={{ minHeight: "80vh", paddingTop: "clamp(120px, 20vh, 200px)" }}>
        <p className="font-mono uppercase typo-label text-volt" style={{ marginBottom: 24, letterSpacing: "0.14em" }}>
          VERZONDEN ✓
        </p>

        <h1 className="font-display text-paper" style={{ fontSize: "clamp(3rem, 10vw, 8rem)", lineHeight: 0.9, marginBottom: 24 }}>
          TOP,
          <br />
          <span className="text-volt">ONTVANGEN.</span>
        </h1>

        <p className="font-sans typo-md" style={{ color: "rgba(255,255,255,0.55)", maxWidth: 480, lineHeight: "var(--leading-normal)", marginBottom: 48 }}>
          We hebben je bericht binnen. Verwacht binnen 2 werkdagen een reactie. Meestal sneller.
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

export default BedanktPage;
