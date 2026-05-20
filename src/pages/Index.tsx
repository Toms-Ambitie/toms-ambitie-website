import { useEffect, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Ticker } from '@/components/Ticker';
import { StatsBar } from '@/components/StatsBar';
import { VenturesGrid } from '@/components/VenturesGrid';
import { VsTraditional } from '@/components/VsTraditional';
import { WerkwijzeTeaser } from '@/components/WerkwijzeTeaser';
import { Manifesto } from '@/components/Manifesto';
import { TeamTeaser } from '@/components/Team';
import { MeedoenCTA } from '@/components/MeedoenCTA';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';
import { applySEO } from '@/lib/seo';

const TICKER_ITEMS = [
  '4 actieve ventures',
  'Post Pilot · marketing AI',
  'Pactly · legal SaaS',
  'OAK Marketing · groei-MKB',
  'Plug and Power · energy tech',
  'AI-first sinds 2023',
  'Zwolle, NL',
];

const Index = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  useEffect(() => {
    applySEO({
      title: 'Toms Ambitie. Venture Club',
      description:
        'We bouwen wat we zelf missen. Van probleem naar platform in maximaal 6 weken. Doe mee als investeerder, partner of ideebringer.',
      canonical: 'https://www.toms-ambitie.nl/',
    });
  }, []);

  return (
    <div ref={rootRef} style={{ background: 'var(--wit-warm)' }}>
      <Navbar />
      <main id="main-content">
        {/* ═══ HERO ═══════════════════════════════════════════════ */}
        <Hero />

        {/* ═══ TICKER (in-flow, between hero and stats) ════════════ */}
        <Ticker items={TICKER_ITEMS} />

        {/* ═══ STATS ══════════════════════════════════════════════ */}
        <StatsBar />

        {/* ═══ VENTURES ═══════════════════════════════════════════ */}
        <VenturesGrid />

        {/* ═══ COMPARISON ═════════════════════════════════════════ */}
        <VsTraditional />

        {/* ═══ HOW WE BUILD ═══════════════════════════════════════ */}
        <WerkwijzeTeaser />

        {/* ═══ MANIFESTO PILLARS ══════════════════════════════════ */}
        <Manifesto />

        {/* ═══ TEAM TEASER ════════════════════════════════════════ */}
        <TeamTeaser />

        {/* ═══ CTA ════════════════════════════════════════════════ */}
        <MeedoenCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
