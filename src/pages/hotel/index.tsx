import { motion } from "framer-motion";
import { FaPaw, FaHeart, FaBath, FaUtensils, FaDog, FaCut } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hotel() {
  const whatsappLink = `https://wa.me/5551984057577?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Hotel%20Verkoiansk%20Pet%20Hotel.`;

  return (
    <main className="bg-white text-gray-800">

      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-to-r from-amber-400 to-amber-500 py-16 lg:py-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 text-center"
        >
          <h1 className="text-5xl font-bold text-purple-800 flex items-center justify-center gap-2 mb-3 mt-20">
            <FaPaw className="text-pink-500" /> Verkoiansk Pet Hotel
          </h1>
          <p className="text-lg text-gray-700 font-medium">
            O lugar onde o seu pet se sente em casa — com conforto, carinho e diversão!
          </p>
        </motion.div>
      </section>

      {/* ===== SOBRE ===== */}
      <section className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-10 border-x-2 border-amber-400">
        <motion.img
          src="/img/hotel-pet.png"
          alt="Cães brincando no hotel"
          className="w-full lg:w-1/2 rounded-2xl shadow-lg object-cover"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Sobre o Hotel</h2>
          <p className="text-gray-700 mb-4">
            O <strong>Verkoiansk Pet Hotel</strong> foi criado para oferecer um espaço de conforto, cuidado e alegria para cães e gatos de todas as idades. Aqui, os pets contam com áreas amplas, baias individuais, recreação supervisionada e acompanhamento diário.
          </p>
          <p className="text-gray-700 mb-4">
            Nossa equipe é formada por profissionais apaixonados por animais, que garantem um ambiente limpo, seguro e cheio de carinho. Cada hóspede recebe atenção especial para se sentir em casa.
          </p>
          <ul className="space-y-2 text-gray-700">
            {[
              "Baias amplas e confortáveis",
              "Ambiente interno e externo",
              "Área de lazer supervisionada",
              "Hospedagem individual para gatos",
              "Monitoração e cuidados diários",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaPaw className="text-pink-500" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ===== CRONOGRAMA ===== */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-purple-800 mb-8 text-center">Cronograma do Dia</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <FaDog />, title: "Manhã", desc: "Passeio e recreação supervisionada em áreas abertas." },
            { icon: <FaUtensils />, title: "Alimentação", desc: "Refeições balanceadas e adaptadas à dieta de cada pet." },
            { icon: <FaBath />, title: "Cuidados", desc: "Higiene, escovação e banho para manter o bem-estar." },
            { icon: <FaCut />, title: "Petshop Especial", desc: "Tosagem e estética canina e felina com muito amor." },
            { icon: <FaHeart />, title: "Tarde de carinho", desc: "Descanso e socialização com outros hóspedes." },
            { icon: <FaPaw />, title: "Noite", desc: "Acomodações limpas, confortáveis e seguras para dormir." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-md border border-pink-100 text-center"
            >
              <div className="text-pink-600 text-4xl mb-3 flex justify-center">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== PETSHOP ESPECIAL ===== */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-16 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-purple-800 mb-4 flex items-center gap-2">
              <FaCut className="text-pink-600" /> Petshop Especial <strong>D'Pets</strong>
            </h3>
            <p className="text-gray-700 mb-4">
              Além da hospedagem, o Verkoiansk Pet Hotel conta com um Petshop exclusivo <strong>D'Pets</strong>. Assim, o seu pet pode aproveitar o dia com banho, tosa, hidratação e cuidados estéticos feitos por profissionais especializados.
            </p>
            <p className="text-gray-700">
              Todos os serviços são feitos com produtos de qualidade premium, garantindo segurança e conforto para o seu melhor amigo.
            </p>
          </motion.div>

          <motion.img
            src="/img/petshop-especial.jpeg"
            alt="Petshop do hotel"
            className="w-full lg:w-1/2 rounded-2xl shadow-lg object-cover"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="bg-pink-600 text-white py-16 px-6 text-center">
        <motion.h3
          className="text-4xl font-bold mb-4 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <FaHeart className="text-white" /> Reserve a estadia do seu pet hoje!
        </motion.h3>
        <p className="text-lg mb-8">
          Entre em contato e garanta um lugar especial para o seu melhor amigo.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-pink-100 transition"
          >
            Falar no WhatsApp
          </a>
          <Link
            to="/contato"
            className="border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-pink-600 transition font-semibold"
          >
            Saiba mais
          </Link>
        </div>
      </section>
    </main>
  );
}
