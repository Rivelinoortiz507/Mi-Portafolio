import React from 'react';
import '../styles/Technologies.css';

const Technologies = () => {
  const techs = [
    { name: 'HTML', image: '/images/html-1.svg' },
    { name: 'CSS', image: '/images/css-3.svg' },
    { name: 'JavaScript', image: '/images/logo-javascript.svg' },
    { name: 'React', image: '/images/react-2.svg' },
    { name: 'Node.js', image: '/images/nodejs-1.svg' },
    { name: 'Express', image: '/images/nodejs-3.svg' },
    { name: 'MySQL', image: '/images/mysql-3.svg' },
    { name: 'Git', image: '/images/git-icon.svg' },
    { name: 'UX/UI Design', image: '/images/figma-5.svg' },
    { name: 'Bootstrap', image: '/images/bootstrap-5-1.svg' },
    { name: 'Github', image: '/images/github-icon-1.svg' },
  ];

  return (
    <div className="main-container"> {/* Contenedor principal */}
      <div className="technologies">
        <h2>Tecnologías</h2>
        <p>Estas son algunas de las herramientas y tecnologías que utilizo en el desarrollo web:</p>
        <ul className="tech-list">
          {techs.map((tech, index) => (
            <li className="tech-item" key={index}>
              <img src={tech.image} alt={tech.name} className="tech-icon" /> {/* Imágenes de tecnologías */}
              <span className="name">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Technologies;
