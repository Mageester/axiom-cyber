import { SITE } from '../lib/site';
import Reveal from '../components/Reveal';

export default function CTA({ showForm = true }) {
  return (
    <section id="cta" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[min(500px,80vw)] h-[240px] bg-orange-600/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-zinc-800 bg-zinc-900/60 text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-8">
            Get Started
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-100 tracking-tight leading-[1.1] mb-6 text-balance">
            Ready to understand
            <br />
            <span className="text-orange-400">your actual exposure?</span>
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10 text-pretty">
            Send a brief description of your infrastructure and what you need assessed.
            We confirm scope fit and provide a straight timeline estimate.
          </p>
        </Reveal>

        {showForm && (
          <Reveal className="max-w-xl mx-auto mt-10">
            <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-3xl p-6 sm:p-8 text-left shadow-2xl">
              <form
                action={`https://formsubmit.co/${SITE.email}`}
                method="POST"
                className="space-y-6"
              >
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Security Assessment Request — Axiom Cyber" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-2">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full bg-black/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full bg-black/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-2">
                    Infrastructure scope
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-black/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                    placeholder="What you need assessed — web apps, internal network, cloud footprint, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-500 shadow-[0_0_20px_rgba(234,88,12,0.25)] hover:shadow-[0_0_28px_rgba(234,88,12,0.4)] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                >
                  Request Assessment
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </Reveal>
        )}

        <p className="mt-8 text-xs text-zinc-600">
          No sales pipeline. No automated follow-up. We respond manually at{' '}
          <a href={`mailto:${SITE.email}`} className="text-zinc-500 hover:text-zinc-300 underline-offset-2 hover:underline">
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
