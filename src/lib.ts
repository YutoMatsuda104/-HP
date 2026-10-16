import { getCollection, getEntry } from 'astro:content';

/** 「2024-04」→「2024.04」 */
export function formatYm(v?: string): string {
  if (!v) return '';
  if (v === '現在') return '現在';
  const [y, m] = v.split('-');
  return m ? `${y}.${m.padStart(2, '0')}` : y;
}

export function formatPeriod(start?: string, end?: string): string {
  const s = formatYm(start);
  if (!end || end === start) return s;
  return `${s} – ${formatYm(end)}`;
}

/** 並び替え用の数値(日付がないもの=進行中の研究などは一番上) */
const sortKey = (v?: string) => {
  if (!v) return Number.POSITIVE_INFINITY;
  const [y, m = '0'] = v.split('-');
  return Number(y) * 100 + Number(m);
};

export async function getProfile() {
  const entry = await getEntry('profile', 'profile');
  if (!entry) throw new Error('src/content/profile.yaml が見つかりません');
  return entry.data;
}

/** 公開中のプロジェクトを新しい順に */
export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  return all.sort((a, b) => {
    const diff = sortKey(b.data.start) - sortKey(a.data.start);
    return Number.isNaN(diff) ? 0 : diff;
  });
}

/** 本文が書かれているプロジェクトだけ詳細ページを作ります */
export const hasDetail = (p: { body?: string }) => Boolean(p.body && p.body.trim().length > 0);

/** プロジェクトの種類の表示名 */
export const kindLabel = {
  research: { ja: '研究', en: 'Research' },
  paper: { ja: '論文・発表', en: 'Publication' },
  activity: { ja: '活動・受賞', en: 'Activity' },
} as const;

/** 迷惑メール対策: @ を [at] に置き換えた表示用のメールアドレス */
export function obfuscateEmail(email: string) {
  return email.replace('@', '[at]');
}
