import { SITE } from '../lib/site';
import Reveal from '../components/Reveal';

export default function CTA({ showIntro = true }) {
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

        <Reveal>
          <div className="terminal-window rounded-lg overflow-hidden border border-zinc-800">
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
                    className="w-full bg-black border border-zinc-800 rounded-md px-4 py-3 text-sm text-zinc-100 font-mono placeholder:text-zinc-700 focus:border-orange-500/60 focus:outline-none focus:ring-1 focus:ring-orange-500/40"
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
                    className="w-full bg-black border border-zinc-800 rounded-md px-4 py-3 text-sm text-zinc-100 font-mono placeholder:text-zinc-700 focus:border-orange-500/60 focus:outline-none focus:ring-1 focus:ring-orange-500/40"
                    placeholder="jane@company.com"
                  />
                </div>
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
                  className="w-full bg-black border border-zinc-800 rounded-md px-4 py-3 text-sm text-zinc-100 font-mono placeholder:text-zinc-700 resize-none focus:border-orange-500/60 focus:outline-none focus:ring-1 focus:ring-orange-500/40"
                  placeholder="Web apps, cloud footprint, internal network — what you need assessed and any constraints."
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
