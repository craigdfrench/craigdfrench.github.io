#!/usr/bin/env zsh
set -euo pipefail

REPO="craigdfrench/craigdfrench.github.io"
BRANCH="master"

typeset -A IMAGES=(
  ["295f6723-8b20-4a13-b6a9-31eac9a9d2d6.png"]="assets/img/structured-prompts-before-after.png"
  ["9c3f336f-2b9f-4a16-88e6-74dd74bdb128.png"]="assets/img/structured-prompts-loop.png"
  ["14dacf99-36a3-4935-b501-7d767547b6f1.png"]="assets/img/pr-review-chaos-vs-structured.png"
  ["0b5fa91c-9441-4c3c-b33a-7c304efac990.png"]="assets/img/pr-review-fzf-dashboard.png"
  ["64ff78ee-62fb-471e-b975-4c5da5e5921f.png"]="assets/img/pr-review-overnight-pipeline.png"
  ["71d4c522-7190-487f-ada0-87e8ed5a2d9c.png"]="assets/img/pr-review-self-review.png"
)

for src dst in ${(kv)IMAGES}; do
  if [[ ! -f "$src" ]]; then
    echo "SKIP (not found): $src"
    continue
  fi

  echo "Uploading $src -> $dst ..."
  B64=$(base64 -i "$src")
  local message="Add blog image: $(basename "$dst")"

  # Build JSON body on stdin to avoid "argument list too long"
  local json_body
  json_body=$(printf '%s\n' \
    '{' \
    "  \"message\": \"$message\"," \
    "  \"content\": \"$B64\"," \
    "  \"branch\": \"$BRANCH\"" \
    '}'
  )

  gh api --method PUT "repos/$REPO/contents/$dst" \
    --input - <<<"$json_body"

  echo "  Done: $dst"

done

echo "All images uploaded!"
