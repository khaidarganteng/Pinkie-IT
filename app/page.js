import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Process />
        <Pricing />
        <Projects />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
