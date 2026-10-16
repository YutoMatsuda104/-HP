import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// コンテンツの「形」を定義するファイルです。
// 文章や経歴そのものは src/content/ 以下のファイルで編集します。

/** 「2024-04」のような年月。経歴やプロジェクトの並び順に使います。 */
const yearMonth = z
  .union([z.string(), z.number(), z.date()])
  .transform((v) => (v instanceof Date ? v.toISOString().slice(0, 7) : String(v)))
  .refine((v) => /^\d{4}(-\d{1,2})?$/.test(v), {
    message: '年月は「2024-04」または「2024」の形式で書いてください',
  });

const link = z.object({
  label: z.string(),
  url: z.string(),
});

const profile = defineCollection({
  loader: glob({ pattern: 'profile.yaml', base: './src/content' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      nameReading: z.string().optional(),
      nameEn: z.string().optional(),
      affiliation: z.string().optional(),
      lead: z.string().optional(),
      intro: z.string().optional(),
      now: z.array(z.string()).default([]),
      motto: z.string().optional(),
      email: z.string().optional(),
      github: z.string().optional(),
      wantedly: z.string().optional(),
      photo: image().optional(),
      photoAlt: z.string().optional(),
      siteDescription: z.string(),
    }),
});

const about = defineCollection({
  loader: glob({ pattern: 'about.md', base: './src/content' }),
  schema: z.object({
    specialties: z.array(z.string()).default([]),
    goal: z.string().optional(),
    future: z.string().optional(),
  }),
});

const experienceItem = z.object({
  period: z.string().optional(),
  organization: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
});

const experience = defineCollection({
  loader: glob({ pattern: 'experience.yaml', base: './src/content' }),
  schema: z.object({
    education: z.array(experienceItem).default([]),
    work: z.array(experienceItem).default([]),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: 'skills.yaml', base: './src/content' }),
  schema: z.object({
    groups: z
      .array(
        z.object({
          name: z.string(),
          note: z.string().optional(),
          items: z.array(z.string()),
          // 2〜3文の短い説明(どんな内容か・なぜ身につけたか・どう活かしたいか)。省略可
          text: z.string().optional(),
        }),
      )
      .default([]),
    certifications: z
      .array(
        z.object({
          name: z.string(),
          date: yearMonth.optional(),
          // 2〜3文の短い説明(なぜ取得したか・どう活かしたいか)。省略可
          text: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

const projects = defineCollection({
  // ファイル名が「_」で始まるもの(テンプレート)は読み込みません
  loader: glob({ pattern: '[!_]*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // 種類: research(研究)/ paper(論文・発表)/ activity(コンペ・プロジェクトなど)
      kind: z.enum(['research', 'paper', 'activity']).default('activity'),
      // true にするとトップページで大きく紹介します(1件)
      featured: z.boolean().default(false),
      start: yearMonth.optional(),
      end: z.union([yearMonth, z.literal('現在')]).optional(),
      category: z.string().optional(),
      result: z.string().optional(),
      venue: z.string().optional(),
      authors: z.string().optional(),
      summary: z.string().optional(),
      role: z.string().optional(),
      tech: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // 一覧のカードで写真のどこを見せるか(例: top / center / 50% 30%)。省略時は中央より少し上
      coverPosition: z.string().optional(),
      links: z.array(link).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { profile, about, experience, skills, projects };
