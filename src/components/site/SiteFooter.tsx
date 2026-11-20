import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot2">
          <div className="fa">
            <img src="/ta/logo-negatief.svg" alt="Toms Ambitie" width={191} height={54} loading="lazy" />
            <p className="hand">Als je het kunt bedenken, kun je het ook doen.</p>
          </div>
          <nav aria-label="Pagina's">
            <b>Pagina's</b>
            <Link to="/">Home</Link>
            <Link to="/ventures">Ventures</Link>
            <Link to="/werkwijze">Werkwijze</Link>
            <Link to="/over-ons">Over ons</Link>
            <Link to="/nieuws">Nieuws</Link>
            <Link to="/meebouwen">Bouw mee</Link>
            <Link to="/persmap">Persmap</Link>
          </nav>
          <nav aria-label="Ventures">
            <b>Ventures</b>
            <a href="https://postpilotapp.nl">PostPilot</a>
            <a href="https://emmastudio.nl">EmmaStudio</a>
          </nav>
          <nav aria-label="Contact">
            <b>Contact</b>
            <a href="mailto:hallo@toms-ambitie.nl">hallo@toms-ambitie.nl</a>
            <a href="https://www.linkedin.com/company/tomsambitie/">LinkedIn</a>
            <span>Zwolle, Nederland</span>
          </nav>
        </div>
        <div className="foot">
          <span suppressHydrationWarning>© {new Date().getFullYear()} Toms Ambitie · Zwolle</span>
          <span>
            <Link to="/privacy">Privacy</Link> · <Link to="/voorwaarden">Voorwaarden</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
