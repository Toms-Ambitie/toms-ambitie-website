import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { applySEO } from "@/lib/seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHead } from "@/components/site/PageHead";
import { PROBLEM_KEY } from "@/components/site/AskForm";

const TOPICS = [
  { value: "idee", label: "Idee aanleveren" },
  { value: "meebouwen", label: "Bouw mee" },
  { value: "investeren", label: "Investeren" },
  { value: "specialist", label: "Specialist" },
  { value: "anders", label: "Iets anders" },
];

type Status = { kind: "idle" | "sending" | "sent" | "error"; text: string };

const MeebouwenPage = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const [form, setForm] = useState(() => {
    let probleem = (location.state as { probleem?: string } | null)?.probleem ?? "";
    try {
      probleem ||= sessionStorage.getItem(PROBLEM_KEY) ?? "";
      sessionStorage.removeItem(PROBLEM_KEY);
    } catch {
      /* storage blocked */
    }
    return { name: "", email: "", linkedin: "", website: "", interest: "idee", message: probleem ? `Mijn probleem is: ${probleem}` : "" };
  });
  const [status, setStatus] = useState<Status>({ kind: "idle", text: "" });

  const set = (field: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ kind: "sending", text: "Bezig met versturen…" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.error) throw new Error(data.error);
      setStatus({ kind: "sent", text: "Verstuurd. Tom leest het zelf en reageert meestal binnen een dag." });
      setForm((f) => ({ ...f, linkedin: "", message: "" }));
    } catch (err) {
      const reason = err instanceof Error && err.message ? `${err.message}. ` : "";
      setStatus({ kind: "error", text: `${reason}Het versturen lukte niet. Probeer het nog eens of mail naar hallo@toms-ambitie.nl.` });
    }
  };

  useEffect(() => {
    applySEO({
      title: "Meebouwen aan een venture · co-founders en specialisten",
      description:
        "Meebouwen aan een venture van Toms Ambitie? We zoeken co-founders, investeerders en specialisten die niet alleen adviseren maar meedoen. Zo werkt het.",
      canonical: "https://www.toms-ambitie.nl/meebouwen",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Meebouwen aan Toms Ambitie",
          url: "https://www.toms-ambitie.nl/meebouwen",
          description: "Neem contact op om co-founder, investeerder of specialist te worden bij een van de ventures van Toms Ambitie.",
          isPartOf: { "@id": "https://www.toms-ambitie.nl/#website" },
          about: { "@id": "https://www.toms-ambitie.nl/#organization" },
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Hoe kan ik meebouwen aan Toms Ambitie?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Stuur een bericht via het contactformulier op deze pagina. Geef aan of je mee wilt bouwen als co-founder, specialist of vanuit een andere hoek. Tom Mulder reageert persoonlijk.",
              },
            },
            {
              "@type": "Question",
              name: "Zoekt Toms Ambitie co-founders?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja. Voor EmmaStudio zoeken we actief co-founders met kennis van product, techniek, finance, growth, UX of domeinspecifieke expertise. PostPilot zoekt ook specialisten voor de volgende groeifase.",
              },
            },
            {
              "@type": "Question",
              name: "Kan ik investeren in de ventures van Toms Ambitie?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Toms Ambitie staat open voor gesprekken met investeerders die strategische waarde toevoegen. Neem contact op via het formulier op deze pagina.",
              },
            },
          ],
        },
      ],
    });
  }, []);

  return (
    <SiteLayout>
      <div ref={rootRef}>
        <PageHead
          wide
          labelInH1
          eyebrow="Meebouwen aan een venture"
          title={
            <>
              Doe <span className="hl">mee.</span>
            </>
          }
          hand="op jouw manier"
          lead="Toms Ambitie bouwt ventures vanuit echte problemen. Sommige mensen investeren. Anderen bouwen mee. Soms ontstaat daaruit een compleet nieuwe venture."
        />

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap meeb">
            <form className="form rv" onSubmit={submit}>
              <div className="f2">
                <div>
                  <label htmlFor="f-naam">Naam</label>
                  <input id="f-naam" name="naam" type="text" autoComplete="name" required maxLength={120} value={form.name} onChange={set("name")} />
                </div>
                <div>
                  <label htmlFor="f-mail">E-mail</label>
                  <input id="f-mail" name="email" type="email" autoComplete="email" required maxLength={200} value={form.email} onChange={set("email")} />
                </div>
              </div>
              <div>
                <label htmlFor="f-li">
                  LinkedIn <em>(mag, hoeft niet)</em>
                </label>
                <input id="f-li" name="linkedin" type="text" inputMode="url" placeholder="linkedin.com/in/…" maxLength={300} value={form.linkedin} onChange={set("linkedin")} />
              </div>
              <fieldset>
                <legend>Waar gaat het over?</legend>
                <div className="opts">
                  {TOPICS.map((t) => (
                    <label key={t.value}>
                      <input type="radio" name="onderwerp" value={t.value} checked={form.interest === t.value} onChange={set("interest")} />
                      <span>{t.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="hp" aria-hidden="true">
                <label htmlFor="f-web">Laat dit veld leeg</label>
                <input id="f-web" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
              </div>
              <div>
                <label htmlFor="f-b">Bericht</label>
                <textarea id="f-b" name="bericht" required maxLength={5000} placeholder="mijn probleem is…" value={form.message} onChange={set("message")} />
              </div>
              <div className="acts" style={{ marginTop: 0 }}>
                <button className="btn" type="submit" disabled={status.kind === "sending"}>
                  Stuur bericht <i>→</i>
                </button>
                <span className={`fnote${status.kind === "error" ? " err" : ""}${status.kind === "sent" ? " ok" : ""}`} role="status">
                  {status.text}
                </span>
              </div>
            </form>
            <aside className="rv">
              <div className="side-b">
                <p className="eyebrow">Of direct</p>
                <dl>
                  <dt>E-mail</dt>
                  <dd>
                    <a href="mailto:hallo@toms-ambitie.nl">hallo@toms-ambitie.nl</a>
                  </dd>
                  <dt>LinkedIn</dt>
                  <dd>
                    <a href="https://www.linkedin.com/company/tomsambitie/">Toms Ambitie</a>
                  </dd>
                  <dt>Studio</dt>
                  <dd>Zwolle, Nederland</dd>
                </dl>
              </div>
              <div className="side-b nope">
                <p className="eyebrow">Niet voor</p>
                <ul>
                  <li>Klantopdrachten en uurwerk</li>
                  <li>Detachering</li>
                  <li>Investeringspitches</li>
                  <li>Recruiters</li>
                </ul>
                <p className="hand">we bouwen alleen eigen ventures</p>
              </div>
              <img
                className="stk mstk"
                src="/ta/tom-portret-560.webp"
                srcSet="/ta/tom-portret-560.webp 560w, /ta/tom-portret-900.webp 900w"
                sizes="260px"
                width={1100}
                height={984}
                alt="Tom Mulder"
                loading="lazy"
                decoding="async"
              />
            </aside>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
};

export default MeebouwenPage;
