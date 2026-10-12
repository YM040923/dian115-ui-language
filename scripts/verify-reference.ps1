$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
$required = @(
  'AGENTS.md','CODEX.md','DESIGN-LANGUAGE.md','TOKENS.md','COMPONENTS.md',
  'STATES.md','COMPOSITION.md','RESPONSIVE.md','ACCESSIBILITY.md',
  'reference/REFERENCE-AUDIT.md',
  'docs/REFERENCE-TO-DEMO-MATRIX.zh-CN.md','docs/DEMO-MAP.zh-CN.md',
  'docs/UI-REVIEW-CHECKLIST.zh-CN.md','docs/USING-WITH-CODEX.md',
  'docs/DESIGN-TRANSFER-BRIEF.zh-CN.md',
  'demo/index.html','demo/style.css','demo/app.js'
)
foreach ($file in $required) {
  $path = Join-Path $root $file
  if (-not (Test-Path -LiteralPath $path)) { throw "Missing: $file" }
  if ((Get-Item -LiteralPath $path).Length -eq 0) { throw "Empty: $file" }
}

$html = Get-Content (Join-Path $root 'demo/index.html') -Raw
if ($html -notmatch 'data-view="overview"') { throw 'Demo has no overview view' }
if ($html -notmatch 'data-view="settings"') { throw 'Demo has no settings view' }
if ($html -notmatch 'aria-label') { throw 'Demo has no accessible labels' }

$js = Get-Content (Join-Path $root 'demo/app.js') -Raw
if ($js -notmatch 'showPage' -or $js -notmatch 'toastMessage') { throw 'Demo interaction hooks are incomplete' }

Write-Output "OK: reference documents and demo checks passed."
