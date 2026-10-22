# pstack-codex-native — engineering workflows for Codex

**Investigate code, reproduce bugs, review changes and verify the result with one Codex skill.**

`pstack-codex-native` is a standalone, community adaptation of [Lauren Tan's pstack](https://github.com/cursor/plugins/tree/190d28736eff128ec94f502a22c7fe0c4b56cd37/pstack) for OpenAI Codex. One project-local skill provides **56 named actions and 23 engineering playbooks** for code investigation, architecture, bug fixing, refactoring, adversarial code review and verification.

[中文说明](README.zh-CN.md) · [Workflow examples](docs/workflows.md) · [FAQ](docs/faq.md) · [Action index](skills/pstack/references/index.md) · [Adaptation and limitations](skills/pstack/SOURCE.md)

This is a community adaptation, independent of the upstream project and OpenAI. It retains the upstream MIT notice. It is a collection of agent instructions and a small local logging helper, rather than a new agent runtime.

## When to use it

Use pstack when a coding task needs an explicit investigation, review or verification process. You choose the task and scope; the skill supplies a reusable workflow.

| Your task | Start with | What to ask for |
| --- | --- | --- |
| Understand an unfamiliar codebase | `$pstack how` | Trace ownership and data flow from actual source, without edits. |
| Fix a reproducible bug | `$pstack poteto-mode` | Reproduce the failure, fix its root cause and verify the original flow. |
| Review a diff before merging | `$pstack interrogate` | Challenge the change, substantiate findings and leave files unchanged. |
| Make an architecture decision | `$pstack architect` | Compare material alternatives and explain ownership trade-offs. |
| Find the right workflow | `$pstack poteto-help` | Choose an action for your task. |

For a small deterministic edit, ask Codex directly. pstack does not require a multi-agent process for every task. See [copyable workflow examples](docs/workflows.md) for prompts and evidence to check.

If these workflows are useful, star this repository to save it for your next project.

## Install into a project

Clone this repository and run its dependency-free installer with **Node.js 22 or newer**:

```sh
git clone https://github.com/Bicheng-G/pstack-codex-native.git
node pstack-codex-native/scripts/install.mjs --project /absolute/path/to/your-project
```

PowerShell example:

```powershell
git clone https://github.com/Bicheng-G/pstack-codex-native.git
node .\pstack-codex-native\scripts\install.mjs --project "C:\path\to\your-project"
```

The target project must already exist. The installer copies the complete skill to `<project>/.agents/skills/pstack`. It refuses to overwrite an existing installation and rejects linked skill files or linked installation directories. It changes no global configuration and needs no npm packages, API keys, login, or network calls after cloning.

Alternatively, ask Codex's skill installer:

> Install `skills/pstack` from `https://github.com/Bicheng-G/pstack-codex-native` into this project's `.agents/skills` directory.

Manual installation also works: copy the whole `skills/pstack` directory, including its references, scripts, license and source map, into the project's `.agents/skills` directory. Do not copy only `SKILL.md`.

Start a fresh turn or session so the host discovers the installed skill. On hosts with different discovery behavior, use their skill-loading instructions and the installed file path.

For a first task, try `$pstack how explain this project's entry point and state ownership; cite source files and do not edit anything`. See the [recorded installation check](docs/installation-check.md) for verified setup behavior and its limits.

## Use

Invoke the single skill as `$pstack <action> <task>`:

```text
$pstack how explain how this subsystem owns and updates its state
$pstack why investigate the documented reasons for this design; do not edit files
$pstack architect compare two possible ownership boundaries before implementation
$pstack interrogate review the current diff; do not apply changes
$pstack poteto-mode reproduce this bug, fix its root cause, and verify the original user flow
$pstack poteto-mode check the current status of PR 42
```

Use `poteto-mode` when you want it to select the smallest relevant playbook. Use `poteto-help` to find an action. The other action names are internal routes of `$pstack`; installing this package does not register 56 independent slash commands.

The [action index](skills/pstack/references/index.md) lists all actions. The [mode guide](skills/pstack/references/skills/poteto-mode/guide.md) links the 23 playbooks. Only the chosen guide and relevant references need to be loaded.

## Codex behavior

- **Models:** every role inherits the parent model and reasoning setting by default. No setup is required. `$pstack setup-pstack` can prepare explicitly requested role preferences after validating the live tool schema. There are no hardcoded provider models or automatic billing changes.
- **Delegation:** use the collaboration tools actually available and permitted in the session. Agents are ordinary task-scoped Codex agents. Writing agents need explicit isolation or disjoint ownership. Missing model diversity or independent verification must be disclosed.
- **Tools:** discover connected tools first and use real native file, shell, browser, chat and forge capabilities. A guide naming a tool does not install or authorize it.
- **Scope:** project instructions and the user's current request govern execution. A review remains read-only; a status check does not authorize merge; autonomy does not authorize unrelated external actions.
- **Evidence:** inspecting source, running tests, exercising a real user flow and user acceptance are separate facts. Report unavailable checks and incomplete results honestly.

See [Codex runtime](skills/pstack/references/codex-runtime.md) for the detailed mapping.

## What is included and what is not

Included: the 56 action guides, 23 rewritten playbooks, portable principles/rubrics/templates, ordinary agent-role briefs, optional Benny issue-workflow guidance and a Node TSV logger.

The original Cursor/Claude plugin manifests, cloud-agent assumptions, fixed model rules, Bun orchestration database/CLI, long-running PR watcher and rigid ten-lane plan checker are omitted. Native Codex workflows replace their roles where the host supports them. There is no bundled daemon, webhook receiver or persistent scheduler, and no claim of full behavioral parity with those omitted systems. Scheduling and live issue/PR operations require a suitable connected capability and the applicable user request.

Other UI, browser or product-verification skills are optional host capabilities. They are not bundled here. If a required capability is absent, that part of the task remains incomplete.

## Validate locally

```sh
npm run validate
npm test
```

No dependency installation is needed. Validation checks the package, action/playbook coverage and local documentation links. Tests exercise the installer and TSV helper. These checks do not establish live multi-agent quality, webhook delivery, scheduling, PR landing, or product acceptance.

For updates, pull the source and review the differences, preserving any local changes in the installed skill before replacing it. The installer deliberately refuses an existing destination.

## Frequently asked questions

**Is this the official pstack or an OpenAI plugin?** No. This repository is an independent MIT-licensed community adaptation of Lauren Tan's pstack. It installs one Codex skill, not the upstream Cursor/Claude plugin.

**Are there 56 separate skills?** No. There is one discoverable `$pstack` skill with 56 internal actions and 23 playbooks. Load the action you need through that entry point.

**Does installation require an API key?** The installer needs Git and Node.js 22+, with no npm dependencies or API keys. Running tasks still requires access to your Codex host and any external tools that the task needs.

**Does it run agents or watch pull requests in the background?** No background service is bundled. Delegation, browser access, GitHub operations and scheduling depend on the current host's available tools and the user's authorization.

Read the [full FAQ](docs/faq.md) for installation, updates, verification limits and the differences from upstream.

## Feedback and contributions

Trying it on a real task is the most useful contribution. [Open an issue](https://github.com/Bicheng-G/pstack-codex-native/issues) with the action, prompt, expected behavior, actual result and checks you ran. Remove secrets and private project data. Reports of installation failures, unclear workflow steps and unsupported host assumptions are welcome.

## Source and license

Adapted from `cursor/plugins`, commit `190d28736eff128ec94f502a22c7fe0c4b56cd37`, under MIT. The [source map](skills/pstack/upstream-map.json) records original file identities and rewrite classes; [SOURCE.md](skills/pstack/SOURCE.md) explains the adaptation boundary. Original copyright: Lauren Tan, 2026. See [LICENSE](LICENSE).
