# Using this reference with Codex

Paste this before asking Codex to design or redesign a UI:

```text
Read this repository first. Use it as a UI-language reference, not as a route
or business-logic template.

Primary language:
- light-first media-operations control plane
- warm neutral canvas, restrained blue accent, semantic status colors
- compact shell with grouped navigation, page header, freshness, and one dominant task
- different compositions for metrics, queues, feeds, media grids, charts, and settings
- high desktop density with an explicit one-column mobile adaptation
- every data-backed area shows fresh/loading/empty/stale/offline/error/retry/success states
- motion only for feedback, progress, refresh, and transitions

Before coding:
1. State what you borrow from this reference.
2. State what remains original for the target product.
3. Map the target pages, controls, data states, and responsive behavior.
4. Reuse the target codebase's existing components and tokens when possible.
5. Verify the first screen, one secondary page, one critical interaction,
   a narrow viewport, and one non-success state.

Do not copy the source product's name, routes, business data, screenshots,
logos, posters, or exact composition unless the user explicitly provides
permission and a compatible license.
```

For several UI references, declare one primary language and use others for
named dimensions only:

```text
primary visual language: Dian115 UI Language
media-card treatment: Reference B
chart treatment: Reference C
motion rhythm: Reference D
```
