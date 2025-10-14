import { motion } from "framer-motion";

export default function Historia() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-purple-100 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

        {/* Imagem da loja / equipe */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.4f9M1JOHsFKW4GzbWRlMQwHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" // Coloque sua imagem em public/img/
            alt="Equipe D'Pets"
            className="rounded-3xl shadow-2xl object-cover w-full max-w-md hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Texto da história */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-800"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
            Nossa História 💜
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            O <span className="font-semibold text-purple-700">AgroPet Estética D’Pets</span> nasceu
            do amor pelos animais e do desejo de oferecer um espaço onde eles
            sejam tratados com carinho, cuidado e respeito. Tudo começou com um
            pequeno sonho: criar um ambiente acolhedor, onde cada pet pudesse se
            sentir em casa.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Ao longo dos anos, crescemos junto com nossos clientes e amigos
            peludos, sempre priorizando o bem-estar e a saúde deles. Hoje,
            contamos com uma equipe apaixonada e dedicada a proporcionar a
            melhor experiência em estética e cuidados pet da região.
          </p>
          <p className="text-lg leading-relaxed">
            Nosso compromisso é com o <span className="font-semibold text-yellow-500">
              amor, confiança e qualidade
            </span> — valores que fazem parte do nosso dia a dia e de cada
            atendimento aqui na D’Pets.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
