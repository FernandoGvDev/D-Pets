// src/components/CheckoutForm.tsx
import { useCart } from "../../context/CartContext";
import { useState } from "react";

export default function CheckoutForm() {
  const { cart, clearCart } = useCart();
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("Dinheiro");
  const [observacao, setObservacao] = useState("");

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Carrinho vazio!");
      return;
    }

    const mensagem =
      `*Novo Pedido*%0A` +
      `Nome: ${nome}%0A` +
      `Endereço: ${endereco}%0A` +
      `Pagamento: ${pagamento}%0A` +
      `Obs: ${observacao}%0A%0A` +
      cart
        .map(
          (item) =>
            `- ${item.name} (x${item.quantity}) = R$ ${(item.price * item.quantity).toFixed(2)}`
        )
        .join("%0A");

    // número do WhatsApp (ex: 55 + DDD + número)
    const numero = "5511999999999";
    window.open(`https://wa.me/${numero}?text=${mensagem}`);

    clearCart();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Finalizar Pedido</h2>

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

      <button
        onClick={handleCheckout}
        className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Enviar Pedido no WhatsApp
      </button>
    </div>
  );
}
