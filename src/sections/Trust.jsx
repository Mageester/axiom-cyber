import Reveal from '../components/Reveal';

const PILLARS = [
  {
    title: 'Structured methodology',
    body: 'Recognized testing frameworks, internal standards, and explicit scope documentation on every engagement.',
  },
  {
    title: 'Full documentation trail',
    body: 'Scoping agreement, recon output, technical findings with evidence, and remediation guidance — complete written record.',
  },
  {
    title: 'Confidential by default',
    body: 'Client engagements are never disclosed without written authorization. Testing occurs only within documented boundaries.',
  },
];

export default function Trust() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 border-t border-zinc-800/40">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/50 p-6 sm:p-8 font-mono text-xs leading-relaxed">
            <p className="text-zinc-500">
              <span className="text-orange-500/80">$</span> cat /policy/engagement-rules.txt
            </p>
            <div className="mt-4 space-y-2 text-zinc-500">
              <p><span className="text-zinc-600">// </span>We do not disclose client engagements without explicit written authorization.</p>
              <p><span className="text-zinc-600">// </span>All assessments operate under signed scoping and rules of engagement.</p>
              <p><span className="text-zinc-600">// </span>Active testing occurs only within the documented scope boundary.</p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {PILLARS.map((pillar) => (
            <Reveal key={pillar.title}>
              <article className="cyber-card p-6">
                <h3 className="text-sm font-semibold text-zinc-200 mb-2">{pillar.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
