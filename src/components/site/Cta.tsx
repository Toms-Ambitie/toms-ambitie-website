import type { ReactNode } from "react";

type CtaProps = {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  children?: ReactNode;
  /** Tom sticker peeking in from the bottom right (decoration). */
  peek?: { src: string; srcSet?: string; width: number; height: number };
};

/** Closing section on ink, used at the bottom of every page. */
export function Cta({ eyebrow, title, text, children, peek }: CtaProps) {
  return (
    <section className="cta on-ink">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="d">{title}</h2>
        {text && <p className="cta-p">{text}</p>}
        {children}
      </div>
      {peek && (
        <img
          className="stk peek"
          src={peek.src}
          srcSet={peek.srcSet}
          sizes="(max-width:900px) 200px, 26vw"
          width={peek.width}
          height={peek.height}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
      )}
    </section>
  );
}

/** One highlighted word in a heading on ink (text stays ink on the marker). */
export const HlInk = ({ children }: { children: ReactNode }) => (
  <span className="hl" style={{ color: "var(--inkt)" }}>
    {children}
  </span>
);
