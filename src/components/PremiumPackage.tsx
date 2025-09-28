// src/components/PremiumPackage.tsx
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

export default function PremiumPackage() {
  // ✅ Lista de benefícios para destacar
  const benefits = [
    "4 banhos semanais completos",
    "1 tosa higiênica",
    "Hidratação especial",
    "Corte de unhas e limpeza de ouvidos",
    "Escovação dental quando necessário",
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-white via-pink-50 to-white overflow-hidden">
      
      {/* Container principal */}
      <div className="max-w-4xl mx-auto relative z-10 space-y-8">

        {/* Título e descrição */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-pink-600 mb-4">
            Pacote <span className="text-purple-700">Prêmio</span>
          </h3>
          <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto md:mx-0">
            Um pacote completo para cuidar do seu pet com <strong>amor, conforto e sofisticação</strong>. 
            Benefícios que garantem saúde, bem-estar e muita felicidade para seu melhor amigo!
          </p>
        </motion.div>

        {/* ✅ Benefícios destacados em cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md rounded-2xl p-4 text-center hover:shadow-xl transition-shadow duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, type: "spring", stiffness: 100 }}
            >
              <PawPrint className="w-6 h-6 mx-auto mb-2 text-pink-600 animate-bounce-slow" />
              <p className="font-medium text-gray-700">{b}</p>
            </motion.div>
          ))}
        </div>

        {/* Botão de ação */}
        <motion.div
          className="text-center md:text-right mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.a
            href="https://wa.me/5551984057577?text=Quero%20informações%20sobre%20o%20Pacote%20Prêmio"
            className="inline-block bg-gradient-to-r from-pink-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quero esse pacote!
          </motion.a>
        </motion.div>
      </div>

      {/* Patas animadas discretas */}
      <div className="absolute bottom-4 left-0 w-full flex justify-between px-6 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              delay: i * 0.6,
              duration: 0.8,
            }}
          >
            <PawPrint className={`w-8 h-8 text-pink-200/60`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
