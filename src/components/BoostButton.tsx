import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface Props {
  slug: string;
  seccion: string;
}

const COOLDOWN_MS = 60_000;

export default function BoostButton({ slug, seccion }: Props) {
  const [count, setCount] = useState<number | null>(null);
  const [voted, setVoted] = useState(false);
  const storageKey = `boost_${seccion}_${slug}`;

  useEffect(() => {
    const lastVote = localStorage.getItem(storageKey);
    if (lastVote && Date.now() - Number(lastVote) < COOLDOWN_MS) setVoted(true);
    fetchCount();
  }, []);

  async function fetchCount() {
    const { count: c, error } = await supabase
      .from('boosts')
      .select('*', { count: 'exact', head: true })
      .eq('item_slug', slug)
      .eq('seccion', seccion);
    if (!error) setCount(c ?? 0);
  }

  async function handleBoost() {
    if (voted) return;
    setVoted(true);
    setCount(c => (c ?? 0) + 1);
    localStorage.setItem(storageKey, String(Date.now()));
    await supabase.from('boosts').insert({ item_slug: slug, seccion });
  }

  const base = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all select-none';
  const active = `${base} bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/25 text-sky-700 dark:text-sky-400 cursor-default`;
  const idle   = `${base} bg-transparent border-slate-200 dark:border-white/10 text-slate-400 dark:text-white/40 cursor-pointer hover:border-sky-400 dark:hover:border-sky-500/35 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-500/[0.08]`;

  return (
    <button onClick={handleBoost} disabled={voted} title={voted ? 'Ya votaste' : 'Boost'} className={voted ? active : idle}>
      <span aria-hidden="true">▲</span>
      <span className="font-mono">{count === null ? '—' : count}</span>
    </button>
  );
}
