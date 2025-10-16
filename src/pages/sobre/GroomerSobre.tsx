import { motion } from "framer-motion";
import { Scissors, Sparkles, Heart } from "lucide-react";

export default function GroomerSobre() {
    const mensagem = encodeURIComponent(
    "Olá! 👋 Gostaria de agendar um horário para banho e tosa com a Letícia ✂️🐶"
  );
  return (
    <section className="relative py-20 bg-gradient-to-r from-pink-100 to-purple-100 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-6">
        
        {/* Texto sobre a groomer */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <div className="flex justify-center md:justify-start gap-3 mb-4">
            <Scissors className="text-purple-600 w-6 h-6" />
            <Heart className="text-pink-500 w-6 h-6" />
            <Sparkles className="text-yellow-400 w-6 h-6" />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-900 mb-4">
            Nossa Groomer <span className="text-pink-500">Maria</span> ✂️
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Maria é especialista em <span className="font-semibold text-purple-700">banho, tosa e estética animal</span>,
            e acredita que cada pet deve ser cuidado com paciência e empatia.
            Sua delicadeza e amor pelos bichinhos tornam cada atendimento uma experiência tranquila e feliz para os pets.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Com um olhar atento aos detalhes, ela transforma cada tosa em uma verdadeira arte,
            garantindo não só a beleza, mas também o conforto e o bem-estar de cada amiguinho peludo. 💕
          </p>

          <motion.a
            href={`https://wa.me/5551984057577?text=${mensagem}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
          >
            Agende agora ✨
          </motion.a>
        </motion.div>

        {/* Imagem da groomer */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex-shrink-0"
        >
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-400/30 rounded-full blur-2xl" />
          <img
            src="/img/groomer.jpeg"
            alt="Groomer Letícia em atendimento"
            className="rounded-3xl shadow-2xl w-80 md:w-96 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
