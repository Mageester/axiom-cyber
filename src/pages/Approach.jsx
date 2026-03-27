import Process from '../sections/Process';
import WhyAxiom from '../sections/WhyAxiom';
import Trust from '../sections/Trust';
import CTA from '../sections/CTA';

export default function Approach() {
  return (
    <div className="pt-24 lg:pt-32">
      <Process />
      <WhyAxiom />
      <Trust />
      <CTA />
    </div>
  );
}
