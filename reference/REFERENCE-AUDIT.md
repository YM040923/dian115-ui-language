# Reference Audit: DIAN115 Public Demo

**Source:** <https://madbrolab.github.io/dian115/demo/#/overview>  
**Observed:** October 11, 2026  
**Method:** read-only browser inspection of the public demo at mobile viewport 400×596 and inspection of its visible navigation, overview, discovery, and settings pages. The page itself labels its data as fictional demo data.

## Boundary and confidence

This is a black-box UI audit. It describes what was visible and clickable in the public demo, not private source implementation. No login or production account was used. The demo did not prove that any action changes real data or persists to a backend.

- **High confidence:** visible hierarchy, copy, component grouping, navigation labels, responsive layout at the inspected mobile viewport, visible controls on inspected pages.
- **Medium confidence:** inferred interaction purpose from labels, page structure, and visible states.
- **Not established:** backend behavior, persistence, access control, performance, accessibility conformance, or all routes/states.

## Overall visual thesis

A light-first, information-dense media-operations console. The page balances operational metrics, service health, ongoing work, recent events, resource data, playback, downloads, and media-library content. It remains approachable through restrained neutral surfaces, a blue action accent, direct Chinese labels, and status signals.

The strongest reusable idea is not a particular card style: it is **an operations narrative that moves from health → work in progress → recent evidence → concrete media output**.

## Shell and navigation

- Compact top bar: menu, current page/breadcrumb, global search, theme toggle.
- Grouped drawer with sections for overview, automation, resource access, control panel, and system settings.
- Menu entries may carry count badges for grouped attention areas.
- Version/build context is placed at the bottom of the drawer.
- On the inspected 400px mobile viewport the sidebar is collapsed behind a menu button; the content becomes a single vertical column.

## Overview composition

Observed content groups:

1. Page header with English category label, Chinese title, latest-sample time, and refresh.
2. Four core metrics: hosted files, today's additions, 24-hour sync, live playback.
3. Seven-day file trend.
4. Service connection status and current activity counts.
5. Cloud-drive service summary and detail affordance.
6. Task queue with active/completed/failed counts, execution slots, progress, and “view all tasks”.
7. Recent-event feed.
8. Currently playing media.
9. CPU, system memory, application memory and I/O snapshot/chart.
10. 115 service statistics, 302 redirect ranking, download management, recent library.
11. Floating assistant/attention control, demo notice, independent-page launcher.

This is intentionally dense on desktop. The mobile layout stacks metrics and modules; prioritize the first task and put supporting analytics later in the scroll.

## Discovery page

Observed pattern:

- Page title and one-sentence purpose.
- Horizontal source/mode tabs: Explore, PT, Telegram channels, and public sources.
- Selected media library context.
- Filters for type, sorting, genre, language, year, region and rating.
- Multiple media sections such as trends, now showing, popular films/shows, and high-rated items.
- Poster-led cards with title, year, type, score, short synopsis, and quick-subscribe affordance.

Reusable lesson: separate source choice from filters, then present image-rich content in a scannable grid. On mobile, long filter sets need a compact panel or sheet rather than an endless inline control row.

## Settings page

Observed pattern:

- Page-level configuration actions: import/export, with a warning that exported files contain secrets.
- Settings categories/tabs.
- Long page divided into named sections: language, service addresses, cloud-drive configuration, system parameters, database maintenance, HTTP proxy, and Cloudflare helper.
- Fields are labelled, often with helper text; integration sections include test-connection actions and a separate save action.
- Save buttons are disabled when there is no change in at least some settings.
- Sensitive data is masked in the visible password/token field.

Reusable lesson: settings should be sectioned by user intent, show consequences/prerequisites, and keep test and save states distinct. Export warnings and secret masking are trust signals.

## Interaction inventory

Visible or accessibility-labelled actions included:

- Global: open/close navigation, open global search, switch theme, open floating assistant, launch independent page.
- Overview: refresh, view all tasks, refresh downloads, manage downloads, open service detail, inspect media/task items.
- Discovery: choose source tabs, select media library, set filters/sort, quick-subscribe a media result.
- Settings: switch settings category, import/export configuration, edit fields/radios/sliders/switches, test service/proxy connections, save sections, refresh database status, run maintenance.

The demo banner explicitly says it only demonstrates the interface and function and that all data is virtual. Therefore the inventory records affordances, not confirmed business outcomes.

## Responsive observations

At 400×596:

- Top bar stays compact.
- Drawer navigation is hidden until opened.
- Header, metrics, and content panels stack vertically.
- Metric values remain prominent.
- A floating assistant and independent-page control can intrude on the first view if poorly positioned; an implementation should test overlap against the header, scroll content, and persistent demo banner.
- The demo banner is persistent and visually muted.

Only this mobile size was directly inspected. Other breakpoint behavior needs independent validation.

## Learn / preserve / avoid

### Learn

- Use a compact operational shell with global search and grouped navigation.
- Make freshness and service health visible near the top.
- Combine summary metrics with detailed work queues and recent evidence.
- Use different compositions for charts, queues, media discovery, and settings rather than one universal card grid.
- Keep real operational actions close to the item they affect.
- Surface demo mode and sensitive-export warnings.

### Preserve as a principle

- User task semantics: discover, subscribe, organize, queue, monitor, download, configure, recover.
- The relationship between status, progress, timestamp, and next action.
- A mobile-first stacked adaptation rather than a shrunken desktop dashboard.

### Avoid copying

- Product identity, DIAN115 name/logo, routes, live/demo data, posters, screenshots, and exact text strings except when needed to identify the source in this audit.
- Unverified backend behavior.
- Every module on the overview page when the target product has a narrower job.
- The exact navigation hierarchy for unrelated products.

## Evidence and limitations

- Overview visible at 400×596 and its screen-reader-accessible structure inspected.
- Navigation drawer opened and grouped destinations enumerated.
- Discovery page structure inspected.
- Settings page structure and visible field/action patterns inspected.
- Not every route was opened and not every visible button was clicked. The reference contains many menu destinations and affordances; this document is a focused design audit, not a full QA report.
- No source code was extracted or copied.

## Additional route patterns observed

The public demo also exposes several distinct page families, which are useful because they show that the visual language is not only a dashboard:

- **Data operations:** sectioned operational analytics: active sessions, playback analysis, account health, and reminders. It uses numbered sections and keeps high-volume session details in repeated readable rows.
- **Calendar:** a focused date-grid tool with a compact title, year/month context, current-day emphasis, and a clear empty state when there are no updates.
- **Subscriptions:** a tabbed management surface for films, series, actors, and subscription settings, with search, source filters, bulk actions, and an explicit empty table state.
- **Media organizing:** a workbench organized around workspace/rules/history/categories, then search, filters, batch actions, counts, and empty records. This is a good example of using tabs to separate configuration from history.
- **Portable media library:** a guided multi-step form: external source → video preview → output settings → generated result. It explains prerequisites and dangerous sharing implications next to the field that creates the risk.

These pages support a key rule: borrow the language, not the overview page. A calendar wants a date grid, a subscription manager wants tabs and batch actions, and a guided generator wants steps and validation.
