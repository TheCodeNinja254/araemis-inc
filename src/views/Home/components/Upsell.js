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
          <strong>Why businesses choose us</strong>
        </Typography>
        <Typography
          variant="body2"
          sx={{ marginTop: theme.spacing(1), marginBottom: theme.spacing(1) }}>
          We focus on this so you don&apos;t have to.
        </Typography>
        <Grid spacing={2} container>
          {_upsellReasons.map((r) => (
            <Grid item xs={4} sm={4} md={4} lg={3} xl={3} id={r.id}>
              <CommonCardLight elevation={0}>
                <CardContent>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    alignContent="center">
                    {r.icon}
                  </Box>
                  <Typography
                    textAlign="center"
                    sx={{ mt: 2, fontSize: 13 }}
                    variant="h4">
                    <strong>{r.title}</strong>
                  </Typography>
                  <Typography textAlign="center" sx={{ mt: 1, fontSize: 11 }}>
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
