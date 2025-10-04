// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Catalogo from "./pages/catalogo";
import { CartProvider } from "./context/CartContext"; // importa o provider
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/checkout" element={<Checkout />} /> {/* Rota do Checkout */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

