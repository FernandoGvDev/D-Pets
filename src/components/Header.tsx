import { useState, useEffect } from "react";
import { FaWhatsapp, FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Sobre", id: "sobre" },
    { name: "Serviços", id: "servicos" },
    { name: "Contato", id: "contato" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 overflow-hidden">
      {/* Barra principal */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-purple-700/50"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/img/logo.png"
              alt="D, Pets"
              className="w-14 h-14 rounded-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <span
              className={`font-bold text-lg transition-colors duration-500 ${
                scrolled ? "text-purple-700" : "text-white"
              }`}
            >
              AgroPet Estética D'Pets
            </span>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium ">
            <Link
              to="/"
              className={`relative transition-colors ${
                scrolled ? "text-gray-800" : "text-white"
              } group`}
            >
              Início
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>

            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                className={`relative transition-colors group ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
            ))}

            {/* Botão Ver Loja */}
            <Link
              to="/catalogo"
              className="ml-3 flex items-center gap-2 bg-[#FFD700] hover:bg-yellow-400 text-white px-4 py-2 rounded-2xl font-semibold transition-transform transform hover:scale-105 shadow-md"
            >
              <FaStore className="w-5 h-5" /> Ver Loja
            </Link>

            {/* Botão WhatsApp */}
            <a
              href="https://wa.me/5551984057577"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-4 py-2 rounded-2xl transition-transform transform hover:scale-105 shadow-md"
            >
              <FaWhatsapp className="w-5 h-5" /> Agendar
            </a>
          </nav>

          {/* Botão Mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              className={`transition duration-300 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h20M4 12h20M4 18h20"
                }
              />
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 flex flex-col gap-4 bg-purple-500/80 backdrop-blur-md shadow-md">
            <Link
              to="/#inicio"
              onClick={() => setOpen(false)}
              className="text-gray-800 transition-colors hover:text-purple-600"
            >
              Início
            </Link>
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={() => setOpen(false)}
                className="text-gray-800 text-left transition-colors hover:text-purple-600"
              >
                {item.name}
              </a>
            ))}

            <Link
              to="/catalogo"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 bg-[#FFD700] hover:bg-yellow-400 text-white px-4 py-2 rounded-2xl font-semibold transition-transform transform hover:scale-105 shadow-md"
            >
              <FaStore className="w-5 h-5" /> Ver Loja
            </Link>

            <a
              href="https://wa.me/5551984057577"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-4 py-2 rounded-2xl transition-transform transform hover:scale-105 shadow-md"
            >
              <FaWhatsapp className="w-5 h-5" /> Agendar
            </a>
          </div>
        </div>
      </div>

      {/* Barra de scroll ativo (opcional premium) */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-purple-600 transition-all duration-300"></div>
    </header>
  );
}
