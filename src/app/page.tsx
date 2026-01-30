import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PolicySection from '@/components/PolicySection';
import ActivityList from '@/components/ActivityList';
import ProfileSummary from '@/components/ProfileSummary';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PolicySection />
        <ActivityList />
        <ProfileSummary />
      </main>
      <Footer />
    </>
  );
}
