import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  // Importa los estilos CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Rivelino Ortiz</Link>
        </div>
        
        {/* Botón hamburguesa que solo aparece en pantallas pequeñas */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Menú de navegación */}
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/about">Sobre mí</Link>
          <Link to="/projects">Proyectos</Link>
          <Link to="/technologies">Habilidades</Link>
          <Link to="/contact">Contáctame</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
