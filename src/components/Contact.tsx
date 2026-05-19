import { useState, type FormEvent } from "react";
import { z } from "zod";
import { gtmEvent } from "@/lib/gtm";

const RECIPIENT = "tom@oakmarketing.nl";

const schema = z.object({
  name: z.string().trim().min(2, "Vul je naam in").max(100),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  kvk: z
    .string()
    .trim()
    .max(16, "KVK-nummer is te lang")
    .regex(/^[0-9 .-]*$/, "Alleen cijfers toegestaan")
    .optional()
    .or(z.literal("")),
  subject: z.string().trim().min(2, "Onderwerp ontbreekt").max(150),
  message: z.string().trim().min(10, "Geef wat meer context (min. 10 tekens)").max(2000),
});

type FormState = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  kvk: "",
  subject: "",
  message: "",
};

export const Contact = () => {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const d = result.data;
    const subject = `[Toms Ambitie] ${d.subject}`;
    const bodyLines = [
      "Beste Tom,",
      "",
      d.message,
      "",
      "—",
      "Verzonden via toms-ambitie.nl",
      "",
      "GEGEVENS AFZENDER",
      `Naam:     ${d.name}`,
      `E-mail:   ${d.email}`,
      `Bedrijf:  ${d.company || "-"}`,
      `KVK:      ${d.kvk || "-"}`,
    ];
    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    gtmEvent("form_submit", {
      form_name: "contact",
      form_subject: d.subject,
    });
    window.location.href = mailto;
    setSent(true);
  };

  const reset = () => {
    setForm(initial);
    setErrors({});
    setSent(false);
  };

  return (
    <section id="contact" className="bg-paper py-20 sm:py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10">
        <p className="stag text-stone-brand mb-4">07 — Sluit aan</p>
        <h2 className="font-display text-ink text-5xl sm:text-6xl md:text-7xl mb-6">
          MEE
          <br />
          BOUWEN?
        </h2>
        <p className="text-stone-brand text-base sm:text-lg max-w-[540px] leading-relaxed mb-10 md:mb-12">
          Idee, kapitaal, een bedrijf met potentie, of een specialisme dat in de schil past?
          Schrijf kort wat je wil. We lezen alles zelf en antwoorden meestal binnen een dag.
        </p>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-[2px] bg-ink border-2 border-ink">
          {/* FORM */}
          <div className="bg-paper p-6 sm:p-8 md:p-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink mb-6 inline-flex items-center gap-2 bg-volt px-2 py-1">
              ✎ Stuur een bericht
            </div>

            {sent ? (
              <div className="border-l-4 border-volt bg-paper2 p-6">
                <div className="font-display text-ink text-2xl md:text-3xl mb-2">
                  JE MAILCLIENT IS GEOPEND.
                </div>
                <p className="text-sm text-stone-brand leading-relaxed mb-4">
                  Controleer het bericht in je e-mailprogramma en klik op verzenden. Niets gebeurd?{" "}
                  Mail dan rechtstreeks naar{" "}
                  <a
                    href={`mailto:${RECIPIENT}`}
                    className="text-ink underline decoration-volt decoration-[3px] underline-offset-4"
                  >
                    {RECIPIENT}
                  </a>
                  .
                </p>
                <button
                  onClick={reset}
                  className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink border-b-2 border-ink hover:text-orange hover:border-orange transition-colors"
                >
                  Nieuw bericht opstellen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field
                    label="Naam"
                    required
                    value={form.name}
                    onChange={update("name")}
                    error={errors.name}
                    autoComplete="name"
                  />
                  <Field
                    label="E-mail"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    error={errors.email}
                    autoComplete="email"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field
                    label="Bedrijf"
                    value={form.company || ""}
                    onChange={update("company")}
                    error={errors.company}
                    autoComplete="organization"
                  />
                  <Field
                    label="KVK-nummer"
                    value={form.kvk || ""}
                    onChange={update("kvk")}
                    error={errors.kvk}
                    placeholder="bijv. 70590907"
                    inputMode="numeric"
                  />
                </div>
                <Field
                  label="Onderwerp"
                  required
                  value={form.subject}
                  onChange={update("subject")}
                  error={errors.subject}
                  placeholder="Instappen / venture-idee / specialisme / vraag …"
                />
                <Field
                  label="Bericht"
                  required
                  textarea
                  value={form.message}
                  onChange={update("message")}
                  error={errors.message}
                  placeholder="Vertel kort waar het over gaat."
                />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/70">
                    → Opent je eigen mailclient
                  </p>
                  <button
                    type="submit"
                    className="bg-ink text-paper font-mono text-[11px] uppercase tracking-[0.18em] px-6 py-4 hover:bg-volt hover:text-ink transition-colors border-l-4 border-volt"
                  >
                    Verstuur bericht ↗
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* COMPANY DETAILS */}
          <div className="bg-paper flex flex-col">
            <div className="p-6 sm:p-8 md:p-10 border-b border-stone/30">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink mb-4 inline-flex items-center gap-2 bg-volt px-2 py-1">
                ✉ Direct mailen
              </div>
              <a
                href={`mailto:${RECIPIENT}`}
                className="font-display text-ink text-lg sm:text-xl md:text-2xl xl:text-3xl tracking-wide hover:text-orange transition-colors break-all leading-tight block"
              >
                {RECIPIENT}
              </a>
              <p className="text-xs text-stone-brand mt-3 leading-relaxed">
                Komt direct bij de kern terecht. Geen tussenpersoon, geen helpdesk.
              </p>
            </div>
            <div className="p-6 sm:p-8 md:p-10 flex-1">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink mb-4 inline-flex items-center gap-2 bg-volt px-2 py-1">
                ⚙ Bedrijfsgegevens
              </div>
              <dl className="font-mono text-[13px] text-ink space-y-2">
                {[
                  ["KVK", "70590907"],
                  ["BTW-ID", "NL002010180B20"],
                  ["Vestiging", "Zwolle, NL"],
                ].map(([k, v], i, arr) => (
                  <div
                    key={k}
                    className={`flex justify-between gap-4 ${i < arr.length - 1 ? "border-b border-stone/40 pb-2" : ""}`}
                  >
                    <dt className="text-ink/70 uppercase text-[11px] tracking-[0.1em] pt-1">
                      {k}
                    </dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Field component ────────────────────────── */

type FieldProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  type?: string;
  textarea?: boolean;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "numeric" | "email";
};

const Field = ({
  label,
  value,
  onChange,
  required,
  type = "text",
  textarea,
  error,
  placeholder,
  autoComplete,
  inputMode,
}: FieldProps) => {
  const baseClasses =
    "w-full bg-paper2/60 border-2 px-4 py-3 text-ink text-sm font-sans focus:outline-none focus:border-ink transition-colors placeholder:text-ink/40";
  const borderClass = error ? "border-orange" : "border-ink/25";

  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/75 mb-2 flex items-center gap-2">
        {label}
        {required && <span className="text-orange">*</span>}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={5}
          className={`${baseClasses} ${borderClass} resize-y min-h-[120px]`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          className={`${baseClasses} ${borderClass}`}
        />
      )}
      {error && (
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-orange mt-1.5 block">
          ✗ {error}
        </span>
      )}
    </label>
  );
};
