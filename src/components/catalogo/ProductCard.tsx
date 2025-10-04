// src/components/ProductCard.tsx
import { useCart } from "../../context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
};

export default function ProductCard({ id, name, price, img, category }: Product) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center">
      <img src={img} alt={name} className="w-32 h-32 object-cover rounded-xl mb-2" />
      <h3 className="text-gray-800 font-semibold">{name}</h3>
      <p className="text-blue-600 font-bold">R$ {price.toFixed(2)}</p>
      <p className="text-sm text-gray-500">{category}</p>
      <button
        onClick={() => addToCart({ id, name, price, img })}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Adicionar
      </button>
    </div>
  );
}
