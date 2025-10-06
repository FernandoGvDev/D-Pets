import { motion } from "framer-motion";

export type CameraProps = {
  onView?: () => void;
};

/**
 * Camera
 * Arquivo: src/components/Camera.tsx
 * - Entrada animada (fade + slight rise) com framer-motion
 * - Paleta: roxo + rosa + branco
 * - Responsivo: centralizado em mobile, maior em desktop
 */
export default function Camera({ onView }: CameraProps) {
  return (
    <motion.div
      // animação de entrada
      initial={{ opacity: 0, y: 12, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full flex justify-center"
    >
      <div
        className="
          relative
          w-full max-w-xl
          mx-4
          md:mx-auto
          border-4 border-purple-600
          rounded-3xl
          p-6
          bg-gradient-to-b from-white via-purple-50 to-pink-50
          shadow-[0_12px_40px_rgba(139,92,246,0.18)]
          flex flex-col items-center text-center
        "
        aria-live="polite"
      >
        {/* Decorative glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-1 rounded-3xl blur-[18px] opacity-40"
          style={{
            background:
              "linear-gradient(90deg, rgba(139,92,246,0.18), rgba(236,72,153,0.12))",
            zIndex: 0,
          }}
        />

        {/* Content container (on top of glow) */}
        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Top decorative paw (small) */}
          <div className="hidden md:flex items-center justify-center mb-3">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-90"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 8.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5S11.933 12 10 12 6.5 10.433 6.5 8.5zM3 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zM17 8c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zM8 16a4 4 0 118 0 4 4 0 01-8 0z"
                fill="#7c3aed"
              />
            </svg>
          </div>

          {/* Imagem / câmera - tamanho responsivo */}
          <div
            className="
              w-[240px] h-[240px]
              md:w-[320px] md:h-[320px]
              lg:w-[380px] lg:h-[380px]
              rounded-2xl overflow-hidden
              bg-gradient-to-br from-purple-50 to-pink-50
              flex items-center justify-center
              border-2 border-white/40
              shadow-inner
            "
          >
            <img
              src="/img/qrCode.jpeg"
              alt="Pet em atendimento"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>

          {/* Title */}
          <h3 className="text-purple-800 font-extrabold text-lg md:text-2xl mt-5">
            🐾 Veja seu Pet
          </h3>

          <p className="text-gray-700 text-sm md:text-base mt-1">
            em atendimento em <strong>tempo real</strong>
          </p>


          {/* CTA */}
          <button
            onClick={onView}
            aria-label="Ver pet em tempo real"
            className="
              mt-5 flex items-center justify-center gap-3
              px-6 py-3
              rounded-2xl
              text-white font-semibold text-sm md:text-base
              bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700
              shadow-[0_10px_30px_rgba(139,92,246,0.28)]
              transform transition
              hover:scale-[1.02] active:scale-[0.99]
              focus:outline-none focus:ring-4 focus:ring-purple-200
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Ver transmissão</span>
          </button>

          <p className="text-xs text-gray-400 mt-4 max-w-sm">
            Toque em “Ver transmissão” para abrir a câmera do seu pet em uma nova
            aba ou modal.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
