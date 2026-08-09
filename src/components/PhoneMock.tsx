import { Check, Handshake, Building2, LineChart, ShieldCheck } from "lucide-react";
import type { Lang } from "@/lib/konexa-content";
import logoUrl from "@/assets/konexa-logo.png";

const copy = {
  pl: {
    header: "Dopasowania",
    subtitle: "3 nowe w tym tygodniu",
    verified: "Zweryfikowany",
    match: "dopasowania",
    cta: "Wyślij prośbę o rozmowę",
    mutual: "Wzajemne zainteresowanie",
    cards: [
      { n: "Marek K.", r: "Nieruchomości · Trójmiasto", d: "Szuka współinwestora — kamienica, 2,4 mln", p: 94 },
      { n: "Anna W.", r: "Giełda i krypto · Warszawa", d: "Portfel dywidendowy, wymiana tez", p: 88 },
      { n: "Piotr L.", r: "Biznes · SaaS B2B", d: "Szuka wspólnika technicznego", p: 81 },
    ],
  },
  en: {
    header: "Matches",
    subtitle: "3 new this week",
    verified: "Verified",
    match: "match",
    cta: "Request an intro",
    mutual: "Mutual interest",
    cards: [
      { n: "Marek K.", r: "Real estate · Tricity", d: "Seeking co-investor — €560k building", p: 94 },
      { n: "Anna W.", r: "Stocks & crypto · Warsaw", d: "Dividend portfolio, thesis exchange", p: 88 },
      { n: "Piotr L.", r: "Business · B2B SaaS", d: "Looking for a technical co-founder", p: 81 },
    ],
  },
} as const;

const icons = [Building2, LineChart, Handshake] as const;

export function PhoneMock({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <div className="relative mx-auto w-[270px] sm:w-[300px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 rounded-[3rem] opacity-25 blur-3xl"
        style={{ background: "var(--gradient-brass)" }}
      />
      <div className="relative rounded-[2.6rem] border border-brass/30 bg-[oklch(0.16_0.02_220)] p-2 shadow-lift">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-navy-deep">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[oklch(0.13_0.02_220)]" />
          <div className="px-4 pb-5 pt-9">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <img src={logoUrl} alt="" className="h-5 w-5 object-contain" />
                <span className="font-display text-sm text-primary-foreground">Konexa</span>
              </div>
              <span className="flex items-center gap-1 rounded-full border border-brass/40 px-2 py-0.5 text-[0.55rem] uppercase tracking-wider text-brass-soft">
                <ShieldCheck className="h-2.5 w-2.5" />
                {c.verified}
              </span>
            </div>

            <p className="mt-5 font-display text-lg text-primary-foreground">{c.header}</p>
            <p className="text-[0.65rem] text-primary-foreground/45">{c.subtitle}</p>

            <div className="mt-4 space-y-2.5">
              {c.cards.map((card, i) => {
                const Icon = icons[i % icons.length]!;
                const featured = i === 0;
                return (
                  <div
                    key={card.n}
                    className={`rounded-xl border p-3 ${
                      featured
                        ? "border-brass/45 bg-brass/10"
                        : "border-primary-foreground/10 bg-primary-foreground/[0.04]"
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brass/35 bg-brass/10">
                        <Icon className="h-3.5 w-3.5 text-brass-soft" strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="truncate text-[0.72rem] font-medium text-primary-foreground">
                            {card.n}
                          </span>
                          <span className="shrink-0 text-[0.6rem] tabular-nums text-brass-soft">
                            {card.p}%
                          </span>
                        </div>
                        <p className="truncate text-[0.6rem] text-primary-foreground/45">{card.r}</p>
                        <p className="mt-1 text-[0.62rem] leading-snug text-primary-foreground/70">
                          {card.d}
                        </p>
                        <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-primary-foreground/10">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${card.p}%`, background: "var(--gradient-brass)" }}
                          />
                        </div>
                      </div>
                    </div>
                    {featured && (
                      <div className="mt-3 flex items-center gap-1.5 text-[0.6rem] text-brass-soft">
                        <Check className="h-3 w-3" />
                        {c.mutual}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 rounded-full bg-brass py-2 text-center text-[0.68rem] font-medium text-accent-foreground">
              {c.cta}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
