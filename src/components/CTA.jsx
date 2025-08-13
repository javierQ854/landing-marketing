// src/components/CTA.jsx
import React from "react";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section id="cotizar" className="py-16 bg-indigo-600 text-white text-center">
      <motion.h3
        className="text-3xl font-extrabold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ¿Listo para escalar tu negocio?
      </motion.h3>
      <motion.p
        className="mt-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Solicita una propuesta personalizada sin compromiso.
      </motion.p>
      <motion.a
        href="#contacto"
        className="mt-6 inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        Solicitar propuesta
      </motion.a>
    </section>
  );
}
export default CTA;
