# Show me your work

Use one small append-only TSV decision trail for work that actually needs later audit or recovery. Do not create one for routine edits. Columns are `ts, phase, decision, why, evidence, result`, tab-separated, one physical line per row. Evidence is a real path, line, SHA, receipt or URL.

Use `node <pstack-root>/scripts/log.mjs <logfile> <phase> <decision> <why> <evidence> <result>`. The helper creates a missing parent and header, sanitizes tabs/newlines, and neutralizes spreadsheet-formula prefixes. Use one writer per file. It is not a concurrent logging service.

Log consequential choices, outcomes, pivots, gates and failed experiments, with actual receipts. A wrong row gets a later correction rather than historical deletion. Use a start row with run identity when more than one run contributes.

Keep the log in the authorized ignored work area or requested artifact location; commit only when authorized and useful to a reviewer. Exclude secrets, raw transcripts and personal data.

Before handback, check each row against this conversation, scoped Codex chat evidence, and the named artifacts. Supersede unsupported claims. If an independent audit is required, use permitted agents with actual coverage; if unavailable, state that it remains incomplete. Self-review is not a cross-model audit.

Report the log path, material attention items, and the actual audit scope and independence.
