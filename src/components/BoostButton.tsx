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
    if (lastVote && Date.now() - Number(lastVote) < COOLDOWN_MS) {
      setVoted(true);
    }
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

  return (
    <button
      onClick={handleBoost}
      disabled={voted}
      title={voted ? 'Ya votaste este elemento' : 'Dar boost a este elemento'}
      className={[
        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all select-none',
        voted
          ? 'bg-emerald-50 border-emerald-200 text-emerald-700 cursor-default'
          : 'border-gray-200 text-gray-500 hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50 cursor-pointer',
      ].join(' ')}
    >
      <span aria-hidden="true">▲</span>
      <span>{count === null ? '—' : count}</span>
    </button>
  );
}
