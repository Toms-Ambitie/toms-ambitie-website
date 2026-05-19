// Lightweight runtime SEO helper. keeps tags in sync without extra deps.

type SEOInput = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  /** Optional JSON-LD object(s) to inject as structured data for this route. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** When true, emit <meta name="robots" content="noindex, follow"> for this route. */
  noindex?: boolean;
};

const upsertMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const ROUTE_JSONLD_ID = "route-jsonld";
const ROUTE_ROBOTS_ID = "route-robots";

const clearRouteJsonLd = () => {
  document.head
    .querySelectorAll(`script[data-seo="${ROUTE_JSONLD_ID}"]`)
    .forEach((n) => n.parentNode?.removeChild(n));
};

const writeRouteJsonLd = (blocks: Record<string, unknown>[]) => {
  clearRouteJsonLd();
  for (const block of blocks) {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-seo", ROUTE_JSONLD_ID);
    s.text = JSON.stringify(block);
    document.head.appendChild(s);
  }
};

const setRouteRobots = (noindex: boolean) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[data-seo="${ROUTE_ROBOTS_ID}"]`);
  if (noindex) {
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", "robots");
      el.setAttribute("data-seo", ROUTE_ROBOTS_ID);
      document.head.appendChild(el);
    }
    el.setAttribute("content", "noindex, follow");
  } else if (el) {
    el.parentNode?.removeChild(el);
  }
};

export const applySEO = ({
  title,
  description,
  canonical,
  image = "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/585bf762-f8d3-4e38-8975-8ee9016cf9ef",
  type = "website",
  jsonLd,
  noindex = false,
}: SEOInput) => {
  document.title = title;

  upsertMeta('meta[name="description"]', "name", "description", description);

  // Open Graph
  upsertMeta('meta[property="og:title"]', "property", "og:title", title);
  upsertMeta('meta[property="og:description"]', "property", "og:description", description);
  upsertMeta('meta[property="og:type"]', "property", "og:type", type);
  upsertMeta('meta[property="og:image"]', "property", "og:image", image);
  if (canonical) {
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonical);
  }

  // Twitter
  upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
  upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
  upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", image);

  if (canonical) upsertLink("canonical", canonical);

  setRouteRobots(noindex);

  if (jsonLd) {
    writeRouteJsonLd(Array.isArray(jsonLd) ? jsonLd : [jsonLd]);
  } else {
    clearRouteJsonLd();
  }
};
