import { ScrollReveal } from "@/components/ScrollReveal";

interface Props {
  /** ALL CAPS oversized statement. Wrap a key word in {volt: "WORD"} via children if needed. */
  statement: string;
  /** Subtle line above the statement — e.g. "— Manifest" of "— Observatie". */
  kicker?: string;
  /** Short body line under the statement. Optional. */
  attribution?: string;
  /** Color theme: "dark" (paper bg) or "light" (ink bg). */
  theme?: "dark" | "light";
  /** Word index within the statement to highlight in volt. 0-indexed by space-split words. */
  highlightIndex?: number;
}

export const Manifesto = ({
  statement,
  kicker,
  attribution,
  theme = "dark",
  highlightIndex,
}: Props) => {
  const isLight = theme === "light";
  const bg = isLight ? "#0E0E0C" : "#F4F1E8";
  const baseColor = isLight ? "#F4F1E8" : "#0E0E0C";
  const mutedColor = isLight ? "rgba(255,255,255,0.45)" : "rgba(14,14,12,0.55)";

  const words = statement.split(" ");

  return (
    <section
      className="py-20 sm:py-28 md:py-36"
      style={{ background: bg, borderTop: `1px solid ${isLight ? "rgba(255,255,255,0.08)" : "#C0BDB0"}` }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
        <ScrollReveal>
          {kicker && (
            <p
              className="font-mono uppercase typo-label mb-8 sm:mb-12"
              style={{ color: mutedColor, letterSpacing: "0.18em" }}
            >
              {kicker}
            </p>
          )}
          <h2
            className="font-display"
            style={{
              color: baseColor,
              fontSize: "clamp(2.75rem, 9vw, 8rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
            }}
          >
            {words.map((w, i) => {
              const isHighlight = highlightIndex === i;
              return (
                <span
                  key={i}
                  className={isHighlight ? "manifesto-volt" : undefined}
                  style={{ display: "inline" }}
                >
                  {w}
                  {i < words.length - 1 ? " " : ""}
                </span>
              );
            })}
          </h2>
          {attribution && (
            <p
              className="font-mono uppercase typo-label mt-8 sm:mt-10"
              style={{ color: mutedColor, letterSpacing: "0.16em", maxWidth: 480 }}
            >
              {attribution}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};
