# Codex workflow examples: investigate, fix and review code

[pstack-codex-native](../README.md) is one project-local Codex skill with 56 internal actions and 23 engineering playbooks. [Install it](../README.md#install-into-a-project), then use `$pstack <action> <task>` in your target project.

These are example prompts and acceptance criteria, not recorded demonstrations or benchmark results. Replace the described feature or failure with a real task in your repository. Available tools and project instructions govern what can run.

## Understand an unfamiliar codebase without editing it

```text
$pstack how trace how a search query travels from the input field to the backend and back to the results list. Identify state ownership and cite the source files. Do not edit files.
```

Check that the answer names actual entry points, explains who owns the state, and distinguishes inspected source from runtime observations. For historical rationale, use `why` and ask it to separate documented decisions from inference.

Source: [how action](../skills/pstack/references/skills/how/guide.md).

## Reproduce and fix a bug with a verification step

```text
$pstack poteto-mode investigate why clearing the search field leaves stale results. First reproduce it, then fix the root cause. Run the relevant existing checks and verify the original user flow if the environment supports it. Report anything you could not verify.
```

Check for an observed failure before the fix, a reason the change addresses that failure, and evidence after the fix. A passing unit test alone does not establish that a browser flow passed. If browser access or a test account is missing, the report should say so.

Source: [bug-fix playbook](../skills/pstack/references/skills/poteto-mode/playbooks/bug-fix.md).

## Review the current diff without applying changes

```text
$pstack interrogate review the current diff against its intended behavior. Prioritize correctness and regressions, substantiate findings with file locations and failure conditions, and disclose actual reviewer coverage. Do not edit files or merge anything.
```

Check that findings are traceable to the diff and describe a concrete trigger. Independent reviewers require available, permitted collaboration tools. Sequential self-review must not be presented as independent multi-agent review. Findings remain proposed work until fixes are authorized.

Source: [interrogate action](../skills/pstack/references/skills/interrogate/guide.md).

## Compare architecture options before implementation

```text
$pstack architect compare keeping search state in the page component versus moving it into a shared feature module. Inspect the existing callers, explain ownership and migration costs, and recommend the smallest justified change. Do not implement yet.
```

Check that the comparison uses actual callers and constraints. An architecture recommendation should explain the trade-off and what evidence would change it.

Source: [architect action](../skills/pstack/references/skills/architect/guide.md).

## Choose a workflow when you do not know the action names

```text
$pstack poteto-help I need to understand a slow endpoint before deciding whether to optimize it. Which action should I start with, and what evidence should I collect?
```

Use `poteto-help` to choose an action, or `poteto-mode` to route an authorized engineering task to a suitable playbook. Small deterministic edits can go directly to Codex.

Browse the [complete action index](../skills/pstack/references/index.md), [playbook routing table](../skills/pstack/references/skills/poteto-mode/guide.md#playbook-routing) and [FAQ](faq.md).
