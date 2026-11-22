import React from 'react';
import { Heart, HeartHandshake, Sparkles, UsersRound } from 'lucide-react';
import './Servicios.css';

const servicios = [
  {
    titulo: 'Niños y niñas',
    descripcion:
      'Un espacio de escucha y juego para comprender sus emociones y acompañar su desarrollo.',
    detalle: 'Encuentros adaptados a su edad',
    Icono: Sparkles,
  },
  {
    titulo: 'Adolescentes',
    descripcion:
      'Acompañamiento respetuoso para explorar cambios, vínculos e inquietudes a su propio ritmo.',
    detalle: 'Un espacio seguro para expresarse',
    Icono: UsersRound,
  },
  {
    titulo: 'Adultos',
    descripcion:
      'Atención individual para atravesar desafíos, fortalecer recursos y cuidar el bienestar emocional.',
    detalle: 'Un proceso construido contigo',
    Icono: HeartHandshake,
  },
  {
    titulo: 'Adultos mayores',
    descripcion:
      'Escucha cercana para acompañar transiciones, pérdidas y nuevas etapas de la vida.',
    detalle: 'Atención con respeto y paciencia',
    Icono: Heart,
  },
];

const Servicios = () => {
  return (
    <section
      id="servicios"
      className="landing-services"
      aria-labelledby="services-title"
    >
      <div className="services-inner">
        <header className="services-heading">
          <p className="services-eyebrow">Nuestros servicios</p>
          <h2 id="services-title">
            Acompañamiento para cada etapa de la vida
          </h2>
          <p className="services-intro">
            Cada persona vive procesos diferentes. Adaptamos la atención a sus
            necesidades, siempre desde la escucha y el respeto.
          </p>
        </header>

        <div className="services-grid">
          {servicios.map(({ titulo, descripcion, detalle, Icono }) => (
            <article className="service-card" key={titulo}>
              <div className="service-icon" aria-hidden="true">
                <Icono size={25} strokeWidth={1.9} />
              </div>
              <h3>{titulo}</h3>
              <p className="service-description">{descripcion}</p>
              <div className="service-divider" />
              <p className="service-detail">{detalle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
