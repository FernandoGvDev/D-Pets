// src/components/Hero.tsx
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

// ✅ Fonte Charm
import "@fontsource/charm/400.css";
import "@fontsource/charm/700.css";

export default function Hero() {

  return (
    <section
      id="home"
      className="relative bg-purple-600 py-20 mt-0 lg:mt-20 overflow-hidden"
    >

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* ============================
            📌 Coluna da esquerda (Texto)
        ============================= */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 font-[Charm]">
            Cuidando do seu{" "}
            <span className="text-yellow-400">melhor amigo </span>
            com carinho e{" "}
            <span className="text-yellow-400">elegância</span>
          </h1>

          <p className="text-3xl text-gray-900 max-w-lg font-[Charm]">
            Banho, tosa e cuidados especiais para deixar seu pet feliz e
            saudável, em um ambiente acolhedor e sofisticado
          </p>

          {/* ✅ Botões refinados */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5551984057577?text=Olá%20quero%20agendar%20um%20serviço"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition font-[Charm]"
            >
              <FaWhatsapp className="text-xl" />
              Fale conosco
            </a>
            <a
              href="#servicos"
              className="border border-yellow-500 text-white px-6 py-3 rounded-full hover:bg-pink-50 transition font-[Charm]"
            >
              Nossos Serviços
            </a>
          </div>

          {/* ✅ Estatísticas */}
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
                <p className="text-2xl font-bold text-yellow-600 font-[Charm]">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 font-[Charm]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ============================
            📌 Coluna da direita (Imagem)
        ============================= */}
        <div className="relative flex justify-center items-center">
  
  {/* Imagem principal do pet */}
  <motion.img
    src="/img/hero-pet.png"
    alt="Pet feliz após banho e tosa"
    className="relative w-80 h-80 object-cover rounded-full shadow-2xl"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 100 }}
  />
  {/* Imagem das patas como borda */}
  <motion.img
    src="/img/patas-radion.png"
    alt="Borda de patas"
    className="absolute w-125 h-125 object-cover"
    transition={{ type: "spring", stiffness: 100 }}
  />
</div>

      </div>
    </section>
  );
}
