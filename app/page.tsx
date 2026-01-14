import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ValueProps } from '@/components/ValueProps';
import { Stats } from '@/components/Stats';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ValueProps />
      <Stats />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
