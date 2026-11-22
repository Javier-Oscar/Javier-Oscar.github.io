import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="landing-navbar">
      <div className="navbar-brand">
        <div className="navbar-brand-icon" aria-hidden="true">
          💙
        </div>
        <div className="navbar-brand-text">
          <span className="navbar-brand-subtitle">
            Centro de Capacitación y Salud Mental
          </span>
          <span className="navbar-brand-name">Enfoque y Salud</span>
        </div>
      </div>

      <nav className="navbar-links" aria-label="Navegación principal">
        <a className="navbar-link navbar-link-active" href="#inicio">Inicio</a>
        <a className="navbar-link" href="#nosotros">Nosotros</a>
        <a className="navbar-link" href="#servicios">Servicios</a>
        <a className="navbar-link" href="#capacitacion">Capacitación</a>
        <a className="navbar-link" href="#equipo">Equipo</a>
        <a className="navbar-link" href="#contacto">Contacto</a>
      </nav>

      <Link className="navbar-system-link" to="/login">
        Acceso al sistema <span aria-hidden="true">→</span>
      </Link>
    </header>
  );
};

export default Navbar;
