import SectionHeader from '../components/layout/SectionHeader';
import Reveal from '../components/Reveal';

export default function DeliverableSample() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 border-y border-zinc-800/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="deliverables"
          title="What lands in your inbox — structured, not sensational."
          description="Every engagement produces evidence your team can act on. Illustrative structure below; client identifiers redacted."
        />

        <Reveal>
          <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-950/80 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800 bg-black/60">
              <span className="font-mono text-[10px] text-zinc-500">axiom-cyber_report_v1.2.pdf</span>
              <span className="font-mono text-[9px] text-emerald-500/80">CONFIDENTIAL</span>
            </div>

            <div className="p-6 sm:p-8 space-y-8 font-mono text-xs sm:text-sm">
              <div>
                <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-2">Executive summary</p>
                <p className="text-zinc-400 leading-relaxed max-w-3xl">
                  External assessment identified <span className="text-white">12 findings</span> across the
                  in-scope perimeter: <span className="text-red-400/90">2 critical</span>,{' '}
                  <span className="text-amber-400/90">4 high</span>, 4 medium, 2 low. Primary risk concentration:
                  authentication boundary on <span className="text-zinc-300">api.[redacted].com</span>.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-800/80 overflow-hidden">
                <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-zinc-900/50 text-[10px] text-zinc-600 uppercase tracking-wider">
                  <span className="col-span-2">ID</span>
                  <span className="col-span-6">Finding</span>
                  <span className="col-span-2">Severity</span>
                  <span className="col-span-2">Status</span>
                </div>
                {[
                  { id: 'AXC-001', title: 'Authentication bypass on admin API route', sev: 'Critical', color: 'text-red-400' },
                  { id: 'AXC-002', title: 'Exposed management interface (VPN bypass)', sev: 'High', color: 'text-amber-400' },
                  { id: 'AXC-003', title: 'Session fixation in OAuth callback', sev: 'High', color: 'text-amber-400' },
                ].map((row) => (
                  <div
                    key={row.id}
                    className="grid grid-cols-12 gap-2 px-4 py-3 border-t border-zinc-800/60 text-zinc-400 hover:bg-zinc-900/30 transition-colors"
                  >
                    <span className="col-span-2 text-zinc-500">{row.id}</span>
                    <span className="col-span-6 text-zinc-300">{row.title}</span>
                    <span className={`col-span-2 ${row.color}`}>{row.sev}</span>
                    <span className="col-span-2 text-zinc-600">Open</span>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-lg border border-zinc-800 p-4 bg-black/40">
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-2">Reproduction (excerpt)</p>
                  <pre className="text-[11px] text-emerald-400/80 leading-relaxed overflow-x-auto">
{`$ curl -s -X POST https://api.[redacted]/v1/auth \\
  -H "X-Forwarded-For: 127.0.0.1" \\
  -d '{"role":"admin"}' | jq .token`}
                  </pre>
                </div>
                <div className="rounded-lg border border-zinc-800 p-4 bg-black/40">
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-2">Remediation</p>
                  <p className="text-zinc-400 text-[11px] leading-relaxed">
                    Enforce server-side role validation on all admin routes. Remove trust in client-supplied role
                    fields. Add integration test covering negative authorization cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
