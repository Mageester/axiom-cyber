import Hero from '../sections/Hero';
import ParentStrip from '../sections/ParentStrip';
import Engagements from '../sections/Engagements';
import DeliverableSample from '../sections/DeliverableSample';
import Operations from '../sections/Operations';
import HomeClosing from '../sections/HomeClosing';
import ChapterNav from '../components/layout/ChapterNav';

export default function Home() {
  return (
    <>
      <Hero />
      <ParentStrip />
      <ChapterNav />
      <Engagements compact showHeader />
      <DeliverableSample />
      <Operations />
      <HomeClosing />
    </>
  );
}
