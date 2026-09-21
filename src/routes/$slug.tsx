import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";

import { StoreBadges } from "@/components/StoreBadges";
import { loadPublicProfile, recordPublicProfileView } from "@/lib/public-profile.server";
import {
  appUserProfileUrl,
  publicProfileCanonical,
  referrerClass,
  type PublicProfileCard,
} from "@/lib/public-profile";

export const Route = createFileRoute("/$slug")({
  loader: async ({ params }) => {
    const profile = await loadPublicProfile({ data: params.slug });
    if (!profile) throw notFound();
    return profile;
  },
  headers: () => ({
    "Cache-Control": "public, max-age=60, must-revalidate",
  }),
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Not found | Konexa" },
          { name: "robots", content: "noindex, nofollow" },
        ],
      };
    }
    const description =
      loaderData.public_web_bio ||
      [loaderData.profession_title, loaderData.company].filter(Boolean).join(" · ") ||
      "Public professional profile on Konexa.";
    const canonical = publicProfileCanonical(loaderData.public_slug);
    const image = loaderData.avatar_url;
    return {
      meta: [
        { title: `${loaderData.display_name} | Konexa` },
        { name: "description", content: description },
        { property: "og:title", content: `${loaderData.display_name} | Konexa` },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: canonical },
        ...(image ? [{ property: "og:image", content: image }] : []),
        { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  notFoundComponent: MissingProfile,
  component: PublicProfilePage,
});

function label(value: string): string {
  return value.replaceAll("_", " ");
}

function PublicProfilePage() {
  const profile = Route.useLoaderData() as PublicProfileCard;
  useEffect(() => {
    const kind = referrerClass(document.referrer);
    void recordPublicProfileView({
      data: { slug: profile.public_slug, referrerClass: kind },
    });
  }, [profile.public_slug]);

  const title = profile.profession_title || (profile.profession_category ? label(profile.profession_category) : "");
  const openUrl = appUserProfileUrl(profile.user_id);

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground">
      <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center">
        <Link to="/" className="text-sm tracking-wide text-brass">
          Konexa
        </Link>
        {profile.avatar_url ? (
          <img
            src={profile.avatar_url}
            alt=""
            className="mt-8 h-28 w-28 rounded-full object-cover"
          />
        ) : (
          <div className="mt-8 flex h-28 w-28 items-center justify-center rounded-full bg-navy-deep text-3xl text-background">
            {profile.display_name.slice(0, 1)}
          </div>
        )}
        <h1 className="mt-5 font-display text-4xl">{profile.display_name}</h1>
        {title ? <p className="mt-2 text-lg text-muted-foreground">{title}</p> : null}
        {profile.company ? <p className="mt-1">{profile.company}</p> : null}
        {profile.region ? (
          <p className="mt-1 text-sm text-muted-foreground">{profile.region}</p>
        ) : null}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {profile.is_verified ? <Badge>Verified</Badge> : null}
          {profile.is_founder ? <Badge>Founder</Badge> : null}
          {profile.is_ambassador ? <Badge>Ambassador</Badge> : null}
        </div>
        {profile.industries.length > 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">
            {profile.industries.map(label).join(" · ")}
          </p>
        ) : null}
        {profile.public_web_bio ? (
          <p className="mt-6 max-w-md text-base leading-relaxed">{profile.public_web_bio}</p>
        ) : null}
        <a
          href={openUrl}
          className="mt-8 inline-flex rounded-full bg-brass px-6 py-3 text-sm font-medium text-navy-deep"
        >
          Open in Konexa
        </a>
        <p className="mt-8 text-sm text-muted-foreground">Join Konexa</p>
        <StoreBadges
          className="mt-3 justify-center"
          appStoreLabel="Download on the App Store"
          playStoreLabel="Get it on Google Play"
        />
      </div>
    </main>
  );
}

function Badge({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-brass/40 px-3 py-1 text-xs tracking-wide text-brass">
      {children}
    </span>
  );
}

function MissingProfile() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <meta name="robots" content="noindex, nofollow" />
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-4 text-muted-foreground">This page is not available.</p>
        <Link to="/" className="mt-6 inline-flex text-sm text-brass">
          Go home
        </Link>
      </div>
    </main>
  );
}
