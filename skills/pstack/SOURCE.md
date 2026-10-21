# Source and adaptation

- Upstream: [cursor/plugins pstack](https://github.com/cursor/plugins/tree/190d28736eff128ec94f502a22c7fe0c4b56cd37/pstack).
- Repository commit: `190d28736eff128ec94f502a22c7fe0c4b56cd37`.
- pstack tree: `34a0b817e5ea92375bb10f20b15cf750d4e8095a`.
- Adapted and packaged: 2026-10-21 (Asia/Singapore), as a self-contained skill under `skills/pstack`.
- Original copyright and MIT terms retained in [LICENSE](LICENSE).
- Packaging reference checked on that date: [official OpenAI skill documentation](https://developers.openai.com/codex/skills/). Live Codex tool schemas govern host capabilities.

## What changed

One Codex skill exposes all 56 upstream skill names as actions through `$pstack <action>`. It retains portable principles, rubrics, source playbooks and templates, while rewriting host-bound workflow guides and all 23 engineering playbooks. Only the pstack root is a discoverable `SKILL.md`; internal guides are ordinary references.

The [source map](upstream-map.json) records each upstream file's Git blob identity, installed path and rewrite class. Portable-edited means the source body was retained with manifest removal, native paths/invocations, and scoped semantic corrections. Native-rewrite means the workflow was rewritten, not that it is byte-identical or feature-equivalent.

Host changes include native Codex collaboration and waits, parent-model inheritance with optional validated per-role data, scoped chat tools instead of guessed transcript paths, project-local skill authoring, native scheduling on request, connected-forge/CLI PR handling, and explicit independence/permission limits. The Bash TSV logger was replaced with a dependency-free Node helper.

Benny's optional workflows are summarized separately with Codex scheduling and actual-receiver boundaries. No issue service, webhook, automation, external connector, model account, or always-on rule is activated by installation.

## Intentionally omitted infrastructure

The Cursor/Claude plugin manifests and harness adapter, fixed provider model rules, special custom-agent registrations, UI instructions, platform images and promotional guide are not installed. Roles are ordinary Codex briefs.

Bun bootstrap/dependencies, orchestration storage CLI and database locking, platform-specific worktree audit script, long-running GitHub watcher, and fixed ten-lane plan checker were not ported. Native agent tools and explicit forge reads replace their workflow roles, without claiming those scripts' machine-level behavioral parity. No watcher CLI or persistent scheduler exists in this package.

Examples in retained reference material illustrate shapes and evidence standards. They are not real project commands, credentials, screenshots or test results. Real project fixtures, paths, ownership and contracts must be inspected before use.

## Validation scope

Packaging/link/source coverage and helper tests can establish file integrity and helper behavior. They do not prove model routing, scheduling, multi-agent quality, external issue operations, real PR landing or product acceptance. Those require a separately authorized live workflow. No such external operation is performed as part of installation.

## Standalone packaging, 2026-10-21

The development-project routing pointer was removed from the entrypoint so installing this skill does not require a sibling routing file or another skill collection. The optional-delegation clarification in the why source-playbook is retained. All task scope, model inheritance, evidence and authorization boundaries continue to apply.
