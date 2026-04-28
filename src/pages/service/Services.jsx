import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../../services/servicesData';
import './Services.css';

const anim = {
  container: { initial: { opacity: 0 }, animate: { opacity: 1, transition: { staggerChildren: 0.2 } } },
  item: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
};

const Services = () => {
  return (
    <main className="services-page py-5">
      <Container className="mt-5">
        <header className="text-center mb-5 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="display-3 fw-bold"
          >
            Nuestros <span className="text-info">Servicios</span>
          </motion.h1>
          <p className="lead opacity-75">Adaptamos nuestra tecnología a las necesidades de cada industria.</p>
        </header>

        <motion.div variants={anim.container} initial="initial" animate="animate">
          <Row className="g-4">
            {SERVICES_DATA.map((service) => {
              const Icon = service.icon;
              return (
                <Col md={6} lg={4} key={service.id}>
                  <motion.div variants={anim.item} className="h-100">
                    <div className="service-card-container h-100">
                      <div className="service-card-inner">
                        {/* Cara Frontal: Icono y Título */}
                        <Card className="service-card-face service-card-front bg-glass border-0">
                          <Card.Body className="p-4 d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon mb-4 d-flex align-items-center justify-content-center">
                              <Icon size={36} strokeWidth={1.5} color="#00e5ff" />
                            </div>
                            <Card.Title className="h4 fw-bold text-white mb-0">{service.title}</Card.Title>
                          </Card.Body>
                        </Card>
                        {/* Cara Trasera: Descripción */}
                        <Card className="service-card-face service-card-back bg-glass border-0">
                          <Card.Body className="p-4 d-flex flex-column align-items-center justify-content-center text-center">
                            <h5 className="fw-bold text-info mb-3">{service.title}</h5>
                            <Card.Text className="text-white-50 m-0 lh-lg">{service.description}</Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </motion.div>
      </Container>
    </main>
  );
};

export default Services;