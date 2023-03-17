import React from 'react';
import { Box, CardContent, Grid, Typography, useTheme } from '@mui/material';
import { CommonCard, CommonCardLight } from '../../../Styles/Home';
import _upsellReasons from '../../../_mockData/_upsellReasons';

const Upsell = () => {
  const theme = useTheme();

  return (
    <CommonCard>
      <CardContent>
        <Typography
          variant="h3"
          sx={{ marginTop: theme.spacing(5), marginBottom: theme.spacing(3) }}>
          <strong>Why businesses choose Us</strong>
        </Typography>
        <Grid spacing={2} container>
          {_upsellReasons.map((r) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} id={r.id}>
              <CommonCardLight elevation={0}>
                <CardContent>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    alignContent="center">
                    {r.icon}
                  </Box>
                  <Typography textAlign="center" sx={{ mt: 2 }} variant="h3">
                    <strong>{r.title}</strong>
                  </Typography>
                  <Typography textAlign="center" sx={{ mt: 1 }}>
                    {r.text}
                  </Typography>
                </CardContent>
              </CommonCardLight>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </CommonCard>
  );
};

export default Upsell;
