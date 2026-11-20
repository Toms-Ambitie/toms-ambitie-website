import { createRoot, hydrateRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import "./index.css";
import "./styles/site.css";
import { initWebVitals } from "./lib/webVitals";

const root = document.getElementById("root")!;
// Pages are prerendered at build time (scripts/prerender.mjs): take over that HTML instead of rebuilding it.
// The tree must be exactly the one the prerender renders, so Vercel Analytics gets a root of its own.
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
createRoot(document.createElement("div")).render(<Analytics />);

// Start Core Web Vitals monitoring after first paint so it doesn't block LCP.
if (typeof window !== "undefined") {
  if ("requestIdleCallback" in window) {
    (window as Window).requestIdleCallback(() => initWebVitals(), { timeout: 3000 });
  } else {
    setTimeout(initWebVitals, 0);
  }
}
