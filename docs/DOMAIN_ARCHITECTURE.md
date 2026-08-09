# Konexa domain architecture (soft launch)

## Live in this project

| Host | Role |
|------|------|
| `https://konexa.space` | **Canonical** public marketing landing (this repo) |
| `https://www.konexa.space` | Permanent redirect → `https://konexa.space` |

## Reserved — do NOT point at marketing landing

| Host | Future role |
|------|-------------|
| `https://app.konexa.space` | App web bridge / Universal Links |

Expected app routes (Expo + future web bridge):

- `https://app.konexa.space/join?ref=<AMBASSADOR_CODE>`
- `https://app.konexa.space/auth/callback`
- `https://app.konexa.space/subscription-success`

Deep link scheme (native app, not used as public marketing CTA):

- `konexa://join?ref=<CODE>`
- `konexa://auth/callback`

## DNS notes (from Vercel inspect — 2026-08-09)

Domains are attached to Vercel project **konexa-landing**.

Until DNS propagates, SSL for the custom domain will not issue.

**Required at your DNS provider (Vercel-recommended):**

| Type | Name | Value |
|------|------|--------|
| `A` | `@` (`konexa.space`) | `76.76.21.21` |
| `A` | `www` | `76.76.21.21` |

Optional alternative: point nameservers to `ns1.vercel-dns.com` / `ns2.vercel-dns.com`.

`www` → apex redirect is also configured in `vercel.json` once traffic hits Vercel.

**Do not create yet:**

| Type | Name | Notes |
|------|------|--------|
| — | `app` | Reserve for future app bridge — **never** point at marketing landing |

Verify after DNS:

```bash
vercel domains verify konexa.space
curl -I https://konexa.space
curl -I https://www.konexa.space   # expect 308/301 → https://konexa.space
```

## CTA policy

- Marketing CTAs on `konexa.space` use waitlist / `mailto:hello@konexa.space` until the app bridge is live.
- After `app.konexa.space` ships, ambassador links should use  
  `https://app.konexa.space/join?ref=<CODE>`  
  (not `konexa://` in public web pages).
