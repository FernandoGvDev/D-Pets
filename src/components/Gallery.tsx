// src/components/Gallery.tsx
import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaPaw, FaTimes } from "react-icons/fa";
import useSEO from "../hooks/useSEO";

export default function Gallery() {
  // ✅ SEO da seção
  useSEO(
    "Galeria de Pets D-Pets - Fotos de Banho, Tosa e Cuidados",
    "Confira nossa galeria de pets felizes após banho, tosa e cuidados especiais. Veja mais fotos no Instagram e inspire-se!"
  );

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageModules: Record<string, string> = import.meta.glob(
    "/public/img/modelos/*.{jpg,jpeg,png,gif}",
    { eager: true, query: "?url", import: "default" }
  );
  const images = Object.values(imageModules);

  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = window.setInterval(() => {
      if (carouselRef.current) {
        const nextScroll =
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth;
        if (nextScroll >= carouselRef.current.scrollWidth) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollTo({ left: nextScroll, behavior: "smooth" });
        }
      }
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleTouchStart = () => stopAutoPlay();
  const handleTouchEnd = () => startAutoPlay();

  const openImage = (src: string) => {
    setSelectedImage(src);
    window.history.pushState({ modal: true }, "");
  };

  const closeImage = () => {
    setSelectedImage(null);
    if (window.history.state?.modal) window.history.back();
  };

  useEffect(() => {
    const handlePopState = () => {
      if (selectedImage) setSelectedImage(null);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedImage]);

  return (
    <section
      id="produtos"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-amber-400 to-amber-500"
    >
      <h2 className="text-4xl font-serif font-bold text-purple-700 mb-12 text-center">
        Galeria de Pets
      </h2>

      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-6"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative min-w-[80%] md:min-w-[40%] lg:min-w-[30%] snap-center rounded-2xl overflow-hidden bg-white shadow-lg border-[4px] border-purple-300 cursor-pointer"
            onClick={() => openImage(src)}
          >
            {/* Moldura de patinhas */}
            <FaPaw className="absolute top-2 left-2 text-purple-300 text-xl opacity-70" />
            <FaPaw className="absolute top-2 right-2 text-purple-300 text-xl opacity-70 rotate-12" />
            <FaPaw className="absolute bottom-2 left-2 text-purple-300 text-xl opacity-70 -rotate-12" />
            <FaPaw className="absolute bottom-2 right-2 text-purple-300 text-xl opacity-70 rotate-6" />

            <img
              src={src}
              alt={`Pet ${idx + 1}`}
              loading="lazy"
              className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Instagram */}
      <div className="mt-12 text-center">
        <a
          href="https://www.instagram.com/dpets_estetica_animal/#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-pink-300 hover:scale-105 transition-all text-lg font-semibold"
        >
          <FaInstagram className="text-2xl" />
          Veja mais no Instagram
        </a>
      </div>

      {/* Modal da imagem em tela cheia */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeImage}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-amber-400 transition"
            onClick={closeImage}
          >
            <FaTimes />
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
