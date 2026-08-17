# reference/ — study material

These files are **adapted from our production app** to show you how we build things:
design tokens, component reuse, and how we structure a searchable/filterable list
screen. They are **not part of the build** and you don't need to run or edit them.

We have two of these "Manage list" screens today (Manage Trips and Manage
Reservations). The screen you're building is the next one in the same family, so it's
worth a skim before you start.

- **`ManageTripsPage.tsx`** — a representative instance of the pattern: a labeled
  search field, a filter, and a responsive grid of cards, with the visible list
  derived from the source data. Note which pieces come from `src/components/ui`.

> Icons here use `lucide-react` to match the starter; our real app uses Font Awesome.
> Everything else — tokens, class conventions, component structure — is as we write it.
