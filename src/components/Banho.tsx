// src/components/Banho.tsx
import { motion } from "framer-motion";
import { FaPaw, FaWhatsapp } from "react-icons/fa";
import { pacotesBanho } from "../data/servicos";
import useSEO from "../hooks/useSEO";

export default function Banho() {
  // ✅ SEO da seção
  useSEO(
    "Clubinhos e Serviços Estéticos D-Pets - Banho e Tosa para Pets",
    "Conheça os pacotes de banho, tosa e cuidados estéticos para deixar seu pet feliz e saudável. Agende agora pelo WhatsApp!"
  );

  return (
    <section
      id="banhos"
      className="
        relative overflow-hidden 
        bg-[#2c7fbd]
        bg-[url('/img/banho-fundo.png')] 
        md:bg-[url('/img/banho-fundo-pc.png')] 
        bg-no-repeat bg-top bg-center-x bg-contain
      "
    >
      <div className="relative z-10 max-w-6xl mx-auto space-y-16 pt-40 md:pt-60 lg:pt-80 pb-20">
        {/* 🐾 Título da seção */}
        <h2 className="text-4xl md:text-5xl text-center text-amber-400 drop-shadow-md font-serif font-bold mt-33">
          Clubinhos e Serviços Estéticos
        </h2>

        {/* 🧼 Grade de pacotes */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-6 lg:px-0">
          {pacotesBanho.map((pacote, idx) => {
            const isPopular = pacote.titulo.includes("Mensal");

            return (
              <motion.div
                key={pacote.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
                className={`
                  relative p-6 rounded-3xl border
                  backdrop-blur-xl bg-white/20 border-white/30
                  transition-all duration-300
                  ${isPopular ? "ring-2 ring-amber-400" : "hover:ring-1 hover:ring-white/40"}
                `}
              >
                {/* ⭐ Etiqueta "Mais Popular" */}
                {isPopular && (
                  <div className="absolute -top-4 right-6 bg-gradient-to-r from-amber-400 to-pink-400 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
                    ⭐ Mais Popular
                  </div>
                )}

                {/* 🐾 Ícone de patinha */}
                <div className="flex justify-center mb-4" aria-hidden="true">
                  <FaPaw className="text-4xl text-amber-400 drop-shadow-sm" />
                </div>

                {/* 🧴 Título do pacote */}
                <h3 className="text-2xl font-bold text-center text-amber-400 mb-2">
                  {pacote.titulo}
                </h3>

                {/* 🐶 Lista de itens */}
                <ul className="list-none space-y-2 mb-6 text-white/95 text-sm">
                  {pacote.itens.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaPaw className="text-amber-300 text-lg" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* 💚 Botão de ação */}
                <div className="flex justify-center">
                  <a
                    href={`https://wa.me/555184057577?text=Olá! Quero saber mais sobre o pacote ${encodeURIComponent(
                      pacote.titulo
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Falar sobre o pacote ${pacote.titulo} no WhatsApp`}
                    className="
                      inline-flex items-center gap-3 
                      px-6 py-3 rounded-full text-white font-semibold 
                      bg-gradient-to-r from-green-400 to-green-600 
                      hover:from-green-500 hover:to-green-700
                      transition-all shadow-md hover:shadow-lg
                    "
                  >
                    <FaWhatsapp className="text-xl animate-pulse" aria-hidden="true" />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
