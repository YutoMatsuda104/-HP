// 名刺用のQRコードを作ります(外部サービスは使いません)。
//   npm run qr                → astro.config.mjs の site のURLで作成
//   npm run qr -- https://...  → 指定したURLで作成
// 出力先: qr/ フォルダ(SVG と 高解像度PNG)
import { mkdir } from 'node:fs/promises';
import QRCode from 'qrcode';
import config from '../astro.config.mjs';

const url = process.argv[2] ?? config.site;
if (!url || url.includes('example.pages.dev')) {
  console.error('公開URLが未設定です。astro.config.mjs の site を書き換えるか、URLを指定してください。');
  process.exit(1);
}

const options = {
  errorCorrectionLevel: 'M', // 印刷の汚れや小さな傷に強くしつつ、模様を細かくしすぎない設定
  margin: 4, // QRコードの規格で推奨される周囲の余白
  color: { dark: '#000000', light: '#ffffff' },
};

await mkdir('qr', { recursive: true });
await QRCode.toFile('qr/qr.svg', url, { ...options, type: 'svg' });
await QRCode.toFile('qr/qr.png', url, { ...options, type: 'png', width: 2048 });
console.log(`作成しました: qr/qr.svg, qr/qr.png (2048px)\nURL: ${url}`);
