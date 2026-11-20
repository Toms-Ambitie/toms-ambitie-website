import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { reducedMotion } from "./motion";

/**
 * Home film header. The still frame paints first (it is the LCP image);
 * the film itself only starts loading after the page has finished loading.
 */
export function HeroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | undefined>();

  useEffect(() => {
    if (reducedMotion()) return;
    const start = () => setSrc("/ta/hero.mp4");
    if (document.readyState === "complete") {
      const t = window.setTimeout(start, 300);
      return () => window.clearTimeout(t);
    }
    window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  useEffect(() => {
    if (src) videoRef.current?.play().catch(() => {});
  }, [src]);

  return (
    <header className="hero">
      <div className="film">
        <img
          className="poster"
          src="/ta/hero-1280.webp"
          srcSet="/ta/hero-1080.webp 1080w, /ta/hero-1280.webp 1280w"
          sizes="100vw"
          alt=""
          aria-hidden="true"
          {...{ fetchpriority: "high" }}
          decoding="async"
        />
        {src && <video ref={videoRef} src={src} autoPlay muted loop playsInline aria-hidden="true" />}
        <p className="hand scrib" aria-hidden="true">
          dit idee. dit bouwen we.
        </p>
        <div className="film-in">
          <div>
            <p className="eyebrow">Venture club · Zwolle</p>
            <h1 className="d">
              We bouwen wat we zelf <span className="hl">missen.</span>
            </h1>
          </div>
          <div className="side">
            <p>Van frustratie naar platform. Twee ventures in eigen eigendom, allebei live. Open voor de mensen die willen meebouwen.</p>
            <Link className="btn" to="/ventures">
              Bekijk ventures <i>→</i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
