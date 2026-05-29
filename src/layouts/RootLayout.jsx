import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SkipLink from '../components/SkipLink';
import GridBackground from '../components/effects/GridBackground';

export default function RootLayout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative">
      <GridBackground />
      <SkipLink />
      <Navbar />
      <main id="main-content" className="flex-1 relative z-0" tabIndex={-1}>
        <div key={pathname} className="route-fade-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
