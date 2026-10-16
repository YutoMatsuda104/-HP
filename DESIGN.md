---
version: alpha
name: Heritage — Yuto Matsuda
description: 松田悠杜の個人ホームページのデザインシステム。Google DESIGN.md のサンプル「Heritage」をもとに、上質な新聞やギャラリーのような落ち着いた紙面に、差し色を1色だけ使う。
colors:
  primary: "#1A1C1E"
  on-primary: "#F7F5F2"
  secondary: "#666C72"
  tertiary: "#B8422E"
  on-tertiary: "#FFFFFF"
  neutral: "#F7F5F2"
  surface: "#FDFCFA"
  stone: "#ECE8E1"
  line: "#E0DCD4"
  ink-muted: "#A3A7AD"
  cover-paper: "#4A5058"
  primary-dark: "#ECE9E4"
  secondary-dark: "#9A9FA6"
  tertiary-dark: "#E07A62"
  neutral-dark: "#121314"
  surface-dark: "#1A1C1E"
  stone-dark: "#25282C"
  line-dark: "#2C2F33"
  ink-dark: "#0A0B0C"
typography:
  display:
    fontFamily: "'Public Sans Variable', -apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Yu Gothic UI', 'Yu Gothic', Meiryo, system-ui, sans-serif"
    fontSize: 5rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0.02em
  h1:
    fontFamily: "'Public Sans Variable', -apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Yu Gothic UI', 'Yu Gothic', Meiryo, system-ui, sans-serif"
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.02em
  h2:
    fontFamily: "'Public Sans Variable', -apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Yu Gothic UI', 'Yu Gothic', Meiryo, system-ui, sans-serif"
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.02em
  body-md:
    fontFamily: "'Public Sans Variable', -apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Yu Gothic UI', 'Yu Gothic', Meiryo, system-ui, sans-serif"
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: 0.02em
  label-caps:
    fontFamily: "'Space Grotesk Variable', 'Public Sans Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 0.75rem
    fontWeight: 500
    letterSpacing: 0.16em
  number:
    fontFamily: "'Space Grotesk Variable', 'Public Sans Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 0.875rem
    fontWeight: 500
rounded:
  sm: 4px
  md: 8px
spacing:
  sm: 8px
  md: 16px
  gutter-sm: 20px
  gutter-lg: 40px
  container: 1120px
  measure: 40rem
  header: 60px
components:
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  page-dark:
    backgroundColor: "{colors.neutral-dark}"
    textColor: "{colors.primary-dark}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
  card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.primary-dark}"
  caption:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
  caption-dark:
    backgroundColor: "{colors.neutral-dark}"
    textColor: "{colors.secondary-dark}"
  divider:
    backgroundColor: "{colors.line}"
  divider-dark:
    backgroundColor: "{colors.line-dark}"
  link:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.tertiary}"
  link-dark:
    backgroundColor: "{colors.neutral-dark}"
    textColor: "{colors.tertiary-dark}"
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.sm}"
    padding: 12px 22px
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 12px 22px
  chip:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 3px 12px
  chip-dark:
    backgroundColor: "{colors.stone-dark}"
    textColor: "{colors.primary-dark}"
  badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.sm}"
  band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  band-caption:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink-muted}"
  band-dark:
    backgroundColor: "{colors.ink-dark}"
    textColor: "{colors.on-primary}"
  nav-active-dark:
    backgroundColor: "{colors.stone-dark}"
    textColor: "{colors.primary-dark}"
  cover-paper:
    backgroundColor: "{colors.cover-paper}"
    textColor: "{colors.on-tertiary}"
---

# Heritage — DESIGN.md

このファイルがサイトのデザインの「正本」です。上の `---` で囲まれた部分(トークン)を書き換えて
`npm run design` を実行すると、`src/styles/tokens.css` が作り直され、サイト全体の色・文字・角丸に反映されます。

## Overview

Architectural Minimalism meets Journalistic Gravitas(建築的なミニマリズムと、報道紙面の重み)。
Google の DESIGN.md サンプル「Heritage」をもとにしたデザイン。上質な新聞や現代美術のギャラリーのような、
マットで落ち着いた紙面を目指す。装飾よりも余白・罫線・文字組みで品位を出し、色は差し色1色に絞る。
トラッカーや外部への通信は使わない(フォントもサイト内に同梱して配信する)。

## Colors

コントラストの高いニュートラルと、ただ1つの差し色で構成する。

- **Primary (#1A1C1E):** 深いインク色。見出しと本文、数字の帯、黒いボタン。
- **Secondary (#666C72):** 落ち着いたスレート。補足・日付・キャプション。
- **Tertiary (#B8422E):** "Boston Clay"(赤土色)。リンク・主ボタン・受賞バッジなど、操作と強調だけに使う唯一の差し色。
- **Neutral (#F7F5F2):** 温かい石灰岩のような背景。純白よりやわらかい。
- **Surface (#FDFCFA) / Stone (#ECE8E1):** カードの面と、チップ・選択中メニューの面。
- **Cover paper (#4A5058):** 写真のない論文カードの自動表紙。研究はインク色、活動は赤土色。
- 名前が `-dark` で終わる色は、端末がダークモードのときに同じ名前の色と入れ替わる。

## Typography

- 欧文は **Public Sans**(本文・見出し)、英字ラベルと数字は **Space Grotesk**。どちらもサイト内に同梱。
- 日本語は端末標準のゴシック体(ヒラギノ・Noto Sans JP・游ゴシック)。
- 見出しは太さ700で、大きさで階層を作る。英字ラベルはすべて大文字・字間を広く。
- 本文は行間1.9、字間0.02em。見出しには `palt`(約物詰め)をかける。

## Layout

- 1ページ1テーマのホームページ型(ホーム・自己紹介・経歴・研究・活動・スキル・連絡先)。1枚の縦長LPにはしない。
- 本文の最大幅は1120px、文章は40remまでで折り返す。左右の余白はスマホ20px、PC40px。
- セクションは細い罫線で区切る。ページ見出しの下は新聞の題字のような二重線。

## Elevation & Depth

- 影もグラデーションも使わない。奥行きは罫線と面の色の差だけで表す。
- カードにマウスを乗せたときは、枠線が差し色に変わるだけにする。

## Shapes

- 角はほぼ直角。カード・写真・ボタン・チップは `sm`(4px)、大きめのパネルは `md`(8px)。丸いピル型は使わない。

## Components

- **card:** 少し明るい紙の面に細い罫線。研究・活動のカード、スキル表、資格カード。
- **chip:** 石色の四角いラベル。スキルの項目など。
- **badge:** 赤土色の文字に細い枠。受賞結果だけに使う。
- **band:** インク色の帯。ホームの実績数(論文・受賞・資格)。
- **button-primary:** 赤土色の四角いボタン。ホームの主な行動。もう一方は枠線だけのボタン。

## Do's and Don'ts

- Do: 色を足すときは、まずこのファイルにトークンとして追加してから使う。
- Do: 余白と罫線で区切る。迷ったら要素を減らす。
- Do: 動きは控えめに。端末の「視差効果を減らす」設定ではアニメーションを止める。
- Don't: 赤土色を広い面に使わない。差し色を2色以上にしない。
- Don't: 影・グラデーション・丸いピル型を使わない。
- Don't: 経歴や実績を大きく見せるための誇張した装飾(偽の数字、ランキング風の表現)を使わない。
