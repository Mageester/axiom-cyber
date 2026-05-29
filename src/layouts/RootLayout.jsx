import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SkipLink from '../components/SkipLink';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
      <SkipLink />
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
