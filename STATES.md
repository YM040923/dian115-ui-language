# Interaction and State Model

A professional control plane must show what the system knows, when it learned it, and how the user can recover.

## Global interactions

- Navigation drawer: open/close, grouped destinations, current-page indication, keyboard dismissal.
- Global search: opens from button or shortcut, accepts query, exposes result type and destination, supports empty/no-result/loading states.
- Theme: switches the whole interface coherently and persists according to the target app's existing convention.
- Page refresh: enters a visible loading state, prevents duplicate requests when needed, shows updated freshness on completion, and preserves old data with a stale/error marker on failure.
- Floating assistant: collapsed/expanded, attention count, close, drag/edge-dock where supported; on mobile it must avoid content and system edges.

## Page interactions observed in the public demo

The demo presents many affordances but uses synthetic data. Treat clicks as demonstrations, not evidence of real production side effects.

- Overview: refresh, view all tasks, download refresh/management, service detail, media/queue cards, assistant, independent-page launcher.
- Discovery: source tabs, media-library selection, type/sort/genre/language/year/region/rating filters, quick subscribe on result cards.
- Settings: settings tabs, labelled fields, integration test, configuration save, import/export, database status/maintenance actions, proxy and FlareSolverr tests.
- Queue/download: task detail, status filter, refresh, retry/cancel or management affordances as presented by each page.

For any real product, destructive or externally visible operations need explicit confirmation, progress, cancellation where safe, and a clear result.

## State contract

Every data-backed area should distinguish:

| State | Required treatment |
|---|---|
| Fresh | Show value/content and its source or update time. |
| Loading | Preserve layout; use skeleton or inline progress. Prevent misleading blank space. |
| Empty | Explain why it is empty and offer the next useful action. |
| Stale | Keep last known data visible, mark its age, offer refresh. |
| Offline | Identify unavailable dependency and what remains usable. |
| Error | State what failed in user language; keep diagnostic detail available. |
| Disabled | Explain the prerequisite or permission needed. |
| Retryable failure | Show retry near the failed item and retain relevant input/state. |
| Success | Confirm completion and show the resulting state, not only a transient toast. |

## Interaction feedback

- Refresh: “正在刷新” → completion time or an inline error.
- Save: dirty state → saving/disabled button → saved confirmation or field-level failure.
- Test connection: testing → reachable/unreachable with concise detail.
- Queue action: accepted → queued/running → completed/failed/cancelled.
- Search/filter: preserve visible query and show result count/empty state.
- Navigation: indicate selected destination and preserve or reset context intentionally.

## Keyboard and accessibility

- All controls are keyboard reachable with a visible focus indicator.
- Drawers and dialogs have a labelled title, close affordance, Escape behavior, and focus return.
- Icon-only controls have accessible names.
- Progress exposes value and label.
- Status is conveyed with text/icon as well as color.
- Dense tables retain semantic headers and sensible reading order.
- Respect reduced-motion preferences.

## Demo-data boundary

The page itself announces that it is a demo and that the data is fictional. Do not infer real API behavior, actual server reliability, true account states, or persistence from the demo.
