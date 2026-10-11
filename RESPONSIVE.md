# Responsive Rules

## Desktop: 1024px and wider

- Use a compact fixed or sticky top bar.
- A grouped navigation drawer may overlay the content; keep a clear close path.
- Use a fluid content frame with a reasonable maximum width.
- Overview modules may use 2–4 columns depending on importance and width.
- Keep task queues and feeds denser than discovery/media grids.
- Place supporting evidence beside the main task only when it remains readable.

## Tablet: 768–1023px

- Reduce grid columns before compressing text.
- Keep one dominant task area.
- Move low-priority support modules below the main area.
- Preserve filter labels and touch-friendly targets.

## Mobile: below 768px

- One-column content flow.
- Metrics become stacked or horizontally scrollable only when each card remains readable.
- Navigation is a drawer.
- Page header stacks title, explanation, freshness, then action.
- Long filter groups collapse into a filter panel.
- Tables become labelled rows or horizontal scrolling with an explicit affordance; never silently clip key columns.
- Media cards may use a compact list or two-column poster grid based on image importance.
- Keep 44px minimum touch targets.
- Floating assistant docks to an edge and avoids sticky controls, browser safe areas, and the demo notice.

## All sizes

- No horizontal page overflow.
- Long names wrap or truncate with a way to inspect the full value.
- Progress and status remain visible without hover.
- Text zoom to 200% does not hide actions.
- Use `dvh` or content-driven minimum height for full-height surfaces, not brittle `100vh` assumptions.
- Check both portrait and landscape where the task requires it.
