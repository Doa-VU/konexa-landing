# Konexa Landing (`konexa.space`)

Public marketing site for Konexa soft launch. Separate from the Expo app in `../konexa`.

## Stack

- TanStack Start + React + Vite + Tailwind
- Nitro (Vercel preset auto-detected on deploy)

## Commands

```bash
npm install
npm run dev
npm run build
```

## Deploy

```bash
npx vercel
npx vercel --prod
```

Framework preset: **TanStack Start**. Build: `npm run build`.

See [docs/DOMAIN_ARCHITECTURE.md](./docs/DOMAIN_ARCHITECTURE.md).

## Waitlist

Form opens `mailto:hello@konexa.space` with the submitted fields. There is no server-side waitlist database yet — do not treat the UI as a persisted signup.
