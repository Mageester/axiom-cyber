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
        setScrolled(window.scrollY > 20);
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
          ? 'bg-black/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.5)]'
          : 'bg-black/40 backdrop-blur-md border-b border-zinc-800/30'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[88px] py-2 flex items-center justify-between gap-4"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 -my-1"
        >
          <Logo variant="nav" />
        </Link>

        <ul className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`px-3.5 py-2 rounded-md font-mono text-[10px] uppercase tracking-[0.12em] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500 ${
                    isActive
                      ? 'text-white bg-zinc-900/90 border border-zinc-700/60 shadow-inner'
                      : 'text-zinc-500 hover:text-zinc-100 hover:bg-zinc-900/40'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <Link to="/engagements" className="btn-ghost text-[10px] py-2 px-0 hidden xl:inline-flex">
            Plans
          </Link>
          <Link to="/contact" className="btn-primary text-[12px] py-3 px-6">
            Request Assessment
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2.5 text-zinc-400 rounded-md border border-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500"
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
        <div id="mobile-nav" className="lg:hidden border-t border-zinc-800/80 bg-black/98 backdrop-blur-xl px-6 py-6">
          <p className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest mb-4">{SITE.parent}</p>
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
            <li className="pt-4 grid gap-3">
              <Link to="/engagements" onClick={closeMenu} className="btn-outline w-full text-center">
                View plans
              </Link>
              <Link to="/contact" onClick={closeMenu} className="btn-primary w-full text-center">
                Request Assessment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
