import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Manifesto } from "@/components/Manifesto";
import { applySEO } from "@/lib/seo";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { gtmEvent } from "@/lib/gtm";
import { ArrowRight } from "lucide-react";

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.18)",
  color: "#FFFFFF",
  padding: "16px 18px",
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "var(--text-md)",
  width: "100%",
  borderRadius: 0,
  outline: "none",
  minHeight: 52,
};

const blocks = [
  {
    label: "01 — HET ECOSYSTEEM",
    title: "INVESTEER IN DE CLUB.",
    desc:
      "Sommige mensen geloven niet alleen in één venture, maar in het hele systeem erachter. Als investeerder of strategische partner bouw je mee aan meerdere ventures tegelijk — van AI en SaaS tot energie en automatisering. Geen passieve betrokkenheid. Wel toegang tot ideeën, operators en ventures in vroege fase.",
    cta: "Start een gesprek",
    interest: "investeren",
  },
  {
    label: "02 — ACTIEVE VENTURES",
    title: "STAP IN VOORDAT HET GROOT WORDT.",
    desc:
      "Spreekt één specifieke venture je aan? Dan kun je instappen als investeerder, specialist, operator of co-builder. Geen standaard samenwerkingen. Wel gerichte betrokkenheid bij ventures die nog volop in beweging zijn.",
    cta: "Vertel welke venture",
    interest: "venture",
  },
  {
    label: "03 — JOUW IDEE",
    title: "BRENG EEN PROBLEEM IN.",
    desc:
      "De meeste ventures binnen Toms Ambitie begonnen met frustratie, gedrag of iets dat slimmer moest kunnen. Heb jij een probleem dat blijft terugkomen? Grote kans dat daar iets interessants in zit. Als het idee klopt, bouwen we samen verder.",
    cta: "Stuur je idee in",
    interest: "idee",
  },
];

const principles = [
  "AI-first bouwen",
  "Idee → build in weken",
  "Operators i.p.v. consultants",
  "Ventures i.p.v. klantwerk",
  "Testen boven vergaderen",
  "Kleine teams, hoge snelheid",
];

const MeebouwenPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [presetInterest, setPresetInterest] = useState<string>("");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    applySEO({
      title: "Meebouwen. Toms Ambitie",
      description:
        "Toetreden tot een venture ecosystem. Investeer in de club, stap in bij een venture of breng een probleem in. Voor builders, operators en investeerders.",
      canonical: "https://www.toms-ambitie.nl/meebouwen",
    });
  }, []);

  const scrollToContact = (interest?: string) => {
    if (interest) setPresetInterest(interest);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main style={{ minHeight: "100vh", background: "#FBFAF6" }}>
      <Navbar />
        {/* HERO */}
        <section
          className="py-20 sm:py-28 md:py-32"
          style={{ background: "#0E0E0C", paddingTop: "calc(120px + 64px)" }}
        >
          <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
            <p
              className="font-mono uppercase typo-label typo-muted-dark mb-6"
              style={{ letterSpacing: "0.18em" }}
            >
              — Venture club · Builders · Operators · Investeerders
            </p>
            <h1 className="font-display typo-page-heading typo-heading-dark mb-8 sm:mb-10">
              DOE MEE.<br />OP JOUW MANIER.
            </h1>
            <div className="space-y-4 max-w-[620px]">
              <p className="font-sans typo-lg typo-caption-dark" style={{ lineHeight: "var(--leading-loose)" }}>
                Toms Ambitie bouwt ventures vanuit echte problemen, gedrag en schaalbare ideeën.
              </p>
              <p className="font-sans typo-md typo-body-dark" style={{ lineHeight: "var(--leading-loose)" }}>
                Sommige mensen stappen financieel in. Anderen bouwen actief mee. En soms ontstaat een compleet nieuwe venture vanuit één goed probleem.
              </p>
              <p className="font-sans typo-md typo-heading-dark" style={{ fontWeight: 500 }}>
                Kies wat bij je past. Of combineer meerdere rollen.
              </p>
            </div>
          </div>
        </section>

        {/* DRIE BLOKKEN */}
        <section className="py-20 sm:py-28 md:py-32" style={{ background: "#0E0E0C", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
            <p
              className="font-mono uppercase typo-label mb-10 sm:mb-14"
              style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.18em" }}
            >
              — Drie manieren om in te stappen
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ gap: 2, background: "rgba(255,255,255,0.08)" }}
            >
              {blocks.map((b) => (
                <div
                  key={b.label}
                  className="p-7 sm:p-10 lg:p-12 flex flex-col"
                  style={{ background: "#111110", borderTop: "3px solid #C8F000", minHeight: 420 }}
                >
                  <div
                    className="font-mono uppercase mb-6"
                    style={{ color: "#C8F000", fontSize: 10, letterSpacing: "0.18em" }}
                  >
                    {b.label}
                  </div>
                  <div
                    className="font-display mb-5"
                    style={{
                      fontSize: "clamp(1.6rem, 2.4vw, 2rem)",
                      color: "#FFFFFF",
                      lineHeight: "var(--leading-tight)",
                    }}
                  >
                    {b.title}
                  </div>
                  <p
                    className="font-sans flex-1 mb-8"
                    style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}
                  >
                    {b.desc}
                  </p>
                  <button
                    onClick={() => {
                      gtmEvent("cta_click", { cta_label: b.label, cta_destination: "meebouwen_contact" });
                      scrollToContact(b.interest);
                    }}
                    className="font-mono inline-flex items-center gap-2 self-start group/cta"
                    style={{
                      fontSize: 12,
                      color: "#C8F000",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "0 0 4px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      borderBottom: "1px solid rgba(200,240,0,0.4)",
                    }}
                  >
                    {b.cta}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAAROM MENSEN AANSLUITEN */}
        <section className="py-20 sm:py-28 md:py-32" style={{ background: "#F4F1E8" }}>
          <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
            <p className="font-mono uppercase typo-label typo-caption mb-4" style={{ letterSpacing: "0.18em" }}>
              — De club
            </p>
            <h2 className="font-display typo-section-heading typo-heading mb-10 sm:mb-12">
              WAAROM MENSEN<br />AANSLUITEN.
            </h2>

            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
              <div className="space-y-5 font-sans typo-md typo-body" style={{ lineHeight: "var(--leading-loose)" }}>
                <p>
                  Mensen sluiten zich meestal niet aan omdat ze "een investering zoeken".
                </p>
                <p>Ze sluiten zich aan omdat:</p>
                <ul className="space-y-2 pl-0 list-none">
                  {[
                    "ze energie krijgen van bouwen",
                    "ze sneller willen bewegen dan traditionele bedrijven",
                    "ze onderdeel willen zijn van meerdere ventures",
                    "ze toegang willen tot operators en specialisten",
                    "ze geloven in testen boven eindeloos plannen",
                  ].map((p) => (
                    <li key={p} className="flex items-baseline gap-3">
                      <span style={{ width: 6, height: 6, background: "#C8F000", display: "inline-block", flexShrink: 0, transform: "translateY(-2px)" }} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-sans typo-md typo-heading" style={{ fontWeight: 500 }}>
                  Niet iedereen past bij Toms Ambitie. En dat hoeft ook niet.
                </p>
                <p>
                  Wij bouwen liever met een kleine groep mensen die écht energie geven, dan met zoveel mogelijk mensen tegelijk.
                </p>
              </div>

              {/* Principles grid */}
              <div>
                <p className="font-mono uppercase typo-label typo-caption mb-4" style={{ letterSpacing: "0.16em" }}>
                  — Hoe wij werken
                </p>
                <div className="grid grid-cols-2" style={{ border: "2px solid #0E0E0C" }}>
                  {principles.map((p, i) => {
                    const isLastRow = i >= principles.length - 2;
                    const isRight = i % 2 === 1;
                    return (
                      <div
                        key={p}
                        className="p-5 flex items-start gap-3"
                        style={{
                          background: i % 3 === 0 ? "#FFFFFF" : "#F4F1E8",
                          borderRight: isRight ? undefined : "1px solid #C0BDB0",
                          borderBottom: isLastRow ? undefined : "1px solid #C0BDB0",
                          minHeight: 90,
                        }}
                      >
                        <span
                          style={{ width: 6, height: 6, background: "#C8F000", display: "inline-block", flexShrink: 0, marginTop: 8 }}
                        />
                        <span className="font-mono uppercase typo-sm typo-heading" style={{ letterSpacing: "0.1em", lineHeight: 1.35 }}>
                          {p}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORMULIER */}
        <div style={{ height: 5, background: "#C8F000" }} />
        <section id="contact" className="py-20 sm:py-28 md:py-32" style={{ background: "#0E0E0C" }}>
          <div className="max-w-[640px] mx-auto px-5 sm:px-10">
            <p className="font-mono uppercase typo-label mb-6" style={{ color: "#C8F000", letterSpacing: "0.18em" }}>
              — Builder application
            </p>
            <h2
              className="font-display typo-heading-dark mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: "var(--leading-tight)" }}
            >
              VERTEL WAAR JIJ<br />ENERGIE VAN KRIJGT.
            </h2>
            <p className="font-sans typo-md typo-body-dark mb-10 sm:mb-12" style={{ lineHeight: "var(--leading-loose)" }}>
              Geen verkooppraatje, geen pitchdeck. Eén bericht, dan weten we binnen een week of er iets ligt om samen te bouwen.
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                const form = e.currentTarget;
                const data = new FormData(form);
                const formValues = {
                  name: (data.get("name") as string).trim(),
                  email: (data.get("email") as string).trim(),
                  interest: data.get("interest") as string,
                  message: (data.get("message") as string).trim(),
                  linkedin: (data.get("linkedin") as string)?.trim() || null,
                };
                const { error } = await supabase
                  .from("meebouwen_submissions")
                  .insert(formValues);
                if (error) {
                  setSubmitting(false);
                  toast({
                    title: "Er ging iets mis",
                    description: "Probeer het opnieuw of mail naar tom@oakmarketing.nl",
                    variant: "destructive",
                  });
                  return;
                }
                supabase.functions
                  .invoke("notify-submission", { body: formValues })
                  .catch(console.error);
                gtmEvent("form_submit", {
                  form_name: "meebouwen",
                  form_interest: formValues.interest,
                });
                setSubmitting(false);
                navigate("/bedankt");
              }}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Je naam"
                aria-label="Je naam"
                required
                maxLength={100}
                style={inputStyle}
              />
              <input
                type="email"
                name="email"
                placeholder="je@emailadres.nl"
                aria-label="E-mailadres"
                required
                maxLength={255}
                style={inputStyle}
              />
              <select
                name="interest"
                aria-label="Waar wil je bij aansluiten?"
                required
                value={presetInterest}
                onChange={(e) => setPresetInterest(e.target.value)}
                style={{ ...inputStyle, appearance: "none" }}
              >
                <option value="" disabled style={{ color: "#7A7870" }}>
                  Waar wil je bij aansluiten?
                </option>
                <option value="investeren">Ik wil investeren</option>
                <option value="meebouwen">Ik wil meebouwen</option>
                <option value="idee">Ik wil een idee bespreken</option>
                <option value="samenwerken">Ik wil samenwerken</option>
                <option value="specialist">Ik wil aansluiten als specialist</option>
                <option value="venture">Ik wil instappen bij een venture</option>
                <option value="anders">Iets anders</option>
              </select>
              <textarea
                name="message"
                placeholder="Waar zie jij kansen, energie of momentum?"
                aria-label="Jouw bericht — waar zie jij kansen, energie of momentum?"
                required
                maxLength={2000}
                style={{ ...inputStyle, minHeight: 160, resize: "vertical" }}
              />
              <input
                type="url"
                name="linkedin"
                placeholder="linkedin.com/in/jouw-naam"
                aria-label="LinkedIn-profiel URL (optioneel)"
                maxLength={300}
                style={inputStyle}
              />
              <button
                type="submit"
                disabled={submitting}
                className="font-mono uppercase font-bold typo-btn min-h-[56px] w-full inline-flex items-center justify-center gap-2 mt-2"
                style={{
                  background: "#C8F000",
                  color: "#0E0E0C",
                  border: "none",
                  cursor: submitting ? "wait" : "pointer",
                  opacity: submitting ? 0.7 : 1,
                  letterSpacing: "0.12em",
                }}
              >
                {submitting ? "Versturen..." : "Start het gesprek →"}
              </button>
            </form>
          </div>
        </section>

        {/* MANIFESTO QUOTE */}
        <Manifesto
          theme="light"
          kicker="— Slotstatement"
          statement="NIET IEDEREEN HOEFT MEE TE BOUWEN."
          highlightIndex={1}
          attribution="Maar als wel — dan moeten we waarschijnlijk praten."
        />

        {/* CLOSING CTA */}
        <section className="py-20 sm:py-28" style={{ background: "#F4F1E8", borderTop: "1px solid #C0BDB0" }}>
          <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
            <p className="font-mono uppercase typo-label typo-caption mb-6" style={{ letterSpacing: "0.18em" }}>
              — Maar als je energie krijgt van
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {["ideeën", "systemen", "ventures", "snelheid", "bouwen"].map((w) => (
                <span
                  key={w}
                  className="font-display typo-heading"
                  style={{
                    fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
                    lineHeight: 1,
                    padding: "6px 14px",
                    background: "#0E0E0C",
                    color: "#F4F1E8",
                  }}
                >
                  {w.toUpperCase()}
                </span>
              ))}
            </div>
            <p className="font-display typo-heading mb-10" style={{ fontSize: "clamp(1.4rem,3vw,2rem)", lineHeight: "var(--leading-tight)" }}>
              …dan moeten we waarschijnlijk praten.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/ventures"
                className="inline-flex items-center justify-center font-mono font-bold uppercase typo-btn min-h-[52px] transition-colors"
                style={{
                  border: "2px solid #0E0E0C",
                  color: "#0E0E0C",
                  padding: "0 32px",
                  letterSpacing: "0.12em",
                  textDecoration: "none",
                }}
              >
                Bekijk ventures →
              </Link>
              <button
                onClick={() => scrollToContact()}
                className="inline-flex items-center justify-center font-mono font-bold uppercase typo-btn min-h-[52px] transition-colors"
                style={{
                  background: "#0E0E0C",
                  color: "#C8F000",
                  padding: "0 32px",
                  letterSpacing: "0.12em",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Start gesprek →
              </button>
            </div>
          </div>
        </section>
      <Footer />
    </main>
  );
};

export default MeebouwenPage;
