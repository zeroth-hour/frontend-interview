# Explore Attractions — build exercise

## Context

Travelers plan trips with us. This is a new **"things to do"** browse screen: a catalog
of attractions a traveler can look through — filter by category, search by name — to
decide what to add to a trip. It's the next screen in the same family as our existing
**Manage Trips** and **Manage Reservations** lists (there's a representative one in
`reference/` worth a skim).

You'll build one screen and its browse interaction. Use your normal tools, including AI
assistants — we care about the result and about your ability to explain it.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`). The app boots to a
placeholder screen in `src/features/exploreAttractions/ExploreAttractions.tsx` — that's
where you build.

## What's provided

- **`src/data/attractions.json`** — 42 attraction records (the `Attraction` type is in
  `src/types.ts`). This is your data source; load from it directly.
- **`src/components/ui/`** — shared components from our design system:
  `TripBirdyToolbarSearch` (labeled search field), `TripBirdyCard` (card shell),
  `TripBirdyButton`. Reuse these where they fit.
- **`src/index.css` / `src/tokens/colors.ts`** — our design tokens. Use the token
  utilities (`text-tripBirdyBlack`, `bg-proBlue`, `bg-secondaryBlue`, …) rather than
  raw hex.
- **`reference/`** — a real screen from our app, for conventions. Not part of the build.
- **`mock.html`** — open this in a browser. **It's the visual target — match it.**

## What to build

In `ExploreAttractions.tsx`, build the browse screen to match `mock.html`:

1. **Grid of cards.** Render the attractions from the fixture as a responsive grid of
   cards. Each card shows the image, name, `city · country`, a category tag, the rating,
   and the price (show `Free` when `priceFrom` is `0`).
2. **Search.** A search field that filters the grid by **attraction name or city** as the
   user types.
3. **Category filter.** A single-select category filter with these options —
   **All, Museums, Landmarks, Nature, Food & Markets, Entertainment**. Selecting a
   category replaces the previous selection; **All** shows everything.
4. **Search and category apply together** (an attraction shows only if it matches both).
5. **Match the mock.** Spacing, card layout, the active-filter treatment, and colors
   should read as the same app as `mock.html`, using our tokens and components.

## Notes

- Keep it to this one screen and interaction.
- **No tests needed** — don't spend time on them.
- It's fine to ask questions as you go.
