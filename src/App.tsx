// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Catalogo from './pages/catalogo';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </Router>
  );
}
