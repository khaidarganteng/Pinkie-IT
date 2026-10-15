import Reveal from './Reveal';
import { TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="section pt-0">
      <Reveal className="mx-auto max-w-xl text-center">
        <span className="eyebrow">Testimoni</span>
        <h2 className="mt-4 text-4xl">Kata mereka yang <span className="text-kitty-500">sudah mencoba</span></h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 100}>
            <figure className="card h-full p-7">
              <div className="text-kitty-400">★★★★★</div>
              <blockquote className="mt-3">“{t.text}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-kitty-500 to-kitty-300 font-display text-white">{t.name[0]}</span>
                <span><b className="block">{t.name}</b><span className="text-sm text-kitty-muted">{t.role}</span></span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
