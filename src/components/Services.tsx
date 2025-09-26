// src/components/Services.tsx
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

export default function Services() {
  const items = [
    { title: 'Banho & Tosa', desc: 'Banho completo, tosa higiênica, corte de unhas, limpeza de ouvido.' },
    { title: 'Petriscos & Ração', desc: 'Marcas selecionadas e snacks saudáveis.' },
    { title: 'Brinquedos & Acessórios', desc: 'Coleiras, camas, brinquedos e mais.' },
  ];

  return (
    <section id="servicos" className="relative py-20 bg-white overflow-hidden">
      
      {/* Pegadas animadas no fundo */}
      <motion.div 
        className="absolute top-10 left-0 text-purple-100 opacity-30"
        animate={{ x: [0, -300] }}
        transition={{ repeat: Infinity, duration: 5, repeatType: "reverse" }}
      >
        <PawPrint size={50} />
      </motion.div>

      <h2 className="text-4xl font-extrabold text-dpets-purple mb-12 text-center">Serviços</h2>

      <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            className="p-6 border border-gray-200 rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: idx * 0.5 }} // entrada mais lenta e sequencial
          >
            <h3 className="font-semibold text-xl mb-2 text-purple-700">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.desc}</p>
            <motion.a
              href="https://wa.me/5551984057577"
              className="inline-block text-white bg-[#34D399] px-4 py-2 rounded-lg font-medium"
              whileHover={{ scale: 1.05, backgroundColor: "#6b21a8" }} // purple-700
              whileTap={{ scale: 0.95, backgroundColor: "#6b21a8" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Agendar
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
