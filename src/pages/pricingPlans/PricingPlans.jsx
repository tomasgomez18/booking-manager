import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { PRICING_DATA } from '../../utils/pricingData';
import './PricingPlans.css';

const PricingPlans = () => (
  <section className="pricing-section py-5">
    <Container className="py-5">
      <div className="text-center mb-5 text-white">
        <h2 className="display-4 fw-bold">Planes simples para <span className="text-info">grandes negocios</span></h2>
        <p className="lead opacity-75">Sin costos ocultos. Elegí el plan que mejor se adapte a vos.</p>
      </div>

      <Row className="g-4 align-items-center">
        {PRICING_DATA.map((plan, idx) => (
          <Col lg={4} key={idx}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`pricing-card ${plan.isFeatured ? 'featured' : ''} ${plan.isFuture ? 'future-card' : ''}`}>
                <Card.Body className="p-4 d-flex flex-column">
                  <h3 className="h4 fw-bold mb-3">{plan.title}</h3>
                  <div className="price-tag mb-4">
                    <span className="currency">$</span>
                    <span className="amount">{plan.price}</span>
                    {plan.price !== "---" && <span className="period">/mes</span>}
                  </div>
                  <p className="small opacity-75 mb-4">{plan.description}</p>
                  
                  <ul className="list-unstyled mb-5 flex-grow-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="mb-2 d-flex align-items-center gap-2">
                        <span className="text-info">✓</span> {f}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.isFeatured ? "info" : "outline-light"} 
                    className={`rounded-pill fw-bold py-2 ${plan.isFuture ? 'disabled' : ''}`}
                  >
                    {plan.buttonText}
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default PricingPlans;