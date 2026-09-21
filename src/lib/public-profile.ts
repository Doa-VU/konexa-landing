/** Public card contract shared by the landing page. Mirrors the app slug rules. */

export const SITE_ORIGIN = "https://konexa.space";
export const APP_ORIGIN = "https://app.konexa.space";

export const RESERVED_PUBLIC_SLUGS = [
  "about",
  "admin",
  "api",
  "app",
  "assets",
  "auth",
  "callback",
  "discover",
  "favicon",
  "feed",
  "index",
  "join",
  "konexa",
  "login",
  "messages",
  "network",
  "post",
  "privacy",
  "profile",
  "public",
  "robots",
  "search",
  "settings",
  "sitemap",
  "subscription-success",
  "support",
  "terms",
  "user",
  "www",
] as const;

export const PUBLIC_PROFILE_KEYS = [
  "user_id",
  "public_slug",
  "display_name",
  "avatar_url",
  "profession_title",
  "profession_category",
  "company",
  "region",
  "industries",
  "public_web_bio",
  "is_verified",
  "is_founder",
  "is_ambassador",
] as const;

const reserved = new Set<string>(RESERVED_PUBLIC_SLUGS);

export function normalizePublicSlug(raw: string): string {
  return raw.trim().toLowerCase();
}

export function publicSlugError(raw: string): "INVALID_SLUG" | "RESERVED_SLUG" | null {
  const slug = normalizePublicSlug(raw);
  if (slug.length < 3 || slug.length > 40) return "INVALID_SLUG";
  if (!/^[a-z0-9-]+$/.test(slug)) return "INVALID_SLUG";
  if (slug.startsWith("-") || slug.endsWith("-") || slug.includes("--")) {
    return "INVALID_SLUG";
  }
  if (reserved.has(slug)) return "RESERVED_SLUG";
  return null;
}

export const LANDING_STATIC_PATHS = ["/", "/privacy", "/support"] as const;

export function landingStaticPathWins(pathname: string): boolean {
  return (LANDING_STATIC_PATHS as readonly string[]).includes(pathname);
}

export type PublicProfileCard = {
  user_id: string;
  public_slug: string;
  display_name: string;
  avatar_url: string | null;
  profession_title: string | null;
  profession_category: string | null;
  company: string | null;
  region: string | null;
  industries: string[];
  public_web_bio: string | null;
  is_verified: boolean;
  is_founder: boolean;
  is_ambassador: boolean;
};

export function parsePublicProfile(value: unknown): PublicProfileCard | null {
  if (!value || typeof value !== "object") return null;
  const row = value as Record<string, unknown>;
  const userId = typeof row.user_id === "string" ? row.user_id : "";
  const slug = typeof row.public_slug === "string" ? row.public_slug : "";
  const name = typeof row.display_name === "string" ? row.display_name.trim() : "";
  if (!userId || !slug || !name) return null;
  const avatar = typeof row.avatar_url === "string" ? row.avatar_url : "";
  return {
    user_id: userId,
    public_slug: slug,
    display_name: name,
    avatar_url: avatar.startsWith("https://") ? avatar : null,
    profession_title: textOrNull(row.profession_title),
    profession_category: textOrNull(row.profession_category),
    company: textOrNull(row.company),
    region: textOrNull(row.region),
    industries: Array.isArray(row.industries)
      ? row.industries.filter((item): item is string => typeof item === "string")
      : [],
    public_web_bio: textOrNull(row.public_web_bio),
    is_verified: row.is_verified === true,
    is_founder: row.is_founder === true,
    is_ambassador: row.is_ambassador === true,
  };
}

function textOrNull(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}

export function appUserProfileUrl(userId: string): string {
  return `${APP_ORIGIN}/user/${encodeURIComponent(userId)}`;
}

export function publicProfileCanonical(slug: string): string {
  return `${SITE_ORIGIN}/${encodeURIComponent(normalizePublicSlug(slug))}`;
}

export function referrerClass(referrer: string): "direct" | "search" | "social" | "other" | "app" {
  const value = referrer.trim().toLowerCase();
  if (!value) return "direct";
  if (value.includes("app.konexa.space") || value.includes("konexa://")) return "app";
  if (
    value.includes("google.") ||
    value.includes("bing.com") ||
    value.includes("duckduckgo.com")
  ) {
    return "search";
  }
  if (
    value.includes("facebook.com") ||
    value.includes("linkedin.com") ||
    value.includes("instagram.com") ||
    value.includes("t.co") ||
    value.includes("twitter.com") ||
    value.includes("x.com")
  ) {
    return "social";
  }
  return "other";
}
