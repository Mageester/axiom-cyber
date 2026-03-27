import SectionLabel from '../components/SectionLabel';

const PILLARS = [
  {
    id: 'trust-method',
    title: 'Structured Methodology',
    body: 'Our assessments follow recognized testing frameworks and internal methodology standards. Findings are reproducible, and our scope documentation is explicit.',
  },
  {
    id: 'trust-docs',
    title: 'Full Documentation',
    body: 'Every engagement produces a complete written record: scoping agreement, reconnaissance output, technical findings with evidence, and a remediation guide.',
  },
  {
    id: 'trust-vendor',
    title: 'No Vendor Lock-in',
    body: 'We have no financial stake in which tools you use. Our recommendations are based on what addresses the identified risks, not what generates recurring revenue.',
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-24 lg:py-32 bg-zinc-950 border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Trust banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-14 mb-14 border-b border-zinc-800/60">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 rounded-sm bg-blue-600/10 border border-blue-600/30 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-zinc-300">Axiom Infrastructure</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-zinc-800" />
          <p className="text-sm text-zinc-500 max-w-2xl leading-relaxed">
            Axiom Cyber is a division of Axiom Infrastructure — a team with direct experience building, deploying, and
            operating web infrastructure at production scale. Our security work is grounded in that operational context.
          </p>
        </div>

        {/* Pillars */}
        <div className="mb-12">
          <SectionLabel>Trust &amp; Standards</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight max-w-xl leading-[1.2] mb-12">
            How we work, and what you can expect.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => (
              <div key={pillar.id} id={pillar.id} className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-8 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-300">
                <h3 className="text-sm font-semibold text-zinc-200 mb-3">{pillar.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Monospaced declaration */}
        <div className="mt-12 p-6 bg-zinc-900/40 border border-zinc-800 rounded-sm">
          <p className="font-mono text-xs text-zinc-600 leading-6">
            <span className="text-zinc-500">// </span>
            We do not disclose client engagements without explicit written authorization.
            <br />
            <span className="text-zinc-500">// </span>
            All assessments operate under a signed scoping agreement and rules of engagement.
            <br />
            <span className="text-zinc-500">// </span>
            Testing activity occurs only within the documented scope boundary.
          </p>
        </div>
      </div>
    </section>
  );
}
