import { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SITE } from '../lib/site';
import { ENGAGEMENTS } from '../lib/engagements';
import Reveal from '../components/Reveal';

export default function CTA({ showIntro = true }) {
  const [searchParams] = useSearchParams();
  const planId = searchParams.get('plan') ?? '';
  const selectedPlan = useMemo(
    () => ENGAGEMENTS.find((p) => p.id === planId),
    [planId],
  );

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {showIntro && (
          <Reveal>
            <div className="text-center mb-10">
              <p className="font-mono text-[10px] text-orange-500/90 uppercase tracking-[0.28em] mb-4">
                <span className="text-zinc-600">// </span>
                initiate engagement
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight text-balance">
                Ready to see your actual exposure?
              </h2>
              <p className="mt-4 text-zinc-400 text-pretty">
                Describe your infrastructure and assessment goals. We confirm scope fit and reply with a straight timeline.
              </p>
            </div>
          </Reveal>
        )}

        {selectedPlan && (
          <Reveal>
            <p className="mb-6 text-center font-mono text-xs text-orange-400/90">
              Selected: {selectedPlan.name} ({selectedPlan.code}) ·{' '}
              <Link to="/engagements" className="text-zinc-500 hover:text-zinc-300 underline-offset-2 hover:underline">
                change
              </Link>
            </p>
          </Reveal>
        )}

        <Reveal>
          <div className="terminal-window rounded-lg overflow-hidden border border-zinc-800 ring-1 ring-white/5">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-950/80">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" aria-hidden="true" />
              <span className="ml-2 font-mono text-[10px] text-zinc-500">new-assessment.request</span>
            </div>

            <form
              action={`https://formsubmit.co/${SITE.email}`}
              method="POST"
              className="p-6 sm:p-8 space-y-5 bg-[#0a0a0c]"
            >
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Axiom Cyber — Assessment Request" />
              <input type="hidden" name="_template" value="table" />
              {selectedPlan && (
                <input type="hidden" name="engagement" value={`${selectedPlan.name} (${selectedPlan.code})`} />
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">
                    name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="input-cyber"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">
                    email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="input-cyber"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="engagement-select" className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">
                  engagement interest
                </label>
                <select
                  id="engagement-select"
                  name="engagement_package"
                  defaultValue={planId || ''}
                  className="input-cyber"
                >
                  <option value="">Select a package (optional)</option>
                  {ENGAGEMENTS.map((p) => (
                    <option key={p.id} value={`${p.name} — ${p.investment}`}>
                      {p.name} ({p.code})
                    </option>
                  ))}
                  <option value="Add-on / custom scope">Add-on or custom scope</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">
                  scope / message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="input-cyber resize-none"
                  placeholder="Web apps, cloud footprint, timelines, compliance drivers — what you need assessed."
                />
              </div>

              <button type="submit" className="btn-primary w-full font-mono text-xs uppercase tracking-widest">
                Submit request →
              </button>
            </form>
          </div>

          <p className="mt-6 text-center text-xs text-zinc-600 font-mono">
            No sales automation · Manual response ·{' '}
            <a href={`mailto:${SITE.email}`} className="text-zinc-500 hover:text-orange-400 transition-colors">
              {SITE.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
