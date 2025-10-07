// src/pages/Home.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Banho from '../components/Banho';
import PremiumPackage from '../components/PremiumPackage';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
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
      <Header />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <img
          src="/img/hero-pet.png"
          alt="Decoração"
          className="
          absolute
          bottom-[-150px]   /* move a imagem um pouco pra fora (ajuste conforme quiser) */
          right-[1px]    /* encosta no canto direito */
          w-50           /* largura da imagem (ajuste à vontade) */
          z-20             /* fica acima dos componentes */
          pointer-events-none /* evita bloquear cliques nos componentes */
        "
        />
        <div className="max-w-6xl mx-auto space-y-16 py-12 overflow-x-hidden">
          <Camera
            onView={() => console.log('abrir visualização')}
          />
            <Banho />
            <img
          src="/img/preto.png"
          alt="Decoração"
          className="
          absolute
          bottom-[-2740px]   /* move a imagem um pouco pra fora (ajuste conforme quiser) */
          left-[-30px]    /* encosta no canto direito */
          w-80           /* largura da imagem (ajuste à vontade) */
          z-20             /* fica acima dos componentes */
          pointer-events-none /* evita bloquear cliques nos componentes */
        "/>
          <div id='serviços' className="pt-10"><Services /></div>
          <PremiumPackage />
          <Gallery />
          <Location />
        </div>
      </main>
      <div id="contato"></div><Footer />
    </div>
  );
}
