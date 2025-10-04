// src/components/Cart.tsx
import { useCart } from "../../context/CartContext";
import {Link} from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Carrinho</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul className="space-y-3">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center bg-white p-3 rounded-lg shadow">
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

          <div className="mt-4 flex gap-2">
            <button
              onClick={clearCart}
              className="flex-1 bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              Limpar
            </button>

            <Link
              to="/checkout"
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition"
            >
              Finalizar
            </Link>

          </div>
        </div>
      )}
    </div>
  );
}
