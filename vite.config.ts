// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import process from "node:process";

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// `bun run build:static` sets STATIC_BUILD=true to emit a pure static site.
// Any other build (incl. Lovable's Cloudflare deploy) is left untouched.
const STATIC = process.env.STATIC_BUILD === "true";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Static build only: prerender every route to HTML. crawlLinks follows
    // <Link>s from "/" so all in-app pages are discovered automatically.
    ...(STATIC ? { prerender: { enabled: true, crawlLinks: true } } : {}),
  },
  // Static build only: disable Nitro so Vite emits a plain client build with
  // prerendered HTML into dist/client (no server runtime). The default build
  // keeps Nitro's Cloudflare target.
  ...(STATIC ? { nitro: false } : {}),
});
