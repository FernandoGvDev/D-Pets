// src/pages/Checkout.tsx
import { useCart } from "../context/CartContext";
import { useState } from "react";
import Header from "../components/Header";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("Dinheiro");
  const [observacao, setObservacao] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!nome || !endereco) {
      alert("Preencha nome e endereço!");
      return;
    }
    if (cart.length === 0) {
      alert("Carrinho vazio!");
      return;
    }

    // Monta a mensagem para o WhatsApp
    const mensagem =
      `*Novo Pedido*%0A` +
      `Nome: ${nome}%0A` +
      `Endereço: ${endereco}%0A` +
      `Pagamento: ${pagamento}%0A` +
      `Obs: ${observacao || "Nenhuma"}%0A%0A` +
      cart
        .map(
          (item) =>
            `- ${item.name} (x${item.quantity}) = R$ ${(item.price * item.quantity).toFixed(2)}`
        )
        .join("%0A") +
      `%0A%0ATotal: R$ ${total.toFixed(2)}`;

    // Número do WhatsApp
    const numero = "555184057577";
    window.open(`https://wa.me/${numero}?text=${mensagem}`);

    clearCart();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-3xl mx-auto p-6 pt-40">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Finalizar Pedido</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Seu carrinho está vazio.</p>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            {/* Campos do Cliente */}
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                className="w-full border p-2 rounded-lg"
              />
              <select
                value={pagamento}
                onChange={(e) => setPagamento(e.target.value)}
                className="w-full border p-2 rounded-lg"
              >
                <option>Dinheiro</option>
                <option>PIX</option>
                <option>Cartão</option>
              </select>
              <textarea
                placeholder="Observação (opcional)"
                value={observacao}
                onChange={(e) => setObservacao(e.target.value)}
                className="w-full border p-2 rounded-lg"
              />
            </div>

            {/* Itens do Carrinho */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Itens do Carrinho:</h2>
              <ul className="space-y-2 max-h-60 overflow-y-auto">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Total */}
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>

            {/* Botão de Envio */}
            <button
              onClick={handleCheckout}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Enviar Pedido para o WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
