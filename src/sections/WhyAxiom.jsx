import SectionHeader from '../components/layout/SectionHeader';
import Reveal from '../components/Reveal';

const ITEMS = [
  {
    title: 'Infrastructure-native perspective',
    body: 'Axiom Cyber operates inside Axiom International — assessments informed by how production systems are built, deployed, and operated at scale.',
  },
  {
    title: 'Engineer-grade deliverables',
    body: 'Reproducible findings, risk-ranked observations, and remediation steps written for the team that will fix them.',
  },
  {
    title: 'No vendor agenda',
    body: 'Independent assessments. We do not sell tools, platforms, or recurring security subscriptions on the back of your report.',
  },
];

export default function WhyAxiom({ compact = false }) {
  const items = compact ? ITEMS : [
    ...ITEMS,
    {
      title: 'Scoped to real exposure',
      body: 'Testing effort follows your architecture and high-value targets — not a generic checklist sold as a pentest.',
    },
    {
      title: 'Transparent methodology',
      body: 'You see what was tested, what was excluded, how findings were validated, and what assumptions were made.',
    },
    {
      title: 'Efficient timelines',
      body: 'Lean operations. Most engagements complete without multi-month procurement cycles or scheduling drag.',
    },
  ];

  return (
    <section id="why" className={`py-24 lg:py-32 px-6 lg:px-8 ${compact ? '' : 'border-t border-zinc-800/40'}`}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="why axiom cyber"
          title={compact ? 'Built by operators, not slide decks.' : 'Assessment quality your security team can trust.'}
          description={compact ? undefined : 'The same rigor we apply to client infrastructure defines how we work.'}
        />

        <div className={`grid gap-5 ${compact ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {items.map((item) => (
            <Reveal key={item.title}>
              <article className="cyber-card p-6 h-full">
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
