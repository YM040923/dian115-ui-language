$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
$files = Get-ChildItem $root -Recurse -File |
  Where-Object { $_.FullName -notmatch '\\.git\\' }

# The repository is documentation plus an original local demo.
$unexpected = $files | Where-Object {
  $_.Extension -in @('.pem','.key','.p12','.pfx','.env') -or
  $_.Name -match '(^|[._-])(secret|credential|token|password)([._-]|$)'
}
if ($unexpected) {
  throw ("Unexpected sensitive-looking files: " + (($unexpected | ForEach-Object FullName) -join ', '))
}

Write-Output 'OK: public-surface file check passed.'

