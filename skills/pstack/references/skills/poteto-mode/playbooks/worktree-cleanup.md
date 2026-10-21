# worktree-cleanup

Start read-only. Resolve the actual repository and enumerate worktrees through Git or the Codex app. Record absolute paths, HEAD/branch, dirty/staged/untracked state, relevant unpushed commits, merge ancestry against the actual target, attached chats, and active task/process ownership.

Classify candidates from evidence. Unknown owner, unpushed work, ignored assets, unresolved PR state, or uncertain merge ancestry is not safe-to-remove evidence. Present the concrete recoverable removal set before any action whose required authorization is missing.

For managed Codex worktrees prefer the app's archive tool, which preserves its supported snapshot; inspect its limitations and preserve required ignored data separately. For ordinary Git worktrees use the repository's approved non-forcing removal only on verified task-authorized targets. Re-resolve and check every absolute path before recursive removal/move. Never prune a live checkout or another task's work.

Simulator runtimes, caches, global app state, and unrelated folders are separate cleanup targets requiring applicable scope. Do not run broad platform cleanup commands by association.

Report audit evidence, exact archived/removed targets, recoverability and any measured reclaimed space. Audit-only requests produce no deletion.
