import React from 'react';
import '../styles/Home.css'; // Importar el archivo CSS

const Home = () => {
  return (
    <div className="page-container">
      <div className="home">
        <div className="info">
          <p>¡Hola, soy Rivelino Ortiz!</p>
          <h1>Programador Web Full Stack</h1>
          <p>
            Soy un programador web Full Stack panameño. Me apasiona aprender,
            resolver problemas y crear páginas web funcionales y atractivas. 🚀
          </p>
          {/* Enlace para descargar el currículum */}
          <a href="/curriculum/Rivelino_Ortiz_Curriculum.pdf" download className='download-link'>
            Descargar mi currículum
          </a>
        </div>
        <div className="image">
          <img src="images/my-photo.jpg" alt="Imagen Rivelino Ortiz" />
        </div>
      </div>
    </div>
  );
};

export default Home;
