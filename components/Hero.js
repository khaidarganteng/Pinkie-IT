import Bow from './Bow';
import { BRAND } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Bow size={70} className="absolute left-[6%] top-24 animate-float opacity-80 [--r:-12deg]" />
      <Bow size={46} className="absolute right-[8%] top-40 animate-float opacity-70 [--r:14deg]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-16 md:grid-cols-2 md:pt-24">
        <div>
          <span className="eyebrow">🌸 Jasa IT untuk UMKM &amp; Kantor</span>
          <h1 className="mt-5 text-5xl leading-[1.05] md:text-6xl">
            {BRAND.tagline.split(',')[0]},<br />
            <span className="text-kitty-500">cepat, dan bikin tenang.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-kitty-muted">
            Dari website, jaringan, sampai aplikasi custom. Kami bantu bisnismu berjalan lancar dengan teknologi yang tidak ribet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#kontak" className="btn btn-pink">Mulai konsultasi ✨</a>
            <a href="#proyek" className="btn btn-soft">Lihat proyek</a>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-kitty-muted">
            <div className="flex -space-x-2">
              {['🧁', '🍓', '🌷', '🎀'].map((e) => (
                <span key={e} className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-kitty-100">{e}</span>
              ))}
            </div>
            Dipercaya 80+ klien
          </div>
        </div>

        {/* Mockup dashboard */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="card overflow-hidden border-kitty-200 p-0">
            <div className="flex items-center gap-2 bg-kitty-100 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-kitty-400" /><span className="h-3 w-3 rounded-full bg-kitty-300" /><span className="h-3 w-3 rounded-full bg-kitty-200" />
              <span className="ml-3 rounded-full bg-white px-3 py-0.5 text-xs text-kitty-muted">pinkieit.id/dashboard</span>
            </div>
            <div className="space-y-4 p-5">
              <div className="grid grid-cols-3 gap-3">
                {[['Proyek', '12'], ['Tiket', '48'], ['Online', '99%']].map(([l, v]) => (
                  <div key={l} className="rounded-2xl bg-kitty-50 p-3 text-center"><div className="font-display text-2xl text-kitty-600">{v}</div><div className="text-xs text-kitty-muted">{l}</div></div>
                ))}
              </div>
              <div className="flex h-28 items-end gap-2 rounded-2xl bg-kitty-50 p-3">
                {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-xl bg-gradient-to-t from-kitty-500 to-kitty-300" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="space-y-2">
                {[70, 45, 85].map((w, i) => (
                  <div key={i} className="h-2.5 overflow-hidden rounded-full bg-kitty-100"><div className="h-full rounded-full bg-kitty-400" style={{ width: `${w}%` }} /></div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -left-6 top-10 animate-float rounded-2xl bg-white px-4 py-2 text-sm font-bold shadow-soft [--r:-4deg]">✅ Server online</div>
          <div className="absolute -right-4 bottom-16 animate-float rounded-2xl bg-white px-4 py-2 text-sm font-bold shadow-soft [--r:4deg]" style={{ animationDelay: '1s' }}>🎀 Tiket selesai</div>
        </div>
      </div>
    </section>
  );
}
