# pstack Codex 原生适配版

将 [Lauren Tan 的 pstack](https://github.com/cursor/plugins/tree/190d28736eff128ec94f502a22c7fe0c4b56cd37/pstack) 整理为一个可独立安装的 Codex Skill，提供 **56 个子动作和 23 个工程 playbook**。

[English guide](README.md) · [动作索引](skills/pstack/references/index.md) · [适配范围与限制](skills/pstack/SOURCE.md)

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

上游版本、文件来源映射和 MIT 许可证均随包保留，见 [SOURCE.md](skills/pstack/SOURCE.md)、[upstream-map.json](skills/pstack/upstream-map.json) 和 [LICENSE](LICENSE)。
