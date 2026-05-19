import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: "section" | "div" | "article";
  delay?: number;
}

export const ScrollReveal = ({ children, className = "", style, as: Tag = "div", delay = 0 }: Props) => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
};
