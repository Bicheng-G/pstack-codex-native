import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const header = 'ts\tphase\tdecision\twhy\tevidence\tresult\n';

export function appendDecision(filename, cells) {
  if (typeof filename !== 'string' || !filename || !Array.isArray(cells) || cells.length !== 5 || cells.some(cell => typeof cell !== 'string')) {
    throw new Error('Expected a log filename and five text cells.');
  }
  const clean = cells.map(cell => {
    const value = cell.replace(/[\t\r\n\0]/g, ' ');
    return /^\s*[=+@-]/.test(value) ? "'" + value : value;
  });
  fs.mkdirSync(path.dirname(path.resolve(filename)), { recursive: true });
  const fd = fs.openSync(filename, 'a+');
  try {
    const existing = fs.readFileSync(fd, 'utf8');
    if (existing && (!existing.startsWith(header) || !existing.endsWith('\n'))) {
      throw new Error('Existing log has an incompatible header or incomplete final row; no row appended.');
    }
    const row = [new Date().toISOString(), ...clean].join('\t') + '\n';
    fs.writeFileSync(fd, (existing ? '' : header) + row, 'utf8');
  } finally {
    fs.closeSync(fd);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const [filename, ...cells] = process.argv.slice(2);
    appendDecision(filename, cells);
  } catch (error) {
    console.error(error.message);
    console.error('Usage: node log.mjs <logfile> <phase> <decision> <why> <evidence> <result>');
    process.exitCode = 1;
  }
}
