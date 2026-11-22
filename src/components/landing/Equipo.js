import React from 'react';
import { UserRound } from 'lucide-react';
import './Equipo.css';

const profesionales = [
  {
    nombre: 'Profesional por confirmar 1',
    area: 'Psicología clínica · Datos por completar',
  },
  {
    nombre: 'Profesional por confirmar 2',
    area: 'Psicología infantojuvenil · Datos por completar',
  },
  {
    nombre: 'Profesional por confirmar 3',
    area: 'Supervisión y formación · Datos por completar',
  },
];

const Equipo = () => {
  return (
    <section
      id="equipo"
      className="landing-team"
      aria-labelledby="team-title"
    >
      <div className="team-inner">
        <header className="team-heading">
          <p className="team-eyebrow">Nuestro equipo</p>
          <h2 id="team-title">Personas que acompañan personas</h2>
          <p>
            Un equipo comprometido con una atención cercana y una formación
            responsable.
          </p>
        </header>

        <div className="team-grid">
          {profesionales.map(({ nombre, area }) => (
            <article className="team-card" key={nombre}>
              <div
                className="team-photo-placeholder"
                role="img"
                aria-label={`Foto referencial pendiente para ${nombre}`}
              >
                <UserRound
                  className="team-placeholder-icon"
                  size={66}
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <span className="team-photo-label">Foto referencial</span>
              </div>

              <div className="team-card-content">
                <h3>{nombre}</h3>
                <p>{area}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipo;
