/** Canonical production marketing origin — never www. */
export const SITE_ORIGIN = "https://konexa.space";

/** Future app / deep-link host (not deployed in this project). */
export const APP_ORIGIN = "https://app.konexa.space";

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}
