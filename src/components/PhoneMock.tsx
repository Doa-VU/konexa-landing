import { useEffect, useState } from "react";
import {
  Building2,
  ChevronRight,
  MapPin,
  MessageCircle,
  Search,
  Sparkles,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import type { Lang } from "@/lib/konexa-content";
import logoUrl from "@/assets/konexa-logo.png";

type Screen = "discover" | "search" | "network";

const SCREENS: Screen[] = ["discover", "search", "network"];
const INTERVAL_MS = 3800;

const mock = {
  pl: {
    tabs: { discover: "Discover", search: "Szukaj", network: "Sieć" } as const,
    discover: {
      title: "Discover",
      name: "Marek Kowalski",
      role: "Inwestor · Nieruchomości",
      city: "Trójmiasto",
      looking: "Szuka współinwestora do kamienicy — budżet 2,4 mln.",
      fit: 94,
      skip: "Pomiń",
      connect: "Połącz",
    },
    search: {
      title: "Szukaj",
      placeholder: "Imię, firma, branża…",
      results: [
        {
          initials: "AW",
          name: "Anna Wiśniewska",
          role: "Analityk · Giełda",
          city: "Warszawa",
        },
        {
          initials: "PL",
          name: "Piotr Lewandowski",
          role: "Founder · SaaS B2B",
          city: "Kraków",
        },
        {
          initials: "KN",
          name: "Karolina Nowak",
          role: "Doradca · PropTech",
          city: "Wrocław",
        },
      ],
    },
    network: {
      title: "Sieć",
      connections: "Połączenia",
      requests: "Zaproszenia",
      requestMeta: "2 otrzymane",
      rows: [
        {
          initials: "AW",
          name: "Anna Wiśniewska",
          preview: "Możemy porozmawiać w czwartek?",
          deal: false,
        },
        {
          initials: "PL",
          name: "Piotr Lewandowski",
          preview: "Deal Room · dokumenty",
          deal: true,
        },
        {
          initials: "KN",
          name: "Karolina Nowak",
          preview: "Nowe dopasowanie — napisz wiadomość",
          deal: false,
        },
      ],
      dealBadge: "Deal Room",
    },
  },
  en: {
    tabs: { discover: "Discover", search: "Search", network: "Network" } as const,
    discover: {
      title: "Discover",
      name: "Marek Kowalski",
      role: "Investor · Real estate",
      city: "Tricity",
      looking: "Looking for a co-investor on a townhouse — €560k budget.",
      fit: 94,
      skip: "Skip",
      connect: "Connect",
    },
    search: {
      title: "Search",
      placeholder: "Name, company, industry…",
      results: [
        {
          initials: "AW",
          name: "Anna Wiśniewska",
          role: "Analyst · Markets",
          city: "Warsaw",
        },
        {
          initials: "PL",
          name: "Piotr Lewandowski",
          role: "Founder · B2B SaaS",
          city: "Kraków",
        },
        {
          initials: "KN",
          name: "Karolina Nowak",
          role: "Advisor · PropTech",
          city: "Wrocław",
        },
      ],
    },
    network: {
      title: "Network",
      connections: "Connections",
      requests: "Requests",
      requestMeta: "2 incoming",
      rows: [
        {
          initials: "AW",
          name: "Anna Wiśniewska",
          preview: "Can we talk on Thursday?",
          deal: false,
        },
        {
          initials: "PL",
          name: "Piotr Lewandowski",
          preview: "Deal Room · documents",
          deal: true,
        },
        {
          initials: "KN",
          name: "Karolina Nowak",
          preview: "New match — say hello",
          deal: false,
        },
      ],
      dealBadge: "Deal Room",
    },
  },
} as const;

export function PhoneMock({ lang }: { lang: Lang }) {
  const [screen, setScreen] = useState<Screen>("discover");
  const [tick, setTick] = useState(0);
  const c = mock[lang];

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      setScreen((prev) => {
        const i = SCREENS.indexOf(prev);
        return SCREENS[(i + 1) % SCREENS.length]!;
      });
      setTick((t) => t + 1);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto w-[270px] sm:w-[300px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 rounded-[3rem] opacity-25 blur-3xl"
        style={{ background: "var(--gradient-brass)" }}
      />
      <div className="relative rounded-[2.6rem] border border-brass/30 bg-[oklch(0.18_0.015_70)] p-[7px] shadow-lift">
        <div className="relative flex h-[520px] flex-col overflow-hidden rounded-[2.15rem] bg-[#F5F2EA] sm:h-[560px]">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-[#1B1D1F]" />

          {/* Status / brand bar */}
          <div className="relative z-10 flex items-center justify-between px-3.5 pb-1.5 pt-8">
            <div className="flex items-center gap-1.5">
              <img src={logoUrl} alt="" className="h-4 w-4 object-contain" />
              <span className="font-display text-[0.78rem] text-[#1B1D1F]">
                Konexa
              </span>
            </div>
            <span className="rounded-full bg-[rgba(183,138,61,0.15)] px-2 py-0.5 text-[0.52rem] font-medium uppercase tracking-wider text-[#8B6914]">
              {c.tabs[screen]}
            </span>
          </div>

          {/* Screens */}
          <div className="relative min-h-0 flex-1 overflow-hidden px-2.5">
            <div
              key={`${screen}-${tick}`}
              className="phone-mock-screen h-full"
            >
              {screen === "discover" ? (
                <DiscoverScreen data={c.discover} />
              ) : null}
              {screen === "search" ? <SearchScreen data={c.search} /> : null}
              {screen === "network" ? (
                <NetworkScreen data={c.network} />
              ) : null}
            </div>
          </div>

          {/* Tab bar */}
          <div className="relative z-10 border-t border-[rgba(21,34,41,0.08)] bg-[#F5F2EA]/85 px-2 pb-3 pt-1.5 backdrop-blur">
            <div className="flex items-center justify-around">
              {(
                [
                  { id: "discover" as const, Icon: Sparkles },
                  { id: "search" as const, Icon: Search },
                  { id: "network" as const, Icon: Users },
                ] as const
              ).map(({ id, Icon }) => {
                const active = screen === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      setScreen(id);
                      setTick((t) => t + 1);
                    }}
                    className="flex flex-col items-center gap-0.5 px-3 py-1"
                    aria-label={c.tabs[id]}
                    aria-current={active ? "page" : undefined}
                  >
                    <Icon
                      className={`h-4 w-4 ${active ? "text-[#B78A3D]" : "text-[#9B9B9B]"}`}
                      strokeWidth={active ? 2.2 : 1.7}
                    />
                    <span
                      className={`text-[0.5rem] ${active ? "font-semibold text-[#B78A3D]" : "text-[#9B9B9B]"}`}
                    >
                      {c.tabs[id]}
                    </span>
                  </button>
                );
              })}
            </div>
            {/* Progress dots for autoplay */}
            <div className="mt-1.5 flex justify-center gap-1">
              {SCREENS.map((s) => (
                <span
                  key={s}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    s === screen ? "w-4 bg-[#B78A3D]" : "w-1 bg-[#D4CFC4]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscoverScreen({ data }: { data: (typeof mock)["pl"]["discover"] }) {
  return (
    <div className="flex h-full flex-col pt-1">
      <p className="px-1 font-display text-[1.05rem] text-[#1B1D1F]">{data.title}</p>
      <div className="mt-2 flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-[rgba(21,34,41,0.08)] bg-white shadow-[0_8px_24px_rgba(21,34,41,0.08)]">
        <div
          className="relative flex h-[42%] min-h-[140px] items-end justify-between p-3"
          style={{
            background:
              "linear-gradient(145deg, #152229 0%, #2C4A5A 55%, #B78A3D 160%)",
          }}
        >
          <div className="absolute right-2.5 top-2.5 rounded-full bg-white/95 px-2 py-0.5 text-[0.58rem] font-semibold tabular-nums text-[#B78A3D]">
            {data.fit}%
          </div>
          <div>
            <p className="font-display text-[0.95rem] leading-tight text-[#F5F2EA]">
              {data.name}
            </p>
            <p className="mt-0.5 text-[0.58rem] text-[#F5F2EA]/75">{data.role}</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[0.7rem] font-semibold text-white">
            MK
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-3">
          <div className="flex items-center gap-1 text-[0.58rem] text-[#6B6B6B]">
            <MapPin className="h-3 w-3 text-[#B78A3D]" />
            {data.city}
          </div>
          <p className="text-[0.65rem] leading-snug text-[#3A3C3E]">{data.looking}</p>
          <div className="mt-auto flex gap-2 pt-2">
            <div className="flex flex-1 items-center justify-center gap-1 rounded-full border border-[rgba(21,34,41,0.12)] bg-[#EDE9DF] py-2 text-[0.62rem] font-medium text-[#3A3C3E]">
              <X className="h-3 w-3" />
              {data.skip}
            </div>
            <div className="flex flex-[1.2] items-center justify-center gap-1 rounded-full bg-[#B78A3D] py-2 text-[0.62rem] font-semibold text-white">
              <UserPlus className="h-3 w-3" />
              {data.connect}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchScreen({ data }: { data: (typeof mock)["pl"]["search"] }) {
  return (
    <div className="flex h-full flex-col pt-1">
      <p className="px-1 font-display text-[1.05rem] text-[#1B1D1F]">{data.title}</p>
      <div className="mt-2 flex items-center gap-2 rounded-xl border border-[rgba(21,34,41,0.1)] bg-white px-2.5 py-2">
        <Search className="h-3.5 w-3.5 text-[#9B9B9B]" />
        <span className="text-[0.65rem] text-[#9B9B9B]">{data.placeholder}</span>
      </div>
      <div className="mt-2.5 space-y-1.5 overflow-hidden">
        {data.results.map((r, i) => (
          <div
            key={r.name}
            className="flex items-center gap-2.5 rounded-xl border border-[rgba(21,34,41,0.07)] bg-white px-2.5 py-2 shadow-[0_2px_8px_rgba(21,34,41,0.04)]"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(183,138,61,0.15)] text-[0.58rem] font-semibold text-[#8B6914]">
              {r.initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[0.68rem] font-semibold text-[#1B1D1F]">
                {r.name}
              </p>
              <p className="truncate text-[0.55rem] text-[#6B6B6B]">{r.role}</p>
              <p className="truncate text-[0.52rem] text-[#9B9B9B]">{r.city}</p>
            </div>
            <Building2 className="h-3.5 w-3.5 shrink-0 text-[#B78A3D]/70" />
          </div>
        ))}
      </div>
    </div>
  );
}

function NetworkScreen({ data }: { data: (typeof mock)["pl"]["network"] }) {
  return (
    <div className="flex h-full flex-col pt-1">
      <p className="px-1 font-display text-[1.05rem] text-[#1B1D1F]">{data.title}</p>

      <div className="mt-2 flex items-center gap-2 rounded-xl border border-[rgba(21,34,41,0.07)] bg-white px-2.5 py-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(183,138,61,0.15)]">
          <UserPlus className="h-3.5 w-3.5 text-[#B78A3D]" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[0.68rem] font-semibold text-[#1B1D1F]">
            {data.requests}
          </p>
          <p className="text-[0.52rem] text-[#6B6B6B]">{data.requestMeta}</p>
        </div>
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#B78A3D] px-1.5 text-[0.55rem] font-semibold text-white">
          2
        </span>
        <ChevronRight className="h-3.5 w-3.5 text-[#9B9B9B]" />
      </div>

      <p className="mt-3 px-1 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-[#6B6B6B]">
        {data.connections}
      </p>
      <div className="mt-1.5 overflow-hidden rounded-xl border border-[rgba(21,34,41,0.07)] bg-white">
        {data.rows.map((row, i) => (
          <div
            key={row.name}
            className={`flex items-center gap-2.5 px-2.5 py-2.5 ${
              i < data.rows.length - 1
                ? "border-b border-[rgba(21,34,41,0.06)]"
                : ""
            }`}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDE9DF] text-[0.58rem] font-semibold text-[#3A3C3E]">
              {row.initials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <p className="truncate text-[0.68rem] font-semibold text-[#1B1D1F]">
                  {row.name}
                </p>
                {row.deal ? (
                  <span className="shrink-0 rounded-full bg-[rgba(183,138,61,0.15)] px-1.5 py-0.5 text-[0.48rem] font-semibold text-[#8B6914]">
                    {data.dealBadge}
                  </span>
                ) : null}
              </div>
              <p className="truncate text-[0.55rem] text-[#6B6B6B]">{row.preview}</p>
            </div>
            <MessageCircle className="h-3.5 w-3.5 shrink-0 text-[#B78A3D]" />
          </div>
        ))}
      </div>
    </div>
  );
}
