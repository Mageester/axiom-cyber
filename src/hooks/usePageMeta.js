import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_META } from '../lib/site';

export default function usePageMeta() {
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] ?? PAGE_META['/'];

  useEffect(() => {
    document.title = meta.title;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }
    description.setAttribute('content', meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', meta.description);
  }, [meta.description, meta.title, pathname]);
}

