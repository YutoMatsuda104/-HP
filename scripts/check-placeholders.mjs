// 公開前チェック: 「【要入力】」「【要確認】」が残っていないか調べます。
//   npm run check:content
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const marks = ['【要入力】', '【要確認】'];
const found = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (/\.(md|ya?ml)$/.test(entry.name) && !entry.name.startsWith('_')) {
      const lines = (await readFile(path, 'utf8')).split('\n');
      lines.forEach((line, i) => {
        if (line.trim().startsWith('#')) return; // コメント行は対象外
        if (marks.some((m) => line.includes(m))) found.push(`${path}:${i + 1}  ${line.trim()}`);
      });
    }
  }
}

await walk('src/content');
if (found.length) {
  console.log('未入力・要確認の項目が残っています:\n' + found.join('\n'));
  process.exit(1);
}
console.log('OK: 未入力の項目はありません。');
