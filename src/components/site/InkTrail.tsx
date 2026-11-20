import { useEffect, useRef } from "react";
import { reducedMotion } from "./motion";

/** Pen trail behind the mouse; fades in 0.65s. Mouse only, never with reduced motion. */
export function InkTrail() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv || reducedMotion() || !window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    const cx = cv.getContext("2d");
    if (!cx) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let pts: { x: number; y: number; t: number }[] = [];
    let running = false;
    let raf = 0;

    const size = () => {
      cv.width = window.innerWidth * dpr;
      cv.height = window.innerHeight * dpr;
    };
    const loop = (now: number) => {
      cx.clearRect(0, 0, cv.width, cv.height);
      pts = pts.filter((p) => now - p.t < 650);
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1];
        const b = pts[i];
        const al = 1 - (now - b.t) / 650;
        if (Math.hypot(b.x - a.x, b.y - a.y) > 120) continue;
        cx.strokeStyle = `rgba(35,64,217,${(al * 0.55).toFixed(3)})`;
        cx.lineWidth = (1.5 + al * 3.5) * dpr;
        cx.lineCap = "round";
        cx.beginPath();
        cx.moveTo(a.x * dpr, a.y * dpr);
        cx.lineTo(b.x * dpr, b.y * dpr);
        cx.stroke();
      }
      if (pts.length) raf = requestAnimationFrame(loop);
      else running = false;
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pts.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    size();
    window.addEventListener("resize", size);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas id="ink" ref={ref} aria-hidden="true" />;
}
