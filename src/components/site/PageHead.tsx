import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";

type PageHeadProps = {
  eyebrow: string;
  title: ReactNode;
  titleStyle?: CSSProperties;
  /** handwritten note; in the wide layout it sits above the lead */
  hand?: string;
  lead?: ReactNode;
  back?: { to: string; label: string };
  /** wide: title full width, note + lead in a row below it */
  wide?: boolean;
  /** right column in the two-column layout (e.g. a small film) */
  aside?: ReactNode;
  className?: string;
};

/** Page header: label, heading, scribble and intro. Used on every page except home. */
export function PageHead({ eyebrow, title, titleStyle, hand, lead, back, wide, aside, className = "" }: PageHeadProps) {
  const top = (
    <>
      {back && (
        <Link className="back" to={back.to}>
          {back.label}
        </Link>
      )}
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="d" style={titleStyle}>
        {title}
      </h1>
    </>
  );

  return (
    <header className={`phead ${className}`.trim()}>
      <div className={`wrap phead-g${wide ? " wide" : ""}`}>
        {wide ? (
          <>
            <div>{top}</div>
            <div>
              {hand && <p className="hand">{hand}</p>}
              {lead && <p className="lead">{lead}</p>}
            </div>
          </>
        ) : (
          <>
            <div>
              {top}
              {hand && <p className="hand">{hand}</p>}
              {lead && <p className="lead">{lead}</p>}
            </div>
            {aside}
          </>
        )}
      </div>
    </header>
  );
}
