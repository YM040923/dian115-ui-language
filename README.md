# Dian115 UI Language

Dian115 UI Language is a reusable design-reference repository distilled from a black-box study of the public DIAN115 demo page. It is written for Codex and for people who want to learn how to build calm, dense, state-aware media-automation software interfaces.

This repository describes the **visual language, information hierarchy, interaction patterns, state semantics, and composition rules** of the reference. It does not publish DIAN115 application source code, private data, production credentials, or a clone of its business logic.

## What this repository is for

- Give Codex a durable UI reference before designing another application.
- Teach how the reference combines a shell, page header, feature islands, metrics, queues, feeds, media cards, forms, and responsive behavior.
- Preserve the useful design decisions while making future products original instead of copying routes or content.
- Serve as one input alongside other UI-language repositories when composing a new product.

## Design read

> A light-first media-operations control plane: a low-saturation cool-neutral canvas, quiet blue interaction accents, high information density without visual noise, and status-aware feature islands that make long-running work legible.

## How the documents and demo work together

This repository is an evidence chain, not a document plus a page mockup:

| Layer | Files | Purpose |
|---|---|---|
| Observation | `reference/REFERENCE-AUDIT.md` | Records what was visibly observed without pretending to know private implementation |
| Principles | `DESIGN-LANGUAGE.md`, `TOKENS.md`, `COMPONENTS.md`, `STATES.md`, `COMPOSITION.md`, `RESPONSIVE.md` | Turns observations into reusable visual, layout, and interaction rules |
| Translation | `docs/REFERENCE-TO-DEMO-MATRIX.zh-CN.md` | Maps observation → principle → demo evidence → migration rule → do-not-copy boundary |
| Executable evidence | `demo/` | Shows density, hierarchy, states, and responsive behavior in the original Harbor Console shell |
| Code index | `docs/DEMO-MAP.zh-CN.md` | Tells humans and Codex where to inspect each principle in the demo |
| Acceptance | `docs/UI-REVIEW-CHECKLIST.zh-CN.md` | Checks whether a target UI uses the language rather than only changing color and radius |
| Execution protocol | `CODEX.md`, `docs/USING-WITH-CODEX.md`, `design-profile.yaml` | Makes the reference usable by Codex and composable with other UI-language repositories |

The **demo is evidence, not a product specification**. The **documents are rules, not decoration**. Reading only one side produces the wrong result.

## Read in this order

For Codex:

1. [AGENTS.md](AGENTS.md)
2. [CODEX.md](CODEX.md)
3. [reference/REFERENCE-AUDIT.md](reference/REFERENCE-AUDIT.md)
4. [docs/REFERENCE-TO-DEMO-MATRIX.zh-CN.md](docs/REFERENCE-TO-DEMO-MATRIX.zh-CN.md)
5. [DESIGN-LANGUAGE.md](DESIGN-LANGUAGE.md)
6. [TOKENS.md](TOKENS.md)
7. [COMPONENTS.md](COMPONENTS.md)
8. [STATES.md](STATES.md)
9. [COMPOSITION.md](COMPOSITION.md)
10. [RESPONSIVE.md](RESPONSIVE.md)
11. [docs/DEMO-MAP.zh-CN.md](docs/DEMO-MAP.zh-CN.md)
12. [docs/UI-REVIEW-CHECKLIST.zh-CN.md](docs/UI-REVIEW-CHECKLIST.zh-CN.md)
13. [docs/DESIGN-TRANSFER-BRIEF.zh-CN.md](docs/DESIGN-TRANSFER-BRIEF.zh-CN.md)

For humans:

1. [README.zh-CN.md](README.zh-CN.md)
2. [DESIGN-LANGUAGE.md](DESIGN-LANGUAGE.md)
3. [COMPONENTS.md](COMPONENTS.md)
4. [STATES.md](STATES.md)
5. [COMPOSITION.md](COMPOSITION.md)

## Reference

The studied reference is the public DIAN115 demo at:

https://madbrolab.github.io/dian115/demo/#/overview

All observations in this repository are black-box observations of the public demo and its visible interactions. The reference project remains the property of its author. Use this repository as design analysis and independent implementation guidance, not as a source-code mirror.

## License

- Original demo code and scripts: Apache-2.0. See [LICENSE](LICENSE).
- Documentation and design analysis: CC BY 4.0. See [LICENSE-DOCS](LICENSE-DOCS).
- The reference project's names, marks, artwork, and other third-party material are not relicensed here.

## Architecture decisions

- **Format:** plain Markdown + YAML + a dependency-free HTML/CSS/JS demo. This keeps the reference easy for Codex to read and easy for a learner to run.
- **Primary artifact:** design language, not a component library. The rules describe intent and state semantics; the demo only proves the language in a small original product shell.
- **Originality boundary:** the audit records black-box observations from a public demo. The runnable example uses Harbor Console names, content, and styling rather than publishing or mirroring the source product.
- **Combination rule:** one primary language per target product; other references contribute named dimensions only.

## Deliberately not included

- No React/Vue build system or dependency tree.
- No backend, database, authentication, real integrations, or production data.
- No pixel-perfect replica of the reference application.
- No screenshot pack copied from the source site.
- No full clone of every reference route; the documents explain how to decide which modules a target product actually needs.

## Combining several UI-language repositories

Declare responsibilities before coding instead of averaging palettes, radii, shadows, and layouts:

```text
primary language: Dian115 UI Language — shell, operations density, state semantics
secondary dimension: Reference B — media-card treatment
secondary dimension: Reference C — chart treatment
original: the target product's brand, information architecture, domain entities, and page responsibilities
conflict priority: product job > platform usability > primary language > secondary dimensions > decoration
```

Every adaptation should answer: **which principle was borrowed, which demo evidence supports it, what was rewritten for the target product, and what was deliberately not copied.**
