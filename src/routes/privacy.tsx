import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import { type Lang } from "@/lib/konexa-content";
import { privacyCopy } from "@/lib/privacy-content";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Polityka prywatności Konexa | Konexa Privacy Policy" },
      {
        name: "description",
        content:
          "Dowiedz się, jak Konexa zbiera, wykorzystuje, przechowuje i chroni dane osobowe. Learn how Konexa collects, uses, stores, and protects personal data.",
      },
      { property: "og:title", content: "Polityka prywatności Konexa" },
      {
        property: "og:description",
        content:
          "Dowiedz się, jak Konexa zbiera, wykorzystuje, przechowuje i chroni dane osobowe.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/privacy") },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:image", content: absoluteUrl("/konexa-logo.png") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/privacy") }],
  }),
  component: Privacy,
});

function MailLink() {
  return (
    <a
      href="mailto:hello@konexa.space"
      className="font-medium text-foreground underline decoration-brass/50 underline-offset-2 transition-colors hover:decoration-brass"
    >
      hello@konexa.space
    </a>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8">
      <h2 className="text-lg text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function Sub({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="text-base font-medium text-foreground">{title}</h3>
      <div className="mt-2 space-y-3">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function Privacy() {
  const [lang, setLang] = useState<Lang>("pl");
  const t = privacyCopy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.metaTitle;
  }, [lang, t.metaTitle]);

  return (
    <main className="min-h-screen bg-background px-5 py-16" lang={lang}>
      <article className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.back}
          </Link>
          <div className="flex shrink-0 items-center rounded-full border border-border p-0.5 text-xs font-medium">
            {(["pl", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
                  lang === l
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <h1 className="mt-8 text-3xl text-foreground sm:text-4xl">{t.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{t.updated}</p>

        <div className="mt-10 space-y-10">
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>{t.intro[0]}</p>
            <p>{t.intro[1]}</p>
          </div>

          <Section id="who" title={t.who.title}>
            <p>{t.who.p1}</p>
            <p>{t.who.p2}</p>
            <p>
              <MailLink />
            </p>
            <p>{t.who.p3}</p>
          </Section>

          <Section id="what" title={t.what.title}>
            <p>{t.what.p1}</p>
            <p>{t.what.p2}</p>
          </Section>

          <Section id="collect" title={t.collect.title}>
            <p>{t.collect.intro}</p>

            <Sub title={t.collect.account.title}>
              <p>{t.collect.account.intro}</p>
              <BulletList items={t.collect.account.items} />
              <p>{t.collect.account.apple}</p>
              <p>{t.collect.account.passwords}</p>
            </Sub>

            <Sub title={t.collect.profile.title}>
              <p>{t.collect.profile.intro}</p>
              <BulletList items={t.collect.profile.items} />
              <p>{t.collect.profile.visibility}</p>
            </Sub>

            <Sub title={t.collect.business.title}>
              <p>{t.collect.business.intro}</p>
              <BulletList items={t.collect.business.items} />
            </Sub>

            <Sub title={t.collect.content.title}>
              <p>{t.collect.content.intro}</p>
              <BulletList items={t.collect.content.items} />
              <p>{t.collect.content.note}</p>
            </Sub>

            <Sub title={t.collect.referral.title}>
              <p>{t.collect.referral.intro}</p>
              <BulletList items={t.collect.referral.items} />
              <p>{t.collect.referral.note}</p>
            </Sub>

            <Sub title={t.collect.payment.title}>
              <p>
                {t.collect.payment.payuBefore}
                <strong className="font-medium text-foreground">PayU</strong>
                {t.collect.payment.payuAfter}
              </p>
              <p>{t.collect.payment.storeIntro}</p>
              <BulletList items={t.collect.payment.items} />
              <p>
                {t.collect.payment.notBefore}
                <strong className="font-medium text-foreground">
                  {t.collect.payment.not}
                </strong>
                {t.collect.payment.notAfter}
              </p>
              <p>{t.collect.payment.provider}</p>
            </Sub>

            <Sub title={t.collect.technical.title}>
              <p>{t.collect.technical.intro}</p>
              <BulletList items={t.collect.technical.items} />
            </Sub>
          </Section>

          <Section id="use" title={t.use.title}>
            <p>{t.use.intro}</p>
            <BulletList items={t.use.items} />
          </Section>

          <Section id="bases" title={t.bases.title}>
            <p>{t.bases.intro}</p>

            <Sub title={t.bases.contract.title}>
              <p>{t.bases.contract.p}</p>
            </Sub>

            <Sub title={t.bases.interests.title}>
              <p>{t.bases.interests.intro}</p>
              <BulletList items={t.bases.interests.items} />
              <p>{t.bases.interests.note}</p>
            </Sub>

            <Sub title={t.bases.legal.title}>
              <p>{t.bases.legal.p}</p>
            </Sub>

            <Sub title={t.bases.consent.title}>
              <p>{t.bases.consent.p1}</p>
              <p>{t.bases.consent.p2}</p>
            </Sub>
          </Section>

          <Section id="share" title={t.share.title}>
            <p>{t.share.noSell}</p>
            <p>{t.share.intro}</p>
            <p>{t.share.supporting}</p>
            <BulletList items={t.share.supportingItems} />
            <p>{t.share.examples}</p>
            <BulletList items={t.share.exampleItems} />
            <p>{t.share.roles}</p>
            <p>{t.share.disclose}</p>
          </Section>

          <Section id="visible" title={t.visible.title}>
            <p>{t.visible.p1}</p>
            <p>{t.visible.p2}</p>
            <BulletList items={t.visible.items} />
            <p>{t.visible.private}</p>
          </Section>

          <Section id="retention" title={t.retention.title}>
            <p>{t.retention.p1}</p>
            <p>{t.retention.p2}</p>
            <p>{t.retention.exampleIntro}</p>
            <BulletList items={t.retention.items} />
            <p>{t.retention.dispose}</p>
          </Section>

          <Section id="rights" title={t.rights.title}>
            <p>{t.rights.intro}</p>
            <BulletList items={t.rights.items} />
            <p>{t.rights.contact}</p>
            <p>
              <MailLink />
            </p>
            <p>{t.rights.verify}</p>
            <p>{t.rights.uodo}</p>
          </Section>

          <Section id="deletion" title={t.deletion.title}>
            <p>{t.deletion.p1}</p>
            <p>
              <MailLink />
            </p>
            <p>{t.deletion.p2}</p>
          </Section>

          <Section id="transfers" title={t.transfers.title}>
            <p>{t.transfers.p1}</p>
            <p>{t.transfers.p2}</p>
          </Section>

          <Section id="security" title={t.security.title}>
            <p>{t.security.p1}</p>
            <p>{t.security.p2}</p>
            <p>{t.security.p3}</p>
          </Section>

          <Section id="children" title={t.children.title}>
            <p>{t.children.p1}</p>
            <p>{t.children.p2}</p>
          </Section>

          <Section id="third-party" title={t.thirdParty.title}>
            <p>{t.thirdParty.p1}</p>
            <p>{t.thirdParty.p2}</p>
          </Section>

          <Section id="changes" title={t.changes.title}>
            <p>{t.changes.p1}</p>
            <p>{t.changes.p2}</p>
          </Section>

          <Section id="contact" title={t.contact.title}>
            <p>{t.contact.p}</p>
            <p>
              <MailLink />
            </p>
          </Section>
        </div>
      </article>
    </main>
  );
}
