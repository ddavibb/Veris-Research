# Veris Research — Website

Production implementation of the **Veris Research** marketing site, built from the
Claude Design handoff bundle (Direction B: Space Grotesk + IBM Plex Mono, navy
`#09224A` + teal `#0F8EA3`, concentric-arc motif).

The original prototype loaded React + Babel from a CDN and transpiled JSX in the
browser. This version is a real **Vite + React** app: JSX is compiled at build
time, components are split into ES modules, and there's no in-browser Babel.

## Run it

```bash
npm install
npm run dev      # local dev server (Vite)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

Requires Node 18+ (Node was not installed on the machine where this was authored,
so the build has not been run here — install Node, then `npm install`).

## Structure

```
index.html              Fonts (Google Fonts), global resets, #root mount
src/
  main.jsx              App shell + hash router (route → page, per-route <title>)
  tokens.js             Color/type tokens, PAGES nav config, breakpoints, mono style
  hooks.js              useRoute, useIsMobile, useWrap, useInView
  components/
    Logo.jsx            VerisLogo (inline SVG wordmark + mark), Arrow
    Nav.jsx             Nav (light/dark), MobileMenu, Footer, SiteLink
    Ui.jsx              SectionHeader, ArcsMotif, Faq, Field, hero/CTA arc graphics
  pages/
    Home.jsx            Hero (animated arcs), mission, capabilities, pathways, safety, CTA
    Patients.jsx        Plain-language explainer, timeline, rights, studies empty-state, FAQ
    Sponsors.jsx        Hero, "Who we serve" infographic, competitive-edge table, expertise
    DiverseCohort.jsx   LA County census donut + language bar (animated on scroll)
    Fqhc.jsx            Three value props, "how it works" timeline, CTA
    About.jsx           Problem, stat callouts, the answer, six principles, CTA
    Contact.jsx         Multi-path form that adapts fields by audience (reads ?as= deep links)
```

## Routing

Hash-based: `#/`, `#/patients`, `#/sponsors`, `#/fqhc`, `#/about`, `#/contact`.
CTAs deep-link with query params the pages read on load and on `hashchange`:
- `#/contact?as=patient|fqhc|sponsor|press|other` pre-selects the contact form path
- `#/patients?scroll=faq` scrolls to the FAQ section

## Notes carried over from the design handoff

- Copy, stats, and timelines are plausible placeholders — swap in real content
  before publishing. Census figures cite the U.S. Census Bureau 2023 ACS 5-year
  estimates (LA County) and UCLA CTSI; FQHC figures cite HRSA UDS.
- The contact form is demo-only (shows a confirmation; no backend wired).
- No Team page (removed during design iteration — no named PI yet).
