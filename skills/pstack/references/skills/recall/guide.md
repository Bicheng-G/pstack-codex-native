# Recall

Reconstruct working context on the named topic without changing anything. Prefer an already supplied handoff over mining history.

Pin project, topic, and a real time window (recent means the last seven days unless context indicates otherwise). Use the current conversation first, then relevant Codex chats through app `list_threads` / `read_thread` with scoped pagination. Do not derive transcript paths from workspace names or search unrelated projects. Summaries are summaries; read exact output only if a conclusion depends on actual actions.

For a named subsystem or bug, consult the relevant shared record using **why**. Check surfaced PRs, branches, and issues against current state. Distinguish remembered state from live verification and disclose stale facts. Existing memory access and citation rules still apply.

Return a tight capsule, one status per relevant work thread, recurring problems, and the next concrete action. Use tags such as merged, open PR, in flight, verified-uncommitted, reverted, planned, or unknown as justified by evidence. Do not silently truncate an explicitly requested complete range.

Resume one specific task via the session-pickup playbook. Capturing preferences into a new skill is **automate-me**. Recall does not itself authorize implementation, cross-chat messaging, or memory writes.
