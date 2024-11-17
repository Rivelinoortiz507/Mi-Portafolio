// src/pages/Projects.jsx
import React from 'react';
import '../styles/Projects.css'; // Importar el archivo CSS si lo necesitas

const Projects = () => {
  return (
    <div className="projects">
       <section className="projects-intro">
        <h1>Mis Proyectos</h1>
        <p>
          A continuación encontrarás una lista de mis proyectos más recientes y los desafíos que he superado en el camino. Me apasiona crear soluciones innovadoras que mejoren la experiencia del usuario y resuelvan problemas reales.
        </p>
      </section>

      {/* Proyecto 1 */}
      <div className="project">
        <h3>Fantasy Books: E-Commerce de Libros</h3>
        <p>
        Fantasy Books es un proyecto de plataforma de comercio electrónico dedicada exclusivamente a la venta de libros del género fantasía, con un enfoque en ediciones difíciles de encontrar y libros de autores emergentes. Aunque el proyecto no es funcional, está diseñado para ofrecer una experiencia de compra personalizada para lectores apasionados por la fantasía, incluyendo coleccionistas y académicos, con acceso a libros de texto y material de investigación.
        </p>
        <a href="https://github.com/Rivelinoortiz507/DPFS_Rivelino_Ortiz.git" target="_blank" rel="noopener noreferrer">
          Ver en GitHub
        </a>
      </div>

      {/* Proyecto 2 */}
      <div className="project">
        <h3>Clima App: Consulta el Clima en Todo el Mundo</h3>
        <p>
        Clima App es una aplicación web que permite a los usuarios consultar el clima en diferentes lugares del mundo en tiempo real. Utilizando una API meteorológica, la aplicación proporciona datos precisos sobre la temperatura, la humedad, la velocidad del viento y más, para cualquier ciudad que el usuario desee consultar.
        </p>
        <a href="https://github.com/Rivelinoortiz507/Aplicacion-Clima-JS.git" target="_blank" rel="noopener noreferrer">
          Ver en GitHub
        </a>
      </div>

      {/* Proyecto 3 */}
      <div className="project">
        <h3>Portfolio Personal: Aprende Desarrollo Web</h3>
        <p>
        Este proyecto es una página personal desarrollada exclusivamente con HTML, CSS, y JavaScript. Está diseñada para destacar habilidades y experiencia como desarrollador web, mientras sirve como un ejemplo práctico de diseño y funcionalidad en el desarrollo frontend.
        </p>
        <a href="https://github.com/Rivelinoortiz507/Proyecto-final-maquetacion-web-.git" target="_blank" rel="noopener noreferrer">
          Ver en GitHub
        </a>
      </div>

    </div>
  );
};

export default Projects;
