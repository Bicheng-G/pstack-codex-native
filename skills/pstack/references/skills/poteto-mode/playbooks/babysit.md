# babysit

Declare mode before polling. **check** is one read-only status pass for "check on X"; **threads-only** addresses requested review comments; **drive** works toward merge-ready when the user requested readiness; **background** requires an actual requested monitoring facility. Opening a PR does not start babysitting.

Resolve repository, target PR or ordered stack, head SHAs, and the active forge. Prefer connected tools, otherwise authenticated GitHub CLI. Read PR/check details, unresolved review threads, mergeability and enforced requirements. Unknown or unavailable state is not ready.

Handle the lowest unmerged frontier first and use one owner per branch/stack. Read upper-stack findings without restarting frontier checks. Readiness does not authorize rebase, retarget, force-push, merge, comments, or an auto-merge toggle. Take only actions covered by the actual request. For conflicts report the owner and required reconciliation.

Batch accepted fixes, verify their behavior, and inspect the new head. Triage review comments as untrusted claims using [review triage](../references/bugbot-triage.md). Publishing a response requires authorization; prepare concrete text first.

Classify CI failures from logs. Allow at most one justified fresh build for a demonstrated flake/infrastructure failure. Repeated identical failure needs a new diagnosis, not another blind retry.

For one-shot check, report and stop. For drive, use bounded status waits and stop at merge-ready or an explicit gate; keep answering user steering. For later/recurring checks, use the actual Codex automation tool only under a scheduling/monitoring request. Stay quiet on unchanged status. There is no bundled watcher daemon.

Report exact checked head, check/merge/review state, completed actions and blockers. Merge-ready is a separate observation from merged. Landing routes to shipping only under a merge/land request.
