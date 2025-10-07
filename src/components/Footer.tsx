// src/components/Footer.tsx
import { FaWhatsapp, FaInstagram, FaCreditCard, FaMoneyBillWave, FaRegHandshake, FaBoxOpen } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contato" className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* ============================
            📌 Informações da empresa
        ============================= */}
        <div className="flex flex-col gap-3">
          <h4 className="text-2xl font-bold text-purple-700">D, Pets Estética Animal</h4>
          <p className="text-sm text-gray-600">Rua Castelo Branco 297 (Loja 02) - Bela Vista, Alvorada</p>
          
          <p className="text-sm flex items-center gap-2">
            <FaWhatsapp className="text-[#25D366]" /> 
            <a className="hover:underline text-[#25D366]" href="https://wa.me/5551984057577">51 98405-7577</a>
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaInstagram className="text-[#E1306C]" /> 
            <a className="hover:underline text-[#E1306C]" href="https://www.instagram.com/banhoetosaagromania">@banhoetosaagromania</a>
          </p>

          {/* Link para catálogo */}
          <p className="text-sm flex items-center gap-2 mt-2">
            <FaBoxOpen className="text-[#6b21a8]" /> 
            <a className="hover:underline text-[#6b21a8]" href="/catalogo">Veja nosso Catálogo</a>
          </p>
        </div>

        {/* ============================
            📌 Formas de pagamento
        ============================= */}
        <div className="flex flex-col gap-3 text-sm">
          <div className="font-semibold text-gray-700 flex items-center gap-2">
            <FaRegHandshake /> Formas de pagamento:
          </div>
          <div className="flex flex-wrap gap-3 mt-1">
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#34D399] text-white hover:brightness-110 transition">
              <FaMoneyBillWave /> Pix
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#6b21a8] text-white hover:brightness-110 transition">
              <FaCreditCard /> Cartão
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#FBBF24] text-white hover:brightness-110 transition">
              <FaMoneyBillWave /> Dinheiro
            </span>
          </div>
        </div>

        {/* ============================
            📌 Sobre ou mensagem final
        ============================= */}
        <div className="flex flex-col gap-3 text-sm text-gray-600">
          <p>Atendimento dedicado para você e seu pet.</p>
          <p className="mt-2">Horário: 09:00 - 15:00 / 19:15 - 22:00</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-200">
        © {new Date().getFullYear()} D, Pets Estética Animal. Todos os direitos reservados.
      </div>
      <div className="text-center text-xs text-gray-400 pt-2">
        <a href="https://codificaweb.pages.dev/">Desenvolvido por CodificaWeb</a>
      </div>
    </footer>
  );
}
