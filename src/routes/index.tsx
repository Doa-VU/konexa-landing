import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { content, type Lang } from "@/lib/konexa-content";
import { PhoneMock } from "@/components/PhoneMock";
import logoUrl from "@/assets/konexa-logo.png";
import { absoluteUrl } from "@/lib/site";
import {
  ArrowRight,
  Building2,
  Check,
  CircleUser,
  Handshake,
  LineChart,
  MousePointerClick,
  Sailboat,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Konexa — Prywatny klub networkingowy | Zaproszenia" },
      {
        name: "description",
        content:
          "Konexa łączy zweryfikowanych profesjonalistów: nieruchomości, giełda i krypto, biznes, pasje. Pierwsze 350 miejsc, tylko z zaproszenia. Zapisz się na listę.",
      },
      { property: "og:title", content: "Konexa — Prywatny klub networkingowy" },
      {
        property: "og:description",
        content:
          "Prawdziwi ludzie, prawdziwe okazje. Poznaj ludzi, z którymi zrobisz realny deal. Dołącz do listy oczekujących.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/") },
      { property: "og:image", content: absoluteUrl("/konexa-logo.png") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: absoluteUrl("/konexa-logo.png") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: Landing,
});

const personaIcons = [Building2, LineChart, Handshake, Sailboat] as const;
const howIcons = [Target, Users, Sparkles] as const;
const whyIcons = [ShieldCheck, MousePointerClick, CircleUser] as const;

