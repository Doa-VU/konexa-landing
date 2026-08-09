# Landing deploy status

## Live now

- Production (Vercel): https://konexa-landing.vercel.app
- Custom domain: https://konexa.space
- Project: `konexa-landing` (`prj_s0shIzxNGDI5hSvxjOcs7718f4Kd`)
- Team: `doavu110-1592s-projects`

### Blank-page fix (2026-08-09)

Symptom: cream blank screen + React minified `#321` (invalid hook call) after hydration.

Root cause (final): client and SSR Vite environments emitted **different** `styles-*.css` hashes. SSR HTML linked a CSS URL that 404'd; hydration then mismatched on `<link href>` and wiped the page.

Fix:
1. Force both environments to `/assets/app.css` (`assetFileNames` + sync SSR CSS into public)
2. Keep production JS unminified / `minifyInternalExports: false` (Vite 8 cross-chunk export hardening)

Verified live: `/assets/app.css` → 200, React fiber attached, no console `#321`.

Verified HTTP 200 + content:

- `/`
- `/privacy`
- `/favicon.png`
- `/sitemap.xml`
- `/robots.txt`
- `/konexa-logo.png`

## Pending user DNS

Custom domains attached but not verified until DNS records exist:

- `konexa.space` → A `76.76.21.21`
- `www.konexa.space` → A `76.76.21.21`

See [DOMAIN_ARCHITECTURE.md](./DOMAIN_ARCHITECTURE.md).

## Waitlist

Mailto to `hello@konexa.space` (honest; no DB).
