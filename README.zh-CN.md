# pstack-codex-native：Codex 工程工作流 Skill

**用一个 Codex Skill，调查代码、复现 bug、审查改动并验证结果。**

`pstack-codex-native` 将 [Lauren Tan 的 pstack](https://github.com/cursor/plugins/tree/190d28736eff128ec94f502a22c7fe0c4b56cd37/pstack) 适配为一个可独立安装、按项目使用的 OpenAI Codex Skill，提供 **56 个子动作和 23 个工程 playbook**，覆盖代码调查、架构设计、bug 修复、重构、对抗性代码评审和结果验证。

[English guide](README.md) · [工作流示例](docs/workflows.md) · [FAQ](docs/faq.md) · [动作索引](skills/pstack/references/index.md) · [适配范围与限制](skills/pstack/SOURCE.md)

这是独立的 MIT 开源社区适配版，与 OpenAI 及上游项目无隶属关系。安装的是工程指令和少量本地辅助代码。

## 适合什么任务

| 你要做的事 | 入口 | 希望拿到的结果 |
| --- | --- | --- |
| 理解陌生代码 | `$pstack how` | 根据源码解释数据流和状态归属，不改文件。 |
| 修复可复现的 bug | `$pstack poteto-mode` | 先复现，再修根因，最后验证原来的用户路径。 |
| 合并前审查 diff | `$pstack interrogate` | 核实问题并提供证据，保持只读。 |
| 做架构取舍 | `$pstack architect` | 比较实际可行的方案，说明数据和职责归属。 |
| 不知道该选哪个动作 | `$pstack poteto-help` | 根据任务选择合适的入口。 |

简单、确定的小改动可以直接交给 Codex，无需套完整流程。[工作流示例](docs/workflows.md)提供可复制的 prompt，以及验收时应检查的证据。

如果这些工作流对你有用，欢迎 Star，方便下次做项目时找到它。

## 安装

需要 Git 和 Node.js 22 或以上版本，无需安装 npm 依赖。

```powershell
git clone https://github.com/Bicheng-G/pstack-codex-native.git
node .\pstack-codex-native\scripts\install.mjs --project "C:\path\to\your-project"
```

macOS / Linux:

```sh
git clone https://github.com/Bicheng-G/pstack-codex-native.git
node pstack-codex-native/scripts/install.mjs --project /absolute/path/to/your-project
```

目标项目必须已存在。安装器把完整技能复制到 `<项目>/.agents/skills/pstack`，拒绝覆盖已有目录，不修改全局配置。也可以手动复制整个 `skills/pstack` 文件夹；只复制 `SKILL.md` 会缺少引用和辅助文件。

也可以直接告诉 Codex：

> 从 https://github.com/Bicheng-G/pstack-codex-native 安装 skills/pstack 到当前项目的 .agents/skills。

安装后开启下一轮对话或新会话，让宿主发现技能。不同宿主的刷新方式以其实际说明为准。

## 使用

统一入口为 `$pstack <动作> <任务>`：

```text
$pstack how 解释这个子系统的状态由谁维护
$pstack why 查证这个设计的历史原因，不修改文件
$pstack architect 比较两种数据所有权方案
$pstack interrogate 只审查当前 diff，不直接改代码
$pstack poteto-mode 先复现这个 bug，再修根因并验证原来的用户路径
$pstack poteto-mode 查一下 PR 42 现在的状态
$pstack poteto-help 这个任务适合用哪个动作
```

不知道动作名时使用 `poteto-mode`，让它选最轻的匹配流程。这里安装的是一个 `$pstack` 技能，不会注册 56 个独立斜杠命令。完整列表见[动作索引](skills/pstack/references/index.md)。

## 默认行为

- 所有角色继承当前父会话的模型与 reasoning 设置，不需要先配置模型。
- 用户明确要求时，`setup-pstack` 才准备角色配置，并先检查当前工具真正支持的模型组合；不会静默转用其他 provider 或付费路线。
- 子代理、浏览器、GitHub、定时任务等能力来自当前 Codex 宿主；技能本身不安装这些能力。
- 只读、实现、发布和合并的范围以用户当前请求为准。技能、计划和角色名称都不能创造授权。
- 测试通过、真实用户流程通过、部署成功和用户验收分别提供证据；缺环境时如实说明未验证。

## 适配限制

保留了工程动作、playbook、原则、评审模板、普通代理职责和 Node 日志工具。原来的 Cursor/Claude 插件注册、Bun 编排数据库与 CLI、常驻 PR watcher、固定模型规则和十泳道 plan checker 没有移植。

使用当前 Codex 原生工具承接适用流程；本仓库没有常驻服务、webhook 接收端或独立调度器，也不自动启用后台任务。完整差异见[适配说明](skills/pstack/SOURCE.md)。这是社区适配版，与上游及 OpenAI 无隶属关系。

## 检查与更新

```sh
npm run validate
npm test
```

检查覆盖文件完整性、索引、内部链接、安装器和日志工具，不代表真实多模型、定时任务、PR 合并或产品验收已通过。

更新时先拉取源码、审阅差异并保留已安装版本中的本地改动，再决定替换范围。安装器不会覆盖原目录。

## 常见问题

**这是官方 pstack 或 OpenAI 插件吗？** 不是，是基于 Lauren Tan 的 pstack 制作的独立社区适配版，保留 MIT 许可证与来源映射。

**安装后有 56 个独立 Skill 吗？** 没有。只安装一个 `$pstack`，通过它调用 56 个内部动作和 23 个 playbook。

**需要 API key 吗？** 安装器不需要 API key 或 npm 依赖，只需要 Git 和 Node.js 22+。执行任务仍需要相应 Codex 宿主的访问权限；外部工具也可能需要单独配置。

**会自动后台运行或监控 PR 吗？** 不会。仓库不附带常驻服务，子代理、浏览器、GitHub 和调度能力取决于宿主实际提供的工具及用户授权。

更多安装、更新和适配问题见 [FAQ](docs/faq.md)。

## 反馈与贡献

欢迎拿一个真实任务试用。如果安装失败、步骤不清楚或发现宿主能力不匹配，请[提交 issue](https://github.com/Bicheng-G/pstack-codex-native/issues)，附上动作、prompt、预期行为、实际结果和已执行的检查。提交前移除密钥及私有项目数据。

上游版本、文件来源映射和 MIT 许可证均随包保留，见 [SOURCE.md](skills/pstack/SOURCE.md)、[upstream-map.json](skills/pstack/upstream-map.json) 和 [LICENSE](LICENSE)。
