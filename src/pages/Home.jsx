import Hero from '../sections/Hero';
import ParentStrip from '../sections/ParentStrip';
import Engagements from '../sections/Engagements';
import DeliverableSample from '../sections/DeliverableSample';
import Services from '../sections/Services';
import RiskExposure from '../sections/RiskExposure';
import Process from '../sections/Process';
import WhyAxiom from '../sections/WhyAxiom';
import NextSteps from '../sections/NextSteps';
import CTA from '../sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ParentStrip />
      <Engagements compact showHeader />
      <DeliverableSample />
      <Services />
      <RiskExposure />
      <Process showHeader />
      <WhyAxiom compact />
      <NextSteps />
      <CTA />
    </>
  );
}
