import React from 'react';
import TrialSection from './components/TrialSection/TrialSection';
import HowItWorks from './components/howItWorks/HowItWorks';
import ChatBot from './components/ui/ChatBot';

export const Home = () => {

  return (
    <>
      <TrialSection />
      <HowItWorks />
      <ChatBot />
    </>
  );
};

export default Home;