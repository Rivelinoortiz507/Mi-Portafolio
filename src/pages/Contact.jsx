import React from 'react';
import '../styles/Contact.css';


const Contact = () => {
  return (
    <div className="contact">
      <h2>Contáctame</h2>
      <p>
        Ya sea que necesites una página web escalable, un rediseño atractivo o una solución personalizada,
        puedo ofrecerte una experiencia a la medida de tus necesidades. Estoy siempre dispuesto a aprender, adaptarme
        y enfrentar nuevos retos.
      </p>
      <div className="contact-info">
        <p>
          <strong>Correo Electrónico:</strong>
          <a href="mailto:rivelinoortiz123@gmail.com">
            rivelinoortiz123@gmail.com <i class="fa-solid fa-envelope icono-gmail"></i>
          </a>
        </p>

        <p>
          <strong>Teléfono:</strong>
          <a href="tel:+50765259259">
            <i class="fa-solid fa-phone icono-cell"></i> Llamar
          </a>
        </p>
        <p>
          <strong>WhatsApp:</strong>
          <a href="https://wa.me/50765259259" target="_blank">
            <i class="fa-brands fa-whatsapp icono-wss"></i> Enviar mensaje
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
