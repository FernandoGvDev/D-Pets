// src/components/Footer.tsx
import { FaWhatsapp, FaInstagram, FaCreditCard, FaMoneyBillWave, FaRegHandshake } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#f7f7f7] border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Informações da empresa */}
        <div className="flex flex-col gap-3">
          <h4 className="text-2xl font-bold text-[#6b21a8]">D, Pets Estética Animal</h4>
          <p className="text-sm text-gray-600">Rua Castelo Branco 297 (Loja 02) - Bela Vista, Alvorada</p>
          <p className="text-sm flex items-center gap-2">
            <FaWhatsapp className="text-[#25D366]" /> 
            <a className="text-[#25D366]" href="https://wa.me/5551984057577">51 98405-7577</a>
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaInstagram className="text-[#E1306C]" /> 
            <a href="https://www.instagram.com/banhoetosaagromania" className="text-[#E1306C]">@banhoetosaagromania</a>
          </p>
        </div>

        {/* Formas de pagamento */}
        <div className="flex flex-col gap-3 text-sm">
          <div className="font-semibold text-gray-700 flex items-center gap-2">
            <FaRegHandshake /> Formas de pagamento:
          </div>
          <div className="flex gap-3 mt-1">
            <span className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md bg-[#34D399] text-white">
              <FaMoneyBillWave /> Pix
            </span>
            <span className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md bg-[#6b21a8] text-white">
              <FaCreditCard /> Cartão
            </span>
            <span className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md bg-[#FBBF24] text-white">
              <FaMoneyBillWave /> Dinheiro
            </span>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-200">
        © {new Date().getFullYear()} D, Pets Estética Animal. Todos os direitos reservados.
      </div>
    </footer>
  );
}
