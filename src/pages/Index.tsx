import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VenturesGrid } from "@/components/VenturesGrid";
import { OriginStories } from "@/components/OriginStories";
import { VsTraditional } from "@/components/VsTraditional";
import { WerkwijzeTeaser } from "@/components/WerkwijzeTeaser";
import { Manifesto } from "@/components/Manifesto";
import { MeedoenCTA } from "@/components/MeedoenCTA";
import { Footer } from "@/components/Footer";
import { applySEO } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    applySEO({
      title: "Toms Ambitie. Venture Club",
      description:
        "We bouwen wat we zelf missen. Van idee naar venture in maximaal 6 weken. Doe mee als investeerder, partner of ideebringer.",
      canonical: "https://www.toms-ambitie.nl/",
    });
  }, []);

  return (
    <main className="min-h-screen" style={{ background: "#FBFAF6" }}>
      <Navbar />
      {/* papier → wit warm */}
      <Hero />
      {/* wit warm → papier */}
      <VenturesGrid />
      {/* papier → inkt */}
      <OriginStories />
      {/* inkt → inkt */}
      <VsTraditional />
      {/* inkt → papier */}
      <WerkwijzeTeaser />
      {/* papier → inkt */}
      <Manifesto
        kicker="— Manifest"
        statement="WIJ ZIJN ALTIJD ZELF DE TESTGROEP."
        attribution="Als wij het intern niet gebruiken, bouwen we niet verder."
        theme="light"
        highlightIndex={5}
      />
      {/* inkt → inkt */}
      <MeedoenCTA />
      <Footer />
    </main>
  );
};

export default Index;
