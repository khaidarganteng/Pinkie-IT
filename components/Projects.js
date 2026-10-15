import Reveal from './Reveal';
import { PROJECTS } from '@/lib/data';

export default function Projects() {
  return (
    <section id="proyek" className="section">
      <Reveal className="mx-auto max-w-xl text-center">
        <span className="eyebrow">Portofolio</span>
        <h2 className="mt-4 text-4xl">Proyek <span className="text-kitty-500">pilihan</span></h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <article className="card group overflow-hidden transition hover:-translate-y-2">
              <div className={`grid h-44 place-items-center bg-gradient-to-br ${p.grad} text-6xl transition group-hover:scale-105`}>{p.emoji}</div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-kitty-500">{p.tag}</span>
                <h3 className="mt-1 text-xl">{p.title}</h3>
                <p className="mt-2 text-kitty-muted">{p.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
