import { useEffect, useRef } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { applySEO } from "@/lib/seo";
import { POSTS, type Block } from "@/data/posts";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Cta, HlInk } from "@/components/site/Cta";
import { catLabel, hlLast, isoDate } from "@/components/site/newsHelpers";

const VENTURE_PAGES: Record<string, string> = { PostPilot: "/ventures/postpilot", EmmaStudio: "/ventures/emmastudio" };

const renderBlock = (b: Block, i: number) => {
  switch (b.t) {
    case "h2":
      return (
        <h2 key={i} className="d art-h2">
          {b.c}
        </h2>
      );
    case "quote":
      return (
        <blockquote key={i} className="art-q rv">
          <p className="d">{hlLast(b.c, true)}</p>
        </blockquote>
      );
    case "ul":
      return (
        <ul key={i} className="art-ul">
          {b.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      );
    case "lead":
      return (
        <p key={i} className="lead">
          {b.c}
        </p>
      );
    default:
      return <p key={i}>{b.c}</p>;
  }
};

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const rootRef = useRef<HTMLDivElement>(null);
  const post = POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) return;
    const url = `https://www.toms-ambitie.nl/nieuws/${post.slug}`;
    const published = isoDate(post.date);
    applySEO({
      title: `${post.title} · Toms Ambitie`,
      description: post.lead,
      canonical: url,
      type: "article",
      noindex: post.noindex,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.lead,
          ...(published ? { datePublished: published } : {}),
          inLanguage: "nl-NL",
          mainEntityOfPage: url,
          author: { "@id": "https://www.toms-ambitie.nl/#tom-mulder" },
          publisher: { "@id": "https://www.toms-ambitie.nl/#organization" },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.toms-ambitie.nl/" },
            { "@type": "ListItem", position: 2, name: "Nieuws", item: "https://www.toms-ambitie.nl/nieuws" },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        },
      ],
    });
  }, [post]);

  if (!post) return <Navigate to="/nieuws" replace />;

  const more = POSTS.filter((p) => p.slug !== post.slug && !p.noindex).slice(0, 3);
  const venturePage = post.venture ? VENTURE_PAGES[post.venture] : undefined;

  return (
    <SiteLayout>
      <div ref={rootRef}>
        <article>
          <header className="phead art-h">
            <div className="wrap">
              <Link className="back" to="/nieuws">
                ← al het nieuws
              </Link>
              <p className="eyebrow">
                {catLabel(post.statusLabel)}
                {post.venture ? ` · ${post.venture}` : ""}
              </p>
              <h1 className="d">{hlLast(post.title)}</h1>
              <p className="lead">{post.lead}</p>
              <p className="art-meta">
                <img className="stk" src="/ta/tom-portret-560.webp" alt="" width={64} height={57} loading="lazy" decoding="async" />
                <span>
                  <b>Tom Mulder</b>
                  {post.date} · {post.read} lezen
                </span>
              </p>
            </div>
          </header>

          <div className="wrap art">
            {post.body.map(renderBlock)}
            <p>
              <Link className="txt-l" to="/werkwijze">
                meer lezen over hoe we bouwen? bekijk de werkwijze →
              </Link>
            </p>
          </div>
        </article>

        <section className="sec how">
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <p className="eyebrow">Meer nieuws</p>
                <h2 className="d" style={{ marginTop: 16 }}>
                  Lees verder.
                </h2>
              </div>
              <Link className="txt-l" to="/nieuws" style={{ justifySelf: "end" }}>
                al het nieuws →
              </Link>
            </div>
            <div className="cards">
              {more.map((p) => (
                <Link key={p.slug} className="card pap rv" to={`/nieuws/${p.slug}`}>
                  <p className="eyebrow">
                    {catLabel(p.statusLabel)}
                    {p.venture ? ` · ${p.venture}` : ""}
                  </p>
                  <h3 className="d">{p.title}</h3>
                  <p>{p.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Cta
          eyebrow="Meedoen"
          title={
            <>
              Heb je iets dat we moeten <HlInk>bouwen?</HlInk>
            </>
          }
        >
          <div className="acts">
            <Link className="btn inv" to="/meebouwen">
              Draag idee aan <i>→</i>
            </Link>
            {venturePage ? (
              <Link className="txt-l" to={venturePage}>
                bekijk {post.venture} →
              </Link>
            ) : (
              <Link className="txt-l" to="/ventures">
                bekijk ventures →
              </Link>
            )}
          </div>
        </Cta>
      </div>
    </SiteLayout>
  );
};

export default NewsArticle;
