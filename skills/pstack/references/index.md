# pstack actions

Invoke `$pstack <action> <task>`. Read only the selected guide and its relevant references. The [Codex runtime](codex-runtime.md) owns host mechanics. These references do not register separate slash commands.

| Action | Purpose |
| --- | --- |
| [architect](skills/architect/guide.md) | Design caller usage, types and ownership; compare material alternatives before authorized implementation. |
| [arena](skills/arena/guide.md) | Compare isolated complete candidates, judge evidence, and synthesize the strongest coherent artifact. |
| [automate-me](skills/automate-me/guide.md) | Capture demonstrated working preferences in a scoped Codex skill. |
| [benchmark-checklist](skills/benchmark-checklist/guide.md) | Vet a perf measurement (limiter, tuning, limits, errors, repeatability, relevance, and whether the work happened) before you report or act on it.  |
| [blast-radius](skills/blast-radius/guide.md) | Find what a change could break somewhere else before it ships, beyond the diff, and prove the one fact it's safe because of by running real code instead of writing it up.  |
| [bro](skills/bro/guide.md) | Restate the last message in plain human language, with no jargon. |
| [correct](skills/correct/guide.md) | Find the mistakes agents keep repeating in this repo and make each one impossible. Try architecture first, then types, then a lint whose error names the fix, then a test, and write docs last |
| [create-formal-verification-skill](skills/create-formal-verification-skill/guide.md) | Generate a project-local skill that formally verifies the code where a bug costs the most and tests reach the least, in any language, with whichever verification tool fits.  |
| [create-verification-skill](skills/create-verification-skill/guide.md) | Generate a project-local verification skill that drives your app the way a user does — any language, framework, or platform.  |
| [figure-it-out](skills/figure-it-out/guide.md) | Design an auditable playbook when no narrower one fits: a large migration, an ambitious multi-part change, or work a human reviews after stepping away. Scales rigor to the task, runs a hypot |
| [how](skills/how/guide.md) | Explain actual source ownership, data flow and runtime behavior without edits. |
| [in-your-own-words](skills/in-your-own-words/guide.md) | Restate in your own words what you think the user's goals are and what problem they're trying to solve.  |
| [interrogate](skills/interrogate/guide.md) | Adversarial read-only review with actual independence and model coverage disclosed. |
| [ketchup](skills/ketchup/guide.md) | Catch the user up on what changed in this chat since their last message, in plain words and small visuals. List every item waiting on them with what they need to decide it from the reply alo |
| [maintain-formal-verification-skill](skills/maintain-formal-verification-skill/guide.md) | Bring a project's formal verification back in line with the code after the code changes: find the commits that touched verified code, update the model, harness, or properties to describe the |
| [maintain-verification-skill](skills/maintain-verification-skill/guide.md) | Periodic pass that keeps a project's verification skill and feature map honest: parallel source readers per feature, one live session driving every feature, at most one PR of proven correcti |
| [make-bot-ui](skills/make-bot-ui/guide.md) | Build a local action UI only against an available authorized receiver. |
| [no-comments](skills/no-comments/guide.md) | Review comment value and constraint enforcement while preserving required contracts. |
| [poteto-help](skills/poteto-help/guide.md) | Choose the smallest pstack action and provide a concrete Codex invocation. |
| [poteto-mode](skills/poteto-mode/guide.md) | Route a requested engineering task to a proportionate, verifiable playbook. |
| [principle-attack-the-premise](skills/principle-attack-the-premise/guide.md) | Apply when two or more fixes that share one premise have failed the same gate. Write the premise down and test it directly before you write another fix that assumes it. |
| [principle-boundary-discipline](skills/principle-boundary-discipline/guide.md) | Apply when wiring validation, error handling, or framework adapters. Concentrate guards at system boundaries (CLI, config, network, external APIs); trust internal types and keep business log |
| [principle-build-the-lever](skills/principle-build-the-lever/guide.md) | Apply to any non-trivial work, not just bulk work: edits, migrations, analyses, checks. Build the tool that does it or proves it (codemod, script, generator, or a skill your subagents follow |
| [principle-encode-lessons-in-structure](skills/principle-encode-lessons-in-structure/guide.md) | Apply when you catch yourself writing the same instruction a second time, or notice a recurring correction. Encode the rule as a lint, metadata flag, runtime check, or script instead of more |
| [principle-exhaust-the-design-space](skills/principle-exhaust-the-design-space/guide.md) | Apply when facing a novel UI interaction or architectural decision with no precedent in the codebase. Build 2-3 competing prototypes and compare side by side before committing. |
| [principle-experience-first](skills/principle-experience-first/guide.md) | Apply when product, UX, or feature-scope tradeoffs come up. Choose user delight over implementation convenience; ship fewer polished features over more rough ones. |
| [principle-explain-the-number](skills/principle-explain-the-number/guide.md) | Apply before you trust, report, or act on a number you measured: a speedup, a regression, a throughput, a latency, or an eval result. Find what limits it, and rule out that it measured somet |
| [principle-fix-root-causes](skills/principle-fix-root-causes/guide.md) | Apply when debugging. Trace each symptom back to the first place the system went wrong and fix it there. A guard is a fix only when the state it handles is legitimate. |
| [principle-foundational-thinking](skills/principle-foundational-thinking/guide.md) | Apply before writing logic: choosing core types and data structures, sequencing scaffold-vs-feature work, asking what concurrent actors share. Get the data structures right so downstream cod |
| [principle-guard-the-context-window](skills/principle-guard-the-context-window/guide.md) | Apply when context is filling up: large outputs, long files, repeated reads, fan-out planning. Route bulk to subagents; keep summaries in the main thread, not raw payloads. |
| [principle-laziness-protocol](skills/principle-laziness-protocol/guide.md) | Apply when refactoring, evaluating diff size, or tempted to add abstractions, layers, or signal threading. Bias toward deletion and the smallest change that solves the problem. |
| [principle-make-operations-idempotent](skills/principle-make-operations-idempotent/guide.md) | Apply when designing commands, lifecycle steps, or processing loops that run amid crashes, restarts, and retries. Converge to the same end state regardless of partial prior runs. |
| [principle-migrate-callers-then-delete-legacy-apis](skills/principle-migrate-callers-then-delete-legacy-apis/guide.md) | Apply when introducing a new internal API while old callers still exist. Migrate callers and delete the old API in the same wave instead of preserving compatibility layers. |
| [principle-minimize-reader-load](skills/principle-minimize-reader-load/guide.md) | Apply when reviewing or shaping code that's hard to trace. Count layers between question and answer, and hidden state in the reader's head; collapse one-caller wrappers and shrink mutable sc |
| [principle-model-the-domain](skills/principle-model-the-domain/guide.md) | Apply when writing stateful logic, or when code branches a lot or repeats a shape assumption across files. |
| [principle-never-block-on-the-human](skills/principle-never-block-on-the-human/guide.md) | Apply when tempted to ask 'should I do X?' on reversible work. |
| [principle-outcome-oriented-execution](skills/principle-outcome-oriented-execution/guide.md) | Apply during planned rewrites and migrations with explicit phase boundaries. Converge on the target architecture; don't preserve smooth intermediate states with throwaway compatibility code. |
| [principle-prove-it-works](skills/principle-prove-it-works/guide.md) | Apply after completing a task, before declaring done. Verify against the real artifact (run the feature, read the actual value, inspect the diff), not a proxy, self-report, or 'it compiles.' |
| [principle-redesign-from-first-principles](skills/principle-redesign-from-first-principles/guide.md) | Apply when integrating a new requirement into an existing design. |
| [principle-separate-before-serializing-shared-state](skills/principle-separate-before-serializing-shared-state/guide.md) | Apply when concurrent actors might write to the same file, branch, key, or state object. Eliminate the sharing first; serialize structurally only when one shared writer is a real invariant. |
| [principle-sequence-verifiable-units](skills/principle-sequence-verifiable-units/guide.md) | Apply to multi-step work (sweeps, migrations, runs of similar edits) and to how you stack commits and PRs. Break work into small units that each end in a verifiable state, check each before  |
| [principle-subtract-before-you-add](skills/principle-subtract-before-you-add/guide.md) | Apply when sequencing an addition, refactor, or rewrite. Remove dead code, redundant validators, and stub references first, then build on the simpler base. |
| [principle-test-behavior-not-implementation](skills/principle-test-behavior-not-implementation/guide.md) | Apply when you write, change, or keep a test. Assert what the code's users can observe, so that the test fails when that behavior breaks and keeps passing when only the internals change. |
| [principle-type-system-discipline](skills/principle-type-system-discipline/guide.md) | Apply when designing types, reviewing a function signature, or writing code in any statically-typed language. Make illegal states unrepresentable, brand semantic primitives, parse external d |
| [recall](skills/recall/guide.md) | Rebuild project-scoped recent context and verify drift-prone facts. |
| [reflect](skills/reflect/guide.md) | Propose durable skill improvements from demonstrated work and evidence. |
| [setup-pstack](skills/setup-pstack/guide.md) | Inspect or explicitly configure supported Codex role choices; inheritance is the default. |
| [sharpen](skills/sharpen/guide.md) | Make a task deeper, not bigger, then rewrite the prompt.  |
| [show-me-your-work](skills/show-me-your-work/guide.md) | Keep a reviewable decision trail for long-running or unattended work: a TSV log with one row per decision (what, why, evidence, result). Local by default; commit it when a reviewer needs the |
| [swarm](skills/swarm/guide.md) | Bounded parallel coverage or a declared race, with explicit slices, evidence and gaps. |
| [tdd](skills/tdd/guide.md) | Use only when the user explicitly asks for TDD, a failing test, or a regression test, OR when the bug has an obvious cheap local test target. Skip when the test path is unclear, expensive, i |
| [teach](skills/teach/guide.md) | Explain a body of work plainly so a person actually understands it. Runs the `how` and `why` skills and weaves what they find into one clear explanation.  |
| [technical-writing](skills/technical-writing/guide.md) | Layered technical-writing standard: Diátaxis structure, Google developer style sentences, STE instruction rules, Global English syntax.  |
| [typescript-best-practices](skills/typescript-best-practices/guide.md) | TypeScript best practices.  |
| [unslop](skills/unslop/guide.md) | Cut AI tells from any writing. |
| [why](skills/why/guide.md) | Investigate rationale through available source, decisions, history and observability. |

The [mode](skills/poteto-mode/guide.md) selects among 23 playbooks. [Benny](benny.md) describes optional setup-benny, triage-issue-reports, and reproduce-and-fix-issues actions.
