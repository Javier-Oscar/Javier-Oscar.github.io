import React, { useState } from 'react';
import {
  ArrowRight,
  Clock3,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import './Contacto.css';

const motivos = [
  'Quiero agendar una cita',
  'Información sobre capacitación',
  'Información sobre pasantías',
  'Otra consulta',
];

const datosContacto = [
  {
    titulo: 'Ubicación',
    detalle: 'Dirección por confirmar · La Paz, Bolivia',
    Icono: MapPin,
  },
  {
    titulo: 'Teléfono y WhatsApp',
    detalle: 'Número por confirmar',
    Icono: Phone,
  },
  {
    titulo: 'Correo electrónico',
    detalle: 'Correo por confirmar',
    Icono: Mail,
  },
  {
    titulo: 'Horario de atención',
    detalle: 'Horario por confirmar',
    Icono: Clock3,
  },
];

const Contacto = () => {
  const [estadoDemo, setEstadoDemo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setEstadoDemo(
      'Esta es una demostración. El mensaje no se envió ni se guardó.'
    );
  };

  return (
    <section
      id="contacto"
      className="landing-contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-inner">
        <div className="contact-info">
          <p className="contact-eyebrow">Hablemos</p>
          <h2 id="contact-title">Estamos aquí para escucharte.</h2>
          <p className="contact-intro">
            Da el primer paso cuando estés listo. Completa el formulario para
            ver cómo funcionaría la solicitud de contacto.
          </p>

          <address className="contact-details">
            {datosContacto.map(({ titulo, detalle, Icono }) => (
              <div className="contact-detail" key={titulo}>
                <Icono size={21} strokeWidth={1.9} aria-hidden="true" />
                <div>
                  <strong>{titulo}</strong>
                  <span>{detalle}</span>
                </div>
              </div>
            ))}
          </address>

          <div
            className="contact-map-placeholder"
            role="img"
            aria-label="Mapa pendiente de la confirmación de la dirección"
          >
            <MapPin size={28} strokeWidth={1.9} aria-hidden="true" />
            <strong>Mapa de ubicación</strong>
            <span>Se mostrará al confirmar la dirección.</span>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>Envíanos un mensaje</h3>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="contact-name">Nombre completo *</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">Teléfono *</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Tu número de contacto"
                  required
                />
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="contact-reason">Motivo de contacto *</label>
                <select id="contact-reason" name="reason" required defaultValue="">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {motivos.map((motivo) => (
                    <option key={motivo} value={motivo}>
                      {motivo}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="contact-message">Mensaje *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Cuéntanos brevemente cómo podemos ayudarte (sin incluir información clínica sensible)"
                  rows="4"
                  aria-describedby="contact-privacy-note"
                  required
                />
              </div>
            </div>

            <p className="contact-privacy-note" id="contact-privacy-note">
              <LockKeyhole size={15} aria-hidden="true" />
              <span>
                Esta es una demostración: el mensaje no se envía ni se guarda.
                No compartas información clínica sensible aquí.
              </span>
            </p>

            <button className="contact-submit" type="submit">
              Enviar consulta
              <ArrowRight size={17} aria-hidden="true" />
            </button>

            <p className="contact-demo-status" role="status" aria-live="polite">
              {estadoDemo}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
