# Using this reference with Codex

## The rule that prevents copying

Use this repository as a **design-language input**, not as a screenshot, route,
component, or business-logic template.

The reference audit tells Codex what was observed. The design documents say
what that observation means. The Demo proves how the rules can look and behave.
The checklist decides whether a new product adapted the rules successfully.

Do not skip the translation layer between the reference and the Demo:

```text
reference observation
        ↓
abstract design principle
        ↓
original target-product decision
        ↓
implementation and states
        ↓
visual / interaction acceptance
```

## Recommended reading order

1. `AGENTS.md` and `CODEX.md`
2. `reference/REFERENCE-AUDIT.md`
3. `docs/REFERENCE-TO-DEMO-MATRIX.zh-CN.md`
4. `DESIGN-LANGUAGE.md`, `TOKENS.md`, `COMPONENTS.md`, `STATES.md`,
   `COMPOSITION.md`, and `RESPONSIVE.md`
5. `docs/DEMO-MAP.zh-CN.md`, then the running `demo/`
6. `docs/UI-REVIEW-CHECKLIST.zh-CN.md`
7. `docs/DESIGN-TRANSFER-BRIEF.zh-CN.md` before adapting the language to a real product

## Copy-paste prompt

Paste this before asking Codex to design or redesign a UI:

````text
Read this repository first. Use it as a UI-language reference, not as a route
or business-logic template.

Primary language:
- light-first media-operations control plane
- low-saturation cool-neutral canvas, restrained blue accent, semantic status colors
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
6. Use `docs/REFERENCE-TO-DEMO-MATRIX.zh-CN.md` to explain why each borrowed
   rule applies; do not infer target requirements from the Demo's module list.

Before implementation, output this short decision record:

```text
primary visual language:
borrowed dimensions:
target-product original decisions:
modules intentionally rejected:
page responsibilities:
normal/loading/empty/stale/offline/error/retry/success states:
desktop/tablet/mobile behavior:
verification evidence to collect:
```

Do not copy the source product's name, routes, business data, screenshots,
logos, posters, or exact composition unless the user explicitly provides
permission and a compatible license.
````

## Combining several UI references

Declare one primary language and use others for named dimensions only:

```text
primary visual language: Dian115 UI Language
media-card treatment: Reference B
chart treatment: Reference C
motion rhythm: Reference D
```

When dimensions conflict, prefer product function, platform behavior, and
accessibility over visual similarity. Do not merge several token systems into
an average palette.

## Running the visual evidence

The Demo is dependency-free:

```powershell
python -m http.server 8080 -d demo
```

Open `http://localhost:8080`, then use `docs/DEMO-MAP.zh-CN.md` to inspect the
relevant region. The Demo demonstrates visual evidence and interaction shape;
it does not prove backend behavior, persistence, permissions, or production
data semantics.
