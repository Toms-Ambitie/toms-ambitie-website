import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/ventures", label: "Ventures" },
  { to: "/werkwijze", label: "Werkwijze" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/nieuws", label: "Nieuws" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      btnRef.current?.focus();
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!menuRef.current?.contains(t) && !btnRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <div className="nav">
      <div className="nav-in">
        <Link to="/" aria-label="Toms Ambitie, naar home">
          <img src="/ta/logo-negatief.svg" alt="Toms Ambitie" width={106} height={30} />
        </Link>
        {LINKS.map((l) => (
          <NavLink key={l.to} className="l" to={l.to}>
            {l.label}
          </NavLink>
        ))}
        <Link className="btn" to="/meebouwen">
          Start gesprek
        </Link>
        <button
          ref={btnRef}
          className="mbtn"
          type="button"
          aria-expanded={open}
          aria-controls="mmenu"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <i />
          <i />
        </button>
      </div>
      <nav ref={menuRef} className="mmenu" id="mmenu" aria-label="Menu" hidden={!open}>
        <NavLink to="/" end>
          Home
        </NavLink>
        {LINKS.map((l) => (
          <NavLink key={l.to} to={l.to}>
            {l.label}
          </NavLink>
        ))}
        <NavLink to="/meebouwen">Bouw mee</NavLink>
      </nav>
    </div>
  );
}
