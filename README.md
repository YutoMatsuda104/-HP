# 松田悠杜 個人ホームページ

自己紹介・経歴・研究・活動実績をまとめた個人ホームページのソースコードです。
文章や経歴はすべて `src/content/` のファイルで管理しています。普段の更新は、GitHubの画面でこのファイルを編集するだけで完了します。

---

## ① ホームページの構成

| ページ | 内容 |
| --- | --- |
| トップページ `/` | Home(名前・写真・所属)、About(自己紹介)、Experience(経歴)、Projects(研究・活動実績)、Skills(専門性・資格)、Contact(連絡先) |
| 詳細ページ `/projects/〇〇/` | 本文が書かれたプロジェクトだけ自動で作られます |

```
src/
  content/            ← ★ 普段編集するのはここだけ
    profile.yaml        基本情報(氏名・所属・メールアドレス・写真)
    about.md            自己紹介の本文・専門・目標・これから
    experience.yaml     経歴(学歴・職歴)
    skills.yaml         スキル・資格
    projects/           研究・活動実績(1件=1ファイル)
      _template.md        新規追加用のテンプレート
    images/             写真
  components/         画面の部品(見出し・経歴の一覧・カード)
  layouts/            全ページ共通の枠(ヘッダー・SEO・OGP)
  pages/              ページ(トップ・詳細・404・サイトマップ)
  styles/global.css   色・文字サイズなどのデザイン設定
  content.config.ts   コンテンツの項目定義
public/               そのまま公開されるファイル(OGP画像・アイコン)
scripts/              QRコード作成・公開前チェック
docs/                 移管時の資料(情報の一覧と確認事項)
```

## ② 使用している技術

- **Astro**(静的サイト生成)+ **TypeScript**
- 依存パッケージは `astro` のみ。開発用に `@astrojs/check`・`typescript`(型チェック)、`qrcode`(QRコード作成)
- サーバー・データベース・CMS・アクセス解析・Cookie・外部フォントは使っていません
- ホスティング: **Cloudflare Pages**(無料プラン)、ソース管理: **GitHub**

## ③ ローカルでの起動方法

普段の更新では不要です。デザインを変えるときなどに使います。

