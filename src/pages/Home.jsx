import React from 'react';
import '../styles/Home.css'; // Importar el archivo CSS

const Home = () => {
  return (
    <div className="page-container">
      <div className="home">
        <div className="info">
          <h1>¡Hola, soy Rivelino Ortiz!</h1>
          <p>
            Soy un desarrollador web con experiencia en tecnologías como React, CSS, HTML, JavaScript y Express.
            Me especializo en desarrollar paginas web escalables, combinando un sólido conocimiento de bases de datos MySQL
            con un enfoque en diseño UX/UI para ofrecer experiencias atractivas y funcionales.
            Siempre en constante aprendizaje, me apasiona resolver problemas complejos y trabajar en equipo.
          </p>
        </div>
        <div className="image">
          <img src="public/images/my-photo.jpg" alt="Imagen Rivelino Ortiz" />
        </div>
      </div>
    </div>
  );
};

export default Home;
