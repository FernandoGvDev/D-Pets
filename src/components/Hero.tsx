import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const stats = [
    { value: 18000, label: "Pets atendidos" },
    { value: 17000, label: "Clientes felizes" },
    { value: 190, label: "Produtos premium" },
  ];

  // Estados para animação dos números
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 1200; // 1,2s
      const increment = end / (duration / 16); // assume ~60fps
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = Math.floor(start);
          return newCounts;
        });
      }, 16);
    });
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#A78BFA] to-[#F9A8D4] py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 gap-12 relative z-10 pt-10">
        {/* Coluna do texto */}
        <div className="space-y-6 text-white">
          <h1 className="text-4xl lg:text-6xl font-serif font-extrabold leading-tight">
            Cuidando do seu{" "}
            <span className="text-[#FFD700]">melhor amigo </span>
            com carinho e{" "}
            <span className="text-[#FFD700]">elegância</span>
          </h1>

          <p className="text-gray-100 max-w-lg leading-relaxed">
            Banho, tosa e cuidados especiais para deixar seu pet feliz e
            saudável, em um ambiente acolhedor e sofisticado.
          </p>

          {/* Botão principal */}
          <a
            href="https://wa.me/5551984057577?text=Olá%20quero%20agendar%20um%20serviço"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform w-full sm:w-auto"
          >
            <FaWhatsapp className="text-2xl" />
            Agendar no WhatsApp
          </a>

          {/* Botões secundários lado a lado */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="https://www.instagram.com/seuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:scale-105 transition-transform"
            >
              Instagram
            </a>
            <a
              href="#servicos"
              className="flex-1 text-center border-2 border-[#FFD700] text-[#FFD700] px-6 py-3 rounded-full font-medium hover:bg-[#FFD700] hover:text-white transition"
            >
              Nossos Serviços
            </a>
          </div>

          {/* Estatísticas animadas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/20 backdrop-blur-md rounded-2xl p-5 text-center shadow-md"
              >
                
                <p className="text-3xl font-bold text-[#FFD700]">+{counts[i]}</p>
                <p className="text-sm text-gray-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
