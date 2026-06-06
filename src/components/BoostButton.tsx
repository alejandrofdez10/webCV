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

  return (
    <button
      onClick={handleBoost}
      disabled={voted}
      title={voted ? 'Ya votaste' : 'Boost'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '4px 10px',
        borderRadius: '999px',
        fontSize: '11px',
        fontWeight: 500,
        border: voted
          ? '1px solid rgba(16,185,129,0.3)'
          : '1px solid rgba(255,255,255,0.1)',
        background: voted
          ? 'rgba(16,185,129,0.1)'
          : 'rgba(255,255,255,0.04)',
        color: voted ? '#6ee7b7' : 'rgba(255,255,255,0.4)',
        cursor: voted ? 'default' : 'pointer',
        transition: 'all 0.2s ease',
        userSelect: 'none',
      }}
      onMouseEnter={e => {
        if (!voted) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(16,185,129,0.35)';
          (e.currentTarget as HTMLButtonElement).style.color = '#6ee7b7';
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(16,185,129,0.08)';
        }
      }}
      onMouseLeave={e => {
        if (!voted) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)';
          (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.4)';
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)';
        }
      }}
    >
      <span aria-hidden="true">▲</span>
      <span>{count === null ? '—' : count}</span>
    </button>
  );
}
