import { useEffect, useState } from "react";
import { Ring } from "./Ring";
import { reducedMotion } from "./motion";

const KEY = "ta-intro";

/** Once per visit: "praten" struck through, "doen" circled, then the sheet slides away. */
export function Intro() {
  const [phase, setPhase] = useState<"show" | "out" | "gone">(() => {
    if (typeof window === "undefined" || reducedMotion()) return "gone";
    try {
      if (sessionStorage.getItem(KEY) === "1") return "gone";
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* storage blocked: show the intro, it is harmless */
    }
    return "show";
  });

  useEffect(() => {
    if (phase !== "show") return;
    const a = window.setTimeout(() => setPhase("out"), 1700);
    const b = window.setTimeout(() => setPhase("gone"), 2600);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, [phase]);

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
