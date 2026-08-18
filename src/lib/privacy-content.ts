import type { Lang } from "@/lib/konexa-content";

export type PrivacyCopy = {
  metaTitle: string;
  metaDescription: string;
  back: string;
  title: string;
  updated: string;
  intro: [string, string];
  who: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  what: {
    title: string;
    p1: string;
    p2: string;
  };
  collect: {
    title: string;
    intro: string;
    account: {
      title: string;
      intro: string;
      items: string[];
      apple: string;
      passwords: string;
    };
    profile: {
      title: string;
      intro: string;
      items: string[];
      visibility: string;
    };
    business: {
      title: string;
      intro: string;
      items: string[];
    };
    content: {
      title: string;
      intro: string;
      items: string[];
      note: string;
    };
    referral: {
      title: string;
      intro: string;
      items: string[];
      note: string;
    };
    payment: {
      title: string;
      payuBefore: string;
      payuAfter: string;
      storeIntro: string;
      items: string[];
      notBefore: string;
      not: string;
      notAfter: string;
      provider: string;
    };
    technical: {
      title: string;
      intro: string;
      items: string[];
    };
  };
  use: {
    title: string;
    intro: string;
    items: string[];
  };
  bases: {
    title: string;
    intro: string;
    contract: { title: string; p: string };
    interests: {
      title: string;
      intro: string;
      items: string[];
      note: string;
    };
    legal: { title: string; p: string };
    consent: { title: string; p1: string; p2: string };
  };
  share: {
    title: string;
    noSell: string;
    intro: string;
    supporting: string;
    supportingItems: string[];
    examples: string;
    exampleItems: string[];
    roles: string;
    disclose: string;
  };
  visible: {
    title: string;
    p1: string;
    p2: string;
    items: string[];
    private: string;
  };
  retention: {
    title: string;
    p1: string;
    p2: string;
    exampleIntro: string;
    items: string[];
    dispose: string;
  };
  rights: {
    title: string;
    intro: string;
    items: string[];
    contact: string;
    verify: string;
    uodo: string;
  };
  deletion: {
    title: string;
    p1: string;
    p2: string;
  };
  transfers: {
    title: string;
    p1: string;
    p2: string;
  };
  security: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  children: {
    title: string;
    p1: string;
    p2: string;
  };
  thirdParty: {
    title: string;
    p1: string;
    p2: string;
  };
  changes: {
    title: string;
    p1: string;
    p2: string;
  };
  contact: {
    title: string;
    p: string;
  };
};

