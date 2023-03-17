import { Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import { AppCard, AppCardContent } from '../../../Styles/Home';

const TopCard = () => {
  const theme = useTheme();
  return (
    <AppCard elevation={0}>
      <AppCardContent>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Typography variant="h2" color={theme.palette.white}>
              <strong>Araemis Consulting Inc.</strong>
            </Typography>
            <Typography
              variant="body1"
              color={theme.palette.white}
              sx={{ marginTop: theme.spacing(3) }}>
              We solve We solveWe solve We solve
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} />
        </Grid>
      </AppCardContent>
    </AppCard>
  );
};

export default TopCard;
