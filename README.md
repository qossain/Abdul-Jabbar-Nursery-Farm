# Abdul Jabbar Nursery Farm preview

Astro static website concept for the Pattoki nursery. Plant names, collection photographs, sizes and prices are sample content. The optimized local WebP images are concept assets and may not show the exact listed variety or the nursery's real stock. Confirm all inventory and prices with the nursery before publication.

## Run locally

Use Node.js 22.23.4 or later.

```powershell
npm install
npm run dev
```

The site is built as static pages. To build the production preview:

```powershell
npm run build
npm run preview
```

The production files are written to `dist`. Vercel can detect Astro and build the project with `npm run build`, publishing `dist`. A static site does not need the Vercel adapter.

## Site structure

- `src/pages/index.astro` is the home page.
- `src/pages/plants/` contains the directory and seven collection pages.
- `src/pages/plant/[slug].astro` builds a separate static page for each sample listing.
- `src/data/catalog.ts` holds the seven groups and thirty sample listings per group.
- `src/styles/global.css` contains the responsive design system and interaction states.
- `public/logo.webp` is the optimized nursery logo. Its source copy remains in `assets/source-images/legacy-preview`.
- `public/plant-images/` contains 100 optimized WebP preview images assigned across the seven plant collections.
- `public/hero-legacy-desktop.webp` and `public/hero-rooftop-mobile.webp` are the saved desktop and mobile hero images.

There is no cart or checkout. Listing actions open WhatsApp so the visitor can ask about real availability and pricing.

## Before launch

Replace the sample plant names, prices, size notes and concept photos with an approved nursery inventory and owner supplied photography. Add only award and certificate scans the owner has verified. Confirm contact details, delivery areas and each social profile with the business.

Product sales activity figures are fixed examples for design review, not real sales. Replace them with verified data before publication. Original source images are kept locally and are excluded from the repository; optimized website images are in `public`.
