import React from 'react';
import { Container } from '@mui/material';
import { TopCard, Upsell, Feedback, InformationSection } from './components';

const Home = () => {
  return (
    <>
      <TopCard />
      <Container>
        <InformationSection />
        <Upsell />
        <Feedback />
      </Container>
    </>
  );
};

export default Home;
