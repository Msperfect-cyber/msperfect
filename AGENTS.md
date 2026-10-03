# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A single-page cybersecurity portfolio site for an early-career professional transitioning into security from an operations background. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Icons | lucide-react |
| Forms | Netlify Forms (AJAX submit) |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── contact.html  # Static form skeleton so Netlify's build-time form detection picks up the "contact" form.
│   ├── favicon.ico
│   └── img
│       └── hero-texture.png  # Abstract dark hero background image.
├── src
│   ├── components
│   │   ├── sections
│   │   │   ├── About.tsx  # 01 — Background: transition story + transferable capabilities.
│   │   │   ├── Contact.tsx  # 06 — Contact form (Netlify Forms) + direct email.
│   │   │   ├── Experience.tsx  # 04 — Professional experience + certifications/training.
│   │   │   ├── Hero.tsx  # Hero: headline, supporting copy, CTAs, credential summary.
│   │   │   ├── Opportunities.tsx  # "Open to Cybersecurity Opportunities" CTA band.
│   │   │   ├── Projects.tsx  # 03 — Evidence: featured SOC investigation project (in progress).
│   │   │   ├── Skills.tsx  # 02 — Capabilities: categorized skills with plain-language levels.
│   │   │   └── Writing.tsx  # 05 — Writing: LinkedIn/Medium links (placeholders until provided).
│   │   ├── SectionHeading.tsx  # Shared "index — title — description" heading used by each section.
│   │   ├── SiteFooter.tsx  # Footer: site name, nav links, contact email.
│   │   └── SiteHeader.tsx  # Sticky header: brand, nav, "Let's Connect" CTA, mobile menu.
│   ├── lib
│   │   └── site-content.ts  # All editable site copy/data in one place (nav, skills, experience, credentials, etc).
│   ├── routes
│   │   ├── __root.tsx  # Root layout: HTML shell, head/meta.
│   │   └── index.tsx  # The single page: composes header, all sections, footer.
│   ├── router.tsx  # TanStack Router setup.
│   └── styles.css  # Tailwind entry + CSS custom properties (editorial color palette, oklch).
├── AGENTS.md  # This document.
├── netlify.toml  # Netlify build command (vite build), publish directory (dist/client), dev server settings.
├── package.json  # Project manifest and scripts.
├── pnpm-lock.yaml
├── tsconfig.json  # TypeScript config: strict mode, @/* path alias for src/*.
└── vite.config.ts  # Vite plugins: TanStack Start, React, Tailwind, Netlify.
```

## Key Concepts

### Single-page architecture

The entire site is one route (`src/routes/index.tsx`). Each section component renders a `<section id="...">` matching an anchor in `NAV_LINKS` (`src/lib/site-content.ts`), so navigation is plain in-page anchor scrolling — no additional routes.

### Content is centralized

Nearly all editable copy — nav links, skill categories, the featured project, experience entries, credentials, writing links, contact email — lives in `src/lib/site-content.ts`. Update content there rather than editing section components directly.

### Placeholders

A few fields in `site-content.ts` are intentionally marked as placeholders (e.g. `"Add employer name"`, `"Add start date – Present"`) because the real details weren't available at build time. Search `site-content.ts` for `Add ` to find them, and `WRITING_LINKS`/SOC project link for `null`/"coming soon" placeholders.

### Netlify Forms

The contact form uses the static-skeleton pattern: `public/contact.html` holds a hidden, non-JS copy of the form so Netlify's build-time HTML parser can detect and register it. `Contact.tsx` submits via `fetch('/contact.html', ...)` with `application/x-www-form-urlencoded`, matching the `name="contact"` form.

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `styles.css` | Tailwind import + CSS custom properties (theme tokens) |

## Development Commands

```bash
npm run dev      # Start dev server (vite dev --port 3000)
npm run build    # Production build
```

## Conventions

### Naming
- Components: PascalCase
- Section components live under `src/components/sections/`
- Routes: kebab-case files under `src/routes/`

### Styling
- Tailwind CSS utility classes only — no CSS-in-JS
- CSS variables for theme tokens in `styles.css` (oklch color space)
- `.label-mono` utility class for the small monospace section-index labels

### TypeScript
- Strict mode enabled
- Import paths use `@/` alias
