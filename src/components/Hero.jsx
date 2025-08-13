// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="pt-28 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Marketing digital <span className="text-indigo-600">que vende</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Estrategias personalizadas en redes sociales, SEO y publicidad online para hacer crecer tu negocio.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#servicios" className="bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700 transition">
              Conocer servicios
            </a>
            <a href="#portafolio" className="border border-indigo-600 text-indigo-600 px-5 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition">
              Ver portafolio
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80"
            alt="Equipo creativo trabajando"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
export default Hero;
