# Composition

## The overview page

The reference overview page uses an operational story rather than a marketing hero:

1. Page header establishes “where I am” and data freshness.
2. Core metrics summarize the system.
3. Trend visualization gives direction over time.
4. Connection status answers whether dependencies are usable.
5. Current tasks show work in motion.
6. Recent activity explains what just happened.
7. Playing/active media gives a human-readable current workload.
8. Resource snapshot supports operational confidence.
9. Domain statistics and rankings add context.
10. Download and recent-library modules show concrete output.
11. Floating assistant and demo notice remain available without becoming the page.

Do not reproduce all of these modules for every product. Keep only what helps the primary job.

## A page is a working surface

Every page should have one dominant job:

- Discovery: search/filter, scan media, subscribe.
- Queue: inspect, filter, retry, cancel, open detail.
- Media library: recognize, browse, play, inspect.
- Settings: configure, test, save, recover.
- Logs: scan recent evidence, filter, copy/open detail.

Supporting panels should explain or accelerate that job, not compete with it.

## Density rhythm

Use a rhythm of:

- one dense work area,
- one or two compact support areas,
- generous separation between groups,
- short explanatory sentences only where a decision needs context.

Avoid a uniform wall of same-size cards. Vary by job: a queue is a list, a trend is a chart, a library is a media grid, a form is a labelled stack.

## Navigation composition

Group navigation by user intent:

- Overview / workspace.
- Discovery / automation.
- Resources / integrations.
- Control / maintenance.
- Settings / security.

A count badge means “attention exists”, not “this item is more important than everything else”.

## Mobile composition

Mobile is not desktop squeezed narrower:

- Stack metric islands.
- Keep one primary action visible.
- Turn multi-column support content into a logical sequence.
- Make filters reachable without stealing the whole page.
- Keep queues readable with two-line metadata and a progress row.
- Move floating tools to an edge-safe position.

## Combining several UI language references

Write the decision before coding:

```text
primary: Dian115 UI Language — shell, status semantics, operations density
secondary: Reference B — media-card composition
secondary: Reference C — chart treatment
avoid: mixing all palettes and radius systems
```

The product should feel like one coherent system, not a collage.
