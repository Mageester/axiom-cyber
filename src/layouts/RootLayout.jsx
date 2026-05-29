import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SkipLink from '../components/SkipLink';
import GridBackground from '../components/effects/GridBackground';

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <GridBackground />
      <SkipLink />
      <Navbar />
      <main id="main-content" className="flex-1 relative z-0" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
