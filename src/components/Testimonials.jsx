// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Sofía R.", text: "Gracias a Creativix, nuestras ventas online crecieron un 150% en 3 meses." },
  { name: "Luis A.", text: "Su equipo entiende perfectamente lo que mi marca necesita." },
  { name: "Camila G.", text: "Creativix transformó nuestra imagen y nos posicionó como líderes del sector." },
];

function Testimonials() {
  return (
    <section id="testimonios" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-indigo-50 rounded-2xl p-6 shadow"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <p className="italic">“{t.text}”</p>
              <p className="mt-3 font-semibold">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
