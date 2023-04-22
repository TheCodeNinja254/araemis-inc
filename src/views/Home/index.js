import React from 'react';
import { Container } from '@mui/material';
import { TopCard, Upsell, Feedback, InformationSection } from './components';
import IntroSection from './components/IntroSection';

const Home = () => {
  return (
    <>
      <TopCard />
      <Container>
        <IntroSection />
        <InformationSection />
        <Upsell />
      </Container>
      <Feedback />
    </>
  );
};

export default Home;
