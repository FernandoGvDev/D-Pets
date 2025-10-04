// src/components/Header.tsx
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
    <header
      className={`fixed top-0 w-full z-40 transition-colors duration-500 ${
        scrolled ? "bg-white/90 shadow-lg shadow-purple-300/40" : "bg-purple-700"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
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
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            to="/"
            className={`relative ${scrolled ? "text-gray-800" : "text-white"} group`}
          >
            Início
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 transition-all group-hover:w-full"></span>
          </Link>

          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`} // usando hash
              className={`relative group ${scrolled ? "text-gray-800" : "text-white"}`}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 transition-all group-hover:w-full"></span>
            </a>
          ))}

          <Link
            to="/catalogo"
            className="ml-3 flex items-center gap-2 bg-yellow-500 hover:bg-yellow-300 text-white px-4 py-2 rounded-md font-semibold transition transform hover:scale-105 shadow-md"
          >
            <FaStore className="w-5 h-5" /> Ver Loja
          </Link>

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
            className={`transition ${scrolled ? "text-gray-800" : "text-white"}`}
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
        <div className="px-4 py-4 flex flex-col gap-4 bg-white/95 shadow-md">
          <Link to="/" onClick={() => setOpen(false)} className="text-gray-800">
            Início
          </Link>
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={() => setOpen(false)}
              className="text-gray-800 text-left"
            >
              {item.name}
            </a>
          ))}

          <Link
            to="/catalogo"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-semibold transition transform hover:scale-105 shadow-md"
          >
            <FaStore className="w-5 h-5" /> Ver Loja
          </Link>

          <a
            href="https://wa.me/5551984057577"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition transform hover:scale-105"
          >
            <FaWhatsapp className="w-5 h-5" /> Agendar
          </a>
        </div>
      </div>
    </header>
  );
}
