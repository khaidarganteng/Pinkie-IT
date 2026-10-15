'use client';
import { useState } from 'react';
import Reveal from './Reveal';
import { FAQS } from '@/lib/data';

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section pt-0">
      <Reveal className="mx-auto max-w-xl text-center">
        <span className="eyebrow">FAQ</span>
        <h2 className="mt-4 text-4xl">Pertanyaan <span className="text-kitty-500">yang sering muncul</span></h2>
      </Reveal>
      <Reveal className="mx-auto mt-10 max-w-2xl space-y-3">
        {FAQS.map((f, i) => (
          <div key={f.q} className="card overflow-hidden">
            <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-bold">
              {f.q}
              <span className={`grid h-8 w-8 flex-none place-items-center rounded-full bg-kitty-100 text-kitty-600 transition ${open === i ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden"><p className="px-6 pb-5 text-kitty-muted">{f.a}</p></div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
