// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portafolio";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css"; // Assuming you have a styles.css for global styles

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
export default App;
