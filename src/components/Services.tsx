import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
import useSEO from "../hooks/useSEO";

export default function Services() {
  // ✅ SEO da página ou seção
  useSEO(
    "Serviços D-Pets - Banho, Tosa e Produtos Premium para Pets",
    "Conheça os serviços da D-Pets: banho, tosa, cuidados especiais e produtos premium para cães e gatos. Agende online ou confira nosso catálogo!"
  );

  const items = [
    {
      title: "Banho & Tosa",
      desc: "Banho completo, tosa higiênica, corte de unhas e limpeza de ouvido. Cuidados profissionais para seu pet.",
      link: "https://wa.me/5551984057577", // WhatsApp
      type: "whats",
      instagram: "banhoetosaagromania", // Instagram adicionado somente onde existe
    },
    {
      title: "Petiscos & Ração",
      desc: "Marcas selecionadas e snacks saudáveis para cães e gatos.",
      link: "/catalogo", // catálogo
      type: "catalogo",
    },
    {
      title: "Brinquedos & Acessórios",
      desc: "Coleiras, camas, brinquedos e acessórios premium para pets.",
      link: "/catalogo", // catálogo
      type: "catalogo",
    },
  ];

  return (
    <section id="servicos" className="relative overflow-hidden">
      {/* Ícone animado decorativo */}
      <motion.div
        className="absolute top-10 left-10 text-pink-100 opacity-40"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        aria-hidden="true"
      >
        <PawPrint size={60} />
      </motion.div>

      {/* Título central */}
      <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-14 text-center">
        Nossos <span className="text-white">Serviços</span>
      </h2>

      {/* Cards de serviços */}
      <div className="grid md:grid-cols-3 gap-10 px-6 lg:px-16">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            className="p-8 bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.3 }}
          >
            {/* Ícone decorativo */}
            <div
              className="absolute -top-6 -left-6 bg-pink-100 p-3 rounded-2xl shadow-md group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              <PawPrint className="text-purple-700 w-6 h-6" />
            </div>

            {/* Título */}
            <h3 className="font-semibold text-2xl mb-4 text-gray-800 group-hover:text-pink-600 transition-colors">
              {item.title}
            </h3>

            {/* Descrição */}
            <p className="text-gray-600 mb-6 leading-relaxed">{item.desc}</p>

            {/* Botões dinâmicos */}
            <div className="flex flex-wrap gap-3 justify-center">
              {/* WhatsApp */}
              {item.type === "whats" && (
                <motion.a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Agendar ${item.title} pelo WhatsApp`}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium shadow-md transition-all bg-purple-700 text-white hover:bg-pink-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Agendar no WhatsApp
                </motion.a>
              )}

              {/* Catálogo */}
              {item.type === "catalogo" && (
                <motion.a
                  href={item.link}
                  target="_self"
                  rel="noopener noreferrer"
                  title={`Ver ${item.title} no catálogo`}
                  className="inline-block px-6 py-3 rounded-full font-medium shadow-md transition-all border border-purple-700 text-purple-700 hover:bg-pink-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver catálogo
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
