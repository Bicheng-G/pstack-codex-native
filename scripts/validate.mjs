import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export function validate(root = fileURLToPath(new URL('../', import.meta.url))) {
  root = path.resolve(root);
  const skill = path.join(root, 'skills', 'pstack');
  const walk = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (entry.name === '.git') return [];
    const file = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Unexpected link: ${file}`);
    return entry.isDirectory() ? walk(file) : [file];
  });
  const files = walk(root);
  const manifests = files.filter(file => path.basename(file) === 'SKILL.md');
  if (manifests.length !== 1 || manifests[0] !== path.join(skill, 'SKILL.md')) throw new Error('Expected one discoverable pstack skill.');
  const index = fs.readFileSync(path.join(skill, 'references', 'index.md'), 'utf8');
  const actions = fs.readdirSync(path.join(skill, 'references', 'skills')).filter(name => fs.existsSync(path.join(skill, 'references', 'skills', name, 'guide.md')));
  if (actions.length !== 56) throw new Error(`Expected 56 actions, got ${actions.length}.`);
  for (const name of actions) if (!index.includes(`](skills/${name}/guide.md)`)) throw new Error(`Unindexed action: ${name}`);
  const playbooks = fs.readdirSync(path.join(skill, 'references', 'skills', 'poteto-mode', 'playbooks')).filter(name => name.endsWith('.md'));
  if (playbooks.length !== 23) throw new Error(`Expected 23 playbooks, got ${playbooks.length}.`);
  const sourceMap = JSON.parse(fs.readFileSync(path.join(skill, 'upstream-map.json'), 'utf8'));
  for (const entry of sourceMap.files) {
    const target = path.resolve(skill, entry.installed);
    if (!target.startsWith(skill + path.sep) || !fs.statSync(target).isFile()) throw new Error(`Invalid source mapping: ${entry.installed}`);
  }
  for (const file of files.filter(file => file.endsWith('.md'))) {
    const text = fs.readFileSync(file, 'utf8');
    if (/C:\\Users\\|zhuzh|3rd-draft|Third Draft|RidePass/.test(text)) throw new Error(`Project-specific content: ${file}`);
    const prose = text.replace(/^```[^\n]*\n[\s\S]*?^```\s*$/gm, '');
    for (const match of prose.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
      const target = match[1];
      if (target === 'url' || /^(?:[a-z]+:|#)/i.test(target)) continue;
      const linked = path.resolve(path.dirname(file), target.split('#')[0]);
      if (!linked.startsWith(root + path.sep) || !fs.existsSync(linked)) throw new Error(`Broken local link: ${file} -> ${target}`);
    }
  }
  return { files: files.length, actions: actions.length, playbooks: playbooks.length, sourceMappings: sourceMap.files.length };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try { console.log('Package valid:', JSON.stringify(validate())); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
