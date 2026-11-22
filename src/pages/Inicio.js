import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Nosotros from '../components/landing/Nosotros';
import Servicios from '../components/landing/Servicios';
import Capacitacion from '../components/landing/Capacitacion';
import Equipo from '../components/landing/Equipo';
import Proceso from '../components/landing/Proceso';
import PreguntasFrecuentes from '../components/landing/PreguntasFrecuentes';
import Contacto from '../components/landing/Contacto';
import Footer from '../components/landing/Footer';

const Inicio = () => {
  return (
    <div
      style={{
        backgroundColor: '#F8FBFF',
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <Navbar />

      <main>
        <div id="inicio" style={{ scrollMarginTop: '90px' }}>
          <Hero />
        </div>

        <Nosotros />
        <Servicios />
        <Capacitacion />
        <Equipo />
        <Proceso />
        <PreguntasFrecuentes />
        <Contacto />
        <Footer/>
        
      </main>
    </div>
  );
};

export default Inicio;