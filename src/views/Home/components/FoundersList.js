import React from 'react';
import { CardContent, Grid, Typography, useTheme } from '@mui/material';
import FounderCard from '../../../components/FounderCard';
import _founderInfo from '../../../_mockData/_founderInfo';
import _ourProducts from '../../../_mockData/_ourProducts';
import { CircularCard } from '../../../Styles/Home';

const FoundersList = () => {
  const theme = useTheme();

  return (
    <CardContent>
      <Typography
        sx={{ marginTop: theme.spacing(5), marginBottom: theme.spacing(4) }}
        variant="h4">
        Meet the Araemis Founder Team
      </Typography>
      <Typography
        variant="body2"
        textAlign="left"
        sx={{
          marginBottom: theme.spacing(3),
          marginTop: theme.spacing(2)
        }}>
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests.
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="left"
        sx={{ marginBottom: 2 }}>
        {_ourProducts.map((p) => (
          <Grid item id={p.id} sx={2}>
            <CircularCard width="50" height="50">
              <Typography>{p.letter}</Typography>
            </CircularCard>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2}>
        {_founderInfo.map((founderInfo) => (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <FounderCard founderInfo={founderInfo} />
          </Grid>
        ))}
      </Grid>
    </CardContent>
  );
};

export default FoundersList;
