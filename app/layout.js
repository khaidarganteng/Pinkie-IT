import './globals.css';
import { Fredoka, Quicksand } from 'next/font/google';

const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka', weight: ['500', '600'] });
const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand', weight: ['500', '600', '700'] });

export const metadata = {
  title: 'Pinkie IT — Jasa Website, Jaringan & Sistem Informasi',
  description: 'Solusi IT yang rapi, cepat, dan bikin tenang: website, maintenance, jaringan, dan aplikasi custom.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${fredoka.variable} ${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
