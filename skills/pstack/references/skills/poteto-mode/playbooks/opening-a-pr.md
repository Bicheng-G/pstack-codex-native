# opening-a-pr

Use only when PR preparation/publication is authorized. Resolve repository, remote, actual base, existing PR, checkout, HEAD, and task-owned changes. Preserve unrelated staged/unstaged/untracked work.

Review the final diff and relevant new files. Run required checks appropriate to the change and summarize limits. Prepare a concrete title/body around the problem and resulting behavior, with concise validation. Use the repo template and avoid fabricated metrics, logs, or links.

Commit only the intended files under applicable Git authorization. Publish to the verified target without rewriting shared history. Prefer a structured PR tool or write the exact body to a file and use `gh pr create --body-file <file>`; do not interpolate generated prose into shell code.

Attach the returned PR URL with the Codex app's artifact tool when available. Re-read the PR's base/head and state before reporting it. PR creation alone neither starts a readiness loop nor authorizes merge. If publication is outside scope, leave local changes and prepared text ready for review.
