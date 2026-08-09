// Lovable TanStack Start tooling (React/TanStack dedupe + correct plugin order).
// Nitro auto-detects Vercel during `vercel deploy` / Vercel CI.
// Local: NITRO_PRESET=node-server npm run build
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: true,
  vite: {
    // Vite 8 / Rolldown currently remaps the wrong locals onto cross-chunk
    // export names (e.g. export { u as require_react } where u is unrelated
    // query code). That breaks client hydration with React #321 + blank page.
    // Keep production JS unminified until the bundler bug is resolved upstream.
    build: {
      minify: false,
      rollupOptions: {
        output: {
          minifyInternalExports: false,
        },
      },
    },
    esbuild: {
      keepNames: true,
    },
  },
});
