// src/components/Hero.tsx
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-r from-purple-100/50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        {/* Texto */}
        <motion.div
          className="flex-1"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
            Cuidando do seu{" "}
            <span className="text-purple-700">Melhor Amigo</span> com carinho
          </h1>
          <p className="mt-4 text-gray-600">
            Banho, tosa, produtos e muito amor para seu pet em Bela Vista —
            Alvorada.
          </p>

          {/* Botões */}
          <motion.div
            className="mt-6 flex gap-3"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <a
              href="https://wa.me/5551984057577?text=Olá%20D%2C%20Pets%2C%20quero%20agendar%20um%20serviço"
              className="bg-purple-600 text-white px-5 py-3 rounded-md shadow-md hover:scale-105 active:scale-95 transition transform"
            >
              Agendar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="border border-gray-300 px-5 py-3 rounded-md hover:bg-gray-100 active:scale-95 transition"
            >
              Nossos serviços
            </a>
          </motion.div>

          {/* Estatísticas */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { num: "+200", text: "Pets atendidos" },
              { num: "+150", text: "Clientes felizes" },
              { num: "50+", text: "Pacotes ativos" },
              { num: "99%", text: "Satisfação" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 * i, duration: 0.8 }}
              >
                <div className="text-2xl font-bold text-purple-700">
                  {stat.num}
                </div>
                <div className="text-sm text-gray-500">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          className="relative w-full md:w-1/2 z-10"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/img/hero-pet.png"
            alt="Pet feliz"
            className="w-3/4 mx-auto md:w-4/5 object-cover"
          />
        </motion.div>
      </div>

            {/* Pistas de patas andando na parte de baixo */}
      <div className="absolute bottom-10 left-0 w-full flex justify-between px-6 z-0">
        {Array.from({ length: 12 }).map((_, i) => {
          // alterna a rotação para parecer direita/esquerda
          const rotation = i % 2 === 0 ? "-rotate-12" : "rotate-12";
          // dá uma leve variação de altura
          const offsetY = i % 2 === 0 ? "translate-y-2" : "-translate-y-1";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.7, // aparece em sequência
                duration: 0.5,
              }}
            >
              <PawPrint
                className={`w-8 h-8 text-purple-400/60 ${rotation} ${offsetY}`}
              />
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
