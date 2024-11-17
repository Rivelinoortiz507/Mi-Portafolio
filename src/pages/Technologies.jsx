import React from 'react';
import '../styles/Technologies.css';

const Technologies = () => {
  const techs = [
    { name: 'HTML', icon: <i class="fa-brands fa-html5"></i> },
    { name: 'CSS', icon: <i class="fa-brands fa-css3-alt"></i> },
    { name: 'JavaScript', icon: <i class="fa-brands fa-js"></i>},
    { name: 'React', icon: <i class="fa-brands fa-react"></i> },
    { name: 'Node.js', icon: <i class="fa-brands fa-node"></i>},
    { name: 'Express', icon: <i class="fa-solid fa-rocket"></i> },
    { name: 'MySQL', icon: <i class="fa-solid fa-database"></i> },
    { name: 'Git', icon:<i class="fa-brands fa-git-alt"></i> },
    { name: 'UX/UI Design', icon:<i class="fa-brands fa-figma"></i>},
  ];

  return (
    <div className="main-container"> {/* Contenedor principal */}
      <div className="technologies">
        <h2>Tecnologías</h2>
        <p>Estas son algunas de las herramientas y tecnologías que utilizo en el desarrollo web:</p>
        <ul className="tech-list">
          {techs.map((tech, index) => (
            <li className="tech-item" key={index}>
              <span className="icon">{tech.icon}</span>
              <span className="name">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Technologies;
