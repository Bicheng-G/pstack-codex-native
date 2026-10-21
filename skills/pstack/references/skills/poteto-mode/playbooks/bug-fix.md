# bug-fix

Reproduce the reported defect on the same user surface with a safe input. Record expected/actual behavior, environment, and baseline. If access or a prerequisite is missing, report the exact gap; a synthetic substitute is not the reproduction.

Trace the first incorrect state or boundary. Use **tdd** for a cheap meaningful regression target, **architect** for a material structural change, and make the smallest root-cause fix. Verify the original reproduction now succeeds and relevant behavior remains correct. Review task-owned diffs and report actual proof, limits, and remaining issues. PR publication is a separate authorized delivery step.
