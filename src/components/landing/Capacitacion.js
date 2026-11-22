import React from 'react';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';
import './Capacitacion.css';

const opciones = [
  {
    titulo: 'Cursos y talleres',
    descripcion:
      'Espacios para actualizar conocimientos, compartir herramientas y reflexionar sobre la práctica.',
    Icono: BookOpen,
  },
  {
    titulo: 'Programa de pasantías',
    descripcion:
      'Experiencia formativa con responsabilidades definidas y participación progresiva.',
    Icono: UsersRound,
  },
  {
    titulo: 'Supervisión profesional',
    descripcion:
      'Seguimiento y orientación por profesionales responsables durante el proceso.',
    Icono: ShieldCheck,
  },
];

const Capacitacion = () => {
  return (
    <section
      id="capacitacion"
      className="landing-training"
      aria-labelledby="training-title"
    >
      <div className="training-inner">
        <div className="training-card">
          <GraduationCap
            className="training-card-icon"
            size={76}
            strokeWidth={1.7}
            aria-hidden="true"
          />
          <p>
            Aprender para
            <br />
            acompañar mejor,
            <br />
            acompañar para crecer
            <br />
            juntos.
          </p>
          <div className="training-card-ring" aria-hidden="true" />
        </div>

        <div className="training-content">
          <p className="training-eyebrow">Capacitación y pasantías</p>
          <h2 id="training-title">
            Formamos con propósito y acompañamiento.
          </h2>
          <p className="training-intro">
            Creamos oportunidades de aprendizaje para quienes desean fortalecer
            su práctica en salud mental, con orientación profesional y
            compromiso ético.
          </p>

          <div className="training-options">
            {opciones.map(({ titulo, descripcion, Icono }) => (
              <article className="training-option" key={titulo}>
                <Icono
                  className="training-option-icon"
                  size={23}
                  strokeWidth={1.9}
                  aria-hidden="true"
                />
                <div>
                  <h3>{titulo}</h3>
                  <p>{descripcion}</p>
                </div>
              </article>
            ))}
          </div>

          <a className="training-link" href="#contacto">
            Consulta por programas
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Capacitacion;
