import Bow from './Bow';
import { BRAND, NAV } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t-2 border-dashed border-kitty-200 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 md:flex-row">
        <a href="#" className="flex items-center gap-2 font-display text-xl"><Bow size={28} />{BRAND.name}<b className="text-kitty-500">{BRAND.suffix}</b></a>
        <ul className="flex flex-wrap justify-center gap-5 text-sm">
          {NAV.map((n) => <li key={n.href}><a href={n.href} className="hover:text-kitty-500">{n.label}</a></li>)}
        </ul>
        <p className="text-sm text-kitty-muted">© {new Date().getFullYear()} {BRAND.name}{BRAND.suffix}. Dibuat dengan 💗</p>
      </div>
    </footer>
  );
}
