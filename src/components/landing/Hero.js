import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="landing-hero" aria-labelledby="landing-hero-title">
    <div className="hero-inner">
      <div>
        <p className="hero-eyebrow">ESTAMOS PARA ACOMPAÑARTE</p>

        <h1 id="landing-hero-title">
          Un espacio para <span>sentirte escuchado</span> y avanzar a tu ritmo.
        </h1>

        <p className="hero-description">
          En Enfoque y Salud creemos que pedir apoyo es un paso valiente. Te
          acompañamos con cercanía, respeto y atención profesional en cada
          etapa de la vida.
        </p>

        <div className="hero-actions">
          <a className="hero-button hero-button-primary" href="#contacto">
            Agenda tu cita <span aria-hidden="true">→</span>
          </a>
          <a className="hero-button hero-button-secondary" href="#servicios">
            Conoce nuestros servicios
          </a>
        </div>

        <p className="hero-trust">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          Un lugar seguro, humano y libre de juicios
        </p>
      </div>

      <div className="hero-visual">
        <img
          className="hero-mascot"
          src={`${process.env.PUBLIC_URL}/image_d3bc7d.png`}
          alt="Mascota azul de Enfoque y Salud"
        />
        <div className="hero-note hero-note-top">
          <span aria-hidden="true">♡</span>
          Aquí te escuchamos
        </div>
        <div className="hero-note hero-note-bottom">
          <span aria-hidden="true">✧</span>
          A tu propio ritmo
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
