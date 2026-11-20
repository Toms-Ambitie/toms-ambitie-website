import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";


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
    // only for the browser build, not the prerender (SSR) build
    apply: (_config, env) => env.command === "build" && !env.isSsrBuild,
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
        { path: "/werkwijze", priority: "0.8", changefreq: "monthly" },
        { path: "/over-ons", priority: "0.8", changefreq: "monthly" },
        { path: "/meebouwen", priority: "0.8", changefreq: "monthly" },
        { path: "/nieuws", priority: "0.8", changefreq: "weekly" },
        { path: "/persmap", priority: "0.4", changefreq: "yearly" },
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
export default defineConfig(({ mode, isSsrBuild }) => ({
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
    sitemapPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    // the prerender (SSR) build is a single Node module; chunking only matters for browsers
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks: {
              // Core React libs — rarely change, cached long-term
              "vendor-react": ["react", "react-dom", "react/jsx-runtime"],
              // Router — changes with React Router releases, separate from React core
              "vendor-router": ["react-router-dom"],
            },
          },
        },
  },
}));
