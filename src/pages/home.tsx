// src/pages/Home.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useSEO from "../hooks/useSEO";

import Hero from '../components/Hero';
import HotelPetCTA from '../components/HotelPetCTA';
import Services from '../components/Services';
import Banho from '../components/Banho';
import Gallery from '../components/Gallery';
import Location from '../components/Location';

export default function Home() {
  const location = useLocation();

  // SEO da Home
  useSEO(
    "D-Pets Petshop - Banho, Tosa e Produtos Premium para Pets",
    "D-Pets Petshop oferece banho, tosa, cuidados estéticos e produtos premium para cães e gatos. Agende online ou conheça nossa loja!"
  );

  useEffect(() => {
    // Scroll suave para hash
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  return (
    <div id="inicio" className="min-h-screen flex flex-col bg-amber-400 overflow-hidden">
      <main className="flex-1 overflow-hidden">
        {/* Hero */}
        <Hero />

        {/* Imagem decorativa do hero */}
        <div className="relative">
          <img
            src="/img/hero-pet.png"
            alt="Pet feliz após banho e tosa na D-Pets"
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

        <HotelPetCTA />
        {/* Conteúdo principal */}
        <div className="mx-auto space-y-16 py-12 overflow-x-hidden">

          {/* Seção de Banhos e Pacotes */}
          <Banho />

          {/* Elemento decorativo */}
          <div className="relative flex justify-center -mt-40 z-20 pointer-events-none">
            <img
              src="/img/preto.png"
              alt="Decoração elegante com tema petshop"
              className="w-80 max-w-full sm:w-96 md:w-1/3 lg:w-1/4"
            />
          </div>

          {/* Serviços */}
          <div id='servicos'>
            <Services />
          </div>

          {/* Galeria */}
          <Gallery />

          {/* Localização */}
          <Location />

        </div>
      </main>
    </div>
  );
}
