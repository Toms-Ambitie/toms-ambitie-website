import { useEffect, useRef, useState } from "react";
import { reducedMotion } from "./motion";

type PFilmProps = { name: "film-markeren" | "film-doorhalen"; note: string };

/** Small film in a page header. Still frame first; the film loads once it is on screen. */
export function PFilm({ name, note }: PFilmProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      setPlay(true);
      io.disconnect();
    });
    const start = () => io.observe(el);
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      io.disconnect();
      window.removeEventListener("load", start);
    };
  }, []);

  return (
    <div className="pfilm" ref={ref}>
      <img
        className="poster"
        src={`/ta/${name}-1280.webp`}
        srcSet={`/ta/${name}-900.webp 900w, /ta/${name}-1280.webp 1280w`}
        sizes="(max-width:900px) 92vw, 36vw"
        alt=""
        aria-hidden="true"
        decoding="async"
      />
      {play && <video src={`/ta/${name}.mp4`} autoPlay muted loop playsInline aria-hidden="true" />}
      <p className="hand">{note}</p>
    </div>
  );
}
