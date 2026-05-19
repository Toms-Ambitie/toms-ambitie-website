/**
 * Core Web Vitals monitoring.
 *
 * Reports LCP, INP, CLS, FCP, TTFB to:
 *   1. GTM dataLayer (event: "web_vitals") — for GA4 / Looker dashboards
 *   2. console.table in development for quick local inspection
 *
 * In GA4 you can build a report on the "web_vitals" event with parameters:
 *   metric_name, metric_value, metric_rating, metric_id, page_path, device_type
 */
import { onCLS, onINP, onLCP, onFCP, onTTFB, type Metric } from "web-vitals";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const getDeviceType = (): "mobile" | "tablet" | "desktop" => {
  const w = window.innerWidth;
  if (w < 768) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
};

const report = (metric: Metric) => {
  const payload = {
    event: "web_vitals",
    metric_name: metric.name,
    metric_value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    metric_rating: metric.rating, // "good" | "needs-improvement" | "poor"
    metric_id: metric.id,
    metric_delta: Math.round(metric.name === "CLS" ? metric.delta * 1000 : metric.delta),
    page_path: window.location.pathname,
    device_type: getDeviceType(),
    navigation_type: metric.navigationType,
  };

  // Push to GTM dataLayer (GTM is already loaded in index.html)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log(
      `%c[Web Vitals] ${metric.name}`,
      `color: ${metric.rating === "good" ? "#0a0" : metric.rating === "poor" ? "#c00" : "#c80"}; font-weight: bold`,
      `${payload.metric_value}${metric.name === "CLS" ? " (×1000)" : "ms"} — ${metric.rating}`,
    );
  }
};

export const initWebVitals = () => {
  onLCP(report);
  onINP(report);
  onCLS(report);
  onFCP(report);
  onTTFB(report);
};
