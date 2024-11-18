import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  // Importa los estilos CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => {
    setIsOpen(false);
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
          <Link to="/about" onClick={closeMenu}>Sobre mí</Link>
          <Link to="/projects" onClick={closeMenu}>Proyectos</Link>
          <Link to="/technologies" onClick={closeMenu}>Habilidades</Link>
          <Link to="/contact" onClick={closeMenu}>Contáctame</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
