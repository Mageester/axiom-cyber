import Hero from '../sections/Hero';
import RiskExposure from '../sections/RiskExposure';
import Services from '../sections/Services';

export default function Home() {
  // Adding padding to offset fixed navbar if hero doesn't do it itself
  return (
    <>
      <Hero />
      <Services />
      <RiskExposure />
    </>
  );
}
