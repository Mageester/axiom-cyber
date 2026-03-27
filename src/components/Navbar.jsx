import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Approach', href: '/approach' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-zinc-900 shadow-md py-0' : 'bg-black/20 backdrop-blur-sm border-b border-transparent py-2'}`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center -ml-4" id="nav-logo">
          {/* New transparent logo styling */}
          <img src="/logo.png" alt="Axiom Cyber" className="h-[52px] w-auto object-contain cursor-pointer drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`text-sm tracking-wide transition-colors duration-200 ${isActive ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            id="nav-cta"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-orange-600 text-white text-sm font-semibold hover:bg-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.2)] hover:shadow-[0_0_25px_rgba(234,88,12,0.4)] transition-all duration-300"
          >
            Request Assessment
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="nav-mobile-toggle"
          className="md:hidden flex flex-col gap-1.5 p-2 text-zinc-400 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-zinc-800 px-6 pb-6 pt-2 shadow-2xl">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2 text-sm transition-colors ${isActive ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 border-t border-zinc-900 mt-2">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center w-full py-3 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.2)] transition-all"
              >
                Request Assessment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
