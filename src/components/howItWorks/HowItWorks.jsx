import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const anim = {
  container: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { staggerChildren: 0.3 } }
  },
  item: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }
};

const HowItWorks = ({ 
  title = "Tu negocio online en 3 pasos",
  steps = [
   { 
    id: "01", 
    title: "Configurá", 
    desc: "Personalizá tu perfil, servicios y horarios en menos de 5 minutos." 
  },
  { 
    id: "02", 
    title: "Compartí", 
    desc: "Publicá tu link único en Instagram, WhatsApp o tu sitio web." 
  },
  { 
    id: "03", 
    title: "Reservá", 
    desc: "Tus clientes agendan sus turnos de forma autónoma, sin idas y vueltas." 
  },
  { 
    id: "04", 
    title: "Gestioná", 
    desc: "Visualizá tu ocupación en tiempo real y evitá superposiciones de citas." 
  },
  { 
    id: "05", 
    title: "Asegurá", 
    desc: "Reducí el ausentismo cobrando señas automáticas al momento de reservar." 
  },
  { 
    id: "06", 
    title: "Analizá", 
    desc: "Obtené reportes de tus ingresos y hacé crecer tu negocio con datos reales." 
  }
  ]
}) => (
  <section className="how-section py-3">
    <Container className="py-5">
      <div className="text-center mb-5 text-white">
        <h2 className="display-5 fw-bold mb-3">{title}</h2>
        <div className="h-line mx-auto" />
      </div>

      <motion.div {...anim.container} viewport={{ once: true }}>
        <Row className="g-4">
          {steps.map((step) => (
            <Col md={4} key={step.id}>
              <motion.div variants={anim.item} className="step-card">
                <div className="step-number">{step.id}</div>
                <h3 className="h4 fw-bold text-white mb-3">{step.title}</h3>
                <p className="text-white-50">{step.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  </section>
);

export default HowItWorks;