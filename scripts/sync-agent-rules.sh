#!/usr/bin/env bash
# AGENTS.md is the single source of truth.
# This script creates copies for agents that don't read AGENTS.md natively.
# Usage: bash scripts/sync-agent-rules.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SOURCE="$ROOT/AGENTS.md"

echo "Syncing agent rules from AGENTS.md..."

# Resolve @file imports
resolve_imports() {
  local content="$1"
  while IFS= read -r line; do
    if [[ "$line" =~ ^@(.+)$ ]]; then
      local ref_file="$ROOT/${BASH_REMATCH[1]}"
      if [[ -f "$ref_file" ]]; then
        cat "$ref_file"
      else
        echo "Warning: Referenced file not found: $ref_file" >&2
        echo "$line"
      fi
    else
      echo "$line"
    fi
  done <<< "$content"
}

RESOLVED="$(resolve_imports "$(cat "$SOURCE")")"

HEADER="<!-- AUTO-GENERATED from AGENTS.md — do not edit directly.
Run \`bash scripts/sync-agent-rules.sh\` to regenerate. -->

"

# 1. GitHub Copilot
mkdir -p "$ROOT/.github"
printf '%s\n%s' "$HEADER" "$RESOLVED" > "$ROOT/.github/copilot-instructions.md"
echo " ✓ .github/copilot-instructions.md"

# 2. Cline / Roo Code
printf '%s\n%s' "$HEADER" "$RESOLVED" > "$ROOT/.clinerules"
echo " ✓ .clinerules"

# 3. Continue
mkdir -p "$ROOT/.continue/rules"
printf '%s\n%s' "$HEADER" "$RESOLVED" > "$ROOT/.continue/rules/project.md"
echo " ✓ .continue/rules/project.md"

# 4. Amazon Q Developer
mkdir -p "$ROOT/.amazonq/rules"
printf '%s\n%s' "$HEADER" "$RESOLVED" > "$ROOT/.amazonq/rules/project.md"
echo " ✓ .amazonq/rules/project.md"

echo ""
echo "Done! Agent rules synced from AGENTS.md."
