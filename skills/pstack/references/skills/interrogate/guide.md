# Interrogate

Read-only adversarial review by default. Do not auto-apply findings.

1. Pin the intended behavior, actual diff/base, HEAD, and relevant working-tree changes. Use the supplied scope; discover the correct base rather than assuming one.
2. State intent from the user, contract, PR, and code. Resolve empirically answerable questions from source. Ask only for consequential intent that cannot be inferred.
3. Prepare the same evidence package for reviewers. Use [reviewer prompt](references/reviewer-prompt.md), [rubric](references/rubric.md), and [code-quality lens](references/code-quality-review.md). Keep reviewers independent until their reports return.
4. If permitted, run independent read-only Codex agents with inherited models or explicitly configured supported models. Tool descriptions do not guarantee isolation: brief reviewers not to edit and verify the tree afterward. If no delegation is available, use sequential self-review lenses and disclose the reduced independence.
5. Reproduce or trace every substantive finding. Merge duplicates, record disagreements, and apply [lead judgment](references/lead-judgment.md). Agreement increases attention; it does not replace validation.
6. Classify findings as Act on, Consider, Noted, or Dismissed with evidence and rationale.

Report material findings with file/line and trigger, intended behavior, actual reviewer/model coverage, and meaningful disagreement. Findings are proposed work. Fix only when the user authorized fixes.
