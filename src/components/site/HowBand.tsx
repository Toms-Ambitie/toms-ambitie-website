import { useCallback, useEffect, useRef, useState } from "react";
import { reducedMotion } from "./motion";
import { HlInk } from "./Cta";

export const STEPS = [
  { n: "01", wk: "Week 1", title: "Probleem identificeren", body: "Elk venture begint met een probleem dat we zelf voelen, of iemand in onze directe omgeving. Geen denkbeeldige klant.", note: "eigen ervaring als validatie" },
  { n: "02", wk: "Week 1", title: "Valideren met AI", body: "Is het probleem valide? Bestaat er al iets soortgelijks? AI kijkt mee. In uren. Niet weken.", note: "concurrentie · markt · probleem" },
  { n: "03", wk: "Week 2–3", title: "Werkende demo bouwen", body: "We bouwen eerst iets simpels dat werkt. Geen features. Geen eindeloze roadmap. De oplossing moet voelbaar zijn voordat er gerekend wordt.", note: "oplossing vóór business case" },
  { n: "04", wk: "Week 3", title: "Business case maken", body: "Pas als de oplossing staat, kijken we of er een bedrijf in zit. Businessmodel, verdienmodel, marktgrootte.", note: "altijd in die volgorde" },
  { n: "05", wk: "Week 4", title: "Brand book maken", body: "Elke oplossing krijgt direct een identiteit. Logo, kleuren, toon. Zodat alles er van dag één professioneel uitziet.", note: "identiteit van dag één" },
  { n: "06", wk: "Week 4–5", title: "Eerste platform bouwen", body: "Een eerste werkende versie. Snel, functioneel, testbaar door echte gebruikers. Perfectionisme is voor later.", note: "functioneel, niet perfect" },
  { n: "07", wk: "Week 6", title: "Lanceren", body: "Live. Echte gebruikers, echte feedback, echte data. Pas daarna beslissen we of we doorgaan, opschalen of stoppen.", note: "echte gebruikers, echte data" },
];

/**
 * The seven steps. From 900px wide the section pins and the band slides sideways with the scroll;
 * below that it is a normal horizontal swipe.
 */
export function HowBand() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [maxX, setMaxX] = useState(0);
  const [prog, setProg] = useState(0);
  const [x, setX] = useState(0);
  const [vh, setVh] = useState(0);

  const layout = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const wide = window.innerWidth >= 900 && !reducedMotion() && window.innerHeight >= 620;
    setPinned(wide);
    setVh(window.innerHeight);
    setMaxX(wide ? Math.max(0, track.scrollWidth - window.innerWidth) : 0);
  }, []);

  useEffect(() => {
    layout();
    document.fonts?.ready.then(layout);
    window.addEventListener("resize", layout);
    return () => window.removeEventListener("resize", layout);
  }, [layout]);

  useEffect(() => {
    if (!pinned) {
      setX(0);
      return;
    }
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = pinRef.current?.getBoundingClientRect();
      if (!r) return;
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, maxX)));
      setX(-p * maxX);
      setProg(p);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pinned, maxX]);

  const active = Math.max(0, Math.min(6, Math.round(prog * 7.2 - 0.3)));

  return (
    <section className="how">
      <div
        ref={pinRef}
        className={`how-pin${pinned ? " pinned" : ""}`}
        style={pinned ? { height: vh + maxX } : undefined}
      >
        <div
          className="how-st"
          style={
            pinned
              ? { position: "sticky", top: 0, minHeight: vh, justifyContent: "center", overflow: "hidden" }
              : undefined
          }
        >
          <div className="wrap how-top">
            <div>
              <p className="eyebrow">De werkwijze</p>
              <h2 className="d" style={{ marginTop: 16 }}>
                Van probleem naar platform.
              </h2>
            </div>
            <p className="hand" style={{ margin: 0 }}>
              zeven stappen, zes weken
            </p>
          </div>
          <div
            ref={trackRef}
            className="track"
            tabIndex={0}
            aria-label="De zeven stappen, horizontaal te scrollen"
            style={pinned ? { transform: `translate3d(${x}px,0,0)` } : undefined}
            onScroll={(e) => {
              if (pinned) return;
              const t = e.currentTarget;
              setProg(t.scrollLeft / Math.max(1, t.scrollWidth - t.clientWidth));
            }}
          >
            {STEPS.map((s, i) => (
              <article key={s.n} className={`step${i === active ? " act" : ""}`}>
                <span className="n d">{s.n}</span>
                <span className="wk">{s.wk}</span>
                <h3 className="d">{s.title}</h3>
                <p>{s.body}</p>
                <span className="hand">{s.note}</span>
              </article>
            ))}
            <article className="step end">
              <p className="d">
                De oplossing staat altijd voorop. De business case volgt. <HlInk>Altijd.</HlInk>
              </p>
            </article>
          </div>
          <div className="ruler" aria-hidden="true">
            <div className="fill" style={{ ["--w" as string]: `${4 + prog * 96}%` }} />
            <div className="ticks">
              <span>Week 1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>Week 6</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
