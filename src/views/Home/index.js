import React from 'react';
import { About, FoundersList, TopCard, Upsell, Feedback } from './components';

const Home = () => {
  return (
    <>
      <TopCard />
      <About />
      <FoundersList />
      <Upsell />
      <Feedback />
    </>
  );
};

export default Home;
