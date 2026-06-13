// src/components/Location.tsx
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import useSEO from "../hooks/useSEO";

export default function Location() {
  // ✅ SEO
  useSEO(
    "Localização D-Pets - Banho, Tosa e Serviços para Pets",
    "Visite a D-Pets em Alvorada! Endereço, mapa e WhatsApp para agendar banho, tosa e cuidados para seu pet."
  );

  return (
    <section
      id="localizacao"
      className="relative py-20 rounded-3xl bg-gradient-to-b from-white via-pink-50 to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* ============================
            📌 Mapa com estilo e animação
        ============================= */}
        <motion.div
          className="w-full md:w-1/2 h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Círculo de fundo elegante atrás do mapa */}
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-40 z-0"></div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.81276849037!2d-51.08810389999999!3d-30.0135321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519755bcc9eca49%3A0xe575af0618e4730e!2sD%C2%B4PETS%20EST%C3%89TICA%20ANIMAL%20E%20AGROPET!5e0!3m2!1spt-BR!2sbr!4v1761855441439!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="border-0 relative z-10 rounded-2xl"
            title="Mapa D-Pets Alvorada"
          ></iframe>
        </motion.div>

        {/* ============================
            📌 Coluna do CTA (texto + botão)
        ============================= */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-start justify-center gap-6 relative z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Título com ícone e pulse */}
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-purple-700 flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaMapMarkerAlt className="text-purple-700" />
            </motion.div>
            Nossa Localização
          </h3>

          {/* Subtítulo elegante */}
          <p className="text-gray-700 text-lg max-w-md">
            Venha nos visitar! Estamos na Rua Juruá 297 (Sala 02) - Bairro Aparecida, Alvorada. Um espaço acolhedor para você e seu pet.
          </p>

          {/* Botão WhatsApp chamativo */}
          <motion.a
            href="https://wa.me/5551984057577?text=Olá!%20Quero%20agendar%20ou%20tirar%20dúvidas"
            className="inline-flex items-center gap-3 bg-purple-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(107,33,168,0.6)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            title="Fale conosco no WhatsApp"
          >
            Fale conosco no WhatsApp
            <FaMapMarkerAlt />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}