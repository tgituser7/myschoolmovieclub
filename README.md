# My School Movie Club

A one-page marketing site for a school film-screening membership club, built with Next.js (App Router) and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Structure

- `src/app/layout.tsx` — fonts (Playfair Display, Manrope, Special Elite) and page metadata
- `src/app/globals.css` — color/theme tokens and the decorative motifs (filmstrip divider, marquee lights, ticket-stub cards, film grain)
- `src/components/` — one file per page section (Header, Hero, Philosophy, Genres, HowItWorks, Schedule, Promotion, Advantages, CTA, Footer)
- `src/components/icons.tsx` — hand-drawn line-icon set used throughout
- `src/lib/content.ts` — the copy for genres, schedule, promotion channels and advantages, kept separate from markup

## Design direction

A "vintage cinema meets school" theme — deep navy, brass/gold and warm parchment, serif display type, film-strip sprocket dividers and ticket-shaped cards — rather than a generic gradient-and-card SaaS look.
