// src/components/Banho.tsx
import { motion } from "framer-motion";
import { pacotesBanho } from "../data/servicos";

export default function Banho() {
    return (
        <section
            id="banhos"
            className="
            relative overflow-hidden
            bg-[#2c7fbd]
            bg-[url('/img/banho-fundo.png')] 
            bg-no-repeat       
            bg-top             
            bg-center-x         
            bg-contain
  ">

            <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-12 pt-80 pb-20">
                {/* Título */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-amber-400">
                    Pacotes de Banhos
                </h2>

                {/* Pacotes listados */}
                <div className="grid gap-8 md:grid-cols-2">
                    {pacotesBanho.map((pacote, idx) => (
                        <motion.div
                            key={pacote.id}
                            className="bg-white p-6 rounded-2xl shadow-md border-2 border-amber-400"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * idx, duration: 0.6, ease: "easeOut" }}
                        >
                            <h3 className="text-xl font-bold text-amber-400 mb-2">
                                {pacote.titulo}
                            </h3>
                            <p className="text-gray-600 mb-4">{pacote.descricao}</p>

                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {pacote.itens.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
