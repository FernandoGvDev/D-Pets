import { motion } from "framer-motion";
import { ShieldCheck, Heart, Sparkles, Users, Award, PawPrint } from "lucide-react";

export default function PorQueConfiar() {
  const motivos = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      titulo: "Amor pelos Animais",
      descricao:
        "Cada pet é tratado com carinho e respeito, como parte da nossa família.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
      titulo: "Profissionais Qualificados",
      descricao:
        "Nossa equipe é treinada e apaixonada por cuidar, garantindo segurança e bem-estar.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
      titulo: "Higiene e Segurança",
      descricao:
        "Ambiente limpo, equipamentos esterilizados e produtos de alta qualidade.",
    },
    {
      icon: <Award className="w-8 h-8 text-purple-700" />,
      titulo: "Padrão Premium",
      descricao:
        "Serviços personalizados com foco na beleza e saúde do seu melhor amigo.",
    },
    {
      icon: <Users className="w-8 h-8 text-pink-600" />,
      titulo: "Clientes Satisfeitos",
      descricao:
        "Mais de 17 mil clientes felizes e 18 mil pets cuidados com dedicação.",
    },
    {
      icon: <PawPrint className="w-8 h-8 text-yellow-500" />,
      titulo: "Clubinhos Exclusivos",
      descricao:
        "Planos de banho e tosa com benefícios especiais e descontos D’Pets.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-purple-100 via-white to-yellow-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Por que confiar na{" "}
          <span className="text-[#FFD700]">D’Pets</span>? 🐾
        </motion.h2>

        <motion.p
          className="text-gray-700 max-w-2xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Cuidar do seu pet é a nossa missão. Aqui, amor, profissionalismo e
          segurança caminham juntos — garantindo que cada visita seja uma
          experiência feliz e tranquila para você e seu bichinho.
        </motion.p>

        {/* Grade dos diferenciais */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {motivos.map((motivo, idx) => (
            <motion.div
              key={motivo.titulo}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-purple-50 rounded-full">{motivo.icon}</div>
                <h3 className="text-xl font-semibold text-purple-800">
                  {motivo.titulo}
                </h3>
                <p className="text-gray-600 text-sm">{motivo.descricao}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/5551984057577?text=Olá%20quero%20saber%20mais%20sobre%20os%20serviços%20da%20D’Pets"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Fale com nossa equipe 💬
          </a>
        </motion.div>
      </div>
    </section>
  );
}
