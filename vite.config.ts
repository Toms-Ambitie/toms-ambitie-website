import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";


/**
 * Above-the-fold selectors: any CSS rule matching these patterns is
 * considered critical and will be inlined in the HTML at build time.
 * Keep this list in sync with the initial viewport (nav + hero).
 */
const CRITICAL_SELECTORS = [
  /^(\*|html|body|#root)/,
  /^nav\b/,
  /^\.(font-display|font-mono|font-body)/,
  /^\.(bg-hero|bg-ink|bg-volt|bg-paper)/,
  /^\.(text-paper|text-volt|text-ink)/,
  /^(h1|h2|h3|h4)\b/,
  /^\.container\b/,
  /^\.min-h-screen/,
  /^:root/,
];

function criticalCssPlugin(): Plugin {
  let extractedCriticalCss = "";

  return {
    name: "toms-ambitie-critical-css",
    apply: "build",
    enforce: "post",
    async generateBundle(_, bundle) {
      // Collect all CSS from the bundle
      let allCss = "";
      for (const chunk of Object.values(bundle)) {
        if (chunk.type === "asset" && typeof chunk.source === "string" && chunk.fileName.endsWith(".css")) {
          allCss += chunk.source + "\n";
        }
      }
      if (!allCss) return;

      const criticalRules: string[] = [];

      // Extract :root custom properties
      const rootMatches = allCss.match(/:root\s*\{[^}]+\}/g);
      if (rootMatches) criticalRules.push(...rootMatches);

      // Simple regex-based CSS rule extraction
      const ruleRegex = /([^{}]+)\{([^{}]*)\}/g;
      let match: RegExpExecArray | null;

      while ((match = ruleRegex.exec(allCss)) !== null) {
        const selector = match[1].trim();
        if (selector.startsWith("@font-face")) {
          criticalRules.push(match[0]);
          continue;
        }
        if (selector.startsWith("@")) continue;

        const parts = selector.split(",").map((s) => s.trim());
        const isCritical = parts.some((part) =>
          CRITICAL_SELECTORS.some((re) => re.test(part))
        );
        if (isCritical) {
          criticalRules.push(match[0]);
        }
      }

      extractedCriticalCss = [...new Set(criticalRules)].join("\n");
      // eslint-disable-next-line no-console
      console.log(`✓ critical CSS: ${extractedCriticalCss.length} bytes extracted`);
    },
    transformIndexHtml: {
      order: "post" as const,
      handler(html: string) {
        // 1. Inline critical CSS
        if (extractedCriticalCss) {
          const styleTag = `<style id="critical-css">\n${extractedCriticalCss}\n</style>`;
          html = html.replace(
            /<style id="critical-css">[\s\S]*?<\/style>/,
            styleTag
          );
        }

        // 2. Defer non-critical CSS: convert <link rel="stylesheet"> to async loading
        html = html.replace(
          /<link rel="stylesheet"(?=[^>]*crossorigin) href="([^"]+)"[^>]*>/g,
          (_, href) =>
            `<link rel="preload" as="style" href="${href}" crossorigin onload="this.onload=null;this.rel='stylesheet'" />\n    <noscript><link rel="stylesheet" href="${href}" crossorigin /></noscript>`
        );

        // Also defer app CSS (without crossorigin)
        html = html.replace(
          /<link rel="stylesheet"(?![^>]*crossorigin) href="(\/assets\/[^"]+\.css)"[^>]*>/g,
          (_, href) =>
            `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'" />\n    <noscript><link rel="stylesheet" href="${href}" /></noscript>`
        );

        return html;
      },
    },
  };
}

const SITE_URL = "https://www.toms-ambitie.nl";

/**
 * Genereert dist/sitemap.xml op build-tijd:
 * - homepage + /nieuws overzichtspagina
 * - elke /nieuws/<slug> uit src/data/news.ts (met <lastmod>)
 *
 * Zo blijft de sitemap altijd in sync met de berichten — geen handwerk.
 */
