// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Gestión de Redes Sociales", desc: "Contenido atractivo y campañas que convierten.", icon: "📱" },
  { title: "Publicidad Online", desc: "Google Ads y Facebook Ads optimizados para resultados.", icon: "💻" },
  { title: "SEO & Blog", desc: "Mejora tu visibilidad en buscadores con estrategias efectivas.", icon: "📈" },
  { title: "Branding", desc: "Diseño de identidad visual y mensajes que conectan.", icon: "🎨" },
];

function Services() {
  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Nuestros servicios</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="bg-indigo-50 rounded-xl p-6 shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl">{s.icon}</div>
              <h3 className="font-semibold text-lg mt-3">{s.title}</h3>
              <p className="text-gray-600 mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;
