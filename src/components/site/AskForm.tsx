import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Ring } from "./Ring";

export const PROBLEM_KEY = "ta-probleem";

/** "mijn probleem is…": the typed line goes along as the start of the message on /meebouwen. */
export function AskForm() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const circled = value.trim().length > 3;

  const go = () => {
    const probleem = value.trim();
    try {
      if (probleem) sessionStorage.setItem(PROBLEM_KEY, probleem);
      else sessionStorage.removeItem(PROBLEM_KEY);
    } catch {
      /* storage blocked: router state below still carries it */
    }
    navigate("/meebouwen", { state: probleem ? { probleem } : undefined });
  };

  return (
    <form
      className="ask"
      onSubmit={(e) => {
        e.preventDefault();
        go();
      }}
    >
      <label htmlFor="prob">Schrijf het op. Eén regel is genoeg.</label>
      <span className="fld">
        <input
          id="prob"
          type="text"
          autoComplete="off"
          maxLength={60}
          placeholder="mijn probleem is…"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={value ? { width: `${Math.max(8, Math.min(26, value.length * 0.55 + 2))}em` } : undefined}
        />
        {circled && <Ring play delay={400} />}
      </span>
      <div className="row2">
        <button className="btn inv" type="submit">
          Start gesprek <i>→</i>
        </button>
        <span className="mail">
          of mail naar <a href="mailto:hallo@toms-ambitie.nl">hallo@toms-ambitie.nl</a>
        </span>
      </div>
    </form>
  );
}
