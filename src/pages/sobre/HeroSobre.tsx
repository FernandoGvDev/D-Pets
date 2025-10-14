import { motion } from "framer-motion";
import { PawPrint, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSobre() {
  return (
    <section
      id="sobre"
      className="relative flex items-center justify-center min-h-[80vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://th.bing.com/th/id/R.ced015939975f5d825bc737f324b16cd?rik=95hSUAbHwGs6mg&pid=ImgRaw&r=0')", // 📸 imagem da equipe em public/img
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-purple-900/60 backdrop-blur-[2px]" />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-4xl text-center text-white px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center gap-4 mb-6"
        >
          <PawPrint className="w-8 h-8 text-yellow-400" />
          <Heart className="w-8 h-8 text-pink-400" />
          <Sparkles className="w-8 h-8 text-yellow-300" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
        >
          Cuidando com Amor e Dedicação 💜
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="text-lg md:text-xl text-gray-100 mb-8"
        >
          No <span className="font-semibold text-yellow-300">AgroPet Estética D'Pets</span>, 
          sua família pet recebe carinho, estética e cuidados com muito amor!
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6 }}
        >
          <Link
            to="/#contato"
            className="bg-[#FFD700] hover:bg-yellow-400 text-purple-900 font-semibold px-8 py-3 rounded-2xl shadow-lg transition-transform transform hover:scale-105"
          >
            Fale Conosco
          </Link>
        </motion.div>
      </div>

      {/* Ícones decorativos animados */}
      <motion.div
        className="absolute top-10 left-10 text-pink-300 opacity-70"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <PawPrint size={36} />
      </motion.div>

      <motion.div
        className="absolute bottom-12 right-12 text-yellow-300 opacity-70"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Heart size={36} />
      </motion.div>
    </section>
  );
}
