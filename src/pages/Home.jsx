import Hero from '../sections/Hero';
import Services from '../sections/Services';
import RiskExposure from '../sections/RiskExposure';
import ProcessPreview from '../sections/ProcessPreview';
import WhyAxiom from '../sections/WhyAxiom';
import CTA from '../sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <RiskExposure />
      <ProcessPreview />
      <WhyAxiom compact />
      <CTA />
    </>
  );
}
