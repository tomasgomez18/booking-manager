import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS } from '../../utils/NavConfig';
import './Navbar.css';

const Navbar = () => {  
  const [signature, setSignature] = useState('');
  const fullSignature = "by NexusCode";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullSignature.length) {
        setSignature(fullSignature.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <BootstrapNavbar variant="dark" expand="lg" className="shadow-lg py-2 px-3 navbar-floating">
      <Container>
        {/* Marca/Logo */}
        <BootstrapNavbar.Brand as={Link} to="/" className="text-decoration-none">
          <div className="fw-bold fs-3 text-white lh-1 position-relative d-inline-block">
            <span style={{ color: '#00e5ff' }}>Booking</span>Manager
            <span style={{ position: 'absolute', bottom: '-16px', left: 'calc(100% - 30px)', fontSize: '0.75rem', color: '#e6ff00', fontWeight: '900', transform: 'rotate(-15deg)', transformOrigin: 'left center', whiteSpace: 'nowrap', textShadow: '0 0 10px rgba(230,255,0,0.6)', letterSpacing: '1px' }}>
              {signature}
            </span>
          </div>
        </BootstrapNavbar.Brand>
        {/* Toggle para Móvil */}
        <BootstrapNavbar.Toggle aria-controls="main-navbar" className="border-0" />
        {/* Contenido Colapsable */}
        <BootstrapNavbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            {NAV_LINKS.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={({ isActive }) => 
                  `nav-link px-3 fw-medium ${isActive ? 'active' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </Nav>
          {/* Acciones Finales */}
          <div className="d-flex align-items-center gap-3">
            <Link to="/login" className="text-decoration-none text-light fw-semibold px-2">
              Ingresar
            </Link>
            <Button as={Link} to="/register" className="px-4 rounded-pill shadow-lg fw-bold border-0" style={{ backgroundColor: '#00e5ff', color: '#000' }}>
              Regístrate
            </Button>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;