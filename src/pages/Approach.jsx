import PageHero from '../components/layout/PageHero';
import Process from '../sections/Process';
import Terminal from '../components/terminal/Terminal';
import { APPROACH_TERMINAL } from '../components/terminal/sequences';
import WhyAxiom from '../sections/WhyAxiom';
import Trust from '../sections/Trust';
import CTA from '../sections/CTA';
import Reveal from '../components/Reveal';

export default function Approach() {
  return (
    <>
      <PageHero
        label="approach"
        title="Methodology you can audit."
        description="Predictable phases, explicit boundaries, and deliverables designed for engineering teams — not compliance theatre."
        cta={{ href: '/contact', label: 'Start a conversation' }}
      />
      <Process showHeader={false} />
      <section className="py-16 lg:py-20 px-6 lg:px-8 border-t border-zinc-800/40">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <Terminal lines={APPROACH_TERMINAL} title="methodology — readonly" typing />
          </Reveal>
        </div>
      </section>
      <WhyAxiom />
      <Trust />
      <CTA showIntro={false} />
    </>
  );
}
