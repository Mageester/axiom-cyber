import SectionHeader from '../components/layout/SectionHeader';
import Reveal from '../components/Reveal';

const STEPS = [
  {
    number: '01',
    title: 'Scoping',
    description: 'Engagement boundary, testing approach, escalation paths, and explicit exclusions — documented before any active work.',
    detail: '1–2 days',
  },
  {
    number: '02',
    title: 'Reconnaissance',
    description: 'External footprint mapping, service enumeration, and target model development prior to controlled testing.',
    detail: '2–4 days',
  },
  {
    number: '03',
    title: 'Assessment',
    description: 'Methodology-driven testing within scope. Findings captured with reproduction steps and severity rationale in real time.',
    detail: 'Scope-variable',
  },
  {
    number: '04',
    title: 'Reporting',
    description: 'Executive summary, technical findings, risk ratings with justification, and remediation guidance per finding.',
    detail: '3–5 days',
  },
];

export default function Process({ showHeader = true }) {
  return (
    <section id="process" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {showHeader && (
          <SectionHeader
            label="methodology"
            title="Four phases. Zero ambiguity."
            description="Every engagement follows the same documented structure — from rules of engagement through deliverable handoff."
          />
        )}

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" aria-hidden="true" />

          <ol className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 list-none p-0 m-0">
            {STEPS.map((step, i) => (
              <Reveal key={step.number}>
                <li className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-black font-mono text-sm text-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.08)]">
                      {step.number}
                    </span>
                    {i < STEPS.length - 1 && (
                      <span className="lg:hidden flex-1 h-px bg-zinc-800" aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{step.description}</p>
                  <span className="inline-block font-mono text-[10px] text-zinc-600 border border-zinc-800 px-2 py-1 rounded">
                    {step.detail}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
