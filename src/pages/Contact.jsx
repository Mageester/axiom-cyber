import PageHero from '../components/layout/PageHero';
import CTA from '../sections/CTA';
import { SITE } from '../lib/site';

export default function Contact() {
  return (
    <>
      <PageHero
        label="contact"
        title="Start with scope — not a sales call."
        description={`Tell us what you operate and what needs testing. We reply from ${SITE.email} with fit and timeline — typically within one business day.`}
      />
      <CTA showIntro={false} />
    </>
  );
}
