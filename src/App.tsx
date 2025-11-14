// src/App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Home from "./pages/home";
import Catalogo from "./pages/catalogo";
import Checkout from "./pages/Checkout";
import Sobre from "./pages/sobre";
import Hotel from "./pages/hotel/index";

import Header from "./components/Header";
import Footer from "./components/Footer";

import logo from "./assets/img/logo.png";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Splash screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // SEO global da home
  useEffect(() => {
    document.title = "D-Pets Petshop - Banho, Tosa e Produtos para seu Pet";

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "D-Pets Petshop: Banho, Tosa, Higiene e cuidados premium para cães e gatos. Pacotes especiais para manter seu pet limpo e saudável."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "D-Pets Petshop: Banho, Tosa, Higiene e cuidados premium para cães e gatos. Pacotes especiais para manter seu pet limpo e saudável.";
      document.head.appendChild(meta);
    }

    // Open Graph básico
    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.content = "D-Pets Petshop - Banho e Tosa Premium";
    document.head.appendChild(ogTitle);

    const ogDesc = document.createElement("meta");
    ogDesc.setAttribute("property", "og:description");
    ogDesc.content =
      "Pacotes de banho, tosa e cuidados para cães e gatos. Confira nossos serviços e produtos!";
    document.head.appendChild(ogDesc);

    const ogImage = document.createElement("meta");
    ogImage.setAttribute("property", "og:image");
    ogImage.content = logo;
    document.head.appendChild(ogImage);

    const ogType = document.createElement("meta");
    ogType.setAttribute("property", "og:type");
    ogType.content = "website";
    document.head.appendChild(ogType);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-purple-900 z-50">
        <img
          src={logo}
          alt="Logo D-Pets Petshop - Banho e Tosa"
          className="w-80 h-80 object-contain animate-pulse"
        />
      </div>
    );
  }

  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/hotel" element={<Hotel />} />
        </Routes>
        <div id="contato">
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
