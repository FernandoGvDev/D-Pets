// src/components/Gallery.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Gallery() {
  const images = [
    "/img/pet1.jpg",
    "/img/pet2.jpg",
    "/img/pet3.jpg",
    "/img/pet4.jpg",
    "/img/pet5.jpg",
    "/img/pet6.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = próximo, -1 = anterior
  const intervalRef = useRef<number | null>(null);

  // Troca automática
  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = window.setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  // Determina imagens visíveis
  const getVisibleImages = () => {
    if (window.innerWidth >= 768) return [images[current], images[(current + 1) % images.length]];
    return [images[current]];
  };

  const [visibleImages, setVisibleImages] = useState(getVisibleImages());

  useEffect(() => {
    const handleResize = () => setVisibleImages(getVisibleImages());
    window.addEventListener("resize", handleResize);
    setVisibleImages(getVisibleImages());
    return () => window.removeEventListener("resize", handleResize);
  }, [current]);

  // Drag
  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -50) {
      setDirection(1);
      setCurrent((current + 1) % images.length);
      startAutoPlay();
    } else if (info.offset.x > 50) {
      setDirection(-1);
      setCurrent((current - 1 + images.length) % images.length);
      startAutoPlay();
    }
  };

  return (
    <section
      id="produtos"
      className="relative py-20 bg-gradient-to-b from-white via-pink-50 to-white overflow-hidden"
    >
      <h2 className="text-4xl font-serif font-bold text-pink-600 mb-12 text-center">
        Galeria de Pets
      </h2>

      <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence custom={direction} mode="wait">
          {visibleImages.map((src) => (
            <motion.img
              key={src}
              src={src}
              alt="Pet"
              className="w-full h-80 object-contain bg-white rounded-2xl"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Controles manuais */}
      <div className="mt-6 flex justify-center gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
              startAutoPlay();
            }}
            className={`w-4 h-4 rounded-full transition-colors ${
              current === idx ? "bg-pink-600 shadow-lg" : "bg-pink-200"
            }`}
          />
        ))}
      </div>

      {/* CTA Instagram */}
      <div className="mt-8 text-center">
        <a
          href="https://www.instagram.com/seuperfil"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 transition"
        >
          Veja mais no Instagram
        </a>
      </div>
    </section>
  );
}
