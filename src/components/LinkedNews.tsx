import { Link } from "react-router-dom";
import { getNewsByTag, formatNewsDate } from "@/data/news";
import type { ProjectTag } from "@/data/projectTags";

type Variant = "light" | "dark";

type Props = {
  tag: ProjectTag;
  /** Hoeveel items maximaal tonen. Default 2. */
  limit?: number;
  /** Donker = op paper achtergrond, light = op ink achtergrond. */
  variant?: Variant;
  /** Klikken op nieuws-item moet niet de bovenliggende kaart-knop triggeren. */
  stopPropagation?: boolean;
  className?: string;
};

/**
 * Compacte "Laatste updates"-strip die nieuwsberichten toont
 * gematcht op `tag` (case-insensitief).
 */
export const LinkedNews = ({
  tag,
  limit = 2,
  variant = "dark",
  stopPropagation = false,
  className = "",
}: Props) => {
  const items = getNewsByTag(tag, limit);

  const isLight = variant === "light";
  const labelColor = isLight ? "text-paper/65" : "text-ink/65";
  const titleColor = isLight ? "text-paper" : "text-ink";
  const dateColor = isLight ? "text-paper/60" : "text-ink/55";
  const borderColor = isLight ? "border-paper/15" : "border-ink/10";
  const hoverColor = isLight ? "hover:text-volt" : "hover:text-orange";
  const mutedColor = isLight ? "text-paper/55" : "text-ink/55";

  return (
    <div className={`pt-4 mt-4 border-t ${borderColor} ${className}`}>
      <p
        className={`font-mono text-[10px] uppercase tracking-[0.12em] ${labelColor} mb-2`}
      >
        Laatste updates
      </p>

      {items.length === 0 ? (
        <div className="flex items-baseline gap-2 text-[13px] leading-snug">
          <span
            aria-hidden
            className={`font-mono text-[10px] uppercase tracking-[0.08em] shrink-0 ${dateColor}`}
          >
            ——
          </span>
          <span className={mutedColor}>
            Nog geen updates.{" "}
            <Link
              to="/nieuws"
              onClick={(e) => stopPropagation && e.stopPropagation()}
              className={`underline underline-offset-2 ${titleColor} ${hoverColor} transition-colors`}
            >
              Bekijk alle berichten →
            </Link>
          </span>
        </div>
      ) : (
        <ul className="flex flex-col gap-1.5">
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                to={`/nieuws/${item.slug}`}
                onClick={(e) => stopPropagation && e.stopPropagation()}
                className={`flex items-baseline gap-2 text-[13px] leading-snug ${titleColor} ${hoverColor} transition-colors`}
              >
                <time
                  dateTime={item.date}
                  className={`font-mono text-[10px] uppercase tracking-[0.08em] shrink-0 ${dateColor}`}
                >
                  {formatNewsDate(item.date)}
                </time>
                <span className="truncate">→ {item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
