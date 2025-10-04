// src/pages/Catalogo.tsx
import { useState, useEffect } from "react";
import ProductCard from "../components/catalogo/ProductCard";
import { products } from "../data/products";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const banners: string[] = Object.values(
  import.meta.glob("../assets/banner/*.{jpg,jpeg,png}", { eager: true, import: "default" })
);

const categorias = [
  "Todos",
  "Ração",
  "Brinquedos",
  "Higiene",
  "Acessórios",
  "Alimento",
  "Cuidado",
];
const animais = ["Todos", "Cachorro", "Gato", "Animais Silvestres"];

export default function Catalogo() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [animalAtivo, setAnimalAtivo] = useState("Todos");
  const [bannerIndex, setBannerIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false); // controla o carrinho lateral

  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const produtosFiltrados = products.filter((p) => {
    const categoriaMatch =
      categoriaAtiva === "Todos" || p.category.includes(categoriaAtiva);
    const animalMatch = animalAtivo === "Todos" || p.animal.includes(animalAtivo);
    return categoriaMatch && animalMatch;
  });

  return (
    <div className="min-h-screen bg-white relative">
      <Header />

      {/* Banner */}
      <section className="py-10 px-4 bg-purple-600">
        <div className="max-w-6xl mx-auto text-center mb-6">
          <h1 className="text-4xl font-bold text-white mb-2">Promoções PetShop</h1>
          <p className="text-lg text-yellow-400 font-semibold">
            Ofertas especiais para cuidar do seu melhor amigo 🐾
          </p>
        </div>

        {banners.length > 0 && (
          <div className="relative w-full h-64 sm:h-96 overflow-hidden rounded-xl shadow-lg max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.img
                key={banners[bannerIndex]}
                src={banners[bannerIndex]}
                alt={`Banner ${bannerIndex + 1}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className="absolute w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {banners.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setBannerIndex(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${i === bannerIndex ? "bg-yellow-400" : "bg-white/50"
                    }`}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Filtros */}
      <section className="py-6 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 px-4 mb-4">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition ${categoriaAtiva === cat
                  ? "bg-purple-600 text-white"
                  : "bg-white border border-purple-600 text-purple-600 hover:bg-purple-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 px-4">
          {animais.map((ani) => (
            <button
              key={ani}
              onClick={() => setAnimalAtivo(ani)}
              className={`px-5 py-2 rounded-full font-semibold transition ${animalAtivo === ani
                  ? "bg-yellow-400 text-purple-900"
                  : "bg-white border border-yellow-400 text-yellow-400 hover:bg-yellow-100"
                }`}
            >
              {ani}
            </button>
          ))}
        </div>
      </section>

      {/* Catálogo */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtosFiltrados.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              img={p.img}
              category={p.category.join(", ")}
            />
          ))}
        </div>
      </section>

      {/* Botão flutuante do carrinho */}
      <button
        onClick={() => setDrawerOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center"
      >
        <ShoppingCart className="w-6 h-6" />
        {cart.length > 0 && (
          <span className="ml-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        )}
      </button>

      {/* Drawer do Carrinho */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Carrinho</h2>
              <button onClick={() => setDrawerOpen(false)} className="text-gray-500 hover:text-gray-800">
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-600">Seu carrinho está vazio.</p>
            ) : (
              <div className="flex-1 flex flex-col justify-between">
                <ul className="space-y-3 overflow-y-auto">
                  {cart.map((item) => (
                    <li key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow">
                      <div>
                        <p className="font-semibold">{item.name} (x{item.quantity})</p>
                        <p className="text-sm text-gray-600">R$ {(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remover
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex justify-between items-center font-bold text-lg text-gray-800">
                  <span>Total:</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>

                <Link
                  to="/checkout"
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg text-center hover:bg-green-700 transition"
                  onClick={() => setDrawerOpen(false)}
                >
                  Finalizar Pedido
                </Link>

                <button
                  onClick={clearCart}
                  className="mt-2 w-full bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400 transition"
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
