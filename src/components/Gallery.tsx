// src/components/Gallery.tsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Gallery() {
  const images = [
  '/img/pet1.jpg',
  '/img/pet2.jpg',
  '/img/pet3.jpg',
  '/img/pet4.jpg',
  '/img/pet5.jpg',
  '/img/pet6.jpg',
];


  const [current, setCurrent] = useState(0);

  // troca de imagem automática a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="produtos" className="relative py-16 bg-gradient-to-b from-white to-[#f7c6d9] overflow-hidden">
      <h2 className="text-3xl font-extrabold text-[#6b21a8] mb-8 text-center">Galeria</h2>

      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl">
        <motion.div
          key={current}
          className="flex justify-center gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
        >
          {/* Exibindo 3 imagens menores ao mesmo tempo */}
          {images
            .slice(current, current + 3)
            .map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Pet ${current + idx + 1}`}
                className="w-1/3 h-48 object-contain rounded-xl"
              />
            ))}
        </motion.div>

        {/* Controles manuais */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${current === idx ? 'bg-[#6b21a8]' : 'bg-[#34D399]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
