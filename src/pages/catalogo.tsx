// src/pages/Catalogo.tsx
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Catalogo() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white via-pink-50 to-white px-4">
      <h1 className="text-6xl md:text-8xl font-extrabold text-pink-600 text-center mb-8 leading-tight">
        🚧 Em Construção 🚧
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 text-center max-w-2xl mb-12">
        Estamos preparando um catálogo incrível para você! <br />
        Em breve, você poderá conferir todos os nossos produtos e serviços com detalhes completos.
      </p>
      <button
        onClick={() => navigate("/")}
        className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-700 transition transform hover:scale-105"
      >
        <FaHome className="text-xl" />
        Voltar para a Home
      </button>
    </div>
  );
}
