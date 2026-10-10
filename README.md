# Muster Immobilien

A fictional German real-estate portfolio project built with Nuxt, Vue, TypeScript,
and Tailwind CSS. The focus is clear typography, responsive layouts, accessible
interactions, and restrained animation.

**Demo URL (once GitHub Pages is enabled):** https://nilvaes.github.io/immobilien-makler/

## Features

- Responsive homepage with service cards and a personal introduction
- Scroll-triggered counters and smooth hover effects, respecting reduced motion
- Keyboard-accessible FAQ accordion and mobile navigation
- Photo gallery with a full-screen viewer, keyboard navigation, and swipe support
- Fictional reference properties with status filters and individual detail pages
- Locally hosted imagery and self-hosted Instrument Sans fonts

All names, contact details, property specifications, and statistics are demonstration
content. This is not an operating real-estate business. Image credits are recorded
in [SOURCES.md](public/images/concept/SOURCES.md). Legal pages are drafts and must
be adapted before using this template for a real website.

## Development

Use Node.js 22 and pnpm 10.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

```sh
pnpm lint
pnpm typecheck
pnpm generate
```

Static output is generated in `.output/public`.

## GitHub Pages

In the repository, select **Settings → Pages → Build and deployment → Source →
GitHub Actions**. The deployment workflow checks the code, generates the static
site, and publishes it whenever changes are pushed to `main`. It can also be run
manually from the Actions tab.

The workflow obtains the URL prefix from GitHub Pages. For a local check of the
repository URL prefix:

```sh
NUXT_APP_BASE_URL=/immobilien-makler/ pnpm generate
```

## Content and design

- `app/data/site.ts`: brand, contact information, and homepage copy
- `app/data/concept.ts`: stock imagery and gallery content
- `app/data/properties.ts`: fictional property examples
- `app/assets/css/main.css`: colors, typography, and motion preferences

Navy and turquoise establish a consistent visual hierarchy. Short service cards
and direct contact links keep the page easy to scan. Property and photography
pages share the same design system and keep example content explicitly labeled.
