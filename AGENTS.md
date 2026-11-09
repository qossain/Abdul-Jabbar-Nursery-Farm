# Abdul Jabbar Nursery Farm project context

This file is the handoff for future chats and coding agents. Check the current code and Git state before acting; this is a snapshot, not proof that a deployment or external fact is current.

## Project and client

- Website for Abdul Jabbar Nursery Farm and Landscaping, based in Pattoki, Pakistan. The client presents the business as established in 1978.
- The user wants a professional, premium nursery and landscaping website for mobile and desktop. The current site is a design review prototype, not a completed inventory system.
- The current scope is a plant directory, product detail pages, nursery information, landscaping services and WhatsApp enquiries. There is no cart, online payment or checkout.
- Business details supplied by the user include CEO Chaudhry Abrar Hussain, email `abrarhussainch21@gmail.com`, Instagram `https://www.instagram.com/abduljabbarnurseryfarm/` and Facebook `https://www.facebook.com/abduljabbarnurseryfarm/`. These details should be reconfirmed with the owner before a final public launch.
- The user corrected the contact number to **+92 312 6047941**. Use `https://wa.me/923126047941` for WhatsApp and `tel:+923126047941` for telephone links. Some service and product links include a prefilled message. Do not revert to the old 0370 number.
- The nursery's Google Maps link is in `src/components/SiteHeader.astro` and `src/components/SiteFooter.astro`. Both the header and footer `Visit Pattoki` links should open it.

## User preferences and workflow

- Keep the site visually premium, restrained and readable. The user dislikes generic AI looking layouts, excessive decorative lines, oversized text, low contrast and cramped mobile layouts.
- Do not add visible dash punctuation, arrows or hover underlines in website text or controls. Code identifiers and URLs are unaffected.
- Maintain the existing desktop and mobile hero photographs unless the user explicitly requests a change. Use subtle animation and honor `prefers-reduced-motion`.
- The user prefers to see a generated design image and approve it before a major redesign or new section. For small specific fixes, make the requested change directly. Avoid changing unrelated content.
- Preserve compact mobile navigation: the provided logo, full nursery name in two lines, space before the four dot menu button, and the full screen menu opening from the top. Links must remain readable on hover and focus.
- The user asked to remove visible sample, preview, confirmation and representative-photo labels from the site. Internal documentation should still clearly retain the truthful status of prototype content.
- The user requested no continuous automatic rotation of the homepage category carousel. Desktop cards show labels; mobile supports swiping and selection. Do not reintroduce a looping autoplay without instruction.
- Desktop service panels rotate at five second intervals when visible, with pause and interaction handling. Mobile services use stacked cards. Respect the existing behavior and reduced motion settings.
- Do not push or deploy a later change merely because an earlier change was pushed. Follow the current request and report what was actually verified.

## Stack and local commands

- Astro static output with TypeScript in Astro components, plain CSS and GSAP. Dependencies and exact version ranges are in `package.json` and `package-lock.json`; do not describe this as React, Next.js or Tailwind.
- Node requirement: `>=22.23.4`. Install with `npm install` or `npm ci`.
- Start the local site with `npm run dev -- --port 4174`. The intended preview address is `http://127.0.0.1:4174/`. Check the address before claiming the server is running; restart it if needed.
- Build with `npm run build`. Preview the build with `npm run preview -- --port 4175`. The output directory is `dist`.
- Fonts DM Sans and Playfair Display are self hosted under `public/fonts/`, with their licenses. Preserve local font loading rather than reintroducing a render blocking Google Fonts request.
- No project test script is currently defined. For changes, run an appropriate build and focused browser checks. Do not claim real device testing unless it happened.

## Current structure

The actual homepage order in `src/pages/index.astro` is:

1. `Hero.astro`: separate desktop and mobile hero images, centered animated text and enquiry buttons.
2. `Experience.astro`: logo, nursery history, animated year based experience number and five award badges.
3. `CategoryCarousel.astro`: seven categories, with no automatic looping.
4. `Services.astro`: plant supply, landscape projects, garden design, topiary art and garden care.
5. Trending Products from multiple categories, using `PlantCard.astro`.
6. `Testimonials.astro`, followed by the shared footer.

There is no separate dark contact section between products and testimonials; the user asked to remove it. A floating WhatsApp button is in `src/layouts/BaseLayout.astro` and hides while the footer is visible.

