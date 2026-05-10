# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # dev server at localhost:4321
pnpm build        # type-check + build (astro check && astro build)
pnpm preview      # preview production build locally
pnpm lint         # ESLint
pnpm lint:fix     # auto-fix ESLint issues
```

## Architecture

**Framework**: Astro 5 + Tailwind CSS + TypeScript. Interactive components use SolidJS (`.tsx`). Static components use Astro (`.astro`).

**Path alias**: `@/*` → `src/*` (configured in tsconfig.json).

**Content Collections** (`src/content/`): Astro content collections for all data. Schemas defined in `src/content/config.ts`. Collections:
- `blog/` — posts with `title`, `summary`, `date`, `tags`, optional `draft`
- `projects/` — same schema plus optional `demoUrl`, `repoUrl`
- `work/` — `company`, `role`, `dateStart`, `dateEnd`
- `education/` — `school`, `major`, `dateStart`, `dateEnd`
- `legal/` — `title`, `date`

**Site constants** (`src/consts.ts`): All nav links, page metadata, and social links live here. Add new nav pages here.

**Layouts** (`src/layouts/`): `PageLayout.astro` is the default wrapper. `TopLayout`/`BottomLayout` are section wrappers used within pages.

**SolidJS components** (`src/components/*.tsx`): Used for interactive features — search (`Search.tsx`, `SearchBar.tsx`, `SearchCollection.tsx`), `ArrowCard.tsx` (links to blog/project entries), `Counter.tsx`.

**Client-side JS** (`public/js/`): Vanilla JS for theme toggle, animations, scroll behavior, and copy-to-clipboard. Not bundled through Astro.

**Deployment**: Cloudflare adapter (`@astrojs/cloudflare`) with `wrangler.jsonc`. Site URL: `https://romerojhh.github.io`.

## Adding Content

New blog post: create folder under `src/content/blog/` with `index.md` or `index.mdx`, include required frontmatter (`title`, `summary`, `date`, `tags`).

New project: create folder under `src/content/projects/` with `index.md`, include required frontmatter plus optional `demoUrl`, `repoUrl`.

New work/education entry: create `.md` file in the respective collection folder with required frontmatter fields from `config.ts`.
