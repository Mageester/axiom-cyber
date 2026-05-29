import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';

const STEPS = [
  { number: '01', title: 'Scoping', detail: '1–2 days' },
  { number: '02', title: 'Reconnaissance', detail: '2–4 days' },
  { number: '03', title: 'Assessment', detail: 'Scope-variable' },
  { number: '04', title: 'Reporting', detail: '3–5 days' },
];

export default function ProcessPreview() {
  return (
    <section id="process-preview" className="py-24 lg:py-32 bg-zinc-950/80 border-y border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <SectionLabel>Engagement Process</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight max-w-xl leading-[1.2]">
                Predictable from scoping through delivery.
              </h2>
            </div>
            <Link
              to="/approach"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors shrink-0 group"
            >
              Full methodology
              <svg className="group-hover:translate-x-0.5 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STEPS.map((step) => (
            <Reveal key={step.number}>
              <div className="h-full rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-6 hover:border-zinc-700/80 transition-colors">
                <span className="font-mono text-xs text-orange-500">{step.number}</span>
                <h3 className="mt-3 text-sm font-semibold text-zinc-100">{step.title}</h3>
                <p className="mt-2 font-mono text-[11px] text-zinc-600">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
