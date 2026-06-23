import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export const HeroV2 = () => (
  <section
    className="hero-section"
    style={{
      position: 'relative',
      minHeight: '100svh',
      background: 'var(--wit-warm)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {/* ── Content ── */}
    <div
      className="container-wide hero-v2-grid"
      style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(40px, 6vw, 96px)',
        alignItems: 'center',
        paddingTop: 'clamp(100px, 14vh, 160px)',
        paddingBottom: 'clamp(80px, 10vh, 140px)',
        width: '100%',
      }}
    >
      {/* ── Left: text ── */}
      <div>
        <motion.div {...fadeUp(0)}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 44,
            }}
          >
            <span style={{ width: 6, height: 6, background: 'var(--volt)', flexShrink: 0 }} />
            <span className="meta">VENTURE CLUB · ZWOLLE</span>
          </span>
        </motion.div>

        <motion.h1
          className="display"
          {...fadeUp(0.08)}
          style={{
            fontSize: 'clamp(56px, 8.5vw, 136px)',
            lineHeight: 0.88,
            color: 'var(--inkt)',
            letterSpacing: '-0.015em',
          }}
        >
          We bouwen wat<br />we zelf missen.
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          style={{
            marginTop: 36,
            fontSize: 'clamp(16px, 1.2vw, 19px)',
            lineHeight: 1.55,
            color: 'var(--inkt-60)',
            maxWidth: 400,
            letterSpacing: '-0.005em',
          }}
        >
          Van frustratie naar platform. Drie ventures in eigen eigendom. Open voor de mensen die willen meebouwen.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          style={{
            display: 'flex',
            gap: 20,
            marginTop: 52,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link to="/ventures" className="btn btn-volt">
            Bekijk ventures →
          </Link>
          <Link
            to="/meebouwen"
            className="btn-link"
            style={{ color: 'var(--inkt-60)', borderColor: 'var(--inkt-20)' }}
          >
            Bouw mee
          </Link>
        </motion.div>
      </div>

      {/* ── Right: photo ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.05, ease }}
        style={{
          position: 'relative',
          aspectRatio: '3 / 4',
          overflow: 'hidden',
        }}
      >
        <img
          src="/photos/tom-founder-01.webp"
          srcSet="/photos/tom-founder-01-768.webp 768w, /photos/tom-founder-01-1024.webp 1024w, /photos/tom-founder-01.webp 1536w"
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Tom Mulder, founder Toms Ambitie"
          fetchpriority="high"
          decoding="sync"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '60% 8%',
            display: 'block',
          }}
        />
        {/* Caption */}
        <div
          style={{
            position: 'absolute',
            bottom: 16,
            left: 20,
            fontFamily: 'var(--mono)',
            fontSize: 9,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--inkt-40)',
          }}
        >
          TOM MULDER · FOUNDER
        </div>
      </motion.div>
    </div>

    {/* ── Bottom border — transitions into next section ── */}
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 1,
        background: 'var(--inkt-08)',
      }}
    />
  </section>
);