1. [Node.js](https://nodejs.org/) の22以上をインストール
2. このフォルダで次を実行

```sh
npm install      # 初回のみ
npm run dev      # http://localhost:4321 で確認できます
```

## ④ ビルド方法

```sh
npm run build    # dist/ フォルダに公開用のファイルが作られます
npm run preview  # ビルド結果を確認
npm run check    # 型チェック(エラーがないか)
```

## ⑤ GitHubとの連携方法(初回のみ)

1. GitHubで新しいリポジトリを作成(例: `homepage`。Public / Private どちらでも可)
2. このフォルダの中身をアップロード

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<ユーザー名>/homepage.git
git push -u origin main
```

## ⑥ Cloudflare Pagesでの公開方法(初回のみ)

1. [Cloudflare](https://dash.cloudflare.com/sign-up) に無料登録
2. 「Workers & Pages」→「作成」→「Pages」→「Gitに接続」→ GitHubのリポジトリを選択
3. 次のように設定して「保存してデプロイ」

| 項目 | 設定値 |
| --- | --- |
| プロジェクト名 | `yuto-matsuda` など(**URLになります**: `https://yuto-matsuda.pages.dev`) |
| フレームワーク | Astro |
| ビルドコマンド | `npm run build` |
| 出力ディレクトリ | `dist` |
| 本番ブランチ | `main` |

4. 公開URLが決まったら、`astro.config.mjs` の `site:` をそのURLに書き換えます(検索エンジンやSNS共有で使われます)
5. 名刺用QRコードを作成します

```sh
npm run qr       # qr/qr.svg と qr/qr.png(2048px)ができます
```

無料プランの主な上限(2026年10月時点): ビルド月500回、1サイト2万ファイル、1ファイル25MBまで、静的ファイルの配信は無制限。個人ホームページなら上限に届くことはまずありません。

## ⑦ 自己紹介の更新方法

1. GitHubでリポジトリを開き、`src/content/about.md` をクリック
2. 右上の鉛筆マーク(Edit)を押して文章を編集
3. 「Commit changes」を押す → 数分で自動的にサイトに反映されます

- 段落を分けたいときは空行を1行入れます
- 専門・目標・これからは、ファイル上部の `---` で囲まれた部分にあります
- 名前・所属・トップの一文は `src/content/profile.yaml` にあります

## ⑧ 経歴の追加方法

`src/content/experience.yaml` を編集します。上から順に表示されるので、新しいものを一番上に書きます。

```yaml
work:
  - period: 2027.04 – 現在
    organization: 会社名
    title: 役職
    description: 説明(省略可)
```

`education:`(学歴)と `work:`(職歴・活動)の2つがあります。行頭のスペースの数をそろえてください。

## ⑨ プロジェクトの追加方法

1. GitHubで `src/content/projects/` を開き、「Add file」→「Create new file」
2. ファイル名を `my-project.md` のように付ける(半角英数字とハイフン。これがURLになります)
3. `_template.md` の中身をコピーして貼り付け、書き換えて「Commit changes」

一覧への追加、並び替え(新しい順)、詳細ページの作成はすべて自動です。
本文を書かなければ詳細ページは作られず、一覧のカードだけが表示されます。一時的に隠したいときは `draft: true` にします。

## ⑩ 写真の変更方法

- プロフィール写真: `src/content/images/profile.jpg` を同じ名前の新しい写真で上書きします(GitHubでは「Add file」→「Upload files」)。別の名前にした場合は `profile.yaml` の `photo:` も変更します
- 写真は自動で圧縮・最適化されるので、元の写真をそのままアップロードして構いません
- SNS共有用の画像は `public/og.jpg`(1200×630ピクセル)です。所属などが変わったら差し替えてください

## ⑪ メールアドレスの変更方法

`src/content/profile.yaml` の `email:` を書き換えます。

## ⑫ 更新内容を公開する方法

GitHubで「Commit changes」を押すと、Cloudflare Pagesが自動でビルドし、数分で公開サイトに反映されます。手動の作業はありません。
ビルドが失敗した場合(書き方の誤りなど)は、公開中のサイトはそのまま残ります。Cloudflareの管理画面の「デプロイ」でエラー内容を確認できます。

公開前のチェック(未入力の項目が残っていないか):

```sh
npm run check:content
```

## ⑬ 過去の状態に戻す方法

- **すぐに戻したい**: Cloudflareの管理画面 → プロジェクト → 「デプロイ」で過去のデプロイを選び「ロールバック」
- **ファイルを元に戻したい**: GitHubでファイルを開き「History」から過去の内容を確認してコピーし直す。または `git revert <コミット>` を実行

すべての変更履歴はGitHubに残っています。

## ⑭ 必要な保守作業

普段は作業不要ですが、ゼロではありません。

| 頻度 | 作業 |
| --- | --- |
| 毎年4月ごろ | `profile.yaml` と `experience.yaml` の学年・在籍状況を更新 |
| 年に1回程度 | `npm outdated` で更新を確認し、`npm update` → `npm run build` が通ればコミット。Astroの大きなバージョンアップ(例: 7→8)は公式の移行ガイドを確認してから |
| ビルドが失敗したとき | Cloudflareのビルドログを確認。多くはYAMLのスペースずれなどの書き方の誤り |
| 必要に応じて | Node.jsのサポート終了に合わせて `.nvmrc` のバージョンを上げる |

### 別のホスティングへ移る場合

`npm run build` で作られる `dist/` は普通のHTMLファイルなので、GitHub Pages・Netlify・Vercelなど、どの静的サイトホスティングにも同じ設定(ビルドコマンド `npm run build`、出力先 `dist`)で移せます。Cloudflare専用の機能は使っていません。
ただし、URLが変わると名刺の再印刷が必要になる点に注意してください(`docs/content-inventory.md` の「公開URLの選び方」を参照)。
