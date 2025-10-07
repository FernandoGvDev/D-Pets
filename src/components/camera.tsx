import { motion } from "framer-motion";
import { Cctv } from "lucide-react";

export type CameraProps = {
  onView?: () => void;
};

export default function Camera({ onView }: CameraProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full flex justify-center py-10"
    >
      <motion.div
        className="
          relative w-full max-w-5xl mx-4 md:mx-auto
          rounded-3xl p-8
          bg-gradient-to-b from-white via-purple-50 to-pink-50
          shadow-[0_12px_40px_rgba(139,92,246,0.15)]
          border-2 border-purple-200/70
          flex flex-col md:flex-row items-center justify-between
          overflow-hidden
        "
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        {/* Ícone fixo no canto superior esquerdo */}
        <div className="border-2 border-purple-600 text-purple-800 p-3 rounded-full shadow-lg">
          <Cctv size={28} />
        </div>


        {/* Coluna da imagem */}
        <div
          className="
            relative w-full md:w-1/2
            mt-5 md:mt-0 flex justify-center items-center
          "
        >
          <div
            className="
              w-[240px] h-[240px]
              md:w-[320px] md:h-[320px]
              lg:w-[360px] lg:h-[360px]
              rounded-2xl overflow-hidden
              bg-gradient-to-br from-purple-100 to-pink-100
              flex items-center justify-center
              border-2 border-white/50 shadow-inner
              relative
            "
          >
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(147,51,234,0.2), transparent 70%)",
              }}
            />
            <img
              src="/img/qrCode.jpeg"
              alt="Pet em atendimento"
              className="w-full h-full object-cover rounded-2xl"
              draggable={false}
            />
          </div>
        </div>


        {/* Coluna de texto */}
        <div className="relative z-10 w-full md:w-1/2 flex flex-col text-center md:text-left items-center md:items-start gap-4 px-4">
          <h3 className="text-purple-800 font-extrabold text-2xl md:text-3xl">
            🐾 Veja seu Pet em Tempo Real
          </h3>
          <p className="text-gray-700 text-base max-w-md">
            Acompanhe seu pet durante o atendimento com nossa câmera ao vivo.
            Segurança e transparência para deixar você mais tranquilo.
          </p>
          <motion.button
            onClick={onView}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="
              mt-4 flex items-center justify-center gap-3
              px-7 py-3 rounded-2xl
              text-white font-semibold text-base
              bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700
              shadow-[0_10px_30px_rgba(139,92,246,0.3)]
              focus:outline-none focus:ring-4 focus:ring-purple-200
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
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
          </motion.button>

          <p className="text-xs text-gray-400 mt-2">
            Toque em “Ver transmissão” para abrir a câmera do seu pet em uma nova aba.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
