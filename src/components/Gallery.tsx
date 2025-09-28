// src/components/Gallery.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Troca automática a cada 4 segundos
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, images.length]);

  const getVisibleImages = () => {
    if (window.innerWidth >= 768) {
      return [images[current], images[(current + 1) % images.length]];
    }
    return [images[current]];
  };

  const [visibleImages, setVisibleImages] = useState(getVisibleImages());

  useEffect(() => {
    const handleResize = () => setVisibleImages(getVisibleImages());
    window.addEventListener("resize", handleResize);
    setVisibleImages(getVisibleImages());
    return () => window.removeEventListener("resize", handleResize);
  }, [current]);

  // handleDragEnd sem o parâmetro event
  const handleDragEnd = (info: any) => {
    if (info.offset.x < -50) {
      setDirection(1);
      setCurrent((current + 1) % images.length);
      setAutoPlay(true);
    } else if (info.offset.x > 50) {
      setDirection(-1);
      setCurrent((current - 1 + images.length) % images.length);
      setAutoPlay(true);
    }
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section
      id="produtos"
      className="relative py-20 bg-gradient-to-b from-white via-pink-50 to-white overflow-hidden"
    >
      <h2 className="text-4xl font-serif font-bold text-pink-600 mb-12 text-center">
        Galeria de Pets
      </h2>

      <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {visibleImages.map((src, idx) => (
            <motion.img
              key={src}
              src={src}
              alt={`Pet ${current + idx + 1}`}
              className="w-full h-80 object-contain bg-white rounded-2xl cursor-grab"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={() => setAutoPlay(false)}
              onDragEnd={handleDragEnd}
            />
          ))}
        </AnimatePresence>

        {/* Controles manuais */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrent(idx);
                setAutoPlay(true);
              }}
              className={`w-4 h-4 rounded-full transition-colors ${
                current === idx ? "bg-pink-600 shadow-lg" : "bg-pink-200"
              }`}
            />
          ))}
        </div>

        {/* CTA Instagram */}
        <a
          href="https://www.instagram.com/banhoetosaagromania"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 bg-pink-600 text-white px-4 py-2 rounded-full shadow hover:bg-pink-700 transition"
        >
          Veja mais no Instagram
        </a>
      </div>
    </section>
  );
}
