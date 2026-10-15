'use client';
import { useEffect, useRef, useState } from 'react';
import { STATS } from '@/lib/data';

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / 1200, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-5">
      <div className="grid grid-cols-2 gap-4 rounded-[36px] bg-gradient-to-r from-kitty-500 to-kitty-400 p-8 text-center text-white shadow-soft md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="font-display text-4xl md:text-5xl"><Counter value={s.value} suffix={s.suffix} /></div>
            <div className="mt-1 text-sm text-white/85">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
