# Repository Rules

This repository is a UI-language reference, not a copy of the reference application's source.

## Preserve

- Keep this project focused on UI language, composition, states, accessibility, and implementation guidance.
- Keep the reference boundary explicit: observations come from the public demo, not from private source or data.
- Prefer general principles and original examples over copied product text, brand marks, routes, or screenshots.
- When adding a runnable demo, use original names, content, icons, and data.

## Borrow

- The reference's information hierarchy, calm density, feature-island composition, status semantics, compact operations, and mobile adaptation.
- The relationship between navigation, page header, metrics, trend visualizations, queues, feeds, media cards, and configuration forms.

## Never

- Do not publish DIAN115 main-project source code or private data.
- Do not include credentials, tokens, cookies, API keys, production endpoints, or user telemetry.
- Do not claim the reference's private implementation details are known.
- Do not make a pixel clone or reuse the reference's business structure as if it were a template.

## Before changing this repository

1. Read `CODEX.md` and the relevant design documents.
2. Keep the change within the documented UI-language scope.
3. Update the audit or examples when a design rule changes.
4. Run the lightweight checks in `scripts/verify-reference.ps1`.
