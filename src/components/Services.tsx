// src/components/Services.tsx
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

export default function Services() {
  // ✅ Itens de serviço
  const items = [
    {
      title: "Banho & Tosa",
      desc: "Banho completo, tosa higiênica, corte de unhas e limpeza de ouvido.",
      link: "https://wa.me/5551984057577", // vai pro WhatsApp
      type: "whats",
    },
    {
      title: "Petriscos & Ração",
      desc: "Marcas selecionadas e snacks saudáveis para seu pet.",
      link: "/catalogo", // vai pro catálogo
      type: "catalogo",
    },
    {
      title: "Brinquedos & Acessórios",
      desc: "Coleiras, camas, brinquedos e muito mais.",
      link: "/catalogo", // vai pro catálogo
      type: "catalogo",
    },
  ];

  return (
    <section
      id="servicos"
      className="relative py-20 bg-gradient-to-b from-white via-pink-50 to-white overflow-hidden"
    >
      {/* ✅ Pegada animada no fundo (detalhe elegante) */}
      <motion.div
        className="absolute top-10 left-10 text-pink-100 opacity-40"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        <PawPrint size={60} />
      </motion.div>

      {/* ✅ Título central */}
      <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-14 text-center">
        Nossos <span className="text-pink-600">Serviços</span>
      </h2>

      {/* ✅ Cards de serviços */}
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
            <div className="absolute -top-6 -left-6 bg-pink-100 p-3 rounded-2xl shadow-md group-hover:scale-110 transition-transform">
              <PawPrint className="text-pink-600 w-6 h-6" />
            </div>

            {/* Título */}
            <h3 className="font-semibold text-2xl mb-4 text-gray-800 group-hover:text-pink-600 transition-colors">
              {item.title}
            </h3>

            {/* Descrição */}
            <p className="text-gray-600 mb-6 leading-relaxed">{item.desc}</p>

            {/* Botão dinâmico */}
            <motion.a
              href={item.link}
              target={item.type === "whats" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`inline-block px-6 py-3 rounded-full font-medium shadow-md transition-all
                ${
                  item.type === "whats"
                    ? "bg-pink-600 text-white hover:bg-pink-700"
                    : "border border-pink-600 text-pink-600 hover:bg-pink-50"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.type === "whats" ? "Agendar no WhatsApp" : "Ver catálogo"}
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
