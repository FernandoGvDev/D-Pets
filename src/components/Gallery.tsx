// src/components/Gallery.tsx
import { useEffect, useRef } from "react";

export default function Gallery() {
  // Importa todas as imagens da pasta /public/img
  const images = Object.values(
    import.meta.glob("/public/img/modelos/*.{jpg,jpeg,png,gif}", { eager: true, as: "url" })
  );

  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  // Auto play (scroll automático)
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

  return (
    <section
      id="produtos"
      className="relative py-20 overflow-hidden"
    >
      <h2 className="text-4xl font-serif font-bold text-purple-700 mb-12 text-center">
        Galeria de Pets
      </h2>

      {/* Carrossel */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="min-w-[80%] md:min-w-[40%] lg:min-w-[30%] snap-center rounded-2xl overflow-hidden bg-white shadow-lg"
          >
            <img
              src={src}
              alt={`Pet ${idx + 1}`}
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>

      {/* CTA Instagram */}
      <div className="mt-8 text-center">
        <a
          href="https://www.instagram.com/seuperfil"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 transition"
        >
          Veja mais no Instagram
        </a>
      </div>
    </section>
  );
}
