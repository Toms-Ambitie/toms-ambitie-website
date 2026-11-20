import { Fragment, type ReactNode } from "react";

/** Category names as shown on the site (the data keeps the English "Origin story"). */
export const catLabel = (cat?: string) => (cat === "Origin story" ? "Hoe het begon" : cat ?? "");

export const NEWS_FILTERS = ["Venture update", "Origin story", "Les geleerd", "Beslissing", "Achter de schermen", "Experiment"];

/** Venture name styled by its outcome: stopped is struck through, sold is highlighted. */
export function VentureMark({ name }: { name?: string }) {
  if (!name) return null;
  if (["DesignerShirts", "PartyBlender", "Plug and Power"].includes(name)) return <span className="xs">{name}</span>;
  if (name === "LED-IBC") return <span className="sold nobr">{name}</span>;
  return <>{name}</>;
}

/** "LED-IBC" never breaks over two lines in a heading. */
export function keepTogether(text: string): ReactNode {
  const parts = text.split("LED-IBC");
  if (parts.length === 1) return text;
  return parts.map((p, i) => (
    <Fragment key={i}>
      {p}
      {i < parts.length - 1 && <span className="nobr">LED-IBC</span>}
    </Fragment>
  ));
}

/** Heading text with the marker on the given word only; without a word, no marker. */
export function headline(text: string, word?: string, onInk = false): ReactNode {
  const i = word ? text.lastIndexOf(word) : -1;
  if (!word || i < 0) return keepTogether(text);
  return (
    <>
      {keepTogether(text.slice(0, i))}
      <span className="hl" style={onInk ? { color: "var(--inkt)" } : undefined}>
        {keepTogether(word)}
      </span>
      {keepTogether(text.slice(i + word.length))}
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
