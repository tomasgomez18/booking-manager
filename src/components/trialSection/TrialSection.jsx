import React from 'react';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './TrialSection.css';

// Configuración de animaciones para limpieza visual
const anim = {
  text: { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.7 } },
  image: { initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.8 } }
};

const TrialSection = ({ 
  badge = "PROBALO GRATIS",
  title = <>Tomá el control total de tu <span className="text-info">Agenda</span></>,
  description = "No pedimos tarjeta de crédito, ni contratos largos. Queremos que veas cómo tu negocio se transforma en 14 días.",
  features = ["Sin datos de pago requeridos", "Funcionalidades Pro desbloqueadas", "Soporte técnico prioritario"],
  btnText = "Empezar mi prueba de 14 días",
  image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
}) => (
  <section className="trial-section overflow-hidden">
    <Container>
      <Row className="align-items-center">
        <Col lg={5} className="text-white mb-5 mb-lg-0 z-1">
          <motion.div {...anim.text} viewport={{ once: true }}>
            <Badge bg="info" className="mb-3 px-3 py-2 rounded-pill text-dark fw-bold">{badge}</Badge>
            <h2 className="display-4 fw-bold mb-4">{title}</h2>
            <p className="lead opacity-75 mb-5">{description}</p>
            <ul className="list-unstyled custom-features">
              {features.map((f, i) => (
                <li key={i} className="mb-3"><span className="icon-check">✦</span> {f}</li>
              ))}
            </ul>
            <Button variant="info" size="lg" className="px-5 py-3 mt-4 rounded-pill fw-bold btn-glow">{btnText}</Button>
          </motion.div>
        </Col>

        <Col lg={7} className="position-relative">
          <motion.div className="image-wrapper" {...anim.image} viewport={{ once: true }}>
            <div className="blob-glow" />
            <div className="dashboard-preview-container shadow-2xl">
              <img src={image} alt="Preview" className="img-fluid rounded-4 shadow-lg border-glass" />
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default TrialSection;