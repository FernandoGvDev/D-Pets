// src/pages/Home.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from '../components/Hero';
import Services from '../components/Services';
import Banho from '../components/Banho';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import Camera from '../components/camera';

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
    <div id="inicio" className="min-h-screen flex flex-col bg-amber-400 overflow-hidden">
      <main className="flex-1 overflow-hidden">
        <Hero />
        <div className="relative">
  {/* Conteúdo principal do hero aqui */}

  <img
    src="/img/hero-pet.png"
    alt="Decoração"
    className="
      absolute bottom-0 right-0
      w-40 sm:w-48 md:w-60 lg:w-72
      translate-y-1/4 sm:translate-y-1/3 md:translate-y-1/2
      z-20
      pointer-events-none
      block lg:hidden 
    "
  />
</div>
        <div className="mx-auto space-y-16 py-12 overflow-x-hidden">
          <Camera
            onView={() => console.log('abrir visualização')}
          />
            <Banho />
            <div className="relative flex justify-center -mt-40 z-20 pointer-events-none">
  <img
    src="/img/preto.png"
    alt="Decoração"
    className="w-80 max-w-full sm:w-96 md:w-1/3 lg:w-1/4"
  />
</div>
          <div id='serviços'>
            <Services />
            </div>
          <Gallery />
          <Location />
        </div>
      </main>
    </div>
  );
}
