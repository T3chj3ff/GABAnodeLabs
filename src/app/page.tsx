import Hero from '@/components/Hero';
import ExecutiveSummary from '@/components/ExecutiveSummary';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import Faq from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <ExecutiveSummary />
      <ArchitectureDiagram />
      <Faq />
      <Footer />
    </>
  );
}
