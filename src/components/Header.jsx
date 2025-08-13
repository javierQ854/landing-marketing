// src/components/Header.jsx
import React from "react";

function Header() {
  return (
    <header className="fixed w-full top-0 bg-white/90 backdrop-blur shadow z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-extrabold text-indigo-600">Creativix</div>
        <nav className="hidden md:flex gap-6">
          <a href="#servicios" className="hover:text-indigo-600">Servicios</a>
          <a href="#portafolio" className="hover:text-indigo-600">Portafolio</a>
          <a href="#testimonios" className="hover:text-indigo-600">Testimonios</a>
          <a href="#contacto" className="hover:text-indigo-600">Contacto</a>
        </nav>
        <a href="#cotizar" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Solicitar cotización
        </a>
      </div>
    </header>
  );
}
export default Header;
