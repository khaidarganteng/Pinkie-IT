'use client';
import { useState } from 'react';
import Bow from './Bow';
import { BRAND, NAV } from '@/lib/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-dashed border-kitty-200 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#" className="flex items-center gap-2 font-display text-2xl">
          <Bow size={34} />
          <span>{BRAND.name}<b className="text-kitty-500">{BRAND.suffix}</b></span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <li key={n.href}><a href={n.href} className="font-bold text-kitty-ink/80 transition hover:text-kitty-500">{n.label}</a></li>
          ))}
        </ul>
        <a href="#kontak" className="btn btn-pink hidden !py-2 md:inline-flex">Konsultasi gratis</a>
        <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-xl border-2 border-kitty-200 bg-white md:hidden">{open ? '✕' : '☰'}</button>
      </nav>
      {open && (
        <div className="border-t-2 border-dashed border-kitty-200 bg-white px-5 pb-5 md:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 font-bold">{n.label}</a>
          ))}
          <a href="#kontak" onClick={() => setOpen(false)} className="btn btn-pink mt-2 w-full">Konsultasi gratis</a>
        </div>
      )}
    </header>
  );
}
