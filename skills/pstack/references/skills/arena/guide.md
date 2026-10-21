# Arena

Compare alternative complete artifacts, then synthesize one coherent result.

1. Frame the same task and output contract for each candidate. Define 3-6 gradeable criteria before seeing outputs. Keep the rubric with the judge unless the task calls for sharing it.
2. Choose a bounded number of runners. Use parent-model inheritance unless the user configured supported alternatives. Honor the active concurrency cap. Give each candidate separate task-owned output or an explicitly verified worktree; never assume delegation isolates files.
3. Launch permitted candidates with identical requirements and source pointers. Ask for an artifact, considered alternatives, and reasons for rejecting them. Record a dropout rather than counting it as coverage.
4. Once candidates stop writing, have an independent read-only judge score them if delegation is available and authorized. Use a different requested model only when actually supported. Otherwise state that judgment is by the parent.
5. Read every candidate. Compare criterion-by-criterion with the judge. Resolve disagreements from evidence. Prefer a smaller coherent boundary when outcomes tie.
6. Pick a base, then port only the strongest relevant parts of losing candidates. Convergence may need no graft; wide divergence may expose an underspecified brief.
7. Verify the synthesized artifact, including interactions introduced by grafts. Report the chosen base, rejected approaches, graft provenance, dropouts, actual independence, and checks.

If delegation is unavailable, sequential candidate sketches can still inform design, but label the comparison accurately. Do not claim independent or cross-model corroboration.
