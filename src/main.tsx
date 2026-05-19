import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initWebVitals } from "./lib/webVitals";

createRoot(document.getElementById("root")!).render(<App />);

// Start Core Web Vitals monitoring after first paint so it doesn't block LCP.
if (typeof window !== "undefined") {
  if ("requestIdleCallback" in window) {
    (window as Window).requestIdleCallback(() => initWebVitals(), { timeout: 3000 });
  } else {
    setTimeout(initWebVitals, 0);
  }
}
