import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { FixedTicker } from "@/components/FixedTicker";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { VenturesGrid } from "@/components/VenturesGrid";
import { VsTraditional } from "@/components/VsTraditional";
import { WerkwijzeTeaser } from "@/components/WerkwijzeTeaser";
import { PrinciplesSection } from "@/components/PrinciplesSection";
import { TeamSection } from "@/components/TeamSection";
import { ProblemCTA } from "@/components/ProblemCTA";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { applySEO } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    applySEO({
      title: "Toms Ambitie. Venture Club",
      description:
        "We bouwen wat we zelf missen. Van probleem naar platform in maximaal 6 weken. Doe mee als investeerder, partner of ideebringer.",
      canonical: "https://www.toms-ambitie.nl/",
    });
  }, []);

  return (
    <>
      <FixedTicker />
      {/* pb-9 = 36px — keeps footer above the fixed ticker */}
      <main className="min-h-screen pb-9" style={{ background: "#FBFAF6" }}>
        <Navbar />
        {/* cream hero */}
        <Hero />
        {/* stats row */}
        <StatsBar />
        {/* ventures grid */}
        <VenturesGrid />
        {/* dark — vs traditional */}
        <VsTraditional />
        {/* cream — 3-column process */}
        <WerkwijzeTeaser />
        {/* dark — 4 principles */}
        <PrinciplesSection />
        {/* cream — team */}
        <TeamSection />
        {/* cream — problem CTA */}
        <ProblemCTA />
        {/* dark — newsletter */}
        <NewsletterSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
