// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Catalogo from "./pages/catalogo";
import { CartProvider } from "./context/CartContext"; // importa o provider
import Checkout from "./pages/Checkout";
import Sobre from "./pages/sobre";
import Footer from "./components/Footer";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <div id="contato"><Footer /></div>
      </Router>
    </CartProvider>
  );
}

