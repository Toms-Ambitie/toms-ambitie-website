// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { ventureSlugs } from "../src/data/ventureSlugs";
import { news } from "../src/data/news";

const BASE_URL = "https://www.toms-ambitie.nl";
const TODAY = new Date().toISOString().slice(0, 10);

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/ventures", changefreq: "weekly", priority: "0.9" },
  { path: "/hoe-we-bouwen", changefreq: "monthly", priority: "0.7" },
  { path: "/over-ons", changefreq: "monthly", priority: "0.7" },
  { path: "/meebouwen", changefreq: "monthly", priority: "0.7" },
  { path: "/nieuws", changefreq: "weekly", priority: "0.8" },
  { path: "/bedankt", changefreq: "yearly", priority: "0.2" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/voorwaarden", changefreq: "yearly", priority: "0.3" },
];

const ventureEntries: SitemapEntry[] = ventureSlugs.map((slug) => ({
  path: `/ventures/${slug}`,
  changefreq: "monthly",
  priority: "0.8",
}));

const newsEntries: SitemapEntry[] = news
  .filter((n) => n.date <= TODAY)
  .map((n) => ({
    path: `/nieuws/${n.slug}`,
    lastmod: n.date,
    changefreq: "monthly",
    priority: "0.6",
  }));

const entries: SitemapEntry[] = [...staticEntries, ...ventureEntries, ...newsEntries];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
