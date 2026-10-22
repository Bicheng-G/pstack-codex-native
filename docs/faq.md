# pstack-codex-native FAQ

[pstack-codex-native](../README.md) is an independent, MIT-licensed community adaptation of Lauren Tan's pstack for OpenAI Codex. It packages engineering workflows as one project-local skill, invoked with `$pstack <action> <task>`.

## What does pstack-codex-native do?

It provides reusable agent instructions for code investigation, architecture, bug fixing, refactoring, adversarial review and verification. One skill routes to 56 named actions and 23 engineering playbooks. It also includes a dependency-free Node TSV logging helper. See the [action index](../skills/pstack/references/index.md) and [workflow examples](workflows.md).

## How does it differ from the original pstack?

It adapts the upstream workflows to the Codex host's real tools and permissions. It preserves source attribution and a file-level source map while rewriting host-specific instructions.

| Aspect | This adaptation |
| --- | --- |
| Skill entry point | One `$pstack` skill with internal actions and references. |
| Model selection | Inherit the parent session's model and reasoning setting by default. |
| Agent collaboration | Use actual available, permitted Codex tools; disclose missing independence. |
| Installation | Copy the complete skill into the target project's `.agents/skills/pstack`. |
| Upstream infrastructure | Cursor/Claude plugin manifests, Bun orchestration database/CLI, persistent PR watcher and rigid ten-lane plan checker are omitted. |
| Background operation | No bundled daemon, webhook receiver or scheduler. |

The upstream source is `cursor/plugins`, commit `190d28736eff128ec94f502a22c7fe0c4b56cd37`. Read [SOURCE.md](../skills/pstack/SOURCE.md) for the precise adaptation boundary. This is not an official OpenAI release or a claim of full upstream feature parity.

## How do I install pstack for Codex?

With Git and Node.js 22 or newer:

```sh
git clone https://github.com/Bicheng-G/pstack-codex-native.git
node pstack-codex-native/scripts/install.mjs --project /absolute/path/to/your-project
```

The target project must already exist. The installer refuses to overwrite an existing installation and rejects linked skill files or linked installation directories. See the [installation guide](../README.md#install-into-a-project) for PowerShell and manual installation.

## Is this an npm package or 56 separate skills?

Neither. The repository is marked private in `package.json` to prevent npm publication; the GitHub repository itself is public. Clone it and run the supplied installer. There is one discoverable skill, with 56 internal action guides rather than 56 separately registered commands. Do not use an assumed `npx pstack-codex-native` command.

## Does it require a paid service, API key or extra dependencies?

The installer has no npm dependencies, API keys or login requirement, and makes no network calls after cloning. Execution still requires access to your Codex host. External integrations, model access and any resulting charges depend on that host and the tools you choose; the repository does not supply those services.

## Does it work without multi-agent tools?

Some workflows have reduced-coverage fallbacks. For example, `interrogate` can use sequential self-review when delegation is unavailable and must disclose the reduced independence. Missing required capabilities leave the affected operation incomplete. Installation does not add agent, browser, GitHub or scheduling capabilities to a host.

## Can it automatically monitor, merge or ship pull requests?

It includes PR-related workflow guidance, but no persistent watcher. Live status reads, merges, publishing and scheduled tasks require suitable connected tools and the applicable user request. Installing or selecting a playbook does not itself authorize an external operation.

## How do I update an installed copy?

Pull the source repository, review the changes and preserve any local edits in your installed skill before replacing it. The installer deliberately refuses to overwrite `.agents/skills/pstack`. There is no bundled automatic updater.

## What has been tested?

Run `npm run validate` and `npm test` from the source checkout. The validator checks package integrity, 56-action and 23-playbook coverage, source mappings and local Markdown links. Tests exercise the installer and logging helper. These checks do not establish better model output, live multi-agent quality, product acceptance, scheduling or successful PR landing. No comparative performance benchmark is claimed.

## Where should I report a problem?

[Open an issue](https://github.com/Bicheng-G/pstack-codex-native/issues) with your host, Node.js version, action, prompt, expected behavior, actual result and checks performed. Include a minimal reproduction when possible, and remove credentials and private project data.
