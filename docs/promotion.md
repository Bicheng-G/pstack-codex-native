# Discoverability and launch kit

Maintainer working notes, prepared on 2026-10-22 (Asia/Singapore). Social posts and directory entries below are drafts, not published announcements or accepted listings.

## Positioning

**English:** pstack-codex-native brings Lauren Tan's pstack engineering workflows to Codex as one project-local skill: investigate code, reproduce bugs, review changes and verify results.

**中文：** 把 Lauren Tan 的 pstack 适配为一个按项目安装的 Codex Skill，用明确的流程调查代码、复现 bug、审查改动和验证结果。

Lead with the engineering task. The 56 internal actions and 23 playbooks support that proposition; they are not 56 independently installed skills. Keep upstream attribution, community status and capability limits visible wherever the project is listed.

## Baseline and changes

At inspection, the public repository was created on 2026-10-21, had 0 stars, 0 forks, an empty topics list and no homepage. Two exact-name/URL web searches on 2026-10-22 returned no results for this repository. This is a limited search observation, not proof of absence from every search index. Similarly named community ports do exist, so always use the full repository name and owner link.

This change improves both README introductions, adds task-to-action tables, links five copyable workflow examples to source guides, and adds a factual FAQ. The installed skill and runtime behavior are unchanged. The examples are illustrative; no live user-task benchmark or improvement in output quality has been demonstrated by this documentation work.

## GitHub About settings

Applied through the repository's About editor on 2026-10-22. The public page showed the description and all 12 topics after saving. Editing this document alone does not change GitHub settings.

**Description:**

```text
Community adaptation of Lauren Tan's pstack for OpenAI Codex: one project-local skill for code investigation, bug fixing, code review and verification.
```

**Topics:**

```text
pstack, codex, codex-cli, codex-skills, openai-codex, agent-skills, ai-coding, developer-tools, code-review, software-engineering, debugging, engineering-workflows
```

Open the repository's About gear, paste the description, add the topics individually, and save. [GitHub's topic instructions](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) explain how topic discovery works. Leave the homepage empty until a real documentation site exists. Do not point it at a nonexistent GitHub Pages URL.

## Search intent and content coverage

| Reader question | Content that answers it |
| --- | --- |
| Is there pstack for Codex? | README opening, source attribution and adaptation FAQ. |
| How do I install pstack-codex-native? | README installation steps and FAQ, including project-local path and Node prerequisite. |
| How do I review a diff with a Codex skill? | Read-only `interrogate` example and evidence criteria. |
| How do I reproduce and verify a bug fix with Codex? | `poteto-mode` example linked to the bug-fix playbook. |
| How is this different from upstream pstack? | FAQ comparison and SOURCE.md. |
| Codex 工程工作流、pstack 安装、代码评审 Skill | Chinese README with task examples and links. |

These are intended audiences and queries, not measured search-volume estimates. Avoid claims such as “best Codex skill,” fabricated testimonials, benchmark gains or automatic background-agent support.

## SEO and AI-search approach

The practical goal is accurate discovery and citation: consistent project identity, readable public documentation, explicit installation steps, source-linked claims and useful real-world examples. A linkable bug-fix or review case study with actual evidence is the next content asset to create.

