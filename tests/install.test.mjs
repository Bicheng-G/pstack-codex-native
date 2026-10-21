import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { install } from '../scripts/install.mjs';

const source = fileURLToPath(new URL('../skills/pstack/', import.meta.url));
function project(t) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'pstack-install-'));
  t.after(() => fs.rmSync(directory, { recursive: true }));
  return directory;
}
function files(root) {
  return fs.readdirSync(root, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(root, entry.name);
    return entry.isDirectory() ? files(full) : [full];
  });
}

test('installs the complete standalone skill without changing other project files', t => {
  const target = project(t);
  fs.writeFileSync(path.join(target, 'AGENTS.md'), 'Existing project instructions.');
  const result = install(target);
  const expected = files(source);
  assert.equal(result.files, expected.length);
  assert.equal(files(result.destination).length, expected.length);
  for (const file of expected) assert.deepEqual(fs.readFileSync(path.join(result.destination, path.relative(source, file))), fs.readFileSync(file));
  assert.equal(fs.readFileSync(path.join(target, 'AGENTS.md'), 'utf8'), 'Existing project instructions.');
  assert.equal(fs.existsSync(path.join(result.destination, 'references/skills/poteto-mode/playbooks/bug-fix.md')), true);
});

test('a repeated install refuses the existing target and preserves local edits', t => {
  const target = project(t);
  const result = install(target);
  const manifest = path.join(result.destination, 'SKILL.md');
  fs.writeFileSync(manifest, 'Local customization.');
  assert.throws(() => install(target), error => error.code === 'EEXIST');
  assert.equal(fs.readFileSync(manifest, 'utf8'), 'Local customization.');
});

test('a missing target or missing source manifest fails before installing files', t => {
  const target = project(t);
  const invalidSource = project(t);
  assert.throws(() => install(path.join(target, 'missing')));
  assert.throws(() => install(target, invalidSource), /SKILL.md is missing/);
  assert.equal(fs.existsSync(path.join(target, '.agents')), false);
});

test('the documented CLI installs into the explicitly named project', t => {
  const target = project(t);
  const script = fileURLToPath(new URL('../scripts/install.mjs', import.meta.url));
  const result = spawnSync(process.execPath, [script, '--project', target], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Installed pstack/);
  assert.ok(fs.existsSync(path.join(target, '.agents/skills/pstack/SKILL.md')));
});
