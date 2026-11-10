#!/bin/bash
# SessionStart-Hook: installiert npm-Pakete nur in Claude-Code-Cloud-Sessions
# und nur, wenn sich package.json oder package-lock.json geändert haben.

if [ "$CLAUDE_CODE_REMOTE" != "true" ]; then
  exit 0
fi

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(cd "$(dirname "$0")/.." && pwd)}"
cd "$PROJECT_DIR" || exit 0

if [ ! -f package.json ]; then
  exit 0
fi

HASH_FILE="node_modules/.install-hash"
CURRENT_HASH="$(cat package.json package-lock.json 2>/dev/null | sha256sum | cut -d' ' -f1)"

if [ -f "$HASH_FILE" ] && [ "$(cat "$HASH_FILE")" = "$CURRENT_HASH" ]; then
  exit 0
fi

if npm install --yes; then
  mkdir -p node_modules
  # Hash nach dem Install neu berechnen, da npm install package-lock.json ändern kann
  cat package.json package-lock.json 2>/dev/null | sha256sum | cut -d' ' -f1 > "$HASH_FILE"
else
  echo "install_pkgs.sh: npm install fehlgeschlagen" >&2
fi

exit 0
