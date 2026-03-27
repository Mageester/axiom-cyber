import SectionLabel from '../components/SectionLabel';

const STEPS = [
  {
    id: 'step-scoping',
    number: '01',
    title: 'Scoping',
    description: 'We define the engagement boundary together — what systems are in scope, testing approach, escalation paths, and explicit exclusions. Nothing starts without this document.',
    detail: '1–2 days',
  },
  {
    id: 'step-recon',
    number: '02',
    title: 'Reconnaissance',
    description: 'We map your externally-visible footprint, enumerate services, identify technology stack indicators, and develop a target model before any active testing begins.',
    detail: '2–4 days',
  },
  {
    id: 'step-assessment',
    number: '03',
    title: 'Assessment',
    description: 'Structured, methodology-driven testing against the agreed scope. Findings are captured with reproduction steps, evidence, and severity rationale as testing progresses.',
    detail: 'Scope-variable',
  },
  {
    id: 'step-reporting',
    number: '04',
    title: 'Reporting',
    description: 'A structured report delivered: executive summary, full technical findings, risk ratings with justification, and remediation guidance mapped to each finding.',
    detail: '3–5 days',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <SectionLabel>Engagement Process</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight max-w-xl leading-[1.2]">
            Predictable, documented, and repeatable.
          </h2>
        </div>

        {/* Desktop: horizontal steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-7 left-[5.5rem] right-[5.5rem] h-px bg-zinc-800" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
            {STEPS.map((step, i) => (
              <div key={step.id} id={step.id} className="relative group">
                {/* Step number with circle */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-zinc-950 border border-zinc-800 group-hover:border-blue-500/50 group-hover:bg-blue-950/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] flex items-center justify-center transition-all duration-500">
                    <span className="font-mono text-sm font-semibold text-blue-500 group-hover:text-blue-400 transition-colors">{step.number}</span>
                  </div>
                  {/* Mobile connecting line */}
                  {i < STEPS.length - 1 && (
                    <div className="lg:hidden flex-1 h-px bg-zinc-800" />
                  )}
                </div>

                <div className="p-6 -m-6 rounded-xl border border-transparent group-hover:bg-zinc-900/30 group-hover:border-zinc-800/50 transition-all duration-500">
                  <h3 className="text-base font-semibold text-zinc-100 mb-2 group-hover:text-white transition-colors">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4 group-hover:text-zinc-400 transition-colors">{step.description}</p>
                  <span className="inline-block font-mono text-xs text-zinc-600 border border-zinc-800 bg-zinc-900/50 px-2.5 py-1 rounded-sm group-hover:text-zinc-400 group-hover:border-zinc-700 transition-all">
                    {step.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
