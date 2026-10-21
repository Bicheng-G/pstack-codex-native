# shipping

Establish explicit merge/land authority for the exact repository, PRs and target branch. Prepare all reviewable work and verify target identity first. Respect enforced forge approvals and user gates.

Verify each PR's relevant behavior on the artifact that would land. Use an independent verifier where required/available, with actual base/head and method receipts. If independence or a required environment is unavailable, report that gate incomplete. Green CI or approving bot text alone does not prove the user flow.

Land only the contiguous verified run from the lowest unmerged PR. Check the current head, base, merge result/dependency drift, required checks, review status, and forge mergeability immediately before landing. Any relevant change invalidates affected evidence and requires re-verification. Do not silently reuse an older verdict because checks are green.

Use the authorized merge method and re-read forge state to confirm the actual merge SHA. Avoid concurrent branch/base changes during landing. A PR above an unverified dependency waits. Retarget/rebase/force-push requires its own applicable authority and fresh evidence.

Report merged PRs and SHAs, anything still waiting, and any requested deployment verification separately. A merged commit does not establish deployment or product acceptance. No merge is performed merely by invoking a generic engineering workflow.
