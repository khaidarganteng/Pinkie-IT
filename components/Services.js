import Reveal from './Reveal';
import { SERVICES } from '@/lib/data';

export default function Services() {
  return (
    <section id="layanan" className="section">
      <Reveal className="mx-auto max-w-xl text-center">
        <span className="eyebrow">Layanan</span>
        <h2 className="mt-4 text-4xl">Semua kebutuhan IT, <span className="text-kitty-500">satu tempat</span></h2>
        <p className="mt-3 text-kitty-muted">Pilih layanan yang kamu butuhkan, kami urus sisanya.</p>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <div className="card group h-full p-7 transition hover:-translate-y-2 hover:shadow-pop">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-kitty-100 text-3xl transition group-hover:animate-wiggle">{s.icon}</div>
              <h3 className="mt-5 text-xl">{s.title}</h3>
              <p className="mt-2 text-kitty-muted">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
