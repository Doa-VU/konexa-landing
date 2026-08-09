// Lovable TanStack Start tooling (React/TanStack dedupe + correct plugin order).
// Nitro auto-detects Vercel during `vercel deploy` / Vercel CI.
// Local: NITRO_PRESET=node-server npm run build
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Force nitro on; do not hard-pin Cloudflare. Vercel detection still wins on deploy.
  nitro: true,
});
