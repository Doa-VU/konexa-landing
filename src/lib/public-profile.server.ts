import { createServerFn } from "@tanstack/react-start";

import {
  parsePublicProfile,
  publicSlugError,
  type PublicProfileCard,
} from "./public-profile";

function supabaseEnv(): { url: string; key: string } | null {
  const url = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL ?? "";
  const key = process.env.SUPABASE_ANON_KEY ?? process.env.VITE_SUPABASE_ANON_KEY ?? "";
  if (!url || !key) return null;
  return { url: url.replace(/\/$/, ""), key };
}

export const loadPublicProfile = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data }): Promise<PublicProfileCard | null> => {
    if (publicSlugError(data)) return null;
    const env = supabaseEnv();
    if (!env) return null;
    const response = await fetch(`${env.url}/rest/v1/rpc/get_public_profile_by_slug`, {
      method: "POST",
      headers: {
        apikey: env.key,
        Authorization: `Bearer ${env.key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ p_slug: data }),
      cache: "no-store",
    });
    if (!response.ok) return null;
    return parsePublicProfile(await response.json());
  });

export const recordPublicProfileView = createServerFn({ method: "POST" })
  .validator((input: { slug: string; referrerClass: string }) => input)
  .handler(async ({ data }) => {
    if (publicSlugError(data.slug)) return;
    const env = supabaseEnv();
    if (!env) return;
    await fetch(`${env.url}/rest/v1/rpc/record_public_profile_view`, {
      method: "POST",
      headers: {
        apikey: env.key,
        Authorization: `Bearer ${env.key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        p_slug: data.slug,
        p_referrer_class: data.referrerClass,
      }),
      cache: "no-store",
    });
  });
