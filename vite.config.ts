// Lovable TanStack Start tooling (React/TanStack dedupe + correct plugin order).
// Nitro auto-detects Vercel during `vercel deploy` / Vercel CI.
// Local: NITRO_PRESET=node-server npm run build
import type { Plugin } from "vite";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { cpSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

/** Client + SSR Vite envs hash `styles.css?url` differently; force one public URL. */
function cssAssetFileNames(assetInfo: { name?: string; names?: string[] }) {
  const name = assetInfo.names?.[0] ?? assetInfo.name ?? "";
  if (String(name).endsWith(".css")) return "assets/app.css";
  return "assets/[name]-[hash][extname]";
}

/** Nitro leaves SSR-emitted CSS under node_modules/.nitro; copy into public. */
function syncSsrCssToPublic(): Plugin {
  return {
    name: "konexa-sync-ssr-css",
    apply: "build",
    closeBundle() {
      const ssrDir = "node_modules/.nitro/vite/services/ssr/assets";
      const publicDir = ".output/public/assets";
      if (!existsSync(ssrDir)) return;
      mkdirSync(publicDir, { recursive: true });
      for (const file of readdirSync(ssrDir)) {
        if (!file.endsWith(".css")) continue;
        cpSync(join(ssrDir, file), join(publicDir, file));
        cpSync(join(ssrDir, file), join(publicDir, "app.css"));
      }
    },
  };
}

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: true,
  vite: {
    plugins: [syncSsrCssToPublic()],
    // Vite 8 / Rolldown remaps wrong locals onto cross-chunk export names when
    // minifying; keep production JS readable until that is fixed upstream.
    build: {
      minify: false,
      ssrEmitAssets: true,
      rollupOptions: {
        output: {
          minifyInternalExports: false,
          assetFileNames: cssAssetFileNames,
        },
      },
    },
    environments: {
      ssr: {
        build: {
          emitAssets: true,
          rollupOptions: {
            output: {
              assetFileNames: cssAssetFileNames,
            },
          },
        },
      },
      client: {
        build: {
          rollupOptions: {
            output: {
              assetFileNames: cssAssetFileNames,
            },
          },
        },
      },
    },
    esbuild: {
      keepNames: true,
    },
  },
});
