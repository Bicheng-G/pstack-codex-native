# Poteto mode

Choose the playbook that matches the requested outcome. Read its steps and the relevant source before implementing. Keep a compact checklist for a real multi-step task; skip inapplicable steps with their reason. Do not require a program, agents, or delivery ceremony for ordinary work.

## Working method

1. Ground the change in actual behavior and ownership. Use **how** for mechanism and **why** for rationale when history affects a decision. Observe empirical forks directly; reserve questions for facts or preferences only the user can supply.
2. Name the relevant data shape and the invariant. For a material interface or ownership decision, use **architect**. Compare structurally different candidates when that can falsify a bad design; do not run a mandatory bakeoff for a routine edit.
3. Reproduce a defect, form a bounded hypothesis, and implement at the first incorrect boundary. Use **tdd** when a meaningful local regression test can demonstrate the defect.
4. Use **interrogate** for requested adversarial review or a material contested decision. Judge every finding against code and intent. Use **no-comments** only for a requested comment cleanup or a relevant review concern.
5. Verify the real artifact with the repository's existing harness. If no usable harness exists and creation is in scope, use **create-verification-skill**. A mock or synthetic receipt does not prove a production path.
6. Report outcome, material changes, actual checks and limits. Read only principles whose judgments matter. Explain a principle through the decision it changed instead of listing doctrine.

Use **arena** for competing complete candidates; use **swarm** for separate coverage slices or an explicitly defined race. Apply the Codex runtime's model, concurrency, worktree, and authorization rules. A long task can use a small decision trail via **show-me-your-work**, but it does not acquire new execution rights.

## Playbook routing

Read a matching file under `playbooks/`, relative to this guide. The [index](../../index.md) lists direct actions.

| Request | Playbook |
| --- | --- |
| Read-only mechanism, rationale, or recommendation | [investigation](playbooks/investigation.md) |
| Reproduce and fix a defect | [bug-fix](playbooks/bug-fix.md) |
| Measured slowness | [perf-issue](playbooks/perf-issue.md) |
| Iterative metric improvement | [hillclimb](playbooks/hillclimb.md) |
| Live instrumentation diagnosis | [runtime-forensics](playbooks/runtime-forensics.md) |
| Captured trace diagnosis | [trace-forensics](playbooks/trace-forensics.md) |
| New behavior | [feature](playbooks/feature.md) |
| Preserve behavior while reshaping code | [refactoring](playbooks/refactoring.md) |
| Cheap empirical design sketch | [prototype](playbooks/prototype.md) |
| Match a UI reference | [visual-parity](playbooks/visual-parity.md) |
| Create or adapt a skill | [authoring-a-skill](playbooks/authoring-a-skill.md) |
| Evaluate agent behavior | [eval](playbooks/eval.md) |
| PR status or readiness | [babysit](playbooks/babysit.md) |
| Explicit merge/land/ship request | [shipping](playbooks/shipping.md) |
| One long task until its done predicate | [autonomous-run](playbooks/autonomous-run.md) |
| A standing multi-unit program | [orchestrate](playbooks/orchestrate.md) |
| Independent PR queue with merge authorization | [autopilot-full](playbooks/autopilot-full.md) |
| Build a linear stack for user review | [autopilot-stack](playbooks/autopilot-stack.md) |
| Resume earlier work | [session-pickup](playbooks/session-pickup.md) |
| Explicit pause or required recovery | [pause-safely](playbooks/pause-safely.md) |
| Material multi-phase work | [multi-phase-plan](playbooks/multi-phase-plan.md) |
| Requested disk/worktree cleanup | [worktree-cleanup](playbooks/worktree-cleanup.md) |
| Authorized PR preparation and publication | [opening-a-pr](playbooks/opening-a-pr.md) |

Use **figure-it-out** to design a task-specific plan when none fits. A read-only request remains read-only, even if another playbook could implement a promising idea. Plans support the user objective rather than replacing it.
