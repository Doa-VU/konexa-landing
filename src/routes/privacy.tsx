import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Konexa Privacy Policy" },
      {
        name: "description",
        content:
          "Learn how Konexa collects, uses, stores, and protects personal data.",
      },
      { property: "og:title", content: "Konexa Privacy Policy" },
      {
        property: "og:description",
        content:
          "Learn how Konexa collects, uses, stores, and protects personal data.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/privacy") },
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
  return (
    <main className="min-h-screen bg-background px-5 py-16">
      <article className="mx-auto max-w-2xl">
        <Link
          to="/"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Konexa
        </Link>

        <h1 className="mt-8 text-3xl text-foreground sm:text-4xl">
          Konexa Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: August 12, 2026
        </p>

        <div className="mt-10 space-y-10">
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              Konexa respects your privacy and is committed to protecting your
              personal data.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, and share
              personal data when you use the Konexa mobile application, website,
              and related services.
            </p>
          </div>

          <Section id="who" title="1. Who We Are">
            <p>
              Konexa is a professional networking platform designed for business
              owners, founders, investors, real estate professionals, advisors,
              and other professionals.
            </p>
            <p>
              For privacy-related questions, data requests, or general support,
              contact:
            </p>
            <p>
              <MailLink />
            </p>
            <p>
              In this Privacy Policy, “Konexa”, “we”, “us”, and “our” refer to
              the operator of the Konexa service.
            </p>
          </Section>

          <Section id="what" title="2. What Konexa Does">
            <p>
              Konexa is a professional networking platform designed to help
              users discover relevant people, opportunities, and business
              connections.
            </p>
            <p>
              Konexa facilitates professional introductions and communication.
              Konexa does not provide investment advice, brokerage, escrow, or
              transaction execution services.
            </p>
          </Section>

          <Section id="collect" title="3. Personal Data We Collect">
            <p>
              Depending on how you use Konexa, we may collect the following
              categories of information.
            </p>

            <Sub title="Account and authentication information">
              <p>When you create or access an account, we may process:</p>
              <BulletList
                items={[
                  "email address",
                  "authentication identifiers",
                  "account ID",
                  "sign-in provider, such as Google or Apple",
                  "session and authentication information required to keep your account secure",
                ]}
              />
              <p>
                If you use Sign in with Apple, Apple may provide a private relay
                email address instead of your personal email address.
              </p>
              <p>We do not receive your Google or Apple password.</p>
            </Sub>

            <Sub title="Profile information">
              <p>
                You may choose to provide professional profile information such
                as:
              </p>
              <BulletList
                items={[
                  "name",
                  "profile photo",
                  "professional title",
                  "profession or industry",
                  "company",
                  "experience",
                  "regions where you operate",
                  "interests and focus areas",
                  "information about what you offer",
                  "information about what you are looking for",
                  "business contact email",
                  "phone number",
                  "LinkedIn or other professional links",
                ]}
              />
              <p>
                Some profile information may be visible to other Konexa users
                depending on your profile visibility settings.
              </p>
            </Sub>

            <Sub title="Business information">
              <p>
                If you create or manage a business profile, we may process
                information including:
              </p>
              <BulletList
                items={[
                  "business name",
                  "industry or category",
                  "description",
                  "location or operating regions",
                  "business links",
                  "information submitted as part of the business profile",
                ]}
              />
            </Sub>

            <Sub title="Content and communications">
              <p>
                When you use networking and communication features, we may
                process:
              </p>
              <BulletList
                items={[
                  "posts",
                  "business or real estate opportunities",
                  "deal-related content",
                  "comments or interactions",
                  "connection information",
                  "messages sent through Konexa",
                  "moderation reports or support requests",
                ]}
              />
              <p>
                We process this information to provide the features you use and
                to maintain the safety and integrity of the platform.
              </p>
            </Sub>

            <Sub title="Referral and Ambassador information">
              <p>
                If you join Konexa through a referral or participate in the
                Konexa Ambassador Program, we may process:
              </p>
              <BulletList
                items={[
                  "referral codes",
                  "referring Ambassador",
                  "referral attribution",
                  "signup and conversion status",
                  "commission records",
                  "payout records",
                  "Ambassador status",
                ]}
              />
              <p>
                Financial and commission information is available only to
                authorized users and administrators as appropriate.
              </p>
            </Sub>

            <Sub title="Subscription and payment information">
              <p>
                When you purchase a Konexa subscription, payments may be
                processed by <strong className="font-medium text-foreground">PayU</strong>.
              </p>
              <p>Konexa may process and store information such as:</p>
              <BulletList
                items={[
                  "subscription plan",
                  "payment status",
                  "transaction or order identifiers",
                  "payment amount",
                  "currency",
                  "subscription dates",
                  "renewal or cancellation status",
                ]}
              />
              <p>
                Konexa does{" "}
                <strong className="font-medium text-foreground">not</strong>{" "}
                store full payment card numbers or card security codes.
              </p>
              <p>
                Payment details required to process the transaction are handled
                by the applicable payment provider.
              </p>
            </Sub>

            <Sub title="Technical and security information">
              <p>We may automatically process certain technical information, such as:</p>
              <BulletList
                items={[
                  "device and app information",
                  "operating system",
                  "IP address",
                  "timestamps",
                  "authentication and security events",
                  "error and diagnostic information",
                  "information required to prevent abuse, fraud, or unauthorized access",
                ]}
              />
            </Sub>
          </Section>

          <Section id="use" title="4. How We Use Personal Data">
            <p>We use personal data to:</p>
            <BulletList
              items={[
                "create and maintain your Konexa account",
                "authenticate users",
                "provide professional profiles and business profiles",
                "help users discover relevant professionals and opportunities",
                "enable connections and communications",
                "provide search and discovery features",
                "operate subscriptions and membership access",
                "attribute Ambassador referrals and calculate eligible commissions",
                "process support requests",
                "moderate content and enforce platform rules",
                "protect Konexa, its users, and accounts from fraud or misuse",
                "maintain and improve the reliability of the service",
                "comply with applicable legal obligations",
              ]}
            />
          </Section>

          <Section id="bases" title="5. Legal Bases for Processing">
            <p>
              Where the GDPR applies, we process personal data on one or more of
              the following legal bases.
            </p>

            <Sub title="Performance of a contract">
              <p>
                We process information necessary to provide Konexa and its
                features when you create and use an account or purchase a
                membership.
              </p>
            </Sub>

            <Sub title="Legitimate interests">
              <p>
                We may process data where necessary for legitimate interests such
                as:
              </p>
              <BulletList
                items={[
                  "maintaining platform security",
                  "preventing fraud and abuse",
                  "improving service reliability",
                  "moderating the community",
                  "protecting users and Konexa",
                ]}
              />
              <p>
                We consider the impact on your rights before relying on
                legitimate interests.
              </p>
            </Sub>

            <Sub title="Legal obligations">
              <p>
                We may process or retain information where required by applicable
                law, including accounting, tax, fraud prevention, or regulatory
                requirements.
              </p>
            </Sub>

            <Sub title="Consent">
              <p>
                Where required, we rely on your consent, for example for certain
                optional communications or technologies.
              </p>
              <p>
                You may withdraw consent where applicable without affecting
                processing that occurred before withdrawal.
              </p>
            </Sub>
          </Section>

          <Section id="share" title="6. How We Share Personal Data">
            <p>We do not sell your personal data.</p>
            <p>
              We may share personal data with service providers where necessary
              to operate Konexa.
            </p>
            <p>These may include providers supporting:</p>
            <BulletList
              items={[
                "authentication",
                "cloud hosting and databases",
                "payment processing",
                "email or communications",
                "application infrastructure",
                "analytics, diagnostics, or security",
              ]}
            />
            <p>
              Examples of providers used by or integrated with Konexa may
              include:
            </p>
            <BulletList
              items={[
                "Supabase",
                "PayU",
                "Google",
                "Apple",
                "Vercel",
                "Expo / EAS",
              ]}
            />
            <p>
              These providers process data according to their respective roles,
              contractual arrangements, and privacy obligations.
            </p>
            <p>
              We may also disclose information where required by law, court
              order, governmental request, or where necessary to protect legal
              rights, platform security, or users.
            </p>
          </Section>

          <Section id="visible" title="7. Information Visible to Other Users">
            <p>Konexa is a professional networking service.</p>
            <p>
              Depending on your settings and use of the service, other users may
              see information you intentionally make available, including:
            </p>
            <BulletList
              items={[
                "name",
                "profile photo",
                "professional role",
                "company",
                "business information",
                "regions",
                "interests",
                "what you offer",
                "what you are looking for",
                "posts or opportunities you publish",
              ]}
            />
            <p>
              Private authentication information, payment credentials, internal
              payment provider identifiers, and other protected financial data
              are not displayed publicly.
            </p>
          </Section>

          <Section id="retention" title="8. Data Retention">
            <p>
              We retain personal data only for as long as reasonably necessary
              for the purposes described in this Privacy Policy and to comply
              with legal, accounting, security, or regulatory requirements.
            </p>
            <p>
              Retention periods may vary depending on the type of information.
            </p>
            <p>For example:</p>
            <BulletList
              items={[
                "active account data may be retained while your account remains active",
                "content may remain available while it is part of your active account or platform activity",
                "transaction and payout records may be retained where required for accounting, tax, fraud prevention, or legal purposes",
                "security records may be retained for an appropriate period to investigate abuse or protect the service",
              ]}
            />
            <p>
              When information is no longer required, it may be deleted,
              anonymized, or otherwise securely disposed of.
            </p>
          </Section>

          <Section id="rights" title="9. Your Rights">
            <p>
              Where applicable under the GDPR and other data protection laws,
              you may have the right to:
            </p>
            <BulletList
              items={[
                "obtain information about how your personal data is processed",
                "request access to your personal data",
                "request correction of inaccurate or incomplete data",
                "request deletion of personal data",
                "request restriction of processing",
                "object to certain processing",
                "withdraw consent where processing is based on consent",
                "request data portability where applicable",
                "lodge a complaint with a competent data protection authority",
              ]}
            />
            <p>
              To exercise your rights, contact:
            </p>
            <p>
              <MailLink />
            </p>
            <p>
              We may need to verify your identity before completing certain
              requests.
            </p>
            <p>
              If you are in Poland, you may also lodge a complaint with the
              Polish supervisory authority, the President of the Personal Data
              Protection Office (UODO).
            </p>
          </Section>

          <Section id="deletion" title="10. Account Deletion">
            <p>
              You may request deletion of your Konexa account and associated
              personal data through the options provided in the application or
              by contacting:
            </p>
            <p>
              <MailLink />
            </p>
            <p>
              Certain information may be retained where required by law or where
              necessary for legitimate purposes such as fraud prevention,
              resolving disputes, accounting, or enforcing legal rights.
            </p>
          </Section>

          <Section id="transfers" title="11. International Data Transfers">
            <p>
              Some service providers used by Konexa may process information
              outside Poland or the European Economic Area.
            </p>
            <p>
              Where required by applicable data protection law, appropriate
              safeguards are used for international transfers of personal data.
            </p>
          </Section>

          <Section id="security" title="12. Security">
            <p>
              We use technical and organizational measures intended to protect
              personal data against unauthorized access, loss, alteration,
              misuse, or disclosure.
            </p>
            <p>
              However, no internet-based service can guarantee absolute
              security.
            </p>
            <p>
              You are responsible for keeping your account credentials secure
              and for notifying us if you believe your account has been
              compromised.
            </p>
          </Section>

          <Section id="children" title="13. Children">
            <p>
              Konexa is designed for professional and business networking and is
              not intended for children.
            </p>
            <p>
              Users must meet the minimum age requirements applicable to the
              service and their jurisdiction.
            </p>
          </Section>

          <Section id="third-party" title="14. Third-Party Services and Links">
            <p>
              Konexa may contain links to third-party websites, applications, or
              services.
            </p>
            <p>
              Their privacy practices are governed by their own privacy
              policies, and Konexa is not responsible for third-party privacy
              practices outside our control.
            </p>
          </Section>

          <Section id="changes" title="15. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes to Konexa, legal requirements, or our data practices.
            </p>
            <p>
              When we make material changes, we will update the “Last updated”
              date and may provide additional notice where appropriate.
            </p>
          </Section>

          <Section id="contact" title="16. Contact Us">
            <p>
              For privacy questions, data requests, account requests, or general
              support:
            </p>
            <p>
              <MailLink />
            </p>
          </Section>
        </div>
      </article>
    </main>
  );
}
