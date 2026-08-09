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
  vite: {
    // Vite/Rolldown was mangling cross-chunk export names so the routes chunk
    // imported the wrong symbols from the index chunk (React #321 + blank page).
    esbuild: {
      keepNames: true,
    },
    build: {
      rollupOptions: {
        output: {
          minifyInternalExports: false,
        },
      },
    },
  },
});