- `src/components/SiteHeader.astro` and `SiteFooter.astro`: shared navigation, full screen mobile menu, footer and contact links.
- `src/pages/plants/index.astro`: directory for all collections.
- `src/pages/plants/[category].astro`: seven static category pages, each with its own responsive hero and `PlantGrid.astro` search and sort controls.
- `src/pages/plant/[slug].astro`: shared product page template with full plant image, price, WhatsApp enquiry, phone link and related plants. Plant card hover blurs the image and centers a round View control; keyboard focus should also work.
- `src/data/catalog.ts`: seven collections and thirty generated listings each, 210 products in total. Collections are indoor, outdoor, fruit, bonsai, cactus, flowering and palms. It also maps the desktop and mobile homepage hero images.
- `src/data/customerReviews.ts`: 100 edited review summaries with retained source excerpts. `Testimonials.astro` has filters and a carousel; its duplicate group is created only when the section approaches view. Preserve the distinction between a summary and a direct quote.
- `src/styles/global.css`: site styling and responsive rules. `astro.config.mjs` enables static output and HTML compression.

## Content integrity and launch risks

- **Plant names, prices, sizes, product availability and many generated plant photographs are example data, not verified stock.** Images are reused across listings and may not depict the exact named plant. The original PNGs are local only under ignored `assets/source-images/`; the site uses WebP assets in `public/`.
- Product `sold in the last ...` numbers in `src/pages/plant/[slug].astro` are deterministic examples created for the user's design review. They are not actual orders or live counters, despite appearing on the current site. Replace them with verified data or remove them before a public launch.
- The five award names and the `Top distributor in Pakistan` statement were prototype concepts and are not verified awards or rankings. The user asked to hide visible prototype notices. Verify these claims and actual certificates before presenting them as fact.
- The year based counter uses current year minus 1978; it does not know the actual founding month or day. The exact anniversary and founding date need confirmation.
- Google review and client figures were supplied or reported during design work, not independently confirmed as live counts. Review content is summarized from user supplied excerpts, not verbatim testimony. Do not invent reviews or present rewritten summaries as direct quotations.
- Earlier `DESIGN.md` and `RESEARCH.md` provide useful background but contain stale descriptions of visible sample labels, recognition verification and section order. Use the current code and the cautions here as the source of truth.

## Images, performance and accessibility

- Homepage assets: `public/hero-legacy-desktop.webp`, `public/hero-rooftop-mobile.webp`; logo: `public/logo.webp`.
- Category hero variants are in `public/category-heroes/`. Full plant images are in `public/plant-images/`; 600 pixel wide responsive versions are in `public/plant-images/optimized/`. Services use `public/service-images/`.
- The last documented audit checked 122 existing WebP assets and 100 responsive plant variants for decoding, and found no missing local references across 220 generated pages. Repeat relevant checks after changing assets; this is not a permanent guarantee.
- A prior local simulated mobile test used throttling and measured roughly 2.4 seconds homepage, 1.5 seconds category and 2.54 seconds product LCP. These were individual lab measurements, not a guarantee of performance, real device testing or live Vercel results. The user targets LCP below 2.5 seconds, not 2.5 milliseconds.
- Keep priority for the main hero or product image, lazy load below the fold imagery, preserve useful image dimensions, keyboard support and reduced motion. Optimize new images before adding them.
- The production dependency audit previously returned zero known advisories. This is not a complete security assessment; rerun current checks when needed and do not promise the site is completely secure.

## Git and Vercel

- Workspace: `E:\Nursery Websits`. Git remote: `https://github.com/qossain/Abdul-Jabbar-Nursery-Farm.git`, branch `main`.
- As of this handoff the last pushed commit is `219597c` (`Improve nursery branding and experience section`). Check `git status` and the remote before making claims about later work.
- The user imports the repository into Vercel using the Astro preset and root directory `./`. The static build is `npm run build`, output `dist`, and no environment variables are currently required. The live URL and current deployment status have not been verified in this chat.
- `.gitignore` excludes dependencies, generated output, `.astro`, `.taste-skill`, local source images and environment files. Do not commit tokens, local secrets, raw source images or `node_modules`.
- If GitHub rejects a push, check the active account and repository permissions. The correct account for this repository is `qossain` or another account granted write access; do not ask the user to paste tokens into chat.
