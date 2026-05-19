import founderImg from "@/assets/founder.webp";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";

export const TomMulder = () => {
  return (
    <section className="py-16 sm:py-20" style={{ background: "#C8F000" }}>
      <div
        className="grid grid-cols-1 lg:grid-cols-[40%_60%] items-center max-w-[1200px] mx-auto px-5 sm:px-10 gap-10 lg:gap-20"
      >
        <ScrollReveal>
          <img
            src={founderImg}
            alt="Tom Mulder. Oprichter Toms Ambitie"
            loading="lazy"
            style={{ width: "100%", maxWidth: 340, aspectRatio: "3/4", objectFit: "cover", objectPosition: "top", border: "2px solid #0E0E0C", filter: "grayscale(100%)" }}
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="font-mono uppercase flex items-center typo-label typo-caption-volt mb-4" style={{ gap: 5 }}>
            <span style={{ width: 14, height: 1, background: "#0E0E0C", display: "inline-block" }} />
            De club achter de ventures
          </div>
          <h2 className="font-display typo-heading-volt mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "var(--leading-tight)" }}>
            IDEEËN ZIJN PAS HET BEGIN.
          </h2>
          <div style={{ borderLeft: "3px solid #0E0E0C", paddingLeft: "1.25rem" }} className="mb-5">
            <p className="font-sans italic typo-md typo-body-volt" style={{ lineHeight: "var(--leading-loose)" }}>
              Een idee is goedkoop. Het bouwen, testen, valideren en doorzetten. Daar zit het echte werk.
              <br /><br />
              We starten met een herkenbaar probleem, bouwen snel een MVP, valideren met echte gebruikers, en schalen alleen wat werkt. Wat niet werkt, durven we ook te stoppen.
              <br /><br />
              Toms Ambitie is geen one-man-show. Het is een venture club: ondernemers, specialisten en investeerders die samen sneller bouwen dan in hun eentje kan.
            </p>
            <p className="font-sans typo-btn typo-caption-volt mt-3">
              — De ventureclub van Toms Ambitie
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2">
            <Link to="/hoe-we-bouwen" className="font-mono inline-flex items-center typo-sm typo-heading-volt min-h-[44px]" style={{ borderBottom: "1px solid #0E0E0C", textDecoration: "none" }}>
              Hoe we bouwen →
            </Link>
            <Link to="/over-ons" className="font-mono inline-flex items-center typo-sm typo-heading-volt min-h-[44px]" style={{ borderBottom: "1px solid rgba(14,14,12,0.4)", textDecoration: "none" }}>
              Over Tom →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};