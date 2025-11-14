import { motion } from "framer-motion";
import { FaPaw, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HotelPetCTA() {
  const whatsappLink = `https://wa.me/555184057577?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Hotel%20para%20Pets.`

  return (
    <section className="w-full bg-amber-400 py-12 px-6 flex flex-col lg:flex-row items-center justify-center gap-10 overflow-hidden">
      
      {/* Imagem animada */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <img
          src="/img/hotel-pet.png"
          alt="Pets hospedados no hotel"
          className="rounded-2xl shadow-lg w-[90%] lg:w-[80%] object-cover border-x-2 border-x-purple-800"
        />
      </motion.div>

      {/* Texto */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left "
      >
        <h2 className="text-4xl font-bold text-purple-800 mb-2 flex items-center justify-center lg:justify-start gap-2">
          <FaPaw className="text-pink-500" />
          Hotel D'Pets
        </h2>
        <p className="text-lg font-medium text-pink-600 mb-4">Para cães e gatos</p>

        <p className="text-gray-900 text-lg leading-relaxed mb-3">
          Você já sabe com quem vai deixar seu filho(a) de quatro patas quando for viajar?
          <br />
          <span className="font-semibold text-purple-700">Conheça nosso Hotel</span>
        </p>

        <p className="text-gray-900 text-base mb-6 flex flex-col items-center lg:items-start">
          Aqui seu pet vai se sentir em casa e fazer
          <span className="flex items-center justify-center lg:justify-start gap-2 mt-2 text-pink-600 font-medium">
            <FaHeart /> Parte da nossa família! <FaHeart />
          </span>
        </p>

        {/* Lista de benefícios */}
        <ul className="space-y-2 text-gray-900 mb-6">
          {[
            "Baias amplas e confortáveis",
            "Ambiente interno e externo",
            "Área de lazer supervisionada",
            "Hospedagem individual para gatos",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <FaPaw className="text-pink-500" /> {item}
            </li>
          ))}
        </ul>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
          >
            Entrar em contato
          </a>
          <Link
            to="/hotel"
            className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Saiba mais
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
