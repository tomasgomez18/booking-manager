import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const FOOTER_DATA = {
  brand: { name: "BookingManager" },
  sections: [
    { title: "Producto", links: [{ n: "Funcionalidades", p: "/features" }, { n: "Precios", p: "/pricing" }, { n: "Demo", p: "/demo" }] },
    { title: "Empresa", links: [{ n: "Nosotros", p: "/about" }, { n: "Contacto", p: "/contact" }, { n: "Blog", p: "/blog" }] },
    { title: "Legal", links: [{ n: "Privacidad", p: "/privacy" }, { n: "Términos", p: "/terms" }] }
  ],
  socials: ["Instagram", "LinkedIn", "Twitter"]
};

const Footer = () => (
  <footer className="footer-wrapper">
    <Container>
      <Row className="gy-4 py-5">
        <Col lg={4}>
          <h3 className="fw-bold text-white mb-3 py-5">{FOOTER_DATA.brand.name}</h3>
          <p className="text-white-50 w-75">{FOOTER_DATA.brand.desc}</p>
        </Col>
        
        {FOOTER_DATA.sections.map((sec, idx) => (
          <Col xs={6} md={4} lg={2} key={idx}>
            <h6 className="text-white fw-bold mb-4 uppercase tracking-wider">{sec.title}</h6>
            <ul className="list-unstyled">
              {sec.links.map((l, i) => (
                <li key={i} className="mb-2">
                  <Link to={l.p} className="footer-link">{l.n}</Link>
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>

      <div className="footer-bottom border-top border-white-10 py-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <small className="text-white-50">© 2026 By NexusCode.</small>
        <div className="d-flex gap-4">
          {FOOTER_DATA.socials.map(s => <a key={s} href="#" className="footer-link small">{s}</a>)}
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;