import React from 'react';
import { Grid } from '@mui/material';
import About from './About';
import FoundersList from './FoundersList';

const InformationSection = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <About />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <FoundersList />
      </Grid>
    </Grid>
  );
};

export default InformationSection;
