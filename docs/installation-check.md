# Recorded installation check

Checked on 2026-10-22 (Asia/Singapore), on Windows with Node.js v22.15.0. Installer source: commit `9992efe487be70e66eec7ca65855ae477ac67742`. The discoverability change does not modify that installer or the installed skill.

## Observed result

From a fresh checkout, the documented `node scripts/install.mjs --project <existing-project>` command installed **124 files** into a disposable project's `.agents/skills/pstack` directory. The installed `SKILL.md`, action guides and references were present. A second invocation refused the existing destination with `EEXIST`.

`npm run validate` passed with 56 actions, 23 playbooks and 112 source mappings. All 9 existing tests passed, including byte-for-byte comparison of installed files, preservation of existing project instructions, refusal to overwrite local skill edits, and logger behavior. These are local checks, not hosted CI results.

## Why installation behaves this way

The [installer](https://github.com/Bicheng-G/pstack-codex-native/blob/9992efe487be70e66eec7ca65855ae477ac67742/scripts/install.mjs#L20) resolves an existing project, validates the bundled files and creates the skill destination without recursive overwrite. Copying happens only after destination creation succeeds. An existing destination therefore fails before copying; file copies also use `COPYFILE_EXCL`.

This explains the observed repeat-install refusal. It does not establish rollback after every possible filesystem failure.

## Reproduce it

Use a disposable project directory that does not already contain this skill:

```sh
git clone https://github.com/Bicheng-G/pstack-codex-native.git
mkdir pstack-trial
node pstack-codex-native/scripts/install.mjs --project pstack-trial
```

Then open `pstack-trial` in your Codex host and start a fresh turn or session. To try it on useful source, install into a project you are comfortable inspecting and ask:

```text
$pstack how explain this project's entry point and state ownership; cite source files and do not edit anything
```

The installation and repeat-install behavior above were exercised. Fresh-session automatic skill discovery and this suggested prompt were **not** tested in a separate Codex session. No bug-fix quality, independent review quality, time saving or search-ranking improvement is established by this check.
