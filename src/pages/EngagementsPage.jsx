import PageHero from '../components/layout/PageHero';
import Engagements from '../sections/Engagements';
import DeliverableSample from '../sections/DeliverableSample';
import NextSteps from '../sections/NextSteps';
import CTA from '../sections/CTA';

export default function EngagementsPage() {
  return (
    <>
      <PageHero
        label="engagements"
        title="Three packages. Add-ons when you need more depth."
        description="Transparent structure — typical timelines, deliverables, and investment bands. Final quote follows scoping."
        cta={{ href: '/contact', label: 'Discuss your scope' }}
      />
      <Engagements showHeader={false} />
      <DeliverableSample />
      <NextSteps />
      <CTA showIntro={false} />
    </>
  );
}
