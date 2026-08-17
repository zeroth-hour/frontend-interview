# feat(inspirations): add Trip Inspirations browse gallery

## Summary

Adds the **Trip Inspirations** browse view — a filterable gallery of curated getaways
that lets a traveler scan destinations, narrow by price, search, and open a detail view
to import an itinerary into the planner. This is the first cut of the inspirations
surface described in the browse-and-import epic.

The view is intentionally self-contained and data-driven off the existing
`mockInspirations` dataset, so it drops in ahead of the BFF `/inspirations` list
endpoint without any backend dependency. The async loader is already shaped like the
future network call, so swapping the data source later is a one-line change.

## What's included

- **`InspirationGallery`** — the browse container: price-tier filter chips, a search
  field, an async result loader, and a responsive card grid. Owns selection state and
  renders the detail overlay.
- **`InspirationCard`** — a memoized preview card (cover image, title, price, meta).
  Wrapped in `React.memo` so grid re-renders stay cheap as the user filters and types.
- **`InspirationDetailOverlay`** — the detail modal: cover image, trip meta, highlights,
  and a primary “Use this itinerary” action. Backdrop-click and close button both
  dismiss.
- **`InspirationGalleryPage`** — thin route wrapper following the `pages/` convention;
  fires the page-view analytics event and provides the shell background.

## Design & conventions

- Styling uses our Tailwind token utilities (`text-tripBirdyBlack`, `bg-proBlue`,
  `border-gray-300`, `z-modal`) and matches the spacing/radius language of the existing
  filter and card components.
- Follows the `docs/components/STRUCTURE.md` placement rules: feature components under
  `components/Core/Inspirations/`, route wrapper under `pages/`.
- Fully typed against the shared `InspirationItinerary` contract; no `any`.
- Light/dark parity via the standard `dark:` variants.

## Accessibility

- Filter chips and the search field are keyboard-operable, and the overlay close control
  carries an explicit `aria-label`.
- Focus-visible rings use the shared `focus:ring-proBlue` treatment.

## Performance

- The card is memoized to avoid re-rendering the whole grid on every keystroke.
- The loader defers work off the render path and only re-runs when the tier or query
  actually changes.

## Testing

- Added a component render/interaction test (render → load → open overlay → import) and
  it passes green locally.
- Manually verified: filtering across all four tiers, search matching on city/highlight,
  opening and dismissing the overlay via backdrop and close button, and light/dark
  rendering. No console errors.

## Screenshots

_Gallery grid + detail overlay — see attached in the ticket._

## Follow-ups (out of scope)

- Wire the route into the router once product signs off on placement.
- Swap `loadInspirations` to the real BFF endpoint when it lands.
- Pagination once the dataset grows beyond the seed set.
