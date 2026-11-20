import { applySEO } from "@/lib/seo";

type VentureSeo = { slug: string; name: string; site: string; title: string; description: string };

export function applyVentureSEO({ slug, name, site, title, description }: VentureSeo) {
  const url = `https://www.toms-ambitie.nl/ventures/${slug}`;
  applySEO({
    title,
    description,
    canonical: url,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: title,
        url,
        description,
        isPartOf: { "@id": "https://www.toms-ambitie.nl/#website" },
        about: { "@id": "https://www.toms-ambitie.nl/#organization" },
        author: { "@id": "https://www.toms-ambitie.nl/#tom-mulder" },
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name,
        url: site,
        description,
        parentOrganization: { "@id": "https://www.toms-ambitie.nl/#organization" },
        founder: { "@id": "https://www.toms-ambitie.nl/#tom-mulder" },
        address: { "@type": "PostalAddress", addressLocality: "Zwolle", addressCountry: "NL" },
        contactPoint: {
          "@type": "ContactPoint",
          email: "hallo@toms-ambitie.nl",
          contactType: "partnerships",
          url: "https://www.toms-ambitie.nl/meebouwen",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.toms-ambitie.nl/" },
          { "@type": "ListItem", position: 2, name: "Ventures", item: "https://www.toms-ambitie.nl/ventures" },
          { "@type": "ListItem", position: 3, name, item: url },
        ],
      },
    ],
  });
}
