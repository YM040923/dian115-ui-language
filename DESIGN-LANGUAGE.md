# Design Language

## Design thesis

The reference is a calm operations console, not a decorative dashboard. It uses a pale neutral environment, a blue primary interaction color, thin borders, medium-radius surfaces, compact typography, and a deliberate sequence from global navigation to local action to live data.

The visual goal is **operational confidence**: users should know where they are, what is healthy, what is moving, what is waiting, and what needs attention without reading every line.

## Visual character

- Light-first, with a coherent dark-theme counterpart rather than unrelated dark styling.
- Cool near-white canvas with faint blue-gray depth.
- Blue as the main interaction accent; green/yellow/red only for semantic status.
- Dark ink for values and headings; muted gray-blue for secondary content.
- Surfaces are mostly opaque and quiet. Blur and glow are optional and functional, not default.
- Cards have a soft but controlled radius; avoid a page made from identical floating pills.
- English eyebrow labels are used sparingly to establish a page category, not as decoration above every block.

## Scan order

The preferred desktop scan order is:

1. Global shell: navigation, breadcrumb, search, theme, account/context.
2. Page header: section label, Chinese title, purpose sentence, freshness or mode.
3. Primary action or refresh control.
4. High-value metrics or filters.
5. Main working surface: queue, discovery grid, table, form, or media library.
6. Supporting evidence: trend, feed, resource, history, or recent content.
7. Floating assistance and persistent demo/system notices.

On mobile, the order becomes:

1. Compact top bar.
2. Page header and primary action.
3. One metric or filter group per row.
4. Main task list/grid.
5. Supporting modules below; secondary navigation becomes a drawer.

## Surface hierarchy

Use three surface levels:

1. **Environment** — page background and subtle section wash.
2. **Workspace** — the main panel or feature island containing a coherent task.
3. **Information** — rows, metric cells, chips, progress tracks, media items, and controls inside the workspace.

Do not put cards inside cards without a clear hierarchy. Use whitespace, dividers, or aligned sections when an extra container adds no meaning.

## Accent strategy

- One primary accent: a restrained blue.
- Success: green with a text label or icon.
- Warning: amber with a text label or icon.
- Danger: red with a text label or icon.
- Focus: visible blue ring, not only a color shift.
- Never communicate a state through color alone.

## Motion

Motion has four jobs:

- Refresh: show that data was requested and when it became current.
- Progress: make long-running work legible.
- Transition: show navigation, drawer, dialog, or detail expansion.
- Feedback: acknowledge save, retry, error, or completion.

Use short ease-out transitions for controls and slightly slower spring-like transitions for drawers and floating assistants. Respect `prefers-reduced-motion`.

## Content language

- Chinese is the primary product language; short English category labels may support hierarchy.
- A page title says what the user is looking at. The supporting sentence says why it matters.
- Prefer direct labels: “刷新”, “保存”, “测试连接”, “查看全部任务”, “重试”.
- Use compact metadata: source, type, date, progress, owner, and status.
- Long-running operations need an explicit status and a recoverable action.
- Demo data must be labeled as demo/sample data.

## What to keep original

A future product may borrow the language but must invent its own brand, routes, names, data model, content, icons, imagery, and business-specific composition.
