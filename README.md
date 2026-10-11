# Dian115 UI Language

Dian115 UI Language is a reusable design-reference repository distilled from a black-box study of the public DIAN115 demo page. It is written for Codex and for people who want to learn how to build calm, dense, state-aware media-automation software interfaces.

This repository describes the **visual language, information hierarchy, interaction patterns, state semantics, and composition rules** of the reference. It does not publish DIAN115 application source code, private data, production credentials, or a clone of its business logic.

## What this repository is for

- Give Codex a durable UI reference before designing another application.
- Teach how the reference combines a shell, page header, feature islands, metrics, queues, feeds, media cards, forms, and responsive behavior.
- Preserve the useful design decisions while making future products original instead of copying routes or content.
- Serve as one input alongside other UI-language repositories when composing a new product.

## Design read

> A light-first media-operations control plane: warm neutral canvas, quiet blue interaction accent, high information density without visual noise, and status-aware feature islands that make long-running work legible.

## Read in this order

For Codex:

1. [AGENTS.md](AGENTS.md)
2. [CODEX.md](CODEX.md)
3. [DESIGN-LANGUAGE.md](DESIGN-LANGUAGE.md)
4. [TOKENS.md](TOKENS.md)
5. [COMPONENTS.md](COMPONENTS.md)
6. [STATES.md](STATES.md)
7. [COMPOSITION.md](COMPOSITION.md)
8. [RESPONSIVE.md](RESPONSIVE.md)
9. [reference/REFERENCE-AUDIT.md](reference/REFERENCE-AUDIT.md)

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

- Original analysis and documentation in this repository: CC BY 4.0. See [LICENSE-DOCS](LICENSE-DOCS).
- Demo assets or code added later must carry their own explicit license.
- Third-party names, logos, artwork, trademarks, and the reference project remain owned by their respective owners.
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
