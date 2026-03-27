import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why' },
  { label: 'Contact', href: '#cta' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" id="nav-logo">
          <img src="/logo.png" alt="Axiom Cyber Logo" className="h-8 w-auto mix-blend-screen" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#cta"
            id="nav-cta"
            className="text-sm px-4 py-2 rounded-sm bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors duration-150"
          >
            Request Assessment
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="nav-mobile-toggle"
          className="md:hidden flex flex-col gap-1.5 p-2 text-zinc-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cta"
                onClick={() => setMenuOpen(false)}
                className="inline-block text-sm px-4 py-2 rounded-sm bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
              >
                Request Assessment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
