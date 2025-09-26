// src/components/PremiumPackage.tsx
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

export default function PremiumPackage() {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-r from-white to-dpets-pink/40 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div>
            <h3 className="text-3xl font-bold text-purple-700 mb-2">Pacote Prêmio</h3>
            <p className="text-gray-600 mb-2">
              4 banhos (1/semana), 1 tosa higiênica, 1 hidratação, corte de unhas, limpeza de ouvido quando necessário e escovação dental.
            </p>
            <p className="text-sm">
              <strong>Observação:</strong> Valor total do pacote deve ser pago no primeiro banho.
            </p>
          </div>
          <div className="text-center md:text-right">
            <motion.div className="text-xl font-bold text-purple-700 mb-3">Consulte preço</motion.div>
            <motion.a
              href="https://wa.me/5551984057577?text=Quero%20informações%20sobre%20o%20Pacote%20Prêmio"
              className="inline-block bg-[#ffd700] px-4 py-2 rounded-md font-medium"
              whileHover={{ scale: 1.05, backgroundColor: "#6b21a8", color: "#fff" }}
              whileTap={{ scale: 0.95, backgroundColor: "#6b21a8", color: "#fff" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Quero esse pacote!
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Patas animadas indo da esquerda para a direita, mais para baixo */}
      <div className="absolute bottom-4 left-0 w-full flex justify-between px-6 z-0">
        {Array.from({ length: 12 }).map((_, i) => {
          // alterna a rotação para parecer andando reto
          const rotation = i % 2 === 0 ? "rotate-60" : "-rotate-0";
          const offsetY = i % 2 === 0 ? "translate-y-1" : "translate-y-2";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, x: -50 }}
              animate={{ opacity: 1, y: 0, x: 0 }} // indo da esquerda para a direita
              transition={{
                delay: i * 0.9,
                duration: 0.7,
              }}
            >
              <PawPrint className={`w-8 h-8 text-purple-400/60 ${rotation} ${offsetY}`} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
