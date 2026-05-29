import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { NAV_LINKS, SITE } from '../lib/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuSessionPath, setMenuSessionPath] = useState(null);
  const location = useLocation();
  const isMenuOpen = menuSessionPath === location.pathname;

  const openMenu = () => setMenuSessionPath(location.pathname);
  const closeMenu = () => setMenuSessionPath(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-zinc-800/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between gap-6" aria-label="Primary">
        <Link
          to="/"
          className="shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
        >
          <Logo className="h-8 sm:h-9 w-auto max-w-[160px] sm:max-w-[200px]" />
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`px-4 py-2 rounded-md font-mono text-[11px] uppercase tracking-[0.14em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500 ${
                    isActive
                      ? 'text-white bg-zinc-900/80 border border-zinc-700/50'
                      : 'text-zinc-500 hover:text-zinc-200'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest hidden lg:inline">
            {SITE.parent}
          </span>
          <Link to="/contact" className="btn-primary text-[13px] py-2.5 px-5">
            Request Assessment
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-zinc-400 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500"
          onClick={() => (isMenuOpen ? closeMenu() : openMenu())}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-px bg-current mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-current mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {isMenuOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-zinc-800/80 bg-black/95 backdrop-blur-xl px-6 py-6">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={closeMenu}
                  className="block py-3 font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link to="/contact" onClick={closeMenu} className="btn-primary w-full">
                Request Assessment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
