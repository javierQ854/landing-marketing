// src/components/Portfolio.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  { img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80", title: "Campaña de Moda", category: "Redes Sociales" },
  { img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", title: "E-commerce Salud", category: "SEO & Ads" },
  { img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80", title: "Restaurante Urbano", category: "Branding" },
];

function Portfolio() {
  return (
    <section id="portafolio" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Casos de éxito</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <p className="text-sm text-indigo-600">{p.category}</p>
                <h3 className="font-semibold text-lg">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
