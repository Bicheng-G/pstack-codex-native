import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const bundled = fileURLToPath(new URL('../skills/pstack/', import.meta.url));

function filesUnder(directory, relative = '') {
  const files = [];
  for (const entry of fs.readdirSync(path.join(directory, relative), { withFileTypes: true })) {
    const child = path.join(relative, entry.name);
    const info = fs.lstatSync(path.join(directory, child));
    if (info.isSymbolicLink()) throw new Error(`Linked skill files are not supported: ${child}`);
    if (info.isDirectory()) files.push(...filesUnder(directory, child));
    else if (info.isFile()) files.push(child);
    else throw new Error(`Unsupported skill file: ${child}`);
  }
  return files;
}

export function install(project, source = bundled) {
  if (typeof project !== 'string' || !project) throw new Error('Provide an existing project directory.');
  const projectRoot = fs.realpathSync(path.resolve(project));
  if (!fs.statSync(projectRoot).isDirectory()) throw new Error('The target project must be a directory.');
  if (fs.lstatSync(source).isSymbolicLink()) throw new Error('The source skill must not be a link.');
  const files = filesUnder(source);
  if (!files.includes('SKILL.md')) throw new Error('Source SKILL.md is missing.');
  const parent = path.join(projectRoot, '.agents', 'skills');
  for (const directory of [path.join(projectRoot, '.agents'), parent]) {
    if (fs.existsSync(directory) && fs.lstatSync(directory).isSymbolicLink()) {
      throw new Error(`Linked installation directories are not supported: ${directory}`);
    }
  }
  fs.mkdirSync(parent, { recursive: true });
  const destination = path.join(parent, 'pstack');
  fs.mkdirSync(destination);
  for (const relative of files) {
    const target = path.join(destination, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(path.join(source, relative), target, fs.constants.COPYFILE_EXCL);
  }
  return { destination, files: files.length };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const args = process.argv.slice(2);
    if (args.length !== 2 || args[0] !== '--project') throw new Error('Usage: node scripts/install.mjs --project <existing-project-directory>');
    const result = install(args[1]);
    console.log(`Installed pstack (${result.files} files) at ${result.destination}`);
    console.log('Use $pstack in a fresh Codex turn or session.');
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
