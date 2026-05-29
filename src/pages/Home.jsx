import Hero from '../sections/Hero';
import ParentStrip from '../sections/ParentStrip';
import Services from '../sections/Services';
import RiskExposure from '../sections/RiskExposure';
import Process from '../sections/Process';
import WhyAxiom from '../sections/WhyAxiom';
import CTA from '../sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ParentStrip />
      <Services />
      <RiskExposure />
      <Process showHeader />
      <WhyAxiom compact />
      <CTA />
    </>
  );
}
