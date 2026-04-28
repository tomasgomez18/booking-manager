import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { WORKFLOW_DATA as data } from '../../services/workflowData';
import './AppWorkflow.css';

const anim = {
  container: { initial: { opacity: 0 }, whileInView: { opacity: 1, transition: { staggerChildren: 0.1 } } },
  item: { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 } },
  check: { initial: { pathLength: 0, opacity: 0 }, whileInView: { pathLength: 1, opacity: 1, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } } }
};

const AnimatedCheck = () => (
  <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <motion.polyline points="20 6 9 17 4 12" variants={anim.check} />
  </motion.svg>
);

const AppWorkflow = () => (
  <section className="workflow-section py-5">
    <Container className="py-5">
      <header className="text-center mb-5 text-white">
        <Badge bg="primary" className="mb-3 px-3 py-2 rounded-pill">{data.rewards.trialBadge}</Badge>
        <h2 className="display-4 fw-bold">Un sistema de <span className="text-info">punta a punta</span></h2>
      </header>

      <Row className="g-5">
        {/* COLUMNA ADMINISTRADOR */}
        <Col lg={4}>
          <div className="workflow-column p-4 rounded-4 h-100">
            <h3 className="h4 fw-bold text-info mb-4 border-bottom border-info pb-2">{data.admin.title}</h3>
            <motion.div {...anim.container} viewport={{ once: true }}>
              {data.admin.steps.map(step => (
                <motion.div key={step.id} variants={anim.item} className="mb-4 d-flex gap-3">
                  <div className="workflow-dot">
                    <AnimatedCheck />
                  </div>
                  <div>
                    <h5 className="text-white mb-1">{step.title}</h5>
                    <p className="text-white-50 small">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Col>

        {/* COLUMNA CLIENTE */}
        <Col lg={4}>
          <div className="workflow-column p-4 rounded-4 h-100">
            <h3 className="h4 fw-bold text-primary mb-4 border-bottom border-primary pb-2">{data.client.title}</h3>
            <motion.div {...anim.container} viewport={{ once: true }}>
              {data.client.steps.map(step => (
                <motion.div key={step.id} variants={anim.item} className="mb-4 d-flex gap-3">
                  <div className="workflow-dot variant-blue">
                    <AnimatedCheck />
                  </div>
                  <div>
                    <h5 className="text-white mb-1">{step.title}</h5>
                    <p className="text-white-50 small">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Col>

        {/* COLUMNA SEGURIDAD */}
        <Col lg={4}>
          <div className="workflow-column p-4 rounded-4 h-100">
            <h3 className="h4 fw-bold text-success mb-4 border-bottom border-success pb-2">{data.security.title}</h3>
            <motion.div {...anim.container} viewport={{ once: true }}>
              {data.security.steps.map(step => (
                <motion.div key={step.id} variants={anim.item} className="mb-4 d-flex gap-3">
                  <div className="workflow-dot" style={{ backgroundColor: 'rgba(25, 135, 84, 0.1)', color: '#20c997', borderColor: 'rgba(25, 135, 84, 0.3)' }}>
                    <AnimatedCheck />
                  </div>
                  <div>
                    <h5 className="text-white mb-1">{step.title}</h5>
                    <p className="text-white-50 small">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Col>
      </Row>

      {/* BANNER DE PREMIOS */}
      <motion.div 
        className="reward-box mt-5 p-4 rounded-4 text-center border-glass"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
      >
        <h4 className="text-white fw-bold mb-3">🎁 {data.rewards.title}</h4>
        <p className="text-white-50 mx-auto" style={{ maxWidth: '700px' }}>{data.rewards.description}</p>
      </motion.div>
    </Container>
  </section>
);

export default AppWorkflow;