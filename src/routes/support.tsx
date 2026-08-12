import { createFileRoute, Link } from "@tanstack/react-router";

import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Konexa Support" },
      {
        name: "description",
        content:
          "Get help with your Konexa account, access, payments, or privacy. Contact hello@konexa.space.",
      },
      { property: "og:title", content: "Konexa Support" },
      {
        property: "og:description",
        content: "Contact Konexa support at hello@konexa.space.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/support") },
      { property: "og:image", content: absoluteUrl("/konexa-logo.png") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/support") }],
  }),
  component: Support,
});

function Support() {
  return (
    <main className="min-h-screen bg-background px-5 py-16">
      <div className="mx-auto max-w-2xl">
        <Link
          to="/"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Konexa
        </Link>

        <h1 className="mt-8 text-3xl text-foreground sm:text-4xl">
          Konexa Support
        </h1>

        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Need help with your account, access, payments, privacy, or another
            issue?
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:hello@konexa.space"
              className="font-medium text-foreground underline decoration-brass/50 underline-offset-2 transition-colors hover:decoration-brass"
            >
              hello@konexa.space
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
