# Landing deploy status

## Live now

- Production (Vercel): https://konexa-landing.vercel.app
- Custom domain: https://konexa.space
- Project: `konexa-landing` (`prj_s0shIzxNGDI5hSvxjOcs7718f4Kd`)
- Team: `doavu110-1592s-projects`

### Blank-page fix (2026-08-09)

Symptom: cream blank screen + React minified `#321` (invalid hook call) after hydration.

Cause: custom Vite React aliases/`ssr.noExternal` created **two React instances** in the Nitro SSR bundle.

Fix: restore `@lovable.dev/vite-tanstack-config` with `nitro: true` (React/TanStack dedupe, no hard aliases). Local SSR smoke returned homepage content; redeployed to production.

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
