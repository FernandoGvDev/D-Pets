// src/pages/Home.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PremiumPackage from '../components/PremiumPackage';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Location from '../components/Location';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Se tiver hash, faz scroll suave
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // espera 100ms para garantir que o elemento exista
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-16 md:mt-0">
        <Hero />
        <div className="max-w-6xl mx-auto px-4 space-y-16 py-12 bg-amber-400">
          <div id='serviços'><Services /></div>
          <PremiumPackage />
          <Gallery />
          <Location />
        </div>
      </main>
      <div id="contato"></div><Footer />
    </div>
  );
}
