import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';

const DIFFERENTIATORS = [
  {
    id: 'diff-infra',
    label: '01',
    title: 'Built inside an infrastructure company.',
    body: "We're not a standalone security consultancy. Axiom Cyber operates as a division of Axiom Infrastructure — assessments informed by how web systems are actually built, deployed, and scaled.",
  },
  {
    id: 'diff-output',
    label: '02',
    title: 'Deliverables your team can use.',
    body: 'Every engagement produces structured reports with reproducible findings, risk-ranked observations, and concrete remediation steps. We write for engineers, not compliance checkboxes.',
  },
  {
    id: 'diff-scope',
    label: '03',
    title: 'Scoped to your actual exposure.',
    body: "We don't run generic scans and call it a pentest. Engagements follow your real architecture, high-value targets, and testing effort where it produces meaningful findings.",
  },
  {
    id: 'diff-posture',
    label: '04',
    title: 'No vendor dependency.',
    body: 'Independent assessments with no interest in selling tools, platforms, or subscriptions. Findings are yours; remediation stays on your timeline.',
  },
  {
    id: 'diff-speed',
    label: '05',
    title: 'Efficient engagement timelines.',
    body: 'Scoping, testing, and reporting move quickly. Most engagements complete without extended scheduling delays or multi-month procurement.',
  },
  {
    id: 'diff-trust',
    label: '06',
    title: 'Transparent methodology.',
    body: 'You see what was tested, what was not, how findings were validated, and what assumptions were made. No opaque black-box severity scores.',
  },
];

export default function WhyAxiom({ compact = false }) {
  const items = compact ? DIFFERENTIATORS.slice(0, 3) : DIFFERENTIATORS;

  return (
    <section id="why" className={`py-24 lg:py-32 ${compact ? 'bg-black' : 'bg-zinc-900/30'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="mb-14">
            <SectionLabel>Why Axiom Cyber</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight max-w-2xl leading-[1.2] text-balance">
              {compact
                ? 'Assessment quality grounded in how systems are built.'
                : 'The assessment practice for organizations that care about the quality of the work.'}
            </h2>
          </div>
        </Reveal>

        <div className={`grid grid-cols-1 ${compact ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6 lg:gap-8`}>
          {items.map((item) => (
            <Reveal key={item.id}>
              <article id={item.id} className="group h-full">
                <div className="h-full p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-zinc-700/60 transition-all duration-300">
                  <span className="font-mono text-xs text-zinc-600 group-hover:text-orange-500 transition-colors">{item.label}</span>
                  <h3 className="mt-3 text-sm font-semibold text-zinc-200 mb-2 leading-snug group-hover:text-zinc-100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {item.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
