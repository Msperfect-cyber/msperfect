# msperfect_place — Cybersecurity Portfolio

A single-page portfolio site for an early-career professional transitioning into cybersecurity from an operations background. Built with TanStack Start (React 19), Tailwind CSS 4, and deployed on Netlify.

## Sections

Home · About · Projects · Skills · Experience · Writing · Contact — each a component under `src/components/sections/`, composed in `src/routes/index.tsx`.

## Content

Nearly all site copy (nav, skills, experience, certifications, the featured project, contact email) lives in one file: `src/lib/site-content.ts`. Edit that file to update the site.

A few fields are placeholders pending real information — search that file for `Add ` (e.g. `"Add employer name"`) and see `.netlify/results.md` for the full list of what still needs to be filled in before publishing.

## Local development

```bash
npm install
npm run dev
```

Then open the printed local URL. The dev server runs through the Netlify CLI dev proxy when using `netlify dev`, or directly via Vite with `npm run dev`.

## Build

```bash
npm run build
```

Outputs a production build to `dist/client`, as configured in `netlify.toml`.

## Contact form

The contact form uses Netlify Forms. `public/contact.html` is a static, hidden copy of the form so Netlify's build-time parser can register it; the live React form in `src/components/sections/Contact.tsx` submits to it via `fetch`.
