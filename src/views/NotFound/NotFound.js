import React from 'react';
import { Container, Typography } from '@mui/material';
import { TopCard } from '../Home/components';

const Home = () => {
  return (
    <>
      <TopCard />
      <Container>
        <Typography>404... That&apos;s an error</Typography>
      </Container>
    </>
  );
};

export default Home;
