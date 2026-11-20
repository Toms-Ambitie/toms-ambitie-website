// Hand-drawn sketches for the "krabbel → product" slider. Drawn in code until Tom supplies real scans.
const NS = "http://www.w3.org/2000/svg";

function rnd(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
}
type R = () => number;

function wob(r: R, x1: number, y1: number, x2: number, y2: number, j: number) {
  const n = Math.max(2, Math.round(Math.hypot(x2 - x1, y2 - y1) / 40));
  let d = `M${x1},${y1}`;
  for (let i = 1; i <= n; i++) {
    const t = i / n;
    d += ` L${(x1 + (x2 - x1) * t + (r() - 0.5) * j).toFixed(1)},${(y1 + (y2 - y1) * t + (r() - 0.5) * j).toFixed(1)}`;
  }
  return d;
}
function P(svg: SVGSVGElement, d: string, w = 4, c = "#2340D9") {
  const p = document.createElementNS(NS, "path");
  p.setAttribute("d", d);
  p.setAttribute("fill", "none");
  p.setAttribute("stroke", c);
  p.setAttribute("stroke-width", String(w));
  p.setAttribute("stroke-linecap", "round");
  p.setAttribute("stroke-linejoin", "round");
  svg.appendChild(p);
}
function T(svg: SVGSVGElement, s: string, x: number, y: number, sz = 34, rot = 0, c = "#2340D9") {
  const t = document.createElementNS(NS, "text");
  t.textContent = s;
  t.setAttribute("x", String(x));
  t.setAttribute("y", String(y));
  t.setAttribute("font-family", "Reenie Beanie, cursive");
  t.setAttribute("font-size", String(Math.round(sz * 1.25)));
  t.setAttribute("fill", c);
  if (rot) t.setAttribute("transform", `rotate(${rot} ${x} ${y})`);
  svg.appendChild(t);
}
function box(svg: SVGSVGElement, r: R, x: number, y: number, w: number, h: number, j: number) {
  P(
    svg,
    wob(r, x, y, x + w, y, j) +
      wob(r, x + w, y, x + w, y + h, j).replace("M", "L") +
      wob(r, x + w, y + h, x, y + h, j).replace("M", "L") +
      wob(r, x, y + h, x, y, j).replace("M", "L"),
  );
}
function wave(r: R, x: number, y: number, w: number, a: number) {
  let d = `M${x},${y}`;
  for (let i = 1; i <= 28; i++) d += ` L${(x + (w * i) / 28).toFixed(1)},${(y + Math.sin(i * 1.3) * a * (0.3 + r())).toFixed(1)}`;
  return d;
}

export const SKETCHES = {
  pp(s: SVGSVGElement) {
    const r = rnd(7);
    T(s, "30 sec inspreken →", 70, 78, 40, -2);
    P(s, "M150,250 m-58,0 a58,58 0 1,0 116,0 a58,58 0 1,0 -116,0", 5);
    P(s, wob(r, 150, 222, 150, 268, 3), 7);
    P(s, "M128,252 q22,40 44,0", 4);
    P(s, wob(r, 150, 290, 150, 312, 2), 4);
    P(s, wave(r, 240, 250, 150, 34), 4);
    P(s, wob(r, 410, 250, 470, 250, 4), 4);
    P(s, "M455,236 L474,250 L455,264", 4);
    box(s, r, 500, 130, 240, 260, 5);
    for (let i = 0; i < 5; i++) P(s, wob(r, 522, 172 + i * 38, 522 + (i == 4 ? 110 : 196), 172 + i * 38, 4), 4);
    T(s, "post in mijn toon", 510, 432, 34, -3);
    T(s, "geen leeg scherm!", 80, 420, 36, 3, "#FF4A00");
    P(s, wob(r, 78, 432, 300, 426, 4), 4, "#FF4A00");
  },
  em(s: SVGSVGElement) {
    const r = rnd(23);
    T(s, "omzet", 90, 96, 44, -3);
    T(s, "kosten", 560, 96, 44, 2);
    box(s, r, 70, 120, 220, 150, 5);
    box(s, r, 520, 120, 220, 150, 5);
    P(s, "M95,240 L140,200 L185,215 L235,160 L268,150", 5);
    P(s, "M545,160 L600,190 L650,180 L715,240", 5, "#FF4A00");
    P(s, wob(r, 180, 290, 360, 370, 5), 4);
    P(s, wob(r, 630, 290, 450, 370, 5), 4);
    P(s, "M405,400 m-70,0 a70,44 0 1,0 140,0 a70,44 0 1,0 -140,0", 5);
    T(s, "= winst", 356, 412, 38, -2);
    T(s, "op dezelfde dag!", 300, 480, 38, -2, "#FF4A00");
    T(s, "8 modules, los af te nemen", 60, 330, 28, -4, "#5E5C57");
  },
} as const;

export type SketchKey = keyof typeof SKETCHES;