function sitemapPlugin(): Plugin {
  return {
    name: "toms-ambitie-sitemap",
    apply: "build",
    enforce: "post",
    async closeBundle() {
      const { news } = await import("./src/data/news");
      const { ventureSlugs } = await import("./src/data/ventureSlugs");
      const outDir = "dist";

      const today = new Date().toISOString().split("T")[0];
      const newestArticle = [...news].sort((a, b) => (a.date < b.date ? 1 : -1))[0];
      const newsIndexLastmod = newestArticle?.date ?? today;

      // Static pages
      const staticPages: Array<{ path: string; priority: string; changefreq: string }> = [
        { path: "/", priority: "1.0", changefreq: "weekly" },
        { path: "/ventures", priority: "0.9", changefreq: "weekly" },
        { path: "/hoe-we-bouwen", priority: "0.8", changefreq: "monthly" },
        { path: "/over-ons", priority: "0.8", changefreq: "monthly" },
        { path: "/meebouwen", priority: "0.8", changefreq: "monthly" },
        { path: "/nieuws", priority: "0.8", changefreq: "weekly" },
        { path: "/privacy", priority: "0.3", changefreq: "yearly" },
        { path: "/voorwaarden", priority: "0.3", changefreq: "yearly" },
      ];

      type Url = { loc: string; lastmod?: string; changefreq: string; priority: string };

      // Pages-sitemap: alle vaste pagina's + venture detailpagina's
      const pagesUrls: Url[] = [
        ...staticPages.map((p) => ({
          loc: `${SITE_URL}${p.path}`,
          lastmod: p.path === "/nieuws" ? newsIndexLastmod : today,
          changefreq: p.changefreq,
          priority: p.priority,
        })),
        ...ventureSlugs.map((slug: string) => ({
          loc: `${SITE_URL}/ventures/${slug}`,
          lastmod: today,
          changefreq: "monthly",
          priority: "0.7",
        })),
      ];

      // News-sitemap: alle blogartikelen apart, zodat GSC indexing per type te volgen is
      const newsUrls: Url[] = news.map((n) => ({
        loc: `${SITE_URL}/nieuws/${n.slug}`,
        lastmod: n.date,
        changefreq: "monthly",
        priority: "0.6",
      }));

      const renderUrlset = (urls: Url[]) =>
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        urls
          .map(
            (u) =>
              `  <url>\n` +
              `    <loc>${u.loc}</loc>\n` +
              (u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>\n` : "") +
              `    <changefreq>${u.changefreq}</changefreq>\n` +
              `    <priority>${u.priority}</priority>\n` +
              `  </url>`,
          )
          .join("\n") +
        `\n</urlset>\n`;

      // Sitemap-index die naar beide deel-sitemaps wijst
      const sitemapIndex =
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        `  <sitemap>\n` +
        `    <loc>${SITE_URL}/sitemap-pages.xml</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `  </sitemap>\n` +
        `  <sitemap>\n` +
        `    <loc>${SITE_URL}/sitemap-news.xml</loc>\n` +
        `    <lastmod>${newsIndexLastmod}</lastmod>\n` +
        `  </sitemap>\n` +
        `</sitemapindex>\n`;

      const fs = await import("fs/promises");
      await fs.writeFile(path.resolve(outDir, "sitemap.xml"), sitemapIndex, "utf8");
      await fs.writeFile(path.resolve(outDir, "sitemap-pages.xml"), renderUrlset(pagesUrls), "utf8");
      await fs.writeFile(path.resolve(outDir, "sitemap-news.xml"), renderUrlset(newsUrls), "utf8");
      // eslint-disable-next-line no-console
      console.log(
        `✓ sitemap-index + sitemap-pages.xml (${pagesUrls.length}) + sitemap-news.xml (${newsUrls.length}) geschreven`,
      );
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    criticalCssPlugin(),
    sitemapPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
