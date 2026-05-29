import { Link } from 'react-router-dom';
import CTA from '../sections/CTA';
import SectionLabel from '../components/SectionLabel';
import { SITE } from '../lib/site';

export default function Contact() {
  return (
    <div className="pt-16">
      <section className="py-16 lg:py-20 px-6 lg:px-8 border-b border-zinc-800/60">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-100 tracking-tight leading-[1.1] text-balance">
            Start with scope, not a sales call.
          </h1>
          <p className="mt-6 text-base text-zinc-400 leading-relaxed text-pretty">
            Tell us what you operate and what you need tested. If the engagement is a fit,
            we reply with timeline and next steps — usually within one business day.
          </p>
          <p className="mt-6">
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
            >
              {SITE.email}
            </a>
          </p>
          <p className="mt-8 text-xs text-zinc-600">
            Prefer the full methodology first?{' '}
            <Link to="/approach" className="text-zinc-500 hover:text-zinc-300 underline-offset-2 hover:underline">
              Read our approach
            </Link>
            .
          </p>
        </div>
      </section>
      <CTA />
    </div>
  );
}
