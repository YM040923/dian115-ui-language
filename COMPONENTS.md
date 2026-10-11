# Components

## 1. Shell

### Desktop

- Compact top bar with menu toggle, breadcrumb/current location, global search, theme/context actions.
- Navigation is grouped by product intent, not by implementation module.
- The drawer has a brand mark, grouped menu items, optional count badges, and version/context footer.
- The drawer overlays or compresses the workspace without destroying the current page context.

### Mobile

- Keep a compact top bar visible.
- Move grouped navigation into a drawer.
- Keep the page title and the first meaningful action above the fold.
- Avoid forcing desktop sidebars or tiny table controls into a narrow viewport.

## 2. Page header

Structure:

```text
[small category label]
[Chinese page title]
[one-sentence purpose]
[freshness or mode]                    [primary action]
```

Use the category label only when it helps orient the page. Do not repeat a label above every section.

## 3. Metric group

Metrics are for immediate operational context, not decoration.

- Label explains the quantity.
- Value is visually dominant.
- Supporting line gives source, time window, or implication.
- Optional semantic icon sits in a quiet tinted tile.
- A metric may be a horizontal row on mobile and a grid on desktop.
- If the metric is stale or unavailable, say so instead of leaving a blank number.

## 4. Status row

A status row should answer:

1. What is the thing?
2. What state is it in?
3. When was it last known?
4. What can the user do next?

Use label + icon/shape + text + optional timestamp/action. Never use only a green dot.

## 5. Queue item

Use for downloads, sync, organize, processing, and background jobs.

```text
[item name]                         [status]
[operation/source]       [timestamp or owner]
[progress track / current step]
[optional retry, cancel, or detail action]
```

Queue states should be visibly different:

- Running: progress and active accent.
- Queued: neutral track and waiting label.
- Complete: success state and completion time.
- Failed: danger state, reason, and retry.
- Cancelled: muted state and optional restart.

## 6. Live feed

Use a vertical feed for recent events, not a full log dump.

- The newest event is easiest to find.
- Each row has event text, source/category, and time.
- Keep the feed short; provide a full-log route when needed.
- Severity is not color-only; include a label or icon.

## 7. Media card

Media cards combine image, title, type/year, rating, and a short action such as subscribe, open, play, or inspect.

- Image is the recognition anchor.
- Keep metadata compact and aligned.
- Put the action where the user expects it: hover/focus on desktop, always reachable on mobile.
- Avoid putting every piece of metadata into a separate badge.

## 8. Filters and segmented tabs

- Tabs describe different sources or modes.
- Filters narrow the current collection.
- Separate them visually so users understand whether they are changing a mode or a query.
- On mobile, allow horizontal scrolling for short tab sets and collapse long filters into a sheet/drawer.

## 9. Form section

A form is grouped by user decision:

- Section heading.
- Label above each field.
- Helper text below when the setting has consequences.
- Related fields in a grid on desktop, one column on mobile.
- Save action at the end of the section or in a sticky save bar for long pages.
- Test/preview actions sit next to the relevant connection or integration fields.

## 10. Floating assistant

A floating assistant can be useful for cross-page guidance or attention items.

- It is movable or edge-dockable.
- Its collapsed state is small and non-blocking.
- Its expanded state has a clear close action.
- The badge says how many items need attention.
- It must not cover the primary action or obscure content on mobile.

## 11. Demo notice

A persistent demo mode notice is useful when data is fictional. It should be visible but quiet, with a plain explanation. It must not look like a production alert.
