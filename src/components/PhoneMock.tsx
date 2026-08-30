import { useEffect, useState } from "react";
import {
  Bell,
  BookOpen,
  Handshake,
  Home,
  LifeBuoy,
  MapPin,
  Search,
  Shield,
  Star,
  User,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import type { Lang } from "@/lib/konexa-content";

type Screen = "discover" | "search" | "network";

const SCREENS: Screen[] = ["discover", "search", "network"];
const INTERVAL_MS = 4200;

const C = {
  navy: "#152229",
  cream: "#F5F2EA",
  creamDark: "#EDE9DF",
  brass: "#B78A3D",
  brassLight: "#D4A855",
  charcoal: "#1B1D1F",
  gray: "#6B6B6B",
  grayLight: "#9B9B9B",
  white: "#FFFFFF",
  border: "rgba(21,34,41,0.10)",
} as const;

const copy = {
  pl: {
    tabs: {
      discover: "Odkrywaj",
      search: "Szukaj",
      feed: "Feed",
      network: "Sieć",
      profile: "Profil",
    },
    discover: {
      title: "Odkrywaj",
      pillars: ["Wszystkie", "Nieruchomości", "Biznes"],
      name: "Marek Kowalski",
      profession: "Inwestor nieruchomości",
      role: "Inwestor · Owner",
      city: "Gdańsk, Pomorskie",
      lookingLabel: "Szuka",
      looking: "Współinwestor do kamienicy — budżet 2,4 mln PLN.",
      tags: ["Nieruchomości", "Inwestycje"],
      connect: "Połącz",
      fit: 94,
      verified: "VERIFIED",
    },
    search: {
      title: "Szukaj",
      placeholder: "Szukaj po imieniu, firmie…",
      chips: ["Wszystkie", "Nieruchomości"],
      results: [
        {
          initials: "AW",
          name: "Anna Wiśniewska",
          profession: "Analityk rynków",
          role: "Analyst",
          city: "Warszawa",
          fit: 91,
          verified: true,
        },
        {
          initials: "PL",
          name: "Piotr Lewandowski",
          profession: "Founder · SaaS",
          role: "Founder",
          city: "Kraków",
          fit: 86,
          verified: false,
        },
        {
          initials: "KN",
          name: "Karolina Nowak",
          profession: "Doradca PropTech",
          role: "Advisor",
          city: "Wrocław",
          fit: 82,
          verified: true,
        },
      ],
    },
    network: {
      title: "Sieć",
      placeholder: "Szukaj po imieniu, firmie…",
      requests: "Zaproszenia",
      requestMeta: "2 otrzymane",
      connections: "Połączenia",
      dealBadge: "Deal Room",
      rows: [
        {
          initials: "AW",
          name: "Anna Wiśniewska",
          preview: "Możemy porozmawiać w czwartek?",
          time: "14:20",
          deal: false,
        },
        {
          initials: "PL",
          name: "Piotr Lewandowski",
          preview: "Wrzuciłem term sheet do Deal Room",
          time: "Wczoraj",
          deal: true,
        },
        {
          initials: "KN",
          name: "Karolina Nowak",
          preview: "Nowe dopasowanie — napisz wiadomość",
          time: "Pon",
          deal: false,
        },
      ],
    },
  },
  en: {
    tabs: {
      discover: "Discover",
      search: "Search",
      feed: "Feed",
      network: "Network",
      profile: "Profile",
    },
    discover: {
      title: "Discover",
      pillars: ["All", "Real estate", "Business"],
      name: "Marek Kowalski",
      profession: "Real estate investor",
      role: "Investor · Owner",
      city: "Gdańsk, Pomerania",
      lookingLabel: "Looking for",
      looking: "Co-investor for a townhouse — €560k budget.",
      tags: ["Real estate", "Investing"],
      connect: "Connect",
      fit: 94,
      verified: "VERIFIED",
    },
    search: {
      title: "Search",
      placeholder: "Search by name, company…",
      chips: ["All", "Real estate"],
      results: [
        {
          initials: "AW",
          name: "Anna Wiśniewska",
          profession: "Market analyst",
          role: "Analyst",
          city: "Warsaw",
          fit: 91,
          verified: true,
        },
        {
          initials: "PL",
          name: "Piotr Lewandowski",
          profession: "Founder · SaaS",
          role: "Founder",
          city: "Kraków",
          fit: 86,
          verified: false,
        },
        {
          initials: "KN",
          name: "Karolina Nowak",
          profession: "PropTech advisor",
          role: "Advisor",
          city: "Wrocław",
          fit: 82,
          verified: true,
        },
      ],
    },
    network: {
      title: "Network",
      placeholder: "Search by name, company…",
      requests: "Requests",
      requestMeta: "2 incoming",
      connections: "Connections",
      dealBadge: "Deal Room",
      rows: [
        {
          initials: "AW",
          name: "Anna Wiśniewska",
          preview: "Can we talk on Thursday?",
          time: "14:20",
          deal: false,
        },
        {
          initials: "PL",
          name: "Piotr Lewandowski",
          preview: "Uploaded the term sheet to Deal Room",
          time: "Yesterday",
          deal: true,
        },
        {
          initials: "KN",
          name: "Karolina Nowak",
          preview: "New match — say hello",
          time: "Mon",
          deal: false,
        },
      ],
    },
  },
} as const;

export function PhoneMock({ lang }: { lang: Lang }) {
  const [screen, setScreen] = useState<Screen>("discover");
  const [tick, setTick] = useState(0);
  const t = copy[lang];

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setScreen((prev) => SCREENS[(SCREENS.indexOf(prev) + 1) % SCREENS.length]!);
      setTick((n) => n + 1);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  const go = (id: Screen) => {
    setScreen(id);
    setTick((n) => n + 1);
  };

  return (
    <div className="relative mx-auto w-[276px] sm:w-[304px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 rounded-[3rem] opacity-25 blur-3xl"
        style={{ background: "var(--gradient-brass)" }}
      />
      <div
        className="relative rounded-[2.65rem] p-[6px] shadow-lift"
        style={{
          background: "linear-gradient(160deg, #2a2a2a, #111)",
          border: "1px solid rgba(183,138,61,0.35)",
        }}
      >
        <div
          className="relative flex h-[540px] flex-col overflow-hidden rounded-[2.2rem] sm:h-[580px]"
          style={{ background: C.cream }}
        >
          <div className="absolute left-1/2 top-[7px] z-30 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-black" />

          <div className="relative z-10 flex min-h-0 flex-1 flex-col">
            <div key={`${screen}-${tick}`} className="phone-mock-screen flex min-h-0 flex-1 flex-col">
              {screen === "discover" ? <DiscoverUI t={t.discover} /> : null}
              {screen === "search" ? <SearchUI t={t.search} /> : null}
              {screen === "network" ? <NetworkUI t={t.network} /> : null}
            </div>
          </div>

          {/* Floating glass tab bar — mirrors GlassTabBar */}
          <div className="relative z-20 px-3 pb-2.5 pt-1">
            <div
              className="flex items-stretch justify-between rounded-full px-1.5 py-1.5"
              style={{
                background: "rgba(21, 34, 41, 0.92)",
                boxShadow: "0 10px 28px rgba(0,0,0,0.28)",
                border: "1px solid rgba(183,138,61,0.22)",
              }}
            >
              {(
                [
                  { id: "discover" as const, Icon: Home, label: t.tabs.discover },
                  { id: "search" as const, Icon: Search, label: t.tabs.search },
                  { id: "feed" as const, Icon: BookOpen, label: t.tabs.feed, inert: true },
                  { id: "network" as const, Icon: Users, label: t.tabs.network },
                  { id: "profile" as const, Icon: User, label: t.tabs.profile, inert: true },
                ] as const
              ).map((tab) => {
                const active = !("inert" in tab && tab.inert) && screen === tab.id;
                return (
                  <button
                    key={tab.label}
                    type="button"
                    disabled={"inert" in tab && tab.inert}
                    onClick={() => {
                      if (tab.id === "discover" || tab.id === "search" || tab.id === "network") {
                        go(tab.id);
                      }
                    }}
                    className="relative flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-full px-0.5 py-1 disabled:opacity-100"
                    aria-label={tab.label}
                    aria-current={active ? "page" : undefined}
                  >
                    {active ? (
                      <span
                        className="absolute inset-x-1 inset-y-0.5 rounded-full"
                        style={{ background: "rgba(183,138,61,0.18)" }}
                      />
                    ) : null}
                    <tab.Icon
                      className="relative h-[15px] w-[15px]"
                      color={active ? C.brassLight : "rgba(245,242,234,0.5)"}
                      strokeWidth={active ? 2.3 : 1.7}
                    />
                    <span
                      className="relative max-w-full truncate text-[0.42rem] leading-none"
                      style={{
                        color: active ? C.brassLight : "rgba(245,242,234,0.45)",
                        fontWeight: active ? 600 : 500,
                      }}
                    >
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="mt-1.5 flex justify-center gap-1">
              {SCREENS.map((s) => (
                <span
                  key={s}
                  className="h-1 rounded-full transition-all duration-300"
                  style={{
                    width: s === screen ? 14 : 4,
                    background: s === screen ? C.brass : "#D4CFC4",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppNavBar({ title }: { title: string }) {
  return (
    <div
      className="flex h-11 shrink-0 items-center justify-between px-3"
      style={{ background: C.navy }}
    >
      <div className="w-8" />
      <p
        className="font-display text-[0.95rem] tracking-tight"
        style={{ color: C.cream }}
      >
        {title}
      </p>
      <div className="flex w-8 items-center justify-end gap-1">
        <LifeBuoy className="h-3.5 w-3.5" color={C.brass} strokeWidth={1.8} />
      </div>
    </div>
  );
}

function DiscoverUI({ t }: { t: (typeof copy)["pl"]["discover"] }) {
  return (
    <>
      <AppNavBar title={t.title} />
      <div className="flex items-center gap-1.5 overflow-hidden px-2.5 pb-1.5 pt-2">
        {t.pillars.map((p, i) => (
          <span
            key={p}
            className="shrink-0 rounded-full px-2.5 py-1 text-[0.52rem] font-medium"
            style={
              i === 0
                ? { background: C.navy, color: C.cream }
                : {
                    background: C.white,
                    color: C.gray,
                    border: `1px solid ${C.border}`,
                  }
            }
          >
            {p}
          </span>
        ))}
        <Bell className="ml-auto h-3.5 w-3.5 shrink-0" color={C.brass} />
      </div>

      <div className="relative mx-2.5 mb-1 min-h-0 flex-1">
        {/* Swipe card */}
        <div
          className="flex h-full flex-col overflow-hidden rounded-[16px] bg-white"
          style={{
            boxShadow: "0 10px 28px rgba(21,34,41,0.12)",
            border: `1px solid ${C.border}`,
          }}
        >
          <div
            className="relative flex h-[38%] min-h-[118px] flex-col items-center justify-center"
            style={{
              background:
                "linear-gradient(145deg, #152229 0%, #1E333E 45%, #2C4A5A 100%)",
            }}
          >
            <div
              className="absolute right-2.5 top-2.5 rounded-full px-2 py-0.5 text-[0.55rem] font-bold tabular-nums"
              style={{ background: C.white, color: C.brass }}
            >
              {t.fit}%
            </div>
            <div
              className="absolute bottom-2 left-2.5 flex items-center gap-0.5 text-[0.48rem] font-bold tracking-wide"
              style={{ color: C.brass }}
            >
              <Shield className="h-2.5 w-2.5" fill={C.brass} color={C.brass} />
              {t.verified}
            </div>
            <div
              className="flex h-[58px] w-[58px] items-center justify-center rounded-full text-[0.85rem] font-semibold"
              style={{
                background: "rgba(245,242,234,0.95)",
                color: C.navy,
                border: "2px solid rgba(183,138,61,0.45)",
              }}
            >
              MK
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-hidden px-3 pb-2 pt-2.5">
            <p
              className="font-display text-[0.95rem] leading-tight"
              style={{ color: C.charcoal }}
            >
              {t.name}
            </p>
            <p className="text-[0.62rem] font-semibold" style={{ color: C.brass }}>
              {t.profession}
            </p>
            <p className="text-[0.52rem]" style={{ color: C.gray }}>
              {t.role}
            </p>
            <div className="mt-0.5 flex items-center gap-1">
              <MapPin className="h-2.5 w-2.5" color={C.gray} />
              <span className="text-[0.52rem]" style={{ color: C.gray }}>
                {t.city}
              </span>
            </div>
            <p
              className="mt-1.5 text-[0.5rem] font-semibold uppercase tracking-[0.12em]"
              style={{ color: C.grayLight }}
            >
              {t.lookingLabel}
            </p>
            <p className="text-[0.58rem] leading-snug" style={{ color: C.charcoal }}>
              {t.looking}
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-2 py-0.5 text-[0.48rem] font-medium"
                  style={{
                    background: C.creamDark,
                    color: C.charcoal,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pass / Connect / Star — floating over card bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-2 z-10 flex items-center justify-center gap-2.5">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white"
            style={{
              boxShadow: "0 4px 14px rgba(21,34,41,0.14)",
              border: `1px solid ${C.border}`,
            }}
          >
            <X className="h-4 w-4" color={C.gray} strokeWidth={2.2} />
          </div>
          <div
            className="flex h-9 items-center gap-1.5 rounded-full px-4"
            style={{
              background: "linear-gradient(135deg, #B78A3D, #D4A855)",
              boxShadow: "0 6px 16px rgba(183,138,61,0.35)",
            }}
          >
            <Handshake className="h-3.5 w-3.5 text-white" />
            <span className="text-[0.62rem] font-semibold text-white">{t.connect}</span>
          </div>
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white"
            style={{
              boxShadow: "0 4px 14px rgba(21,34,41,0.14)",
              border: `1px solid ${C.border}`,
            }}
          >
            <Star className="h-3.5 w-3.5" color={C.brass} strokeWidth={2} />
          </div>
        </div>
      </div>
    </>
  );
}

function SearchUI({ t }: { t: (typeof copy)["pl"]["search"] }) {
  return (
    <>
      <AppNavBar title={t.title} />
      <div className="px-2.5 pb-1.5 pt-2">
        <div
          className="flex items-center gap-2 rounded-[10px] px-2.5 py-2"
          style={{ background: C.creamDark }}
        >
          <Search className="h-3.5 w-3.5" color={C.gray} />
          <span className="text-[0.62rem]" style={{ color: C.grayLight }}>
            {t.placeholder}
          </span>
        </div>
        <div className="mt-2 flex gap-1.5">
          {t.chips.map((c, i) => (
            <span
              key={c}
              className="rounded-full px-2.5 py-1 text-[0.52rem] font-medium"
              style={
                i === 0
                  ? { background: C.navy, color: C.cream }
                  : {
                      background: C.white,
                      color: C.gray,
                      border: `1px solid ${C.border}`,
                    }
              }
            >
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="min-h-0 flex-1 space-y-0 overflow-hidden px-1">
        {t.results.map((r) => (
          <div
            key={r.name}
            className="flex items-center gap-2.5 px-2 py-2.5"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[0.62rem] font-semibold"
              style={{ background: C.creamDark, color: C.charcoal }}
            >
              {r.initials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <p
                  className="truncate text-[0.7rem] font-semibold"
                  style={{ color: C.charcoal }}
                >
                  {r.name}
                </p>
                {r.verified ? (
                  <Shield className="h-2.5 w-2.5 shrink-0" fill={C.brass} color={C.brass} />
                ) : null}
              </div>
              <p className="truncate text-[0.55rem] font-medium" style={{ color: C.brass }}>
                {r.profession}
              </p>
              <p className="truncate text-[0.5rem]" style={{ color: C.gray }}>
                {r.role}
              </p>
              <div className="mt-0.5 flex items-center gap-0.5">
                <MapPin className="h-2.5 w-2.5" color={C.grayLight} />
                <span className="text-[0.48rem]" style={{ color: C.grayLight }}>
                  {r.city}
                </span>
              </div>
            </div>
            <div
              className="shrink-0 rounded-full px-1.5 py-0.5 text-[0.52rem] font-bold tabular-nums"
              style={{ background: "rgba(183,138,61,0.15)", color: C.brass }}
            >
              {r.fit}%
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function NetworkUI({ t }: { t: (typeof copy)["pl"]["network"] }) {
  return (
    <>
      <AppNavBar title={t.title} />
      <div className="px-2.5 pb-1.5 pt-2">
        <div
          className="flex items-center gap-2 rounded-[10px] px-2.5 py-2"
          style={{ background: C.creamDark }}
        >
          <Search className="h-3.5 w-3.5" color={C.grayLight} />
          <span className="text-[0.62rem]" style={{ color: C.grayLight }}>
            {t.placeholder}
          </span>
        </div>
      </div>

      <div className="min-h-0 flex-1 space-y-2 overflow-hidden px-2.5 pb-1">
        <div
          className="flex items-center gap-2 rounded-xl bg-white px-2.5 py-2"
          style={{ border: `1px solid ${C.border}` }}
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full"
            style={{ background: "rgba(183,138,61,0.15)" }}
          >
            <UserPlus className="h-3.5 w-3.5" color={C.brass} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[0.68rem] font-semibold" style={{ color: C.charcoal }}>
              {t.requests}
            </p>
            <p className="text-[0.5rem]" style={{ color: C.gray }}>
              {t.requestMeta}
            </p>
          </div>
          <span
            className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[0.52rem] font-semibold text-white"
            style={{ background: C.brass }}
          >
            2
          </span>
        </div>

        <p
          className="px-1 pt-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em]"
          style={{ color: C.gray }}
        >
          {t.connections}
        </p>

        <div
          className="overflow-hidden rounded-xl bg-white"
          style={{ border: `1px solid ${C.border}` }}
        >
          {t.rows.map((row, i) => (
            <div
              key={row.name}
              className="flex items-center gap-2.5 px-2.5 py-2.5"
              style={
                i < t.rows.length - 1
                  ? { borderBottom: `1px solid ${C.border}` }
                  : undefined
              }
            >
              <div
                className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full text-[0.58rem] font-semibold"
                style={{ background: C.creamDark, color: C.charcoal }}
              >
                {row.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <p
                    className="truncate text-[0.7rem] font-semibold"
                    style={{ color: C.charcoal }}
                  >
                    {row.name}
                  </p>
                  <span className="shrink-0 text-[0.48rem]" style={{ color: C.grayLight }}>
                    {row.time}
                  </span>
                </div>
                <p className="truncate text-[0.55rem]" style={{ color: C.gray }}>
                  {row.preview}
                </p>
                {row.deal ? (
                  <span
                    className="mt-1 inline-block rounded-full px-1.5 py-0.5 text-[0.45rem] font-semibold"
                    style={{
                      background: "rgba(183,138,61,0.15)",
                      color: "#8B6914",
                    }}
                  >
                    {t.dealBadge}
                  </span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
