# Demo

This is a dependency-free original demo of the documented language. It uses
Harbor Console names and sample content instead of copying the reference
product's routes, brand, artwork, or data.

```powershell
python -m http.server 8080 -d demo
```

Open `http://localhost:8080`.

The demo includes:

- grouped navigation and a compact responsive shell;
- overview metrics, trend, health, queue, live feed, and media output;
- discovery tabs, filters, media cards, and quick actions;
- settings sections with test/save affordances;
- loading feedback, toasts, theme toggle, search dialog, and attention assistant;
- running, queued, completed, failed, and retryable task states.

It is a teaching artifact, not a production dashboard or backend.

Read it together with:

- `../reference/REFERENCE-AUDIT.md` for observed facts;
- `../docs/REFERENCE-TO-DEMO-MATRIX.zh-CN.md` for the observation-to-principle translation;
- `../docs/DEMO-MAP.zh-CN.md` for the visual evidence index;
- `../docs/UI-REVIEW-CHECKLIST.zh-CN.md` for target-product acceptance.

Do not copy the Demo's routes or module list into a new product. Replace them
with the target product's own decisions while preserving only the named design
principles.
