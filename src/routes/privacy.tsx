import { createFileRoute, Link } from "@tanstack/react-router";

import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Polityka prywatności — Konexa" },
      {
        name: "description",
        content:
          "Jak Konexa przetwarza dane osobowe zgodnie z RODO/GDPR: zakres danych, cel, przechowywanie w UE i Twoje prawa.",
      },
      { property: "og:title", content: "Polityka prywatności — Konexa" },
      {
        property: "og:description",
        content: "Przetwarzanie danych w Konexa zgodnie z RODO/GDPR.",
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

const sections = [
  {
    t: "Administrator danych",
    d: "Administratorem danych jest zespół Konexa (konexa.space). W sprawach dotyczących danych osobowych napisz na privacy@konexa.space.",
  },
  {
    t: "Jakie dane zbieramy",
    d: "Na etapie listy oczekujących zbieramy adres e-mail, wybrany obszar zainteresowań oraz preferowany język komunikacji.",
  },
  {
    t: "Cel i podstawa prawna",
    d: "Dane przetwarzamy wyłącznie po to, by wysłać zaproszenie i informacje o starcie aplikacji. Podstawą jest Twoja zgoda (art. 6 ust. 1 lit. a RODO), którą możesz wycofać w każdej chwili.",
  },
  {
    t: "Przechowywanie",
    d: "Dane przechowujemy na serwerach w Unii Europejskiej i usuwamy je, gdy wycofasz zgodę lub gdy przestaną być potrzebne do wysłania zaproszenia.",
  },
  {
    t: "Udostępnianie",
    d: "Nie sprzedajemy danych i nie udostępniamy ich w celach marketingowych stronom trzecim. Korzystamy wyłącznie z dostawców niezbędnych do działania usługi.",
  },
  {
    t: "Twoje prawa",
    d: "Masz prawo dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych oraz wniesienia skargi do Prezesa UODO.",
  },
];

function Privacy() {
  return (
    <main className="min-h-screen bg-background px-5 py-16">
      <div className="mx-auto max-w-2xl">
        <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          ← Konexa
        </Link>
        <h1 className="mt-8 text-3xl sm:text-4xl">Polityka prywatności</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Zgodna z RODO / GDPR. Ostatnia aktualizacja: 2026.
        </p>
        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <section key={s.t}>
              <h2 className="text-lg">{s.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
