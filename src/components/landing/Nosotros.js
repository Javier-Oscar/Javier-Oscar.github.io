import React from 'react';
import './Nosotros.css';

const valores = [
  ['Empatía', 'Escuchamos sin juzgar.'],
  ['Ética profesional', 'Actuamos con responsabilidad.'],
  ['Respeto', 'Valoramos cada historia.'],
  ['Aprendizaje', 'Crecemos junto a nuestra comunidad.'],
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="landing-about" aria-labelledby="nosotros-titulo">
      <div className="about-inner">
        <div>
          <p className="about-label">Quiénes somos</p>
          <h2 id="nosotros-titulo">Cuidar la salud mental es cuidar a las personas.</h2>
          <p>
            Somos un centro de atención psicológica y formación en La Paz,
            Bolivia. Nuestra misión es ofrecer un espacio de escucha y
            acompañamiento ético, accesible y respetuoso para personas de todas
            las edades.
          </p>
          <p>
            Nuestra visión es aportar a una comunidad donde hablar de salud
            mental sea natural y donde cada persona encuentre apoyo oportuno.
          </p>

          <ul className="about-values">
            {valores.map(([titulo, descripcion]) => (
              <li key={titulo}>
                <span className="about-check" aria-hidden="true">✓</span>
                <div>
                  <strong>{titulo}</strong>
                  <small>{descripcion}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="about-card">
          <div className="about-art">
            <img
              src={`${process.env.PUBLIC_URL}/image_d3bc7d.png`}
              alt=""
              loading="lazy"
            />
          </div>
          <figcaption>Cada historia merece un espacio seguro.</figcaption>
        </figure>
      </div>
    </section>
  );
}
