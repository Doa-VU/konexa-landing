# Konexa domain architecture (soft launch)

## Live

| Host | Role | Project |
|------|------|---------|
| `https://konexa.space` | **Canonical** public marketing landing | `konexa-landing` |
| `https://www.konexa.space` | Permanent redirect → `https://konexa.space` | `konexa-landing` |

## App bridge (separate Vercel project — never marketing)

| Host | Role | Project |
|------|------|---------|
| `https://app.konexa.space` | App HTTPS bridge / Universal Links / PayU return UX | `konexa-app-bridge` |

Routes:

- `https://app.konexa.space/join?ref=<AMBASSADOR_CODE>`
- `https://app.konexa.space/auth/callback`
- `https://app.konexa.space/subscription-success`

Native schemes (handoff from bridge):

- `konexa://join?ref=<CODE>`
- `konexa://auth/callback`
- `konexa://subscription-success`

## DNS

**Marketing (`konexa-landing`):**

| Type | Name | Value |
|------|------|--------|
| `A` | `@` | `76.76.21.21` |
| `A` | `www` | `76.76.21.21` |

**App bridge (`konexa-app-bridge`) — do not point at marketing:**

| Type | Name | Value |
|------|------|--------|
| `CNAME` | `app` | `cname.vercel-dns.com` (or value from `vercel domains add`) |

## CTA policy

- Marketing CTAs may stay waitlist/`mailto:` until closed test invites ship.
- Ambassador public links **must** use `https://app.konexa.space/join?ref=<CODE>`.
- PayU **notify** stays on Supabase; PayU **continue** prefers `https://app.konexa.space/subscription-success`.
