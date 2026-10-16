// DESIGN.md のトークンから src/styles/tokens.css と src/styles/tokens.json を作ります。
// 使い方: npm run design
// 1. DESIGN.md を公式ツールでチェック(エラーがあれば中止)
// 2. W3C Design Tokens 形式に書き出し、CSS変数に変換
//    名前が -dark で終わる色は、ダークモードのときに同じ名前の色を置き換えます。
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const bin = 'node_modules/.bin/design.md';
const run = (args) => {
  try {
    return execFileSync(bin, args, { encoding: 'utf8' });
  } catch (e) {
    return e.stdout; // lint はエラー時に終了コード1を返す
  }
};

const report = JSON.parse(run(['lint', 'DESIGN.md']));
for (const f of report.findings.filter((f) => f.severity !== 'info')) {
  console.log(`[${f.severity}] ${f.path ?? ''} ${f.message}`);
}
if (report.summary.errors > 0) {
  console.error('DESIGN.md にエラーがあるため、tokens.css を更新しませんでした。');
  process.exit(1);
}

const tokens = JSON.parse(run(['export', '--format', 'dtcg', 'DESIGN.md']));
const entries = (group) => Object.entries(group ?? {}).filter(([k]) => !k.startsWith('$'));
const dim = (v) => (typeof v === 'object' ? `${v.value}${v.unit}` : String(v));

const light = [];
const dark = [];
const colors = {};
for (const [name, t] of entries(tokens.color)) {
  const hex = t.$value.hex;
  colors[name] = hex;
  if (name.endsWith('-dark')) dark.push(`    --color-${name.slice(0, -5)}: ${hex};`);
  else light.push(`  --color-${name}: ${hex};`);
}
for (const [name, t] of entries(tokens.rounded)) light.push(`  --rounded-${name}: ${dim(t.$value)};`);
for (const [name, t] of entries(tokens.spacing)) light.push(`  --space-${name}: ${dim(t.$value)};`);
for (const [name, t] of entries(tokens.typography)) {
  const v = t.$value;
  if (v.fontFamily) light.push(`  --type-${name}-family: ${v.fontFamily};`);
  if (v.fontSize) light.push(`  --type-${name}-size: ${dim(v.fontSize)};`);
  if (v.fontWeight) light.push(`  --type-${name}-weight: ${v.fontWeight};`);
  if (v.letterSpacing) light.push(`  --type-${name}-tracking: ${dim(v.letterSpacing)};`);
}

const css = `/* このファイルは自動生成です。直接編集せず、DESIGN.md を変更して npm run design を実行してください。 */

:root {
${light.join('\n')}
}

@media (prefers-color-scheme: dark) {
  :root {
${dark.join('\n')}
  }
}
`;
writeFileSync('src/styles/tokens.css', css);
writeFileSync('src/styles/tokens.json', JSON.stringify({ colors }, null, 2) + '\n');
console.log(`src/styles/tokens.css を更新しました(色 ${Object.keys(colors).length} 件)。`);
