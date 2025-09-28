// src/components/Header.tsx
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Ícone do WhatsApp

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta rolagem para mudar estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      // Animação inicial (entra de cima com fade-in)
      className={`fixed top-0 w-full z-40 transition-colors duration-500 animate-[slideDown_0.6s_ease-out]
        ${scrolled ? "bg-white/90 shadow-lg shadow-purple-300/40" : "bg-purple-700"}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/img/logo.png"
            alt="D, Pets"
            className="w-14 h-14 rounded-full object-cover"
          />
          <span
            className={`font-bold text-lg transition-colors ${
              scrolled ? "text-purple-700" : "text-white"
            }`}
          >
            AgroPet Estética D'Pets
          </span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {["Início", "Sobre", "Serviços", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative group ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {item}
              {/* Linha animada */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 transition-all group-hover:w-full"></span>
            </a>
          ))}

          {/* Botão Agendar com ícone do WhatsApp e efeito de hover */}
          <a
            href="https://wa.me/5551984057577"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition transform hover:scale-105"
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
            className={`transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                open
                  ? "M6 18L18 6M6 6l12 12" // X
                  : "M4 6h20M4 12h20M4 18h20" // ☰
              }
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-4 bg-white/95 shadow-md">
          {["Início", "Sobre", "Serviços", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="relative group text-gray-800"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 transition-all group-hover:w-full group-focus:w-full"></span>
            </a>
          ))}

          {/* Botão WhatsApp também no menu mobile */}
          <a
            href="https://wa.me/5551984057577"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition transform hover:scale-105"
          >
            <FaWhatsapp className="w-5 h-5" /> Agendar
          </a>
        </div>
      </div>
    </header>
  );
}
