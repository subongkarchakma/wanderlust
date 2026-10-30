<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# wanderlust

Next.js 16.4.3 starter (App Router only, app lives in `src/app/`), React 19, TypeScript strict, Tailwind v4, shadcn-style UI. Frontend only — no API routes, server, or backend code exists here. `README.md` is untouched create-next-app boilerplate; trust the code, not the README.

## Commands

- `npm run dev` — dev server (localhost:3000). Also regenerates route types in `.next/dev/types/` and rewrites the `nextjs-agent-rules` block above.
- Verify changes: `npm run lint` then `npx tsc --noEmit` (no `typecheck` script; tsconfig `strict` + `noEmit` makes it a plain `tsc`). No test framework or CI configured.
- On this machine, `npx` fails from PowerShell (execution policy blocks `npx.ps1`). Run through `cmd /c npx ...` or `npm exec` instead.

## Gotchas

- React Compiler is enabled (`reactCompiler: true` in `next.config.ts`). Do not hand-write `useMemo`/`useCallback`/`memo` to fix lint; code must follow Rules of React strictly.
- Tailwind v4 is CSS-first: there is no `tailwind.config`. All theme tokens and variables live in `src/app/globals.css` (`@theme inline`). Dark mode is class-based (`@custom-variant dark`).
- shadcn components live in `src/components/ui` and are built on `@base-ui/react` (Base UI, **not** Radix), style `base-nova` per `components.json`. Add new ones with `npx shadcn add <component>`.
- `cn` is the tiny `cn` npm package re-exported from `src/lib/utils.ts` — not the usual clsx/tailwind-merge utility. Import it as `import { cn } from "cn"` or `from "@/lib/utils"`.
- Route type helpers like `LayoutProps<"/">` are generated globally by dev and build (tsconfig includes `.next/dev/types/**` and `.next/types/**`). If they fail to resolve, they have not been generated yet — run `npm run dev` once.
- Path alias: `@/*` → `src/*`.
- Layout loads Josefin Sans via `next/font/google`, but assigns it to the `--font-geist-sans` CSS variable (template leftover; the name is misleading, not a bug).

