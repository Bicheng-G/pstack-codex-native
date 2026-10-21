import assert from 'node:assert/strict';
import test from 'node:test';
import { validate } from '../scripts/validate.mjs';

test('a fresh standalone checkout contains every routed resource and no project-specific dependencies', () => {
  const result = validate();
  assert.equal(result.actions, 56);
  assert.equal(result.playbooks, 23);
  assert.equal(result.sourceMappings, 112);
});