function Section({
  id,
  kicker,
  title,
  children,
  tone = "light",
}: {
  id?: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
  tone?: "light" | "dark" | "muted";
}) {
  const bg =
    tone === "dark"
      ? "bg-navy-deep text-primary-foreground"
      : tone === "muted"
        ? "bg-secondary/60"
        : "";
  return (
    <section id={id} className={`px-5 py-20 sm:py-28 ${bg}`}>
      <div className="mx-auto w-full max-w-5xl">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass">{kicker}</p>
        <h2 className="mt-4 max-w-2xl text-3xl leading-[1.15] sm:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Landing() {
  const [lang, setLang] = useState<Lang>("pl");
  const t = content[lang];
  const [sent, setSent] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [prefLang, setPrefLang] = useState<Lang>("pl");

  const scrollToForm = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    if (typeof email !== "string" || !email.includes("@")) return;
    const role = t.form.roles[roleIdx] ?? "";
    const subject = encodeURIComponent("Konexa — request invite / prośba o zaproszenie");
    const body = encodeURIComponent(
      [
        `Email: ${email.trim()}`,
        `Area / Obszar: ${role}`,
        `Preferred language: ${prefLang}`,
        "",
        "(Sent from konexa.space waitlist form via mailto — no server-side waitlist yet.)",
      ].join("\n"),
    );
    // Honest path: open the user's mail client. Do not claim a DB waitlist signup.
    window.location.href = `mailto:hello@konexa.space?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3">
          <div className="flex min-w-0 items-center gap-2">
            <img src={logoUrl} alt="Konexa" className="h-9 w-9 shrink-0 object-contain" />
            <span className="truncate font-display text-lg tracking-tight">Konexa</span>
          </div>
          <div className="flex items-center gap-2">
            <nav className="mr-2 hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              <a href="#how" className="transition-colors hover:text-foreground">
                {t.nav.how}
              </a>
              <a href="#why" className="transition-colors hover:text-foreground">
                {t.nav.why}
              </a>
              <a href="#faq" className="transition-colors hover:text-foreground">
                {t.nav.faq}
              </a>
            </nav>
            <div className="flex shrink-0 items-center rounded-full border border-border p-0.5 text-xs font-medium">
              {(["pl", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
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
            <Button size="sm" onClick={scrollToForm} className="hidden sm:inline-flex">
              {t.nav.cta}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep px-5 py-16 text-primary-foreground sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 hero-grid opacity-[0.55]" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-32 h-[26rem] w-[26rem] rounded-full opacity-[0.22] blur-3xl sm:-right-32 sm:-top-40 sm:h-[34rem] sm:w-[34rem] sm:opacity-[0.18]"
          style={{ background: "var(--gradient-brass)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full opacity-[0.10] blur-3xl"
          style={{ background: "var(--gradient-brass)" }}
        />
        <div className="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/[0.04] px-2.5 py-1 text-[0.58rem] font-medium uppercase tracking-[0.16em] text-brass-soft backdrop-blur sm:px-3 sm:py-1.5 sm:text-[0.65rem] sm:tracking-[0.22em]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
              <span className="truncate">{t.hero.eyebrow}</span>
            </p>
            <h1 className="mt-6 text-[2.05rem] leading-[1.08] sm:mt-7 sm:text-[3.4rem] sm:leading-[1.05]">
              {t.hero.title}
              <br />
              <span className="text-gradient-brass">{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-md text-[0.94rem] leading-[1.65] text-primary-foreground/60 sm:mt-6 sm:max-w-lg sm:text-base sm:leading-relaxed">
              {t.hero.sub}
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:mt-9 sm:flex-row sm:items-center">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="group w-full bg-brass text-accent-foreground shadow-lift transition-all hover:bg-brass-soft sm:w-auto"
              >
                {t.hero.cta}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <span className="text-[0.72rem] text-primary-foreground/45 sm:text-xs">
                {t.hero.note}
              </span>
            </div>
            <div className="mt-8 inline-flex items-center gap-3 text-[0.8rem] text-primary-foreground/55 sm:mt-12 sm:text-sm">
              <span className="rule-brass" />
              {t.hero.stat}
            </div>
          </div>
          <div className="relative lg:pl-6">
            <PhoneMock lang={lang} />
          </div>
        </div>
      </section>

      {/* Problem */}
      <Section kicker={t.problem.kicker} title={t.problem.title}>
        <div className="grid gap-8 sm:grid-cols-3">
          {t.problem.items.map((item, i) => (
            <div key={item.t} className="border-t border-border pt-5">
              <span className="font-display text-2xl text-brass">0{i + 1}</span>
              <h3 className="mt-2 text-lg">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" kicker={t.how.kicker} title={t.how.title} tone="muted">
        <div className="grid gap-6 sm:grid-cols-3">
          {t.how.steps.map((s, i) => {
            const Icon = howIcons[i % howIcons.length]!;
            return (
              <div
                key={s.t}
                className="rounded-lg border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brass/40 bg-brass/10">
                  <Icon className="h-5 w-5 text-brass" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-lg">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Personas */}
      <Section kicker={t.personas.kicker} title={t.personas.title}>
        <div className="grid gap-4 sm:grid-cols-2">
          {t.personas.items.map((p, i) => {
            const Icon = personaIcons[i % personaIcons.length]!;
            return (
              <div
                key={p.t}
                className="group flex gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-brass/50"
              >
                <Icon className="h-5 w-5 shrink-0 text-brass" strokeWidth={1.5} />
                <div className="min-w-0">
                  <h3 className="text-lg">{p.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Why different */}
      <Section id="why" kicker={t.why.kicker} title={t.why.title} tone="dark">
        <div className="grid gap-10 sm:grid-cols-3">
          {t.why.items.map((w, i) => {
            const Icon = whyIcons[i % whyIcons.length]!;
            return (
              <div key={w.t}>
                <Icon className="h-6 w-6 text-brass-soft" strokeWidth={1.25} />
                <h3 className="mt-4 text-lg text-primary-foreground">{w.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">{w.d}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Credibility */}
      <Section kicker={t.credibility.kicker} title={t.credibility.title} tone="muted">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {t.credibility.body}
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {t.credibility.points.map((p) => (
            <li key={p} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-brass" />
              {p}
            </li>
          ))}
        </ul>
      </Section>

      {/* Ambassador */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl rounded-xl border border-brass/40 bg-card p-8 shadow-soft sm:p-12">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass">
            {t.ambassador.kicker}
          </p>
          <h2 className="mt-4 max-w-xl text-2xl leading-snug sm:text-3xl">{t.ambassador.title}</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {t.ambassador.body}
          </p>
        </div>
      </section>

      {/* Membership */}
      <Section kicker={t.membership.kicker} title={t.membership.title}>
        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Standard */}
          <div className="flex h-full flex-col rounded-xl border border-border bg-card p-7">
            <div className="min-h-6" />
            <h3 className="mt-2 text-xl">{t.membership.free.t}</h3>
            <p className="mt-2 font-display text-3xl leading-none">{t.membership.free.p}</p>
            <ul className="mt-7 flex-1 space-y-3 text-sm">
              {t.membership.free.items.map((i) => (
                <li key={i} className="flex gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="mt-8 w-full" onClick={scrollToForm}>
              {t.nav.cta}
            </Button>
          </div>

          {/* Premium */}
          <div className="flex h-full flex-col rounded-xl border border-brass/50 bg-navy-deep p-7 text-primary-foreground shadow-lift">
            <span className="inline-flex w-fit items-center rounded-full border border-brass/50 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-brass-soft">
              {t.membership.paid.badge}
            </span>
            <h3 className="mt-2 text-xl text-primary-foreground">{t.membership.paid.t}</h3>
            <p className="mt-2 font-display text-3xl leading-none text-brass-soft">
              {t.membership.paid.p}
            </p>
            <ul className="mt-7 flex-1 space-y-3 text-sm text-primary-foreground/85">
              {t.membership.paid.items.map((i) => (
                <li key={i} className="flex gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full" onClick={scrollToForm}>
              {t.nav.cta}
            </Button>
          </div>

          {/* Enterprise */}
          <div className="flex h-full flex-col rounded-xl border border-border bg-card p-7">
            <div className="min-h-6" />
            <h3 className="mt-2 text-xl">{t.membership.enterprise.t}</h3>
            <p className="mt-2 font-display text-3xl leading-none">{t.membership.enterprise.p}</p>
            <p className="mt-7 flex-1 text-sm leading-relaxed text-muted-foreground">
              {t.membership.enterprise.body}
            </p>
            <Button asChild variant="outline" className="mt-8 w-full">
              <a href="mailto:hello@konexa.space">{t.membership.enterprise.cta}</a>
            </Button>
          </div>
        </div>


      </Section>

      {/* FAQ */}
      <Section id="faq" kicker={t.faq.kicker} title={t.faq.title} tone="muted">
        <Accordion type="single" collapsible className="max-w-3xl">
          {t.faq.items.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* Waitlist */}
      <section id="waitlist" className="bg-navy-deep px-5 py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass-soft">
            {t.form.kicker}
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl">{t.form.title}</h2>
          <p className="mt-3 max-w-lg text-sm text-primary-foreground/65">{t.form.sub}</p>

          {sent ? (
            <div className="mt-10 flex max-w-lg items-center gap-3 rounded-lg border border-brass/40 bg-primary-foreground/5 p-6 text-sm">
              <Check className="h-5 w-5 shrink-0 text-brass" />
              {t.form.success}
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-10 max-w-lg space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary-foreground/80">
                  {t.form.email}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  autoComplete="email"
                  placeholder="name@company.com"
                  className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/35"
                />
              </div>
              <div className="space-y-2">
                <span className="text-sm text-primary-foreground/80">{t.form.role}</span>
                <div className="flex flex-wrap gap-2">
                  {t.form.roles.map((r, i) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRoleIdx(i)}
                      className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                        roleIdx === i
                          ? "border-brass bg-brass/15 text-brass-soft"
                          : "border-primary-foreground/20 text-primary-foreground/65 hover:border-primary-foreground/40"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm text-primary-foreground/80">{t.form.lang}</span>
                <div className="flex gap-2">
                  {(["pl", "en"] as Lang[]).map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => setPrefLang(l)}
                      className={`rounded-full border px-3.5 py-1.5 text-sm uppercase transition-colors ${
                        prefLang === l
                          ? "border-brass bg-brass/15 text-brass-soft"
                          : "border-primary-foreground/20 text-primary-foreground/65 hover:border-primary-foreground/40"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-brass text-accent-foreground hover:bg-brass-soft sm:w-auto"
              >
                {t.form.submit}
              </Button>
              <p className="text-xs text-primary-foreground/45">
                {t.form.privacy}{" "}
                <Link
                  to="/privacy"
                  className="underline underline-offset-2 transition-colors hover:text-primary-foreground/70"
                >
                  {t.form.privacyLink}
                </Link>
                .
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 text-sm text-muted-foreground">
          <div className="flex min-w-0 items-center gap-2">
            <img src={logoUrl} alt="" className="h-7 w-7 shrink-0 object-contain" />
            <span className="truncate">
              © {new Date().getFullYear()} Konexa · konexa.space
            </span>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-x-4 gap-y-1">
            <Link
              to="/privacy"
              className="transition-colors hover:text-foreground"
            >
              {t.footer.privacy}
            </Link>
            <Link
              to="/support"
              className="transition-colors hover:text-foreground"
            >
              {t.footer.support}
            </Link>
            <a
              href="mailto:hello@konexa.space"
              className="transition-colors hover:text-foreground"
            >
              {t.footer.contact}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
