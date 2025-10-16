import { motion } from "framer-motion";
import { Heart, PawPrint, Sparkles } from "lucide-react";

export default function ProprietariaSobre() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-purple-100 to-pink-100 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* Imagem da proprietária */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex-shrink-0"
        >
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-300/30 rounded-full blur-2xl" />
          <img
            src="/img/proprietaria.jpeg"
            alt="Proprietária do Petshop"
            className="rounded-3xl shadow-2xl w-80 md:w-96 object-cover"
          />
        </motion.div>

        {/* Texto sobre a proprietária */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <div className="flex justify-center md:justify-start gap-3 mb-4">
            <PawPrint className="text-purple-500 w-6 h-6" />
            <Heart className="text-pink-500 w-6 h-6" />
            <Sparkles className="text-yellow-400 w-6 h-6" />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-900 mb-4">
            Conheça <span className="text-pink-500">Daniela</span> 🐶
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Proprietária do <span className="font-semibold text-purple-700">AgroPet Estética D'Pets</span>,
            Daniela sempre teve uma conexão especial com os animais.  
            Com mais de <span className="font-semibold text-yellow-600">8 anos de experiência</span> em estética pet, 
            ela acredita que cada bichinho merece ser tratado com amor, cuidado e respeito.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Sua missão é garantir que cada pet saia mais feliz, cheiroso e confiante, 
            proporcionando momentos de bem-estar e carinho que fortalecem o vínculo entre tutores e seus amiguinhos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
