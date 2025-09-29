// src/pages/Home.tsx
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PremiumPackage from '../components/PremiumPackage';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Location from '../components/Location';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-16 md:mt-0">
        <Hero />
        <div className="max-w-6xl mx-auto px-4 space-y-16 py-12 bg-amber-400">
          <Services />
          <PremiumPackage />
          <Gallery />
          <Location />
        </div>
      </main>
      <Footer />
    </div>
  );
}
