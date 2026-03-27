import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import WhyAxiom from './sections/WhyAxiom';
import RiskExposure from './sections/RiskExposure';
import Process from './sections/Process';
import Trust from './sections/Trust';
import CTA from './sections/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyAxiom />
        <RiskExposure />
        <Process />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
