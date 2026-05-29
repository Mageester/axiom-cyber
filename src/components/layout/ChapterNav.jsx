import { useEffect, useState } from 'react';

const CHAPTERS = [
  { id: 'engagements', label: '01 Plans' },
  { id: 'proof', label: '02 Proof' },
  { id: 'operations', label: '03 Operations' },
  { id: 'contact', label: '04 Contact' },
];

export default function ChapterNav() {
  const [active, setActive] = useState('engagements');

  useEffect(() => {
    const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3"
        aria-label="Page sections"
      >
        {CHAPTERS.map((ch) => (
          <button
            key={ch.id}
            type="button"
            onClick={() => scrollTo(ch.id)}
            className={`chapter-nav-link text-left ${active === ch.id ? 'chapter-nav-link-active' : ''}`}
          >
            {ch.label}
          </button>
        ))}
      </nav>

      <nav
        className="xl:hidden sticky top-[88px] z-40 border-b border-zinc-800/80 bg-black/90 backdrop-blur-md overflow-x-auto"
        aria-label="Page sections"
      >
        <div className="flex gap-1 px-4 py-2 min-w-max">
          {CHAPTERS.map((ch) => (
            <button
              key={ch.id}
              type="button"
              onClick={() => scrollTo(ch.id)}
              className={`chapter-nav-link px-3 py-2 whitespace-nowrap ${active === ch.id ? 'chapter-nav-link-active' : ''}`}
            >
              {ch.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
