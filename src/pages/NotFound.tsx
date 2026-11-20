import { useEffect } from "react";
import { Link } from "react-router-dom";
import { applySEO } from "@/lib/seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHead } from "@/components/site/PageHead";

const NotFound = () => {
  useEffect(() => {
    applySEO({
      title: "Pagina niet gevonden (404) · Toms Ambitie",
      description: "Deze pagina bestaat niet of is verplaatst. Bekijk onze ventures of ga terug naar de homepage van Toms Ambitie.",
      canonical: "https://www.toms-ambitie.nl/404",
      noindex: true,
    });
  }, []);

  return (
    <SiteLayout>
      <PageHead
        eyebrow="404 · Pagina niet gevonden"
        title={
          <>
            Hier stond <span className="hl in">niks.</span>
          </>
        }
        lead="Deze pagina bestaat niet. Misschien verplaatst, misschien nooit gebouwd. Geen zorgen, we bouwen snel genoeg."
      />
      <div className="wrap acts" style={{ marginTop: 0, paddingBottom: "clamp(72px,10vw,150px)" }}>
        <Link className="btn" to="/">
          Terug naar home <i>→</i>
        </Link>
        <Link className="txt-l" to="/ventures">
          bekijk ventures →
        </Link>
      </div>
    </SiteLayout>
  );
};

export default NotFound;
