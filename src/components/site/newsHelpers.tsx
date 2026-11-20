import type { ReactNode } from "react";

/** Category names as shown on the site (the data keeps the English "Origin story"). */
export const catLabel = (cat?: string) => (cat === "Origin story" ? "Hoe het begon" : cat ?? "");

export const NEWS_FILTERS = ["Venture update", "Origin story", "Les geleerd", "Beslissing", "Achter de schermen", "Experiment"];

/** Venture name styled by its outcome: stopped is struck through, sold is highlighted. */
export function VentureMark({ name }: { name?: string }) {
  if (!name) return null;
  if (["DesignerShirts", "PartyBlender", "Plug and Power"].includes(name)) return <span className="xs">{name}</span>;
  if (name === "LED-IBC") return <span className="sold">{name}</span>;
  return <>{name}</>;
}

/** Marks the last word of a heading (one highlighted word per heading). */
export function hlLast(text: string, onInk = false): ReactNode {
  const i = text.lastIndexOf(" ");
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i + 1)}
      <span className="hl" style={onInk ? { color: "var(--inkt)" } : undefined}>
        {text.slice(i + 1)}
      </span>
    </>
  );
}

const MONTHS = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];

/** "20 september 2026" → "2026-09-20" */
export function isoDate(nl: string): string | undefined {
  const m = nl.trim().match(/^(\d{1,2}) (\p{L}+) (\d{4})$/u);
  if (!m) return undefined;
  const month = MONTHS.indexOf(m[2].toLowerCase()) + 1;
  if (!month) return undefined;
  return `${m[3]}-${String(month).padStart(2, "0")}-${m[1].padStart(2, "0")}`;
}
