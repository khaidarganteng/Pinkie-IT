'use client';
import { useState } from 'react';
import Reveal from './Reveal';
import { SERVICES, WHATSAPP, EMAIL } from '@/lib/data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', service: SERVICES[0].title, message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  function submit(e) {
    e.preventDefault();
    const err = {};
    if (form.name.trim().length < 2) err.name = 'Nama minimal 2 karakter.';
    if (form.contact.trim().length < 5) err.contact = 'Isi email atau nomor WhatsApp.';
    if (form.message.trim().length < 10) err.message = 'Ceritakan kebutuhanmu minimal 10 karakter.';
    setErrors(err);
    if (Object.keys(err).length) return;
    const text = `Halo Pinkie IT! 🎀\nNama: ${form.name}\nKontak: ${form.contact}\nLayanan: ${form.service}\n\n${form.message}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    setSent(true);
  }

  return (
    <section id="kontak" className="section pt-0">
      <Reveal>
        <div className="overflow-hidden rounded-[40px] border-4 border-dashed border-kitty-300 bg-white/80 p-6 shadow-soft md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <span className="eyebrow">Kontak</span>
              <h2 className="mt-4 text-4xl">Yuk, ngobrol <span className="text-kitty-500">dulu!</span></h2>
              <p className="mt-3 text-kitty-muted">Isi form di samping, pesanmu langsung terkirim lewat WhatsApp. Konsultasi gratis, tanpa komitmen.</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-kitty-100">💬</span>+{WHATSAPP}</li>
                <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-kitty-100">✉️</span>{EMAIL}</li>
                <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-kitty-100">🕘</span>Senin–Sabtu, 08.00–20.00</li>
              </ul>
            </div>
            <form onSubmit={submit} noValidate className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-kitty-muted" htmlFor="name">Nama</label>
                <input id="name" className="field" value={form.name} onChange={set('name')} placeholder="Nama kamu" />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm text-kitty-muted" htmlFor="contact">Email / WhatsApp</label>
                <input id="contact" className="field" value={form.contact} onChange={set('contact')} placeholder="0812xxxx atau nama@email.com" />
                {errors.contact && <p className="mt-1 text-sm text-red-500">{errors.contact}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm text-kitty-muted" htmlFor="service">Layanan</label>
                <select id="service" className="field" value={form.service} onChange={set('service')}>
                  {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm text-kitty-muted" htmlFor="message">Kebutuhanmu</label>
                <textarea id="message" rows={4} className="field" value={form.message} onChange={set('message')} placeholder="Ceritakan singkat apa yang kamu butuhkan..." />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              <button className="btn btn-pink w-full">Kirim via WhatsApp 🎀</button>
              {sent && <p className="rounded-2xl bg-green-50 px-4 py-3 text-center text-green-700">Terima kasih! WhatsApp terbuka, tinggal tekan kirim ✨</p>}
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
