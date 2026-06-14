# Gatos Urbanos

> AI Nest — *Vibe for Good*. The new website for **Gatos Urbanos**, an animal-protection
> association based in Coimbra, Portugal, dedicated to rescue, adoption, temporary fostering,
> and CED (Capture–Sterilize–Return) programs.

A server-side-rendered React web app built with **TanStack Start**. The site is bilingual
(Portuguese / English) and presents the association's mission, work, adoption flow, and ways
to help.

---

## Tech stack

| Concern | Choice |
| --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start) (SSR) + [TanStack Router](https://tanstack.com/router) (file-based routing) |
| UI library | React 19 |
| Build tool | [Vite 7](https://vitejs.dev) via [`@lovable.dev/vite-tanstack-config`](https://www.npmjs.com/package/@lovable.dev/vite-tanstack-config) |
| Server / build target | [Nitro](https://nitro.build) — defaults to **Cloudflare Workers** |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) (new-york style) |
| Data / state | [TanStack Query](https://tanstack.com/query) |
| Forms & validation | react-hook-form + [Zod](https://zod.dev) |
| Icons | [lucide-react](https://lucide.dev) |
| Package manager | [Bun](https://bun.sh) |
| Language | TypeScript (strict) |

---

## Prerequisites

- **[Bun](https://bun.sh)** `>= 1.3` — used for installing dependencies and running scripts.
  (Node.js `>= 20` is also required by the underlying toolchain.)

Install Bun if you don't have it:

```sh
curl -fsSL https://bun.sh/install | bash
```

> **Supply-chain note:** `bunfig.toml` enforces a 24-hour `minimumReleaseAge` guard — newly
> published package versions are skipped on install until they are at least a day old. Adding a
> package to `minimumReleaseAgeExcludes` bypasses this; do so only with intent.

---

## Getting started

```sh
# 1. Install dependencies
bun install

# 2. Start the dev server (Vite, with HMR + SSR)
bun run dev
```

The dev server prints a local URL (typically <http://localhost:3000>). Open it in your browser.

---

## Available scripts

| Command | What it does |
| --- | --- |
| `bun run dev` | Start the Vite dev server with hot-module reload and SSR. |
| `bun run build` | Production build (SSR + client bundles, Nitro server output). |
| `bun run build:dev` | Build using development mode (unminified, for debugging). |
| `bun run preview` | Serve the production build locally to verify it. |
| `bun run lint` | Run ESLint across the project. |
| `bun run format` | Format the codebase with Prettier. |

---

## Project structure

```
src/
├── routes/             # File-based routes (TanStack Router)
│   ├── __root.tsx      # App shell — header, footer, error & 404 boundaries
│   ├── index.tsx       # Home page  (/)
│   ├── sobre-nos.tsx   # About      (/sobre-nos)
│   ├── o-que-fazemos.tsx# What we do (/o-que-fazemos)
│   ├── adotar.tsx      # Adopt      (/adotar)
│   ├── como-ajudar.tsx # How to help(/como-ajudar)
│   └── contactos.tsx   # Contact    (/contactos)
├── components/         # App components (Header, Footer, HeroCarousel, …)
│   └── ui/             # shadcn/ui primitives
├── hooks/              # Reusable React hooks
├── lib/
│   ├── i18n.tsx        # PT / EN translation provider + dictionary
│   ├── config.server.ts# Server-only config (read env per-request)
│   ├── error-*.ts      # SSR error capture & fallback error page
│   └── utils.ts        # cn() helper, misc utilities
├── assets/             # Images (hero, logos, testimonials)
├── router.tsx          # Router + QueryClient factory
├── server.ts           # SSR entry — wraps the server with error handling
├── start.ts            # TanStack Start instance + request middleware
├── routeTree.gen.ts    # AUTO-GENERATED route tree — do not edit by hand
└── styles.css          # Tailwind v4 + design tokens
```

> Routing is **file-based**: every `.tsx` in `src/routes/` becomes a route. See
> [`src/routes/README.md`](src/routes/README.md) for the full naming conventions (dynamic
> segments, layouts, splats). Do not create `src/pages/` or `app/` — those are other frameworks'
> conventions.

### Vite configuration

Do **not** manually add `tanstackStart`, `viteReact`, `tailwindcss`, `tsConfigPaths`, or `nitro`
plugins — `@lovable.dev/vite-tanstack-config` already wires them up, and duplicating them breaks
the build. Pass extra config through `defineConfig({ vite: { ... } })` in
[`vite.config.ts`](vite.config.ts).

---

## Environment variables

There is no `.env` checked in; the app runs without one. When you need configuration, follow the
conventions documented in [`src/lib/config.server.ts`](src/lib/config.server.ts):

- **Public values** (safe in the browser): prefix with `VITE_` and read via
  `import.meta.env.VITE_FOO`. Define them in a `.env` file.
- **Server-only secrets**: read `process.env.X` **inside a function/handler** (never at module
  scope — on Cloudflare Workers env binds per-request) using `getServerConfig()` in
  `config.server.ts`. The `.server.ts` suffix keeps the file out of the client bundle.

---

## Build

```sh
bun run build
```

This produces:

- A **client bundle** (static assets) for the browser.
- A **Nitro server build** targeting **Cloudflare Workers** (the default preset configured by the
  Lovable Vite preset).

Or use 
```sh
bun run build:static
```
To build a static version of the site (no Nitro server).


Verify the production build locally before deploying:

```sh
bun run preview
```

---

## Distribution & deployment

The build output is a Nitro server bundle. Its default target is **Cloudflare Workers**, so the
typical path is:

1. **Build the app**

   ```sh
   bun run build:static
   ```

2. **Deploy to Cloudflare Workers.** Nitro emits a Cloudflare-compatible Worker in its build
   output directory (under `.output/` / `dist/`). Deploy it with Wrangler:

   ```sh
   bunx wrangler deploy
   ```

   You may need a `wrangler.toml` describing your Worker (name, account, routes, and any
   environment bindings). Add server secrets with `wrangler secret put <NAME>` rather than
   committing them.

### Deploying to a different target

Nitro supports many [deployment presets](https://nitro.build/deploy) (Node server, Vercel,
Netlify, static, etc.). To switch away from Cloudflare Workers, configure the Nitro preset via the
Lovable Vite preset in `vite.config.ts` (e.g. pass Nitro options through the exported config), then
rebuild. For a plain Node server target, the build produces a server entry you can run with
`node`.

> Because the project was scaffolded with the Lovable toolchain, it can also be published directly
> through the [Lovable](https://lovable.dev) platform.

---

## Internationalization

UI strings live in a single dictionary in [`src/lib/i18n.tsx`](src/lib/i18n.tsx) with
**Portuguese (`pt`)** and **English (`en`)** translations. Components read strings via the
`useI18n()` hook's `t("key")` function. Add a new string to both the `pt` and `en` dictionaries to
keep them in sync.

---

## Code quality

```sh
bun run lint     # ESLint (typescript-eslint + react-hooks + prettier)
bun run format   # Prettier
```

TypeScript runs in `strict` mode with the `@/*` path alias mapped to `src/*`.

---

## License

Private project. All rights reserved unless stated otherwise.
