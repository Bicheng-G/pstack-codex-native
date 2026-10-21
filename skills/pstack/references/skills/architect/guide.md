# Architect

Ground the problem before choosing interfaces. Use **how** for current ownership and **why** when rationale constrains a proposed ownership change.

Write the caller's usage first, then derive types, signatures, data ownership, module boundaries, and pseudocode. For a meaningful architectural fork, use **arena** to compare at least two structurally distinct candidates. Sequential sketches suffice when no independent runners are available; disclose that limit.

Use [runner prompt](references/runner-prompt.md), [red flags](references/design-red-flags.md), and [rationale template](references/rationale-template.md) as relevant. Prefer the design hiding substantial complexity behind the smallest understandable surface.

Default to implementing a chosen design only when implementation is within the user's request. A design-only or checkpoint request stops at the sketch. Show material tradeoffs and preserve required human decisions.

While implementing, treat repeated workarounds, casts, hidden shared state, or callers learning internal rules as evidence the sketch may be wrong. Re-ground and compare a revised shape rather than layering exceptions. A single legitimate edge case is not enough to condemn a design.

Return the usage sketch, chosen model, rejected alternatives and rationale, and implementation/verification status. Do not ship unimplemented stubs as a completed change.
