import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './PreguntasFrecuentes.css';

const preguntas = [
  {
    pregunta: '¿Cómo puedo solicitar una primera cita?',
    respuesta:
      'Puedes dejarnos un mensaje en el formulario de contacto. Cuando tengamos nuestros canales oficiales disponibles, también podrás escribirnos por WhatsApp o llamarnos.',
  },
  {
    pregunta: '¿La atención es confidencial?',
    respuesta:
      'Sí. La información compartida durante la atención se trata con reserva profesional, según las normas éticas y legales aplicables. En el sistema interno, el acceso se limita según funciones autorizadas.',
  },
  {
    pregunta: '¿Atienden a niños, adolescentes y adultos?',
    respuesta:
      'Sí. Brindamos acompañamiento psicológico a niños, adolescentes, adultos y adultos mayores, con un abordaje adecuado a cada etapa de vida.',
  },
  {
    pregunta: '¿Los pasantes realizan atención sin supervisión?',
    respuesta:
      'No. Las actividades de pasantía se desarrollan bajo la orientación y supervisión de profesionales responsables.',
  },
  {
    pregunta: '¿Ofrecen cursos o talleres?',
    respuesta:
      'Sí. El centro contempla actividades de capacitación y formación. Consulta los próximos temas y fechas cuando se publiquen los canales oficiales.',
  },
];

const PreguntasFrecuentes = () => {
  const [preguntaAbierta, setPreguntaAbierta] = useState(null);

  return (
    <section
      id="preguntas-frecuentes"
      className="landing-faq"
      aria-labelledby="faq-title"
    >
      <div className="faq-inner">
        <header className="faq-heading">
          <p className="faq-eyebrow">Preguntas frecuentes</p>
          <h2 id="faq-title">Resolvamos tus dudas</h2>
        </header>

        <div className="faq-list">
          {preguntas.map(({ pregunta, respuesta }, index) => {
            const estaAbierta = preguntaAbierta === index;
            const idRespuesta = `faq-answer-${index}`;

            return (
              <article className="faq-item" key={pregunta}>
                <h3>
                  <button
                    className="faq-trigger"
                    type="button"
                    id={`faq-question-${index}`}
                    aria-expanded={estaAbierta}
                    aria-controls={idRespuesta}
                    onClick={() =>
                      setPreguntaAbierta(estaAbierta ? null : index)
                    }
                  >
                    <span>{pregunta}</span>
                    <ChevronDown
                      className="faq-chevron"
                      size={19}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  className={`faq-answer${estaAbierta ? ' faq-answer-open' : ''}`}
                  id={idRespuesta}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  aria-hidden={!estaAbierta}
                >
                  <div className="faq-answer-content">
                    <p>{respuesta}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;

