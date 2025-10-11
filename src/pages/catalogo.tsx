import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import ProductCard from "../components/catalogo/ProductCard";
import { products } from "../data/products";

// Opções de filtro de categoria e tipo de animal
const categorias = ["Todos", "Ração", "Brinquedos", "Higiene", "Acessórios", "Alimento", "Cuidado"];
const animais = ["Todos", "Cachorro", "Gato", "Animais Silvestres"];

export default function Catalogo() {
  // Estados de filtro e controle do carrinho lateral
  const [categoria, setCategoria] = useState("Todos");
  const [animal, setAnimal] = useState("Todos");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Funções do contexto do carrinho
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Troca automática dos banners a cada 5 segundos

  // Filtragem dos produtos com base na categoria e tipo de animal selecionado
  const filtrados = products.filter((p) => {
    const matchCat = categoria === "Todos" || p.category.includes(categoria);
    const matchAni = animal === "Todos" || p.animal.includes(animal);
    return matchCat && matchAni;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Cabeçalho fixo */}
      <Header />

      {/* Filtros de categoria e animal */}
      <div className="py-6 bg-gray-100">
        {/* Filtro de categoria */}
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 px-4 mb-3">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                categoria === cat ? "bg-purple-600 text-white" : "bg-white border border-purple-600 text-purple-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtro de tipo de animal */}
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 px-4">
          {animais.map((ani) => (
            <button
              key={ani}
              onClick={() => setAnimal(ani)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                animal === ani ? "bg-yellow-400 text-purple-900" : "bg-white border border-yellow-400 text-yellow-400"
              }`}
            >
              {ani}
            </button>
          ))}
        </div>
      </div>

      {/* Catálogo de produtos */}
      <section className="py-10 px-4 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Renderiza cada produto filtrado */}
        {filtrados.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </section>

      {/* Botão flutuante para abrir o carrinho */}
      <button
        onClick={() => setDrawerOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center"
      >
        <ShoppingCart className="w-6 h-6" />
        {/* Mostra número de itens no carrinho */}
        {cart.length > 0 && (
          <span className="ml-1 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        )}
      </button>

      {/* Drawer (carrinho lateral) */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 p-6 flex flex-col"
          >
            {/* Cabeçalho do carrinho */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Carrinho</h2>
              <button onClick={() => setDrawerOpen(false)} className="text-gray-500 hover:text-gray-800">✕</button>
            </div>

            {/* Se o carrinho estiver vazio */}
            {cart.length === 0 ? (
              <p className="text-gray-600">Seu carrinho está vazio.</p>
            ) : (
              // Lista de produtos no carrinho
              <div className="flex-1 flex flex-col justify-between">
                <ul className="space-y-3 overflow-y-auto">
                  {cart.map((item) => (
                    <li key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                      <div>
                        <p className="font-semibold">{item.name} (x{item.quantity})</p>
                        <p className="text-sm text-gray-600">R$ {(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                        Remover
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Total e botões de ação */}
                <div className="mt-4 flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>

                {/* Link para finalizar no WhatsApp */}
                <Link
                  to="/checkout"
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg text-center hover:bg-green-700"
                  onClick={() => setDrawerOpen(false)}
                >
                  Finalizar no WhatsApp
                </Link>

                {/* Botão para limpar o carrinho */}
                <button
                  onClick={clearCart}
                  className="mt-2 w-full bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400"
                >
                  Limpar Carrinho
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
