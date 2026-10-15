import Reveal from './Reveal';
import { PACKAGES } from '@/lib/data';

export default function Pricing() {
  return (
    <section id="paket" className="section">
      <Reveal className="mx-auto max-w-xl text-center">
        <span className="eyebrow">Paket</span>
        <h2 className="mt-4 text-4xl">Harga jelas, <span className="text-kitty-500">tanpa drama</span></h2>
        <p className="mt-3 text-kitty-muted">Harga bisa menyesuaikan kebutuhan. Konsultasi dulu, gratis.</p>
      </Reveal>
      <div className="mt-14 grid items-center gap-6 md:grid-cols-3">
        {PACKAGES.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <div className={`card relative p-8 ${p.popular ? 'scale-100 border-kitty-400 shadow-pop md:scale-105' : ''}`}>
              {p.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-kitty-500 px-4 py-1 text-xs font-bold text-white">⭐ Paling populer</span>}
              <h3 className="text-2xl">{p.name}</h3>
              <p className="text-sm text-kitty-muted">{p.note}</p>
              <div className="my-5 font-display text-4xl text-kitty-600">{p.price}</div>
              <ul className="space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-kitty-500">♥</span>{f}</li>
                ))}
              </ul>
              <a href="#kontak" className={`btn mt-7 w-full ${p.popular ? 'btn-pink' : 'btn-soft'}`}>Pilih paket</a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
