import SectionLabel from '../components/SectionLabel';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black text-center px-6 lg:px-8">
      {/* Intense Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none animate-float" />
      <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none animate-float delay-500" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGwtb3BhY2l0eT0iMC4xNSI+PHBhdGggZD0iTTM2IDM0djIwaC0ydi0yMGgtMjB2LTJoMjB2LTIwaDJ2MjBoMjB2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-[0.15] mix-blend-overlay pointer-events-none" />

      {/* Grid fade bottom */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <div className="animate-fade-up">
          <SectionLabel>Axiom Infrastructure · Security Division</SectionLabel>
        </div>
        
        <h1 className="mt-8 text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-white leading-[1.05] animate-fade-up delay-100">
          Security assessment for
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 drop-shadow-lg">
            {' '}infrastructure that matters.
          </span>
        </h1>
        
        <p className="mt-10 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-200">
          We map your attack surface, test your defenses, and deliver structured findings 
          that your team can act on. No dashboards. No theatrics. Just rigorous work and 
          clear outputs.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 animate-fade-up delay-300">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-500 shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_40px_rgba(234,88,12,0.5)] transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-15deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-out" />
            <span className="relative">Request Assessment</span>
            <svg className="relative group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/approach"
            className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors tracking-wide uppercase group flex items-center gap-2"
          >
            See Our Process
            <span className="block w-4 h-px bg-zinc-600 group-hover:bg-white group-hover:w-8 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
