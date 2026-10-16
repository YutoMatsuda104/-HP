// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // 公開URL。URLが決まったらここを1か所だけ書き換えてください。
  // (canonical、OGP、sitemap、QRコードはすべてこの値を使います)
  site: 'https://example.pages.dev',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
