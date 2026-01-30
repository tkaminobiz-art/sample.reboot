import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MessageSection from '@/components/MessageSection';
import PolicySection from '@/components/PolicySection';
import ActivityList from '@/components/ActivityList';
import ProfileSummary from '@/components/ProfileSummary';
import Footer from '@/components/Footer';

import OpeningAnimation from '@/components/OpeningAnimation';

export default function Home() {
  return (
    <>
      <OpeningAnimation />
      <Header />
      <main>
        <Hero />
        <MessageSection />
        <PolicySection />
        <ActivityList />
        <ProfileSummary />
      </main>
      <Footer />
    </>
  );
}
