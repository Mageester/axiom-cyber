export default function CTA() {
  return (
    <section id="cta" className="py-24 lg:py-36 bg-zinc-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-zinc-800 bg-zinc-900/60 text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-8">
          Get Started
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-100 tracking-tight leading-[1.1] mb-6">
          Ready to understand
          <br />
          <span className="text-blue-400">your actual exposure?</span>
        </h2>
        <p className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10">
          Send us a brief description of your infrastructure and what you're looking to assess.
          We'll confirm scope fit and provide a straight timeline estimate.
        </p>

        {/* CTA Button */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:security@getaxiom.ca?subject=Security Assessment Inquiry"
            id="cta-email"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 active:bg-blue-700 transition-colors duration-150"
          >
            Schedule a Security Assessment
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="mailto:security@getaxiom.ca"
            id="cta-email-plain"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            security@getaxiom.ca
          </a>
        </div>

        {/* Small note */}
        <p className="mt-8 text-xs text-zinc-700">
          No sales pipeline. No automated follow-up. We respond manually.
        </p>
      </div>
    </section>
  );
}
