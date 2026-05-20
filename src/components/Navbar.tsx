import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { ScrollProgress } from "./ScrollProgress";

const LogoDark = () => (
  <svg width="36" height="26" viewBox="0 0 126 92" aria-hidden="true" fill="none">
    <rect x="2" y="10" width="54" height="10" fill="#0E0E0C" />
    <rect x="23" y="10" width="12" height="54" fill="#0E0E0C" />
    <path d="M72 65 L96 10 L120 65" fill="none" stroke="#0E0E0C" strokeWidth="10" strokeLinejoin="round" />
    <line x1="79" y1="46" x2="113" y2="46" stroke="#0E0E0C" strokeWidth="8" />
    <rect x="2" y="78" width="120" height="6" fill="#C8F000" />
  </svg>
);

const links = [
  { to: "/werkwijze", label: "Werkwijze" },
  { to: "/ventures", label: "Ventures" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/nieuws", label: "Blog" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Body scroll-lock while mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    const onClick = (e: PointerEvent) => {
      const t = e.target as Node;
      if (menuRef.current?.contains(t) || toggleRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onClick); };
  }, [open]);

  const isActive = (to: string) => location.pathname === to || location.pathname.startsWith(to + "/");

  return (
    <>
    <ScrollProgress />
    <a
      href="#main-content"
      onClick={(e) => {
        e.preventDefault();
        const h1 = document.querySelector<HTMLElement>('h1');
        if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus(); }
      }}
      className="fixed top-0 left-0 font-mono font-bold uppercase z-[200] -translate-y-full focus:translate-y-0 transition-transform duration-150"
      style={{ background: "#C8F000", color: "#0E0E0C", fontSize: 11, letterSpacing: "0.12em", padding: "14px 24px" }}
    >
      Ga naar inhoud
    </a>
    <nav
      className="fixed top-0 inset-x-0 z-50"
      style={{
        height: 64,
        background: scrolled
          ? "rgba(251, 250, 246, 0.88)"
          : "rgba(251, 250, 246, 0.78)",
        backdropFilter: "blur(20px) saturate(140%)",
        WebkitBackdropFilter: "blur(20px) saturate(140%)",
        borderBottom: scrolled ? "1px solid rgba(14,14,12,0.08)" : "1px solid transparent",
        transition: "background 0.2s ease, border-color 0.2s ease",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, width: "100%" }}>
      <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Toms Ambitie — Home">
        <LogoDark />
        <span
          className="font-display hidden sm:inline"
          style={{ fontSize: 18, color: "#0E0E0C", letterSpacing: "0.04em" }}
        >
          TOMS AMBITIE
        </span>
      </Link>

      {/* Desktop */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="font-mono text-[11px] uppercase transition-colors"
              style={{
                letterSpacing: "0.12em",
                color: isActive(l.to) ? "#0E0E0C" : "rgba(14,14,12,0.5)",
                fontWeight: isActive(l.to) ? 700 : 400,
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/meebouwen"
            className="font-mono text-[11px] font-bold uppercase inline-flex items-center hover:bg-[#DCF55E] transition-colors"
            style={{
              background: "#C8F000",
              color: "#0E0E0C",
              letterSpacing: "0.1em",
              padding: "9px 16px",
              textDecoration: "none",
            }}
          >
            Start gesprek →
          </Link>
        </li>
      </ul>

      {/* Mobile toggle — min 44×44 tap target */}
      <button
        ref={toggleRef}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden"
        aria-label={open ? "Menu sluiten" : "Menu openen"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        style={{
          color: "#0E0E0C",
          minWidth: 44,
          minHeight: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: -10,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu — full-height overlay */}
      {open && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="menu"
          className="fixed inset-x-0 md:hidden"
          style={{
            top: 56,  /* matches mobile nav height */
            bottom: 0,
            background: "rgba(251, 250, 246, 0.98)",
            backdropFilter: "blur(24px)",
            borderTop: "1px solid rgba(14,14,12,0.08)",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            zIndex: 49,
          }}
        >
          <ul className="flex flex-col px-6" style={{ paddingTop: 8 }}>
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  role="menuitem"
                  className="flex items-center font-mono uppercase transition-colors"
                  style={{
                    letterSpacing: "0.12em",
                    fontSize: 13,
                    color: isActive(l.to) ? "#0E0E0C" : "rgba(14,14,12,0.55)",
                    fontWeight: isActive(l.to) ? 700 : 400,
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(14,14,12,0.06)",
                    minHeight: 56,
                  }}
                >
                  {l.label}
                  {isActive(l.to) && (
                    <span style={{ marginLeft: "auto", width: 6, height: 6, background: "#C8F000" }} />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ padding: "20px 24px 32px", marginTop: "auto" }}>
            <Link
              to="/meebouwen"
              role="menuitem"
              className="font-mono uppercase font-bold hover:bg-[#DCF55E] transition-colors"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#C8F000",
                color: "#0E0E0C",
                letterSpacing: "0.1em",
                fontSize: 12,
                minHeight: 52,
                textDecoration: "none",
              }}
            >
              Start gesprek →
            </Link>
          </div>
        </div>
      )}
      </div>
    </nav>
    </>
  );
};
