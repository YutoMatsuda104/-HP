---
version: alpha
name: Yuto Matsuda Homepage
description: 松田悠杜の個人ホームページのデザインシステム。数学のノートのような落ち着いた紙の色に、深い青と朱色の差し色を合わせる。
colors:
  primary: "#2443A6"
  on-primary: "#FFFFFF"
  primary-soft: "#E8ECF8"
  secondary: "#AD411B"
  background: "#F6F5F1"
  surface: "#FFFFFF"
  text: "#14161A"
  muted: "#5A5F68"
  line: "#E2E0D9"
  ink: "#0E1730"
  on-ink: "#F3F4F8"
  ink-muted: "#A9B1C7"
  cover-paper: "#2443A6"
  cover-activity: "#B8461F"
  success: "#22A06B"
  primary-dark: "#8EA8FF"
  primary-soft-dark: "#1A2240"
  secondary-dark: "#FF8A5C"
  background-dark: "#0D0F13"
  surface-dark: "#151820"
  text-dark: "#ECEEF2"
  muted-dark: "#A2A8B3"
  line-dark: "#262A33"
  ink-dark: "#121A33"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Yu Gothic UI', 'Yu Gothic', Meiryo, system-ui, sans-serif"
    fontSize: 5rem
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: 0.03em
  h1:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Yu Gothic UI', 'Yu Gothic', Meiryo, system-ui, sans-serif"
    fontSize: 3rem
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: 0.03em
  h2:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Yu Gothic UI', 'Yu Gothic', Meiryo, system-ui, sans-serif"
    fontSize: 2.25rem
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: 0.03em
  body-md:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Yu Gothic UI', 'Yu Gothic', Meiryo, system-ui, sans-serif"
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: 0.02em
  label-caps:
    fontFamily: "'SF Pro Display', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 0.75rem
    fontWeight: 700
    letterSpacing: 0.18em
  number:
    fontFamily: "'SF Pro Display', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 0.875rem
    fontWeight: 700
rounded:
  sm: 8px
  md: 12px
  lg: 18px
  xl: 24px
  full: 999px
spacing:
  gutter-sm: 20px
  gutter-lg: 40px
  container: 1120px
  measure: 40rem
  header: 60px
components:
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
  page-dark:
    backgroundColor: "{colors.background-dark}"
    textColor: "{colors.text-dark}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
  card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.text-dark}"
  caption:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
  caption-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.muted-dark}"
  divider:
    backgroundColor: "{colors.line}"
  divider-dark:
    backgroundColor: "{colors.line-dark}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 12px 22px
  link-dark:
    backgroundColor: "{colors.background-dark}"
    textColor: "{colors.primary-dark}"
  chip:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    padding: 4px 14px
  chip-dark:
    backgroundColor: "{colors.primary-soft-dark}"
    textColor: "{colors.text-dark}"
  badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
    padding: 3px 12px
  badge-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.secondary-dark}"
  band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
  band-caption:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ink-muted}"
  band-dark:
    backgroundColor: "{colors.ink-dark}"
    textColor: "{colors.on-ink}"
  cover-paper:
    backgroundColor: "{colors.cover-paper}"
    textColor: "{colors.on-primary}"
  cover-activity:
    backgroundColor: "{colors.cover-activity}"
    textColor: "{colors.on-primary}"
  status-dot:
    backgroundColor: "{colors.success}"
    size: 8px
---

# Yuto Matsuda Homepage — DESIGN.md

このファイルがサイトのデザインの「正本」です。上の `---` で囲まれた部分(トークン)を書き換えて
`npm run design` を実行すると、`src/styles/tokens.css` が作り直され、サイト全体の色・文字・角丸に反映されます。

## Overview

数学のノート(方眼紙)をモチーフにした、落ち着いた個人ホームページ。
白すぎない紙の色の背景にドット模様を敷き、見出しは太く大きく、差し色は青(主)と朱色(受賞・強調)の2色だけに絞る。
派手な装飾より、読みやすさと情報の見つけやすさを優先する。トラッカーや外部フォントは使わない。

## Colors

- **Primary (#2443A6):** 深い青。リンク、ボタン、見出し前のライン、選択中のメニューに使う。
- **Secondary (#AD411B):** 朱色。受賞バッジ(★)と番号など、目を引かせたい小さな要素だけに使う。面積を広く使わない。
- **Background (#F6F5F1):** 少し温かい紙の色。真っ白よりも目にやさしい。
- **Surface (#FFFFFF):** カードやパネルの面。
- **Ink (#0E1730):** 数字の帯(ホームの実績)など、濃い面に使う紺色。
- **Cover paper / Cover activity:** 写真のない研究・活動カードの自動表紙の色(論文=青、活動=赤茶)。
- **Success (#22A06B):** ホームの「Now」の点だけに使う。
- 名前が `-dark` で終わる色は、端末がダークモードのときに同じ名前の色と入れ替わる。

## Typography

- 日本語は端末標準のゴシック体(ヒラギノ・Noto Sans JP・游ゴシック)。Webフォントは読み込まない。
- 数字・英字ラベルは `number` / `label-caps`(SF Pro・Helvetica系)。年月や件数をすっきり見せる。
- 見出しは画面幅に応じて伸び縮みする(`display` 最大5rem、`h1` 最大3rem、`h2` 最大2.25rem)。
- 本文は行間1.9、字間0.02em。見出しには `palt`(約物詰め)をかける。

## Layout

- 1ページ1テーマのホームページ型(ホーム・自己紹介・経歴・研究・活動・スキル・連絡先)。1枚の縦長LPにはしない。
- 本文の最大幅は1120px、文章は40remまでで折り返す。左右の余白はスマホ20px、PC40px。
- ページ上部は、ドット模様の背景に大きな英字の透かし(PageHeader)を置いて統一する。

## Elevation & Depth

- 基本は線(`line`)で区切り、影は使わない。カードにマウスを乗せたときだけ、わずかに浮かせて影を出す。

## Shapes

- ホームの写真枠など大きな面は `xl`(24px)、カード・パネルは `lg`(18px)、資格カードは `md`(12px)、チップ・ボタン・バッジは `full`(丸)。

## Components

- **card:** 白い面に細い線。研究・活動のカード、スキル表、資格カード。
- **chip:** 薄い青の丸いラベル。スキルの項目など。
- **badge:** 朱色の文字に★。受賞結果だけに使う。
- **band:** 紺色の帯。ホームの実績数(論文・受賞・資格)。
- **button-primary:** 青い丸ボタン。ホームの主な行動(研究を見る・連絡する)。

## Do's and Don'ts

- Do: 色を足すときは、まずこのファイルにトークンとして追加してから使う。
- Do: 動きは控えめに。端末の「視差効果を減らす」設定ではアニメーションを止める。
- Don't: 差し色を3色以上に増やさない。朱色を広い面に使わない。
- Don't: 経歴や実績を大きく見せるための誇張した装飾(偽の数字、ランキング風の表現)を使わない。
