import PageHero from '../components/layout/PageHero';
import Services from '../sections/Services';
import CTA from '../sections/CTA';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="services"
        title="Coverage across your full security perimeter."
        description="From external reconnaissance through controlled exploitation and structured reporting — each module scoped to your architecture."
        cta={{ href: '/engagements', label: 'View engagement plans' }}
      />
      <Services showHeader={false} />
      <CTA showIntro={false} />
    </>
  );
}
