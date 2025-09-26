// src/components/Location.tsx
import { motion } from "framer-motion";
import {FaMapMarkerAlt } from "react-icons/fa";

export default function Location() {
  return (
    <section id="localizacao" className="relative py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

        {/* Mapa */}
        <motion.div
          className="w-full md:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.7025804972303!2d-51.088674871557345!3d-30.013602337155294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951975e7077c9efd%3A0xfa0a9f346406cf45!2sR.%20Mal.%20Humberto%20de%20Alen%C3%A7ar%20Castelo%20Branco%2C%20297%20-%20Aparecida%2C%20Alvorada%20-%20RS%2C%2094850-810%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1758856689619!5m2!1spt-BR!2sus"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="border-0"
          ></iframe>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-start justify-center gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-extrabold text-[#6b21a8] flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#6b21a8]" /> Nossa Localização
          </h3>
          <p className="text-gray-600">
            Venha nos visitar! Estamos na Rua Castelo Branco 297 (Loja 02), Bela Vista, Alvorada.
          </p>
          <motion.a
            href="https://wa.me/5551984057577?text=Olá!%20Quero%20agendar%20ou%20tirar%20dúvidas"
            className="inline-block bg-[#34D399] px-6 py-3 rounded-lg text-white font-semibold mt-2"
            whileHover={{ scale: 1.05, backgroundColor: "#6b21a8" }}
            whileTap={{ scale: 0.95, backgroundColor: "#6b21a8" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Fale conosco no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
