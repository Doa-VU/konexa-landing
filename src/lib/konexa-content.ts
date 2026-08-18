export type Lang = "pl" | "en";

export const content = {
  pl: {
    nav: { how: "Jak to działa", why: "Dlaczego Konexa", faq: "FAQ", cta: "Poproś o zaproszenie" },
    hero: {
      eyebrow: "Klub tylko z zaproszenia · Na całym świecie",
      title: "Prawdziwi ludzie. Prawdziwe okazje.",
      titleAccent: "Jedna aplikacja.",
      sub: "Konexa łączy zweryfikowanych profesjonalistów według wspólnego celu — nieruchomości, giełda i krypto, biznes, pasje. Pierwsze 350 miejsc, wyłącznie z zaproszenia.",
      cta: "Poproś o zaproszenie",
      note: "Bez spamu. Zaproszenia wysyłamy falami.",
      stat: "350 miejsc w pierwszej fali",
    },
    partners: {
      kicker: "Partnerzy",
      title: "Zaufani partnerzy biznesowi",
      sub: "Współpracujemy z organizacjami, które wspierają profesjonalistów w inwestycjach, biznesie i codziennej pracy.",
      slotTitle: "Twój brand tutaj",
      slotBody: "Szukasz partnerstwa z Konexa? Napisz do nas.",
      slotCta: "hello@konexa.space",
    },
    problem: {
      kicker: "Problem",
      title: "Networking dziś działa przypadkiem",
      items: [
        {
          t: "Nieustanny szum",
          d: "Feed pełen treści, a wartościowa rozmowa zdarza się raz na sto wiadomości.",
        },
        {
          t: "Losowe konferencje",
          d: "Wychodzisz z garścią wizytówek i zero wspólnych tematów, które można domknąć.",
        },
        {
          t: "Brak systemu",
          d: "Nie ma sposobu, by celowo znaleźć wspólnika do konkretnego projektu.",
        },
      ],
    },
    how: {
      kicker: "Jak to działa",
      title: "Trzy kroki do właściwej osoby",
      steps: [
        { t: "Wybierz obszar", d: "Zaznacz, czego szukasz i co wnosisz do stołu." },
        { t: "Dopasuj się", d: "Pokazujemy tylko profile z realnym punktem wspólnym." },
        { t: "Zacznij rozmowę", d: "Rozmowa startuje dopiero, gdy obie strony chcą." },
      ],
    },
    personas: {
      kicker: "Dla kogo",
      title: "Cztery obszary, konkretne cele",
      items: [
        {
          t: "Nieruchomości",
          d: "Znajdź współinwestora do konkretnej transakcji, zanim trafi na rynek.",
        },
        {
          t: "Giełda i krypto",
          d: "Wymieniaj tezy inwestycyjne z ludźmi, którzy naprawdę mają pozycje.",
        },
        { t: "Biznes", d: "Poznaj wspólnika, klienta lub dostawcę pasującego do etapu firmy." },
        { t: "Pasje", d: "Partner do tenisa, żeglarstwa czy podróży z tego samego kręgu." },
      ],
    },
    why: {
      kicker: "Dlaczego Konexa",
      title: "Zbudowane wokół zaufania, nie zasięgów",
      items: [
        {
          t: "Wielopoziomowa weryfikacja",
          d: "Tożsamość i doświadczenie sprawdzane etapami. Bez pustych profili.",
        },
        {
          t: "Dopasowanie obustronne",
          d: "Kontakt otwiera się tylko przy wzajemnym zainteresowaniu. Zero zimnych DM-ów.",
        },
        {
          t: "Osobiste rekomendacje",
          d: "Część połączeń podpowiada zespół z wieloletnią siecią kontaktów.",
        },
      ],
    },
    credibility: {
      kicker: "Kto za tym stoi",
      title: "Ludzie z branży, nie tylko z produktu",
      body: "Konexa powstaje w Polsce, budowana przez zespół z doświadczeniem w nieruchomościach, inwestycjach i rozwoju biznesu. Jeszcze nie chwalimy się liczbami — aplikacja nie jest publicznie dostępna. Zamiast tego zaczynamy od małej, starannie dobranej grupy i rośniemy powoli.",
      points: ["Zasięg globalny", "Pierwsza fala: 350 osób", "Zgodność z RODO"],
    },
    ambassador: {
      kicker: "Ambasadorzy",
      title: "Pierwszych 50 członków otrzyma program poleceń",
      body: "Ekskluzywne korzyści dla osób, które pomogą zbudować pierwszy krąg: przedłużony dostęp premium i wyróżnienie w społeczności.",
    },
    membership: {
      kicker: "Członkostwo",
      title: "Zacznij bezpłatnie, rozwiń gdy zechcesz",
      free: {
        t: "Standard",
        p: "0 zł",
        items: [
          "Przeglądaj wszystkie 4 obszary — nieruchomości, giełda i krypto, biznes, pasje",
          "Zobacz, kto jest w sieci, wraz z odznakami zweryfikowanych profili",
          "Podejrzyj, co dana osoba wnosi i czego szuka",
        ],
      },
      paid: {
        t: "Premium",
        p: "10 zł/mies.",
        items: [
          "Pełny dostęp do profili — żadnych zamazanych szczegółów",
          "Dopasowania i wiadomości bezpośrednie, bez limitów",
          "Inteligentne dopasowanie — najlepiej pasujące osoby na początku",
          "Publikuj artykuły i okazje, komentuj i angażuj się w społeczność",
          "Priorytet przy osobistych rekomendacjach od zespołu",
        ],
        badge: "Pierwsza fala",
      },
      enterprise: {
        t: "Enterprise",
        p: "Wycena ind.",
        body: "Dla firm i organizacji — indywidualna wycena, miejsca dla zespołu i możliwości partnerskie. Skontaktuj się z nami.",
        cta: "Skontaktuj się",
      },
    },

    faq: {
      kicker: "FAQ",
      title: "Krótkie odpowiedzi",
      items: [
        {
          q: "Kiedy dostanę zaproszenie?",
          a: "Zapraszamy falami, zaczynając od pierwszych 350 osób. Odezwiemy się mailem, gdy przyjdzie Twoja kolej.",
        },
        {
          q: "Czym to się różni od zwykłych sieci zawodowych?",
          a: "Publiczne portale to CV i feed. Konexa to zamknięty krąg z jednym celem: dopasować dwie osoby do konkretnej współpracy.",
        },
        {
          q: "Czy to aplikacja randkowa?",
          a: "Nie. Mechanika dopasowania służy wyłącznie celom zawodowym i tematycznym, a ton jest profesjonalny.",
        },
        {
          q: "Czy moje dane są bezpieczne?",
          a: "Tak. Działamy zgodnie z RODO/GDPR, dane przechowujemy w UE i nie sprzedajemy ich nikomu.",
        },
        {
          q: "Ile to kosztuje?",
          a: "Podstawowe członkostwo jest bezpłatne. Premium pojawi się po starcie — członkowie pierwszej fali dostaną lepsze warunki.",
        },
      ],
    },
    form: {
      kicker: "Dołącz",
      title: "Poproś o zaproszenie",
      sub: "Zostaw kontakt — odezwiemy się, gdy zwolni się miejsce w Twoim obszarze.",
      email: "Adres e-mail",
      role: "Obszar zainteresowań",
      roles: ["Nieruchomości", "Giełda i krypto", "Biznes", "Pasje"],
      lang: "Preferowany język",
      submit: "Poproś o zaproszenie",
      success:
        "Otworzyliśmy Twoją skrzynkę e-mail do hello@konexa.space. Wyślij wiadomość, żebyśmy mogli dodać Cię do listy.",
      privacy: "Wysyłając formularz akceptujesz",
      privacyLink: "politykę prywatności",
    },
    footer: {
      privacy: "Polityka prywatności",
      support: "Wsparcie",
      contact: "hello@konexa.space",
      rights: "Wszelkie prawa zastrzeżone.",
    },
  },
  en: {
    nav: { how: "How it works", why: "Why Konexa", faq: "FAQ", cta: "Request an invite" },
    hero: {
      eyebrow: "Invite-only club · Worldwide",
      title: "Real people. Real opportunities.",
      titleAccent: "One app.",
      sub: "Konexa matches verified professionals by shared intent — real estate, stocks & crypto, business, personal interests. First 350 seats, by invitation only.",
      cta: "Request an invite",
      note: "No spam. Invitations go out in waves.",
      stat: "350 seats in the first wave",
    },
    partners: {
      kicker: "Partners",
      title: "Trusted business partners",
      sub: "We work with organizations that support professionals in investing, business, and everyday work.",
      slotTitle: "Your brand here",
      slotBody: "Interested in partnering with Konexa? Get in touch.",
      slotCta: "hello@konexa.space",
    },
    problem: {
      kicker: "The problem",
      title: "Networking today runs on luck",
      items: [
        {
          t: "Endless noise",
          d: "An endless feed where one useful conversation hides behind a hundred messages.",
        },
        {
          t: "Random events",
          d: "You leave with business cards and nothing concrete to build on.",
        },
        {
          t: "No system",
          d: "There is no deliberate way to find the right partner for a specific deal.",
        },
      ],
    },
    how: {
      kicker: "How it works",
      title: "Three steps to the right person",
      steps: [
        { t: "Choose your focus", d: "Tell us what you're looking for and what you bring." },
        { t: "Match with relevant people", d: "You only see profiles with a real overlap." },
        { t: "Start the conversation", d: "Conversations open only when both sides opt in." },
      ],
    },
    personas: {
      kicker: "Who it's for",
      title: "Four focus areas, specific outcomes",
      items: [
        { t: "Real estate", d: "Find a co-investor for a specific deal before it hits the market." },
        {
          t: "Stocks & crypto",
          d: "Trade investment theses with people who actually hold positions.",
        },
        { t: "Business", d: "Meet a co-founder, client or supplier who fits your current stage." },
        { t: "Personal interest", d: "A tennis, sailing or travel partner from the same circle." },
      ],
    },
    why: {
      kicker: "Why Konexa",
      title: "Built around trust, not reach",
      items: [
        {
          t: "Multi-tier verification",
          d: "Identity and experience checked in stages. No hollow profiles.",
        },
        {
          t: "Mutual matching",
          d: "Contact opens only on mutual interest. No cold DMs, ever.",
        },
        {
          t: "Curated introductions",
          d: "Some connections are made personally by a team with a deep network.",
        },
      ],
    },
    credibility: {
      kicker: "Who's behind it",
      title: "Operators first, product second",
      body: "Konexa is built in Poland by a team with hands-on experience in real estate, investing and business development. We're not quoting member numbers — the app isn't public yet. Instead we're starting with a small, carefully chosen group and growing slowly.",
      points: ["Global reach", "First wave: 350 people", "GDPR / RODO compliant"],
    },
    ambassador: {
      kicker: "Ambassadors",
      title: "The first 50 members get exclusive referral rewards",
      body: "Perks for those who help build the first circle: extended premium access and recognition inside the community.",
    },
    membership: {
      kicker: "Membership",
      title: "Start free, expand when it's worth it",
      free: {
        t: "Standard",
        p: "0 PLN",
        items: [
          "Browse all 4 focus areas — real estate, stock & crypto, business, personal interest",
          "See who's in the network, with verified profile badges",
          "Preview what people have and what they're looking for",
        ],
      },
      paid: {
        t: "Premium",
        p: "10 PLN/mo",
        items: [
          "Full profile access — no blurred details, ever",
          "Match and message directly, no limits",
          "Smart matching — see your best-fit connections first",
          "Post articles and deals, comment and engage with the community",
          "Priority for personal introductions from our team",
        ],
        badge: "First wave",
      },
      enterprise: {
        t: "Enterprise",
        p: "Custom pricing",
        body: "For companies and organizations — custom pricing, team seats, and partnership opportunities. Contact us.",
        cta: "Contact us",
      },
    },
    faq: {
      kicker: "FAQ",
      title: "Short answers",
      items: [
        {
          q: "When will I get invited?",
          a: "We invite in waves, starting with the first 350 people. You'll get an email when your turn comes.",
        },
        {
          q: "How is this different from other professional networks?",
          a: "Public networks are a CV and a feed. Konexa is a closed circle with one job: matching two people for a specific collaboration.",
        },
        {
          q: "Is this a dating app?",
          a: "No. Matching exists purely for professional and topical goals, and the tone stays professional.",
        },
        {
          q: "Is my data safe?",
          a: "Yes. We operate under GDPR/RODO, store data in the EU and never sell it.",
        },
        {
          q: "What does it cost?",
          a: "Standard membership is free. Premium arrives after launch, with better terms for first-wave members.",
        },
      ],
    },
    form: {
      kicker: "Join",
      title: "Request an invite",
      sub: "Leave your details — we'll reach out when a seat opens in your focus area.",
      email: "Email address",
      role: "Focus area",
      roles: ["Real estate", "Stocks & crypto", "Business", "Personal interest"],
      lang: "Preferred language",
      submit: "Request an invite",
      success:
        "We opened your email client to hello@konexa.space. Send the message so we can add you to the list.",
      privacy: "By submitting you accept our",
      privacyLink: "Privacy Policy",
    },
    footer: {
      privacy: "Privacy Policy",
      support: "Support",
      contact: "hello@konexa.space",
      rights: "All rights reserved.",
    },
  },
} as const;
