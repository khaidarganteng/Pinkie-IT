import Reveal from './Reveal';
import { PROCESS } from '@/lib/data';

export default function Process() {
  return (
    <section id="proses" className="section">
      <Reveal className="mx-auto max-w-xl text-center">
        <span className="eyebrow">Cara kerja</span>
        <h2 className="mt-4 text-4xl">Mudah, <span className="text-kitty-500">4 langkah saja</span></h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-4">
        {PROCESS.map((p, i) => (
          <Reveal key={p.n} delay={i * 100}>
            <div className="relative h-full rounded-[28px] border-2 border-dashed border-kitty-300 bg-white/70 p-6">
              <div className="absolute -top-5 left-6 grid h-11 w-11 place-items-center rounded-full bg-kitty-500 font-display text-white shadow-pop">{p.n}</div>
              <h3 className="mt-4 text-xl">{p.title}</h3>
              <p className="mt-2 text-kitty-muted">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
