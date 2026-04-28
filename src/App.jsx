import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from '../src/Home';
import Services from './pages/service/Services';
import AppWorkflow from './pages/appWorkflow/AppWorkflow';
import PricingPlans from './pages/pricingPlans/PricingPlans'

export const App = () => {
  return (
    <div style={{ backgroundColor: '#0b1120', minHeight: '100vh', color: '#e2e8f0' }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/function" element={<AppWorkflow />} />
          <Route path="/plans" element={<PricingPlans />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App