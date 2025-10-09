import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Hero() {
  const stats = [
    { value: 18000, label: "Pets atendidos" },
    { value: 17000, label: "Clientes felizes" },
    { value: 190, label: "Produtos premium" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 1200;
      const increment = end / (duration / 16);
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
      className="relative py-24 overflow-hidden bg-[url('/img/hero-fundo.png')] bg-no-repeat bg-cover bg-bottom"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-10">
        {/* Grid Desktop: duas colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna de Texto */}
          <div className="space-y-6 text-white ">
            <h1 className="text-4xl lg:text-6xl font-serif font-extrabold leading-tight">
              Banhos humanizados, cuidando do seu {" "}
              <span className="text-[#FFD700]">Pet </span>
              com {" "}
              <span className="text-[#FFD700]">Amor </span>
              e {" "}
              <span className="text-[#FFD700]">Carinho </span>
            </h1>

            <p className="text-gray-800 max-w-lg leading-relaxed">
              Banho, tosa e cuidados especiais para deixar seu pet feliz e
              saudável, em um ambiente acolhedor.
            </p>

            {/* WhatsApp e Instagram lado a lado */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="https://wa.me/5551984057577?text=Olá%20quero%20agendar%20um%20serviço"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                <FaWhatsapp className="text-2xl" />
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/seuperfil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                <FaInstagram className="text-2xl" />
                Instagram
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

          {/* Coluna da Imagem (somente desktop) */}
          <div className="hidden lg:flex justify-center">
            <img
              src="/img/hero-pc.png"
              alt="Decoração"
              className="w-80 lg:w-96 xl:w-[28rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
