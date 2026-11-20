import { useEffect } from "react";
import { Link } from "react-router-dom";
import { applySEO } from "@/lib/seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHead } from "@/components/site/PageHead";

const BedanktPage = () => {
  useEffect(() => {
    applySEO({
      title: "Bedankt · Toms Ambitie",
      description: "Je bericht is verzonden. We nemen zo snel mogelijk contact met je op.",
      canonical: "https://www.toms-ambitie.nl/bedankt",
      noindex: true,
    });
  }, []);

  return (
    <SiteLayout>
      <PageHead
        eyebrow="Verzonden ✓"
        title={
          <>
            Top, <span className="hl in">ontvangen.</span>
          </>
        }
        lead="We hebben je bericht binnen. Verwacht binnen 2 werkdagen een reactie. Meestal sneller."
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

export default BedanktPage;
