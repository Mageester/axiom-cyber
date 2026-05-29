import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import usePageMeta from './hooks/usePageMeta';

const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const EngagementsPage = lazy(() => import('./pages/EngagementsPage'));
const Approach = lazy(() => import('./pages/Approach'));
const Contact = lazy(() => import('./pages/Contact'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PageShell({ children }) {
  usePageMeta();
  return children;
}

function RouteFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center" aria-hidden="true">
      <div className="h-8 w-8 rounded-full border-2 border-zinc-700 border-t-orange-500 animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <PageShell>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="engagements" element={<EngagementsPage />} />
              <Route path="approach" element={<Approach />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      </PageShell>
    </>
  );
}
