import { useEffect, useState } from "react";
import { Ring } from "./Ring";

/**
 * Once per visit: "praten" struck through, "doen" circled, then the sheet slides away.
 * Whether it plays is decided by the inline script in index.html (class "intro-done"),
 * so the prerendered page and the first paint already agree.
 */
export function Intro() {
  const [phase, setPhase] = useState<"show" | "out" | "gone">("show");

  useEffect(() => {
    const html = document.documentElement;
    if (html.classList.contains("intro-done")) {
      setPhase("gone");
      return;
    }
    const a = window.setTimeout(() => setPhase("out"), 1700);
    const b = window.setTimeout(() => {
      setPhase("gone");
      html.classList.add("intro-done");
    }, 2600);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, []);

  if (phase === "gone") return null;
  return (
    <div id="intro" className={phase === "out" ? "out" : undefined} aria-hidden="true">
      <div className="w">
        <s>praten</s>{" "}
        <span>
          doen
          <Ring play delay={450} />
        </span>
      </div>
    </div>
  );
}
