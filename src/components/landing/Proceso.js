import React from 'react';
import { LockKeyhole } from 'lucide-react';
import './Proceso.css';

const pasos = [
  {
    numero: '01',
    titulo: 'Contacto',
    descripcion: 'Escríbenos y cuéntanos brevemente cómo podemos orientarte.',
  },
  {
    numero: '02',
    titulo: 'Primera cita',
    descripcion: 'Nos conocemos y escuchamos lo que necesitas en un espacio seguro.',
  },
  {
    numero: '03',
    titulo: 'Plan de atención',
    descripcion: 'Definimos juntos objetivos y una forma de trabajo adecuada.',
  },
  {
    numero: '04',
    titulo: 'Seguimiento',
    descripcion: 'Revisamos el proceso y ajustamos los pasos según tu evolución.',
  },
];

const Proceso = () => {
  return (
    <>
      <section
        id="proceso"
        className="landing-process"
        aria-labelledby="process-title"
      >
        <div className="process-inner">
          <header className="process-heading">
            <p className="process-eyebrow">Cómo funciona</p>
            <h2 id="process-title">Tu camino, paso a paso</h2>
            <p>
              Un proceso claro para que sepas qué esperar desde el primer
              contacto.
            </p>
          </header>

          <ol className="process-grid">
            {pasos.map(({ numero, titulo, descripcion }) => (
              <li className="process-step" key={numero}>
                <span className="process-number">{numero}</span>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <aside className="privacy-banner" aria-labelledby="privacy-title">
        <div className="privacy-inner">
          <div className="privacy-icon" aria-hidden="true">
            <LockKeyhole size={32} strokeWidth={1.8} />
          </div>
          <div>
            <h2 id="privacy-title">Tu historia está en buenas manos.</h2>
            <p>
              La información clínica se trata con reserva profesional. El
              acceso al sistema institucional está previsto únicamente para
              personal autorizado, con permisos diferenciados según sus
              funciones. Este sitio de presentación no almacena información
              clínica.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Proceso;
