import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const anio = new Date().getFullYear();

  return (
    <footer className="landing-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-about">
            <a className="footer-brand" href="#inicio" aria-label="Enfoque y Salud, inicio">
              <span className="footer-brand-icon" aria-hidden="true">
                <Heart size={25} strokeWidth={2.2} />
              </span>
              <span className="footer-brand-copy">
                <span className="footer-brand-subtitle">
                  Centro de Capacitación y Salud Mental
                </span>
                <span className="footer-brand-name">Enfoque y Salud</span>
              </span>
            </a>

            <p>
              Un espacio de atención psicológica y formación comprometido con
              el cuidado humano, en La Paz, Bolivia.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Explora el sitio">
            <h2>Explora</h2>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#capacitacion">Capacitación</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className="footer-connect">
            <h2>Conecta</h2>
            <span>WhatsApp · pendiente de enlace</span>
            <span>Facebook · pendiente de enlace</span>
            <span>Instagram · pendiente de enlace</span>
            <Link to="/login">Acceso al sistema</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {anio} Enfoque y Salud. La Paz, Bolivia.</p>
          <p>
            Aviso de privacidad: sitio de demostración; no se recopilan ni
            almacenan datos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
