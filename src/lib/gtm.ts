/**
 * Google Tag Manager dataLayer helper.
 * Push custom events so GTM can pick them up as triggers.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function gtmEvent(
  event: string,
  params?: Record<string, unknown>,
) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
