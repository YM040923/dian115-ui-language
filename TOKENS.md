# Tokens

Use these as a starting vocabulary, not a requirement to force every product into identical numbers. If the target already has a token system, map these roles to its existing tokens.

## Color roles

```css
:root {
  --canvas: #f4f6f8;
  --canvas-wash: #edf3f8;
  --surface: #ffffff;
  --surface-soft: #f8fafc;
  --surface-muted: #eef2f6;
  --line: #dce4ec;
  --line-strong: #c9d5e1;
  --ink: #18212b;
  --ink-soft: #536273;
  --ink-muted: #7a8795;
  --accent: #2f80d8;
  --accent-soft: #e8f2ff;
  --success: #1f9d62;
  --success-soft: #e8f7ef;
  --warning: #c98a18;
  --warning-soft: #fff5dc;
  --danger: #d34b58;
  --danger-soft: #fff0f1;
  --focus: #2563eb;
}
```

The exact values may change with brand, contrast, and platform. The roles should not.

## Spacing

Use a small scale:

- `xs`: 4px — icon/text gap, compact metadata.
- `sm`: 8px — control internals, chip gaps.
- `md`: 12px — row gaps, field gaps.
- `lg`: 16px — card padding, section gaps.
- `xl`: 24px — feature-island padding, page groups.
- `2xl`: 32px — major desktop separation.

A page should feel aligned because most gaps come from this scale.

## Typography

- Page eyebrow: 11–12px, uppercase or compact label, medium weight, accent or muted ink.
- Page title: 28–36px desktop, 24–30px mobile, bold, tight line-height.
- Section title: 17–21px, semibold.
- Body: 14–16px, readable line-height.
- Metadata: 12–13px, muted ink.
- Metric value: 28–42px, bold; use tabular numerals where available.
- Technical value: use a mono face only where it improves scanning.

Typography creates hierarchy before color does.

## Shape

- Workspace/feature island: 14–18px radius.
- Compact control: 8–10px radius.
- Badge/status dot: full radius.
- Primary buttons may be 9–12px radius; use one button rule consistently.
- Border: 1px; shadow only when a surface must float above scroll content.

## Controls

- Compact control height: 34–38px.
- Standard input height: 40–44px.
- Primary action height: 38–42px.
- Touch target: at least 44px on mobile, even when the visual control is smaller.
- Focus ring: 2px visible ring plus 2px offset where the platform permits.

## Motion

- Hover/focus: 120–180ms.
- Drawer/dialog: 180–260ms.
- Progress/refresh feedback: driven by actual state, not a decorative loop.
- Easing: ease-out for entry, ease-in-out for reversible movement.
- Reduced motion: remove transform-based movement and keep opacity/state changes only when useful.
