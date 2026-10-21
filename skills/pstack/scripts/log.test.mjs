import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { appendDecision } from './log.mjs';

function fixture(t) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'pstack-log-'));
  t.after(() => fs.rmSync(directory, { recursive: true }));
  return path.join(directory, 'nested', 'decisions.tsv');
}

test('creates a readable log and preserves earlier receipts when appending', t => {
  const filename = fixture(t);
  appendDecision(filename, ['start', 'choose', 'reason', 'file:1', 'open']);
  const first = fs.readFileSync(filename, 'utf8');
  appendDecision(filename, ['verify', 'run', 'proof', 'receipt.json', 'pass']);
  const content = fs.readFileSync(filename, 'utf8');
  assert.ok(content.startsWith(first));
  const rows = content.trimEnd().split('\n').map(line => line.split('\t'));
  assert.deepEqual(rows[0], ['ts', 'phase', 'decision', 'why', 'evidence', 'result']);
  assert.equal(rows.length, 3);
  assert.equal(rows.every(row => row.length === 6), true);
  assert.ok(Number.isFinite(Date.parse(rows[1][0])));
  assert.deepEqual(rows[2].slice(1), ['verify', 'run', 'proof', 'receipt.json', 'pass']);
});

test('untrusted cells cannot add rows or become spreadsheet formulas', t => {
  const filename = fixture(t);
  const input = ['=SUM(1)', '+value\tnew', '-x\r\nline', '@action\0', '  =formula'];
  appendDecision(filename, input);
  const lines = fs.readFileSync(filename, 'utf8').trimEnd().split('\n');
  assert.equal(lines.length, 2);
  const cells = lines[1].split('\t').slice(1);
  assert.deepEqual(cells, ["'=SUM(1)", "'+value new", "'-x  line", "'@action ", "'  =formula"]);
});

test('invalid calls and malformed existing logs do not overwrite evidence', t => {
  const filename = fixture(t);
  assert.throws(() => appendDecision(filename, ['short']));
  assert.equal(fs.existsSync(filename), false);
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  for (const original of ['existing evidence\n', 'ts\tphase\tdecision\twhy\tevidence\tresult\npartial']) {
    fs.writeFileSync(filename, original);
    assert.throws(() => appendDecision(filename, ['a', 'b', 'c', 'd', 'e']), /no row appended/);
    assert.equal(fs.readFileSync(filename, 'utf8'), original);
  }
});

test('CLI reports an invalid call with a nonzero status and no artifact', t => {
  const filename = fixture(t);
  const result = spawnSync(process.execPath, [fileURLToPath(new URL('./log.mjs', import.meta.url)), filename], { encoding: 'utf8' });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Usage:/);
  assert.equal(fs.existsSync(filename), false);
});