export const privacyCopy: Record<Lang, PrivacyCopy> = {
  pl: {
    metaTitle: "Polityka prywatności Konexa",
    metaDescription:
      "Dowiedz się, jak Konexa zbiera, wykorzystuje, przechowuje i chroni dane osobowe.",
    back: "← Konexa",
    title: "Polityka prywatności Konexa",
    updated: "Ostatnia aktualizacja: 12 sierpnia 2026 r.",
    intro: [
      "Konexa szanuje Twoją prywatność i zobowiązuje się do ochrony Twoich danych osobowych.",
      "Niniejsza Polityka prywatności wyjaśnia, w jaki sposób zbieramy, wykorzystujemy, przechowujemy i udostępniamy dane osobowe, gdy korzystasz z aplikacji mobilnej Konexa, strony internetowej oraz powiązanych usług.",
    ],
    who: {
      title: "1. Kim jesteśmy",
      p1: "Konexa to platforma networkingu zawodowego przeznaczona dla przedsiębiorców, założycieli firm, inwestorów, specjalistów z rynku nieruchomości, doradców oraz innych profesjonalistów.",
      p2: "W sprawach dotyczących prywatności, wniosków o dane lub ogólnego wsparcia skontaktuj się z nami:",
      p3: "W niniejszej Polityce prywatności określenia „Konexa”, „my”, „nas” i „nasz” oznaczają operatora usługi Konexa.",
    },
    what: {
      title: "2. Czym zajmuje się Konexa",
      p1: "Konexa to platforma networkingu zawodowego, która pomaga użytkownikom odkrywać odpowiednie osoby, okazje i kontakty biznesowe.",
      p2: "Konexa ułatwia profesjonalne wprowadzenia i komunikację. Konexa nie świadczy usług doradztwa inwestycyjnego, pośrednictwa, escrow ani realizacji transakcji.",
    },
    collect: {
      title: "3. Jakie dane osobowe zbieramy",
      intro: "W zależności od sposobu korzystania z Konexa możemy zbierać następujące kategorie informacji.",
      account: {
        title: "Informacje o koncie i uwierzytelnianiu",
        intro: "Gdy tworzysz konto lub się do niego logujesz, możemy przetwarzać:",
        items: [
          "adres e-mail",
          "identyfikatory uwierzytelniania",
          "identyfikator konta",
          "dostawcę logowania, na przykład Google lub Apple",
          "informacje o sesji i uwierzytelnianiu niezbędne do zabezpieczenia Twojego konta",
        ],
        apple:
          "Jeśli korzystasz z funkcji Zaloguj się przez Apple, Apple może przekazać nam prywatny adres e-mail przekaźnika zamiast Twojego osobistego adresu e-mail.",
        passwords: "Nie otrzymujemy Twojego hasła Google ani Apple.",
      },
      profile: {
        title: "Informacje profilowe",
        intro: "Możesz dobrowolnie podać informacje zawodowe, takie jak:",
        items: [
          "imię i nazwisko",
          "zdjęcie profilowe",
          "stanowisko",
          "zawód lub branża",
          "firma",
          "doświadczenie",
          "regiony, w których działasz",
          "zainteresowania i obszary specjalizacji",
          "informacje o tym, co oferujesz",
          "informacje o tym, czego szukasz",
          "służbowy adres e-mail",
          "numer telefonu",
          "LinkedIn lub inne linki zawodowe",
        ],
        visibility:
          "Część informacji profilowych może być widoczna dla innych użytkowników Konexa, w zależności od ustawień widoczności profilu.",
      },
      business: {
        title: "Informacje o firmie",
        intro: "Jeśli tworzysz lub zarządzasz profilem firmy, możemy przetwarzać informacje obejmujące:",
        items: [
          "nazwę firmy",
          "branżę lub kategorię",
          "opis",
          "lokalizację lub regiony działalności",
          "linki biznesowe",
          "informacje przesłane w ramach profilu firmy",
        ],
      },
      content: {
        title: "Treści i komunikacja",
        intro: "Gdy korzystasz z funkcji networkingu i komunikacji, możemy przetwarzać:",
        items: [
          "posty",
          "okazje biznesowe lub związane z nieruchomościami",
          "treści związane z transakcjami",
          "komentarze i interakcje",
          "informacje o połączeniach",
          "wiadomości wysyłane przez Konexa",
          "zgłoszenia moderacyjne lub wnioski o wsparcie",
        ],
        note: "Przetwarzamy te informacje, aby świadczyć funkcje, z których korzystasz, oraz aby dbać o bezpieczeństwo i integralność platformy.",
      },
      referral: {
        title: "Informacje o poleceniach i Programie Ambasadorskim",
        intro:
          "Jeśli dołączysz do Konexa przez polecenie lub uczestniczysz w Programie Ambasadorskim Konexa, możemy przetwarzać:",
        items: [
          "kody polecające",
          "Ambasadora polecającego",
          "atrybucję polecenia",
          "status rejestracji i konwersji",
          "ewidencję prowizji",
          "ewidencję wypłat",
          "status Ambasadora",
        ],
        note: "Informacje finansowe i dotyczące prowizji są dostępne wyłącznie dla upoważnionych użytkowników i administratorów, w zakresie uzasadnionym.",
      },
      payment: {
        title: "Informacje o subskrypcji i płatnościach",
        payuBefore: "Gdy kupujesz subskrypcję Konexa, płatności mogą być przetwarzane przez ",
        payuAfter: ".",
        storeIntro: "Konexa może przetwarzać i przechowywać informacje takie jak:",
        items: [
          "plan subskrypcji",
          "status płatności",
          "identyfikatory transakcji lub zamówień",
          "kwota płatności",
          "waluta",
          "daty subskrypcji",
          "status odnowienia lub anulowania",
        ],
        notBefore: "Konexa ",
        not: "nie",
        notAfter: " przechowuje pełnych numerów kart płatniczych ani kodów zabezpieczających kart.",
        provider:
          "Dane płatnicze niezbędne do realizacji transakcji są obsługiwane przez właściwego dostawcę płatności.",
      },
      technical: {
        title: "Informacje techniczne i dotyczące bezpieczeństwa",
        intro: "Możemy automatycznie przetwarzać określone informacje techniczne, takie jak:",
        items: [
          "informacje o urządzeniu i aplikacji",
          "system operacyjny",
          "adres IP",
          "znaczniki czasu",
          "zdarzenia uwierzytelniania i bezpieczeństwa",
          "informacje o błędach i diagnostyce",
          "informacje niezbędne do zapobiegania nadużyciom, oszustwom lub nieuprawnionemu dostępowi",
        ],
      },
    },
    use: {
      title: "4. W jaki sposób wykorzystujemy dane osobowe",
      intro: "Wykorzystujemy dane osobowe, aby:",
      items: [
        "tworzyć i utrzymywać Twoje konto Konexa",
        "uwierzytelniać użytkowników",
        "udostępniać profile zawodowe i profile firm",
        "pomagać użytkownikom odkrywać odpowiednich profesjonalistów i okazje",
        "umożliwiać połączenia i komunikację",
        "zapewniać funkcje wyszukiwania i odkrywania",
        "obsługiwać subskrypcje i dostęp do członkostwa",
        "przypisywać polecenia Ambasadorów i obliczać należne prowizje",
        "rozpatrywać wnioski o wsparcie",
        "moderować treści i egzekwować zasady platformy",
        "chronić Konexa, jej użytkowników i konta przed oszustwem lub nadużyciem",
        "utrzymywać i poprawiać niezawodność usługi",
        "wypełniać obowiązujące obowiązki prawne",
      ],
    },
    bases: {
      title: "5. Podstawy prawne przetwarzania",
      intro:
        "Tam, gdzie ma zastosowanie RODO, przetwarzamy dane osobowe na jednej lub kilku z poniższych podstaw prawnych.",
      contract: {
        title: "Wykonanie umowy",
        p: "Przetwarzamy informacje niezbędne do świadczenia Konexa i jej funkcji, gdy tworzysz i korzystasz z konta lub kupujesz członkostwo.",
      },
      interests: {
        title: "Prawnie uzasadnione interesy",
        intro: "Możemy przetwarzać dane, gdy jest to niezbędne do realizacji prawnie uzasadnionych interesów, takich jak:",
        items: [
          "utrzymanie bezpieczeństwa platformy",
          "zapobieganie oszustwom i nadużyciom",
          "poprawa niezawodności usługi",
          "moderowanie społeczności",
          "ochrona użytkowników i Konexa",
        ],
        note: "Przed powołaniem się na prawnie uzasadnione interesy oceniamy wpływ na Twoje prawa.",
      },
      legal: {
        title: "Obowiązki prawne",
        p: "Możemy przetwarzać lub przechowywać informacje, gdy wymaga tego obowiązujące prawo, w tym przepisy księgowe, podatkowe, dotyczące zapobiegania oszustwom lub wymogi regulacyjne.",
      },
      consent: {
        title: "Zgoda",
        p1: "W przypadkach, gdy jest to wymagane, opieramy się na Twojej zgodzie, na przykład w odniesieniu do określonych opcjonalnych komunikatów lub technologii.",
        p2: "Możesz wycofać zgodę, gdy ma to zastosowanie, bez wpływu na przetwarzanie, które miało miejsce przed jej wycofaniem.",
      },
    },
    share: {
      title: "6. W jaki sposób udostępniamy dane osobowe",
      noSell: "Nie sprzedajemy Twoich danych osobowych.",
      intro: "Możemy udostępniać dane osobowe dostawcom usług, gdy jest to niezbędne do działania Konexa.",
      supporting: "Mogą to być dostawcy wspierający:",
      supportingItems: [
        "uwierzytelnianie",
        "hosting w chmurze i bazy danych",
        "przetwarzanie płatności",
        "pocztę e-mail lub komunikację",
        "infrastrukturę aplikacji",
        "analitykę, diagnostykę lub bezpieczeństwo",
      ],
      examples: "Przykłady dostawców wykorzystywanych przez Konexa lub zintegrowanych z Konexa mogą obejmować:",
      exampleItems: ["Supabase", "PayU", "Google", "Apple", "Vercel", "Expo / EAS"],
      roles:
        "Ci dostawcy przetwarzają dane zgodnie ze swoimi rolami, ustaleniami umownymi oraz obowiązkami w zakresie ochrony prywatności.",
      disclose:
        "Możemy również ujawnić informacje, gdy wymaga tego prawo, orzeczenie sądu, żądanie organu publicznego lub gdy jest to niezbędne do ochrony praw, bezpieczeństwa platformy albo użytkowników.",
    },
    visible: {
      title: "7. Informacje widoczne dla innych użytkowników",
      p1: "Konexa jest usługą networkingu zawodowego.",
      p2: "W zależności od Twoich ustawień i sposobu korzystania z usługi inni użytkownicy mogą zobaczyć informacje, które celowo udostępniasz, w tym:",
      items: [
        "imię i nazwisko",
        "zdjęcie profilowe",
        "rolę zawodową",
        "firmę",
        "informacje o działalności",
        "regiony",
        "zainteresowania",
        "to, co oferujesz",
        "to, czego szukasz",
        "posty lub okazje, które publikujesz",
      ],
      private:
        "Prywatne informacje uwierzytelniające, dane płatnicze, wewnętrzne identyfikatory dostawcy płatności oraz inne chronione dane finansowe nie są wyświetlane publicznie.",
    },
    retention: {
      title: "8. Okres przechowywania danych",
      p1: "Przechowujemy dane osobowe tylko tak długo, jak jest to uzasadnione w celach opisanych w niniejszej Polityce prywatności oraz w celu wypełnienia wymogów prawnych, księgowych, bezpieczeństwa lub regulacyjnych.",
      p2: "Okresy przechowywania mogą się różnić w zależności od rodzaju informacji.",
      exampleIntro: "Na przykład:",
      items: [
        "dane aktywnego konta mogą być przechowywane, dopóki konto pozostaje aktywne",
        "treści mogą pozostać dostępne, dopóki stanowią część Twojego aktywnego konta lub aktywności na platformie",
        "ewidencja transakcji i wypłat może być przechowywana, gdy jest to wymagane do celów księgowych, podatkowych, zapobiegania oszustwom lub prawnych",
        "zapisy dotyczące bezpieczeństwa mogą być przechowywane przez odpowiedni okres w celu zbadania nadużyć lub ochrony usługi",
      ],
      dispose:
        "Gdy informacje nie są już potrzebne, mogą zostać usunięte, zanonimizowane lub w inny bezpieczny sposób zniszczone.",
    },
    rights: {
      title: "9. Twoje prawa",
      intro: "Tam, gdzie ma to zastosowanie na podstawie RODO i innych przepisów o ochronie danych, możesz mieć prawo do:",
      items: [
        "uzyskania informacji o tym, w jaki sposób przetwarzane są Twoje dane osobowe",
        "żądania dostępu do Twoich danych osobowych",
        "żądania sprostowania nieprawidłowych lub niekompletnych danych",
        "żądania usunięcia danych osobowych",
        "żądania ograniczenia przetwarzania",
        "wniesienia sprzeciwu wobec określonego przetwarzania",
        "wycofania zgody, gdy przetwarzanie opiera się na zgodzie",
        "żądania przenoszenia danych, gdy ma to zastosowanie",
        "wniesienia skargi do właściwego organu nadzorczego ds. ochrony danych",
      ],
      contact: "Aby skorzystać ze swoich praw, skontaktuj się z nami:",
      verify: "Przed realizacją niektórych wniosków możemy potrzebować weryfikacji Twojej tożsamości.",
      uodo:
        "Jeśli przebywasz w Polsce, możesz również wnieść skargę do polskiego organu nadzorczego — Prezesa Urzędu Ochrony Danych Osobowych (UODO).",
    },
    deletion: {
      title: "10. Usunięcie konta",
      p1: "Możesz poprosić o usunięcie konta Konexa i powiązanych danych osobowych za pomocą opcji dostępnych w aplikacji lub kontaktując się z nami:",
      p2: "Niektóre informacje mogą zostać zachowane, gdy wymaga tego prawo lub gdy jest to niezbędne do uzasadnionych celów, takich jak zapobieganie oszustwom, rozstrzyganie sporów, rachunkowość lub dochodzenie praw.",
    },
    transfers: {
      title: "11. Międzynarodowe przekazywanie danych",
      p1: "Niektórzy dostawcy usług wykorzystywani przez Konexa mogą przetwarzać informacje poza Polską lub Europejskim Obszarem Gospodarczym.",
      p2: "Tam, gdzie wymagają tego obowiązujące przepisy o ochronie danych, stosujemy odpowiednie zabezpieczenia przy międzynarodowym przekazywaniu danych osobowych.",
    },
    security: {
      title: "12. Bezpieczeństwo",
      p1: "Stosujemy środki techniczne i organizacyjne mające na celu ochronę danych osobowych przed nieuprawnionym dostępem, utratą, zmianą, nadużyciem lub ujawnieniem.",
      p2: "Żadna usługa internetowa nie może jednak zagwarantować bezwzględnego bezpieczeństwa.",
      p3: "Odpowiadasz za ochronę danych logowania do konta oraz za powiadomienie nas, jeśli uważasz, że Twoje konto zostało naruszone.",
    },
    children: {
      title: "13. Dzieci",
      p1: "Konexa jest przeznaczona do networkingu zawodowego i biznesowego i nie jest skierowana do dzieci.",
      p2: "Użytkownicy muszą spełniać minimalne wymagania wiekowe obowiązujące dla usługi i ich jurysdykcji.",
    },
    thirdParty: {
      title: "14. Usługi i linki stron trzecich",
      p1: "Konexa może zawierać linki do stron internetowych, aplikacji lub usług stron trzecich.",
      p2: "Ich praktyki w zakresie prywatności regulują ich własne polityki prywatności, a Konexa nie ponosi odpowiedzialności za praktyki stron trzecich pozostające poza naszą kontrolą.",
    },
    changes: {
      title: "15. Zmiany niniejszej Polityki prywatności",
      p1: "Możemy od czasu do czasu aktualizować niniejszą Politykę prywatności, aby odzwierciedlić zmiany w Konexa, wymogach prawnych lub naszych praktykach w zakresie danych.",
      p2: "W przypadku istotnych zmian zaktualizujemy datę „Ostatnia aktualizacja” i możemy przekazać dodatkowe powiadomienie, gdy będzie to stosowne.",
    },
    contact: {
      title: "16. Kontakt",
      p: "W sprawach dotyczących prywatności, wniosków o dane, wniosków dotyczących konta lub ogólnego wsparcia:",
    },
  },
  en: {
    metaTitle: "Konexa Privacy Policy",
    metaDescription:
      "Learn how Konexa collects, uses, stores, and protects personal data.",
    back: "← Konexa",
    title: "Konexa Privacy Policy",
    updated: "Last updated: August 12, 2026",
    intro: [
      "Konexa respects your privacy and is committed to protecting your personal data.",
      "This Privacy Policy explains how we collect, use, store, and share personal data when you use the Konexa mobile application, website, and related services.",
    ],
    who: {
      title: "1. Who We Are",
      p1: "Konexa is a professional networking platform designed for business owners, founders, investors, real estate professionals, advisors, and other professionals.",
      p2: "For privacy-related questions, data requests, or general support, contact:",
      p3: "In this Privacy Policy, “Konexa”, “we”, “us”, and “our” refer to the operator of the Konexa service.",
    },
    what: {
      title: "2. What Konexa Does",
      p1: "Konexa is a professional networking platform designed to help users discover relevant people, opportunities, and business connections.",
      p2: "Konexa facilitates professional introductions and communication. Konexa does not provide investment advice, brokerage, escrow, or transaction execution services.",
    },
    collect: {
      title: "3. Personal Data We Collect",
      intro: "Depending on how you use Konexa, we may collect the following categories of information.",
      account: {
        title: "Account and authentication information",
        intro: "When you create or access an account, we may process:",
        items: [
          "email address",
          "authentication identifiers",
          "account ID",
          "sign-in provider, such as Google or Apple",
          "session and authentication information required to keep your account secure",
        ],
        apple:
          "If you use Sign in with Apple, Apple may provide a private relay email address instead of your personal email address.",
        passwords: "We do not receive your Google or Apple password.",
      },
      profile: {
        title: "Profile information",
        intro: "You may choose to provide professional profile information such as:",
        items: [
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
        ],
        visibility:
          "Some profile information may be visible to other Konexa users depending on your profile visibility settings.",
      },
      business: {
        title: "Business information",
        intro: "If you create or manage a business profile, we may process information including:",
        items: [
          "business name",
          "industry or category",
          "description",
          "location or operating regions",
          "business links",
          "information submitted as part of the business profile",
        ],
      },
      content: {
        title: "Content and communications",
        intro: "When you use networking and communication features, we may process:",
        items: [
          "posts",
          "business or real estate opportunities",
          "deal-related content",
          "comments or interactions",
          "connection information",
          "messages sent through Konexa",
          "moderation reports or support requests",
        ],
        note: "We process this information to provide the features you use and to maintain the safety and integrity of the platform.",
      },
      referral: {
        title: "Referral and Ambassador information",
        intro:
          "If you join Konexa through a referral or participate in the Konexa Ambassador Program, we may process:",
        items: [
          "referral codes",
          "referring Ambassador",
          "referral attribution",
          "signup and conversion status",
          "commission records",
          "payout records",
          "Ambassador status",
        ],
        note: "Financial and commission information is available only to authorized users and administrators as appropriate.",
      },
      payment: {
        title: "Subscription and payment information",
        payuBefore: "When you purchase a Konexa subscription, payments may be processed by ",
        payuAfter: ".",
        storeIntro: "Konexa may process and store information such as:",
        items: [
          "subscription plan",
          "payment status",
          "transaction or order identifiers",
          "payment amount",
          "currency",
          "subscription dates",
          "renewal or cancellation status",
        ],
        notBefore: "Konexa does ",
        not: "not",
        notAfter: " store full payment card numbers or card security codes.",
        provider:
          "Payment details required to process the transaction are handled by the applicable payment provider.",
      },
      technical: {
        title: "Technical and security information",
        intro: "We may automatically process certain technical information, such as:",
        items: [
          "device and app information",
          "operating system",
          "IP address",
          "timestamps",
          "authentication and security events",
          "error and diagnostic information",
          "information required to prevent abuse, fraud, or unauthorized access",
        ],
      },
    },
    use: {
      title: "4. How We Use Personal Data",
      intro: "We use personal data to:",
      items: [
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
      ],
    },
    bases: {
      title: "5. Legal Bases for Processing",
      intro:
        "Where the GDPR applies, we process personal data on one or more of the following legal bases.",
      contract: {
        title: "Performance of a contract",
        p: "We process information necessary to provide Konexa and its features when you create and use an account or purchase a membership.",
      },
      interests: {
        title: "Legitimate interests",
        intro: "We may process data where necessary for legitimate interests such as:",
        items: [
          "maintaining platform security",
          "preventing fraud and abuse",
          "improving service reliability",
          "moderating the community",
          "protecting users and Konexa",
        ],
        note: "We consider the impact on your rights before relying on legitimate interests.",
      },
      legal: {
        title: "Legal obligations",
        p: "We may process or retain information where required by applicable law, including accounting, tax, fraud prevention, or regulatory requirements.",
      },
      consent: {
        title: "Consent",
        p1: "Where required, we rely on your consent, for example for certain optional communications or technologies.",
        p2: "You may withdraw consent where applicable without affecting processing that occurred before withdrawal.",
      },
    },
    share: {
      title: "6. How We Share Personal Data",
      noSell: "We do not sell your personal data.",
      intro: "We may share personal data with service providers where necessary to operate Konexa.",
      supporting: "These may include providers supporting:",
      supportingItems: [
        "authentication",
        "cloud hosting and databases",
        "payment processing",
        "email or communications",
        "application infrastructure",
        "analytics, diagnostics, or security",
      ],
      examples: "Examples of providers used by or integrated with Konexa may include:",
      exampleItems: ["Supabase", "PayU", "Google", "Apple", "Vercel", "Expo / EAS"],
      roles:
        "These providers process data according to their respective roles, contractual arrangements, and privacy obligations.",
      disclose:
        "We may also disclose information where required by law, court order, governmental request, or where necessary to protect legal rights, platform security, or users.",
    },
    visible: {
      title: "7. Information Visible to Other Users",
      p1: "Konexa is a professional networking service.",
      p2: "Depending on your settings and use of the service, other users may see information you intentionally make available, including:",
      items: [
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
      ],
      private:
        "Private authentication information, payment credentials, internal payment provider identifiers, and other protected financial data are not displayed publicly.",
    },
    retention: {
      title: "8. Data Retention",
      p1: "We retain personal data only for as long as reasonably necessary for the purposes described in this Privacy Policy and to comply with legal, accounting, security, or regulatory requirements.",
      p2: "Retention periods may vary depending on the type of information.",
      exampleIntro: "For example:",
      items: [
        "active account data may be retained while your account remains active",
        "content may remain available while it is part of your active account or platform activity",
        "transaction and payout records may be retained where required for accounting, tax, fraud prevention, or legal purposes",
        "security records may be retained for an appropriate period to investigate abuse or protect the service",
      ],
      dispose:
        "When information is no longer required, it may be deleted, anonymized, or otherwise securely disposed of.",
    },
    rights: {
      title: "9. Your Rights",
      intro: "Where applicable under the GDPR and other data protection laws, you may have the right to:",
      items: [
        "obtain information about how your personal data is processed",
        "request access to your personal data",
        "request correction of inaccurate or incomplete data",
        "request deletion of personal data",
        "request restriction of processing",
        "object to certain processing",
        "withdraw consent where processing is based on consent",
        "request data portability where applicable",
        "lodge a complaint with a competent data protection authority",
      ],
      contact: "To exercise your rights, contact:",
      verify: "We may need to verify your identity before completing certain requests.",
      uodo:
        "If you are in Poland, you may also lodge a complaint with the Polish supervisory authority, the President of the Personal Data Protection Office (UODO).",
    },
    deletion: {
      title: "10. Account Deletion",
      p1: "You may request deletion of your Konexa account and associated personal data through the options provided in the application or by contacting:",
      p2: "Certain information may be retained where required by law or where necessary for legitimate purposes such as fraud prevention, resolving disputes, accounting, or enforcing legal rights.",
    },
    transfers: {
      title: "11. International Data Transfers",
      p1: "Some service providers used by Konexa may process information outside Poland or the European Economic Area.",
      p2: "Where required by applicable data protection law, appropriate safeguards are used for international transfers of personal data.",
    },
    security: {
      title: "12. Security",
      p1: "We use technical and organizational measures intended to protect personal data against unauthorized access, loss, alteration, misuse, or disclosure.",
      p2: "However, no internet-based service can guarantee absolute security.",
      p3: "You are responsible for keeping your account credentials secure and for notifying us if you believe your account has been compromised.",
    },
    children: {
      title: "13. Children",
      p1: "Konexa is designed for professional and business networking and is not intended for children.",
      p2: "Users must meet the minimum age requirements applicable to the service and their jurisdiction.",
    },
    thirdParty: {
      title: "14. Third-Party Services and Links",
      p1: "Konexa may contain links to third-party websites, applications, or services.",
      p2: "Their privacy practices are governed by their own privacy policies, and Konexa is not responsible for third-party privacy practices outside our control.",
    },
    changes: {
      title: "15. Changes to This Privacy Policy",
      p1: "We may update this Privacy Policy from time to time to reflect changes to Konexa, legal requirements, or our data practices.",
      p2: "When we make material changes, we will update the “Last updated” date and may provide additional notice where appropriate.",
    },
    contact: {
      title: "16. Contact Us",
      p: "For privacy questions, data requests, account requests, or general support:",
    },
  },
};
