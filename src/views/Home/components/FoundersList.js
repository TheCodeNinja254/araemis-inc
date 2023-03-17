import React from 'react';
import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import FounderCard from '../../../components/FounderCard';
import _founderInfo from '../../../_mockData/_founderInfo';

const FoundersList = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        sx={{ marginTop: theme.spacing(5), marginBottom: theme.spacing(4) }}
        variant="h3">
        Meet the Araemis Founder Team
      </Typography>
      <Divider
        sx={{
          marginTop: theme.spacing(2),
          marginBottom: theme.spacing(2),
          backgroundColor: theme.palette.primary.light
        }}
      />
      <Grid container spacing={2}>
        {_founderInfo.map((founderInfo) => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <FounderCard founderInfo={founderInfo} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FoundersList;
