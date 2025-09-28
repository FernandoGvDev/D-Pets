// src/components/Hero.tsx
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

// ✅ Hero elegante e minimalista
export default function Hero() {
  return (
    <section
      id="home"
      // Fundo em degradê minimalista (branco → rosa bem clarinho)
      // 🔹 Adicionei mt-0 (mobile) e lg:mt-20 (desktop) para afastar do header apenas no PC
      className="relative bg-gradient-to-r from-white via-pink-50 to-white py-20 mt-0 lg:mt-20"
    >
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* ============================
            📌 Coluna da esquerda (Texto)
        ============================= */}
        <div className="space-y-6">
          {/* ✅ Título elegante */}
          <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight text-gray-900">
            Cuidando do seu <span className="text-pink-600">melhor amigo </span> 
            com carinho e <span className="text-yellow-600">elegância</span>.
          </h1>

          {/* ✅ Subtítulo clean */}
          <p className="text-lg text-gray-600 max-w-lg">
            Banho, tosa e cuidados especiais para deixar seu pet feliz e saudável,
            em um ambiente acolhedor e sofisticado.
          </p>

          {/* ✅ Botões refinados */}
          <div className="flex flex-wrap gap-4">
            <a
              // 🔹 Número de WhatsApp atualizado
              href="https://wa.me/5551984057577?text=Olá%20quero%20agendar%20um%20serviço"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 transition"
            >
              <FaWhatsapp className="text-xl" />
              Fale conosco
            </a>
            <a
              href="#servicos"
              className="border border-pink-600 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-50 transition"
            >
              Nossos Serviços
            </a>
          </div>

          {/* ✅ Estatísticas em cartões minimalistas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
            {[
              { value: "+200", label: "Pets atendidos" },
              { value: "+150", label: "Clientes felizes" },
              { value: "+60", label: "Produtos premium" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-md rounded-2xl p-4 text-center"
              >
                <p className="text-2xl font-bold text-pink-600">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ============================
            📌 Coluna da direita (Imagem)
        ============================= */}
        <div className="relative flex justify-center">
          {/* ✅ Círculo elegante atrás da imagem */}
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full blur-3xl opacity-50"></div>

          {/* ✅ Imagem principal */}
          <motion.img
            src="/img/hero-pet.png"
            alt="Pet feliz após banho e tosa"
            className="relative z-10 w-80 h-80 object-cover object-[center_20%] rounded-full shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </div>
      </div>
    </section>
  );
}