[Google's current generative-AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) emphasizes useful first-hand content and standard SEO, and cautions against unnecessary AI text files and inauthentic mentions. That guidance is specific to Google's search features and does not establish how every model or provider discovers projects. No inclusion, citation, ranking or model-training outcome is guaranteed here.

GitHub controls the repository page's HTTP headers, HTML head and host robots policy. A root `robots.txt`, sitemap or schema block committed here would not configure github.com. This change therefore does not add those files or present `llms.txt` as a ranking mechanism. A separate documentation site could later provide control over its own metadata, canonical URLs, crawling and Search Console verification; it is not required for this first release.

## Launch sequence

For the first real stars, prioritize relevant distribution and a clear reason to try the project. This is a working strategy, not a growth forecast. Similar pstack ports already exist; use the full repository identity and lead with the concrete choices here: one project-local entry point, a dependency-free Node installer and explicit host capability limits. Do not claim to be the first or best port.

| Timing | Action | Evidence to capture |
| --- | --- | --- |
| Launch day | Invite 5–10 developers who already use Codex to try one real task; send individual messages only with maintainer authorization. | Successful installs, task feedback, stars before/after. The number is a work target, not a predicted result. |
| Launch day | Share one real task recording on the maintainer's chosen X or LinkedIn account. End with “If useful, star the repo.” | Post URL, publication time, replies and available link clicks. |
| Days 2–3 | Address actual onboarding friction and propose one relevant directory entry after a workflow trial. | Fix or contribution URL; submission and acceptance are separate outcomes. |
| Days 7 and 14 | Recheck GitHub traffic, stars, clones and cited URLs. | Dated observations; do not attribute every new star to one post. |

The [installation check](installation-check.md) is available now. It is not a substitute for a real coding-task recording. Do not buy stars, trade stars, automate fake accounts or ask for HN votes. No social post, direct message or third-party submission has been sent by this documentation change.

1. Merge the documentation change and apply the About description/topics. Verify installation in a disposable project.
2. Record one real task: show the input, selected action, observed result and verification. A 45–90 second screen recording is a suggested format, not an existing artifact. Use a public or sanitized repository. Show a limitation when one occurs.
3. Publish one demonstration-led post on X or LinkedIn, using the drafts below after review. Ask for one concrete trial and a report of what failed or helped.
4. Consider a targeted directory contribution after checking its current rules. Start with the Codex-specific candidate below. Keep author attribution and the fact that this is a derivative visible. Do not bulk-submit to unrelated lists.
5. Turn actual tester feedback into the next improvement and a short follow-up. Treat stars as a secondary signal; completed installations and useful task reports matter more.

### Directory candidates checked

| Candidate | Fit and next step |
| --- | --- |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills#contributing) | Its README welcomes reusable-skill PRs and contains external Development & Code Tools entries. Recheck the contribution rules and propose the entry below after a real trial. No submission or acceptance is claimed. |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills#-contributing) | Its README emphasizes community-adopted skills proven in use. Defer until there is real usage evidence; being newly packaged with many actions is insufficient. |
| [Show HN](https://news.ycombinator.com/showhn.html) | Consider after demonstrating a substantive, personally worked-on adaptation that users can try. Explain what changed from upstream. Follow the requirement for a runnable project, be available to discuss it, and do not solicit votes. |

**Proposed directory entry:**

```markdown
- [pstack-codex-native](https://github.com/Bicheng-G/pstack-codex-native) - Community adaptation of Lauren Tan's pstack for Codex: one project-local skill with 56 internal actions and 23 engineering playbooks for investigation, bug fixing, review and verification.
```

## 中文发布稿

我把 Lauren Tan 的 pstack 适配成了一个可以按项目安装的 Codex Skill：pstack-codex-native。

它提供一套可重复使用的工程流程：理解陌生代码、先复现再修 bug、只读审查 diff，以及检查改动是否真的解决了问题。

例如：

```text
$pstack interrogate 只审查当前 diff，核实问题并给出证据，不修改文件
$pstack poteto-mode 先复现这个 bug，再修根因并验证原来的用户路径
```

一个入口，56 个内部动作、23 个 playbook。支持按项目安装；模型默认沿用当前会话的设置。子代理、浏览器和 GitHub 能力取决于你使用的宿主，仓库本身不附带后台服务。

这是独立社区适配版，保留了上游来源和 MIT 许可证。README 里有中英文安装说明、使用示例和适配范围。

如果你正在用 Codex，欢迎拿一个真实的 bug 或待审查的 diff 试一下。我更想知道：哪一步有帮助，哪一步反而增加了负担？

如果对你有用，欢迎 Star，方便下次找到。

https://github.com/Bicheng-G/pstack-codex-native

## English launch draft

I adapted Lauren Tan's pstack into a project-local Codex skill: pstack-codex-native.

It gives Codex reusable workflows for investigating code, reproducing bugs, reviewing diffs and verifying changes. For example:

```text
$pstack interrogate review the current diff; substantiate findings and do not edit files
$pstack poteto-mode reproduce this bug, fix its root cause and verify the original flow
```

One entry point, 56 internal actions and 23 playbooks. Models inherit the current session's settings by default. Agent collaboration and external tools depend on your host; there is no bundled background service.

This is an independent community adaptation, with upstream attribution and the MIT license retained. Installation instructions, examples and adaptation limits are in the README.

If you use Codex, try it on one real bug or diff. I'd like to know where the process helps and where it gets in the way.

If useful, star the repo to find it again.

https://github.com/Bicheng-G/pstack-codex-native

## Short X draft

Lauren Tan's pstack, adapted for Codex. One project-local skill for investigating code, fixing bugs and reviewing diffs. MIT; community project.

Try it on a real task. If useful, star the repo.

https://github.com/Bicheng-G/pstack-codex-native

## Measure after publishing

The following is a manual measurement plan, not a scheduled automation or recorded result. Capture a baseline at publication, then repeat around days 14 and 30.

| Signal | Record |
| --- | --- |
| GitHub discovery | Traffic views, unique visitors, clones and referring sites where available to the maintainer. |
| Adoption | Voluntarily reported successful installs, completed real tasks and actionable issues. Clone counts alone do not establish use. |
| Search | Whether exact project-name and task-oriented queries return this repository; save date, query and URL. |
| AI search | Prompt, provider, model, date, search-enabled status, cited URL and whether its description/install steps are accurate. |

Use fresh conversations for these example AI-search queries, without first supplying the repository URL:

- Is there a community adaptation of pstack for Codex?
- What Codex skills support read-only code review?
- What reusable Codex workflows help reproduce and verify bug fixes?
- Codex 有哪些用于代码调查和代码评审的开源 Skill？

Record mentions, correct citations and factual errors separately. Responses vary; a small manual sample is directional feedback, not a stable visibility score or evidence of causation. Fix misleading documentation when the answers expose ambiguity.
