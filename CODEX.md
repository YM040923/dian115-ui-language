# Codex Quick Protocol

Use this repository when the user gives you a UI-language reference before asking for a new application or redesign.

## Design read

Read the target as:

> A light-first media-operations control plane with warm neutral depth, compact but breathable feature islands, status-aware data, and mobile-first simplification.

Recommended dials for a similar product:

- `DESIGN_VARIANCE`: 4–6. The system is composed and calm, not experimental.
- `MOTION_INTENSITY`: 3–5. Motion explains refresh, loading, progress, opening, and live state; it does not decorate every card.
- `VISUAL_DENSITY`: 6–8 on desktop operations pages, 3–5 on mobile.

## Before editing a target project

Answer these questions from the target codebase:

1. What is the product's primary job?
2. Which pages and workflows already exist?
3. Which controls are functionally important?
4. Which platform conventions apply?
5. Which states can the data actually have?
6. What should be borrowed: shell, density, layout, interaction, state semantics, or motion?
7. What must remain original and must not be copied?

## Implementation sequence

1. Audit the target information architecture and keep existing workflows intact.
2. Map the reference dimensions: `borrow`, `preserve`, `avoid`, `states`, `platforms`.
3. Establish shared tokens from `TOKENS.md`.
4. Build the shell: top bar, navigation, page header, content frame, and mobile rules.
5. Build three representative components: metric, status/queue, and form/media card.
6. Add normal, loading, empty, offline, error, disabled, and recovery states where they apply.
7. Extend the language to every affected page without turning every screen into a dashboard.
8. Verify desktop, mobile, keyboard, touch, reduced motion, and recovery paths.

## Composition with other UI references

Choose one primary visual language per product. Other references may contribute only a named dimension:

```text
primary visual language: Dian115 UI Language
information architecture: another reference
media-card treatment: another reference
motion rhythm: another reference
```

When references conflict, use this priority:

1. Product function and existing workflow.
2. Platform behavior and accessibility.
3. User's explicit visual request.
4. Primary design language tokens and component rules.
5. Secondary references.
6. Decoration.

Do not merge colors, shadows, gradients, and radii from multiple references without a clear reason.

## Completion test

A result is not this language if it only changes color or corner radius. It should also improve:

- Information priority and scan order.
- Visibility of fresh, stale, loading, failed, and recoverable states.
- Relationship between navigation, header, content groups, and actions.
- Desktop density and mobile thumb reach.
- Feedback after refresh, save, start, cancel, retry, and navigation.
- Accessibility labels, focus, contrast, and reduced motion.
