import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

const categorias = ["Todos", "Ração", "Brinquedos", "Higiene", "Acessórios", "Alimento", "Cuidado"];
const animais = ["Todos", "Cachorro", "Gato", "Animais Silvestres"];

interface ImagemSelecionada {
  img: string;
  name: string;
  description: string;
}

export default function Catalogo() {
  const [categoria, setCategoria] = useState("Todos");
  const [animal, setAnimal] = useState("Todos");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [imagemSelecionada, setImagemSelecionada] = useState<ImagemSelecionada | null>(null);
  const [aviso, setAviso] = useState(false);

  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filtrados = products.filter((p) => {
    const matchCat = categoria === "Todos" || p.category.includes(categoria);
    const matchAni = animal === "Todos" || p.animal.includes(animal);
    return matchCat && matchAni;
  });

  // Fechar modal no botão voltar ou tecla ESC
  const handleBack = () => {
  if (imagemSelecionada) {
    setImagemSelecionada(null);
    window.history.pushState(null, "", window.location.href);
  }
};
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && imagemSelecionada) setImagemSelecionada(null);
    };
    window.addEventListener("popstate", handleBack);
    window.addEventListener("keydown", handleKey);
    if (imagemSelecionada) window.history.pushState({ modal: true }, "");
    return () => {
      window.removeEventListener("popstate", handleBack);
      window.removeEventListener("keydown", handleKey);
    };
  }, [imagemSelecionada]);

  // Mostra aviso temporário ao adicionar produto
  const mostrarAviso = () => {
    setAviso(true);
    setTimeout(() => setAviso(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Filtros */}
      <div className="py-6 pt-40 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 px-4 mb-3">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                categoria === cat
                  ? "bg-purple-600 text-white"
                  : "bg-white border border-purple-600 text-purple-600"
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
              onClick={() => setAnimal(ani)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                animal === ani
                  ? "bg-yellow-400 text-purple-900"
                  : "bg-white border border-yellow-400 text-yellow-400"
              }`}
            >
              {ani}
            </button>
          ))}
        </div>
      </div>

      {/* Catálogo */}
      <section className="py-10 px-4 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtrados.map((p) => (
          <div
            key={p.id}
            className="relative bg-white border rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={p.img}
              alt={p.name}
              loading="lazy"
              onClick={() =>
                setImagemSelecionada({ img: p.img, name: p.name, description: p.description })
              }
              className="w-full h-52 object-contain bg-purple-600 cursor-pointer transition-transform duration-200 hover:scale-105"
            />

            <div className="p-3 flex flex-col justify-between">
              <p className="font-semibold text-gray-800 text-sm">{p.name}</p>
              <p className="text-purple-600 font-bold mb-2">R$ {p.price.toFixed(2)}</p>

              {/* Botão adicionar ao carrinho */}
              <button
                onClick={() => {
                  addToCart(p);
                  mostrarAviso();
                }}
                className="w-full bg-yellow-400 text-purple-900 font-semibold py-1.5 rounded-lg hover:bg-yellow-500 transition flex items-center justify-center gap-1"
              >
                <ShoppingCart size={16} />
                Adicionar
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Modal da imagem ampliada */}
      <AnimatePresence>
        {imagemSelecionada && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-90 px-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={imagemSelecionada.img}
              alt={imagemSelecionada.name}
              className="max-h-[70vh] max-w-[90vw] object-contain rounded-xl shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 bg-white/10 backdrop-blur-md text-white p-4 rounded-xl max-w-md"
            >
              <h3 className="font-bold text-lg">{imagemSelecionada.name}</h3>
              <p className="text-sm mt-2">{imagemSelecionada.description}</p>
            </motion.div>
            <button
              onClick={() => setImagemSelecionada(null)}
              className="absolute top-5 right-5 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition"
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Aviso de produto adicionado */}
      <AnimatePresence>
        {aviso && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-24 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50"
          >
            <CheckCircle size={20} />
            Produto adicionado ao carrinho!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante carrinho */}
      <button
        onClick={() => setDrawerOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center"
      >
        <ShoppingCart className="w-6 h-6" />
        {cart.length > 0 && (
          <span className="ml-1 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        )}
      </button>

      {/* Drawer do carrinho */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Carrinho</h2>
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
                    <li key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                      <div>
                        <p className="font-semibold">
                          {item.name} (x{item.quantity})
                        </p>
                        <p className="text-sm text-gray-600">
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </p>
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

                <div className="mt-4 flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>

                <Link
                  to="/checkout"
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg text-center hover:bg-green-700"
                  onClick={() => setDrawerOpen(false)}
                >
                  Finalizar no WhatsApp
                </Link>

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
