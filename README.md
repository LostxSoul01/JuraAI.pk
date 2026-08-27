# JuraAI.pk

A polished Next.js-style landing experience for JuraAI.pk, Pakistan’s legal intelligence platform. The interface follows the supplied Design System & Asset Checklist with a deep navy / emerald / AI gold palette, editorial serif display type, monospace utility labels, 8px spacing rhythm, responsive breakpoints, legal-tech cards, source badges, upload state, and feedback modal/toast interactions.

## Run locally

```bash
pnpm install
pnpm dev
```

The production check is:

```bash
pnpm build
```

## Handoff structure

Atomic primitives live in `components/ui/`, JuraAI-specific business components live in `components/jura-ai/`, legal and interface icons live in `components/icons/`, and the token mapping is captured in `tailwind.config.js`. The landing experience is composed in `app/page.tsx`, with global design tokens and responsive styling in `app/globals.css`.

## Implemented surface

The page includes the marketing navigation, hero AI search bar, trust strip, feature highlights, advanced case-search preview, workflow section, citation cards with quick view modal, AI drafting workspace with upload/progress states, pricing cards for students/advocates/firms, testimonial, CTA banner, and legal footer. Primary interactions produce user-facing toast feedback and the citation quick view supports save behavior.
