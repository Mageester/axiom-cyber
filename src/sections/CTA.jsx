export default function CTA() {
  return (
    <section id="cta" className="py-24 lg:py-36 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] bg-orange-600/5 rounded-full blur-3xl" />
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
          <span className="text-orange-400">your actual exposure?</span>
        </h2>
        <p className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10">
          Send us a brief description of your infrastructure and what you're looking to assess.
          We'll confirm scope fit and provide a straight timeline estimate.
        </p>

        {/* Booking Form */}
        <div className="max-w-xl mx-auto mt-12 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 text-left shadow-2xl">
          <form action="https://formsubmit.co/aidan@getaxiom.ca" method="POST" className="space-y-6">
            {/* Honeypot for spam */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Security Assessment Booking Request" />
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-2">Name</label>
                <input type="text" name="name" required className="w-full bg-black/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-2">Email</label>
                <input type="email" name="email" required className="w-full bg-black/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="john@company.com" />
              </div>
            </div>
            
            <div>
              <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-2">Infrastructure Scope</label>
              <textarea name="message" required rows="4" className="w-full bg-black/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none" placeholder="Briefly describe what you're looking to assess (e.g., specific web apps, internal network, cloud footprint)..."></textarea>
            </div>
            
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-500 shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] transition-all duration-300">
              Request Assessment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>

        {/* Small note */}
        <p className="mt-8 text-xs text-zinc-700">
          No sales pipeline. No automated follow-up. We respond manually.
        </p>
      </div>
    </section>
  );
}
