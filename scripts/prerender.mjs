// Puts the rendered page into every built HTML file (dist/**/index.html), so the raw HTML
// carries the full text for search engines. The browser then takes it over (hydrateRoot).
// A page that fails to render fails the build: nothing half-rendered goes live.
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname, relative, sep } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, process.env.PRERENDER_DIST || "dist");
const { render } = await import(pathToFileURL(join(ROOT, process.env.PRERENDER_SSR || "dist-ssr", "entry-server.js")).href);

function pages(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) return name === "assets" ? [] : pages(full);
    return name === "index.html" ? [full] : [];
  });
}

const EMPTY_ROOT = '<div id="root"></div>';
let count = 0;
const words = {};
for (const file of pages(DIST)) {
  const rel = relative(DIST, dirname(file)).split(sep).join("/");
  const route = rel ? `/${rel}` : "/";
  const html = readFileSync(file, "utf8");
  if (!html.includes(EMPTY_ROOT)) throw new Error(`prerender: no empty root in ${file}`);
  const body = await render(route);
  if (!body.includes("<main")) throw new Error(`prerender: ${route} rendered without <main>`);
  writeFileSync(file, html.replace(EMPTY_ROOT, `<div id="root">${body}</div>`));
  words[route] = body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  count++;
}
const thin = Object.entries(words).filter(([, n]) => n < 300);
console.log(`prerender: ${count} pages rendered; fewest words: ${Object.entries(words).sort((a, b) => a[1] - b[1]).slice(0, 3).map(([r, n]) => `${r} ${n}`).join(", ")}`);
if (thin.length) console.log(`prerender: under 300 words: ${thin.map(([r, n]) => `${r} (${n})`).join(", ")}`);
