import { useState, useEffect } from "react";
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
  const location = useLocation();

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on desktop resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Scroll-lock + ESC key
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  const isActive = (to: string) =>
    location.pathname === to || location.pathname.startsWith(to + "/");

  return (
    <>
      <ScrollProgress />

      {/* Skip-to-content — volledig inline styles zodat hij nooit ruimte inneemt vóór CSS laadt */}
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          const h1 = document.querySelector<HTMLElement>("h1");
          if (h1) { h1.setAttribute("tabindex", "-1"); h1.focus(); }
        }}
        style={{
          position: "fixed", top: 0, left: 0,
          transform: "translateY(-100%)",
          background: "#C8F000", color: "#0E0E0C",
          fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase",
          padding: "14px 24px", zIndex: 200,
          textDecoration: "none", transition: "transform 0.15s",
        }}
        onFocus={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
        onBlur={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-100%)"; }}
      >
        Ga naar inhoud
      </a>

      {/* ── Nav bar ───────────────────────────────────────────── */}
      <nav
        className="fixed top-0 inset-x-0 z-50"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 64,
          background: scrolled ? "rgba(251,250,246,0.96)" : "rgba(251,250,246,0.80)",
          backdropFilter: "blur(20px) saturate(140%)",
          WebkitBackdropFilter: "blur(20px) saturate(140%)",
          borderBottom: scrolled ? "1px solid rgba(14,14,12,0.08)" : "1px solid transparent",
          transition: "background 0.2s ease, border-color 0.2s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 32px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Toms Ambitie — Home">
            <LogoDark />
            <span
              className="font-display hidden sm:inline"
              style={{ fontSize: 18, color: "#0E0E0C", letterSpacing: "0.04em" }}
            >
              TOMS AMBITIE
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8" style={{ margin: 0, padding: 0, listStyle: "none" }}>
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

          {/* ── Hamburger toggle — mobile only ──
              No inline display property here so md:hidden works correctly.
              Tailwind: flex on mobile, none on md+. ── */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden flex items-center justify-center"
            style={{
              minWidth: 44,
              minHeight: 44,
              marginRight: -10,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#0E0E0C",
              padding: 0,
            }}
          >
            {open ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu overlay — OUTSIDE <nav> to avoid its stacking context ── */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigatie"
          className="fixed inset-x-0 flex flex-col"
          style={{
            top: 64,
            bottom: 0,
            zIndex: 49,
            background: "rgba(251,250,246,0.98)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderTop: "1px solid rgba(14,14,12,0.08)",
            overflowY: "auto",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: "8px 24px 0",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="font-mono uppercase"
                  style={{
                    display: "flex",
                    alignItems: "center",
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
                    <span
                      aria-hidden="true"
                      style={{ marginLeft: "auto", width: 6, height: 6, background: "#C8F000", flexShrink: 0 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Sticky CTA at bottom */}
          <div style={{ marginTop: "auto", padding: "20px 24px 40px" }}>
            <Link
              to="/meebouwen"
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
    </>
  );
};
