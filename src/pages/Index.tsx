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
  'PostPilot · marketing AI',
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
      title: 'Toms Ambitie — Venture Studio Zwolle | Eigen bedrijven bouwen',
      description:
        'Venture studio in Zwolle die eigen bedrijven bouwt vanuit echte problemen. Tom Mulder zoekt co-founders, investeerders en specialisten. PostPilot, Pactly, OAK Marketing, Plug and Power, EmmaBoekt.',
      canonical: 'https://www.toms-ambitie.nl/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://www.toms-ambitie.nl/#webpage',
        'name': 'Toms Ambitie — Venture Studio Zwolle',
        'url': 'https://www.toms-ambitie.nl/',
        'description': 'Venture studio in Zwolle die eigen bedrijven bouwt vanuit echte problemen. Open voor co-founders, investeerders en specialisten.',
        'isPartOf': { '@id': 'https://www.toms-ambitie.nl/#website' },
        'about': { '@id': 'https://www.toms-ambitie.nl/#organization' },
        'author': { '@id': 'https://www.toms-ambitie.nl/#tom-mulder' },
      },
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
