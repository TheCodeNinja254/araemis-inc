import React, { useState } from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import FounderCard from '../../../components/FounderCard';
import _founderInfo from '../../../_mockData/_founderInfo';
import { CircularCard } from '../../../Styles/Home';
import getInitials from '../../../utils/getInitials';

const FoundersList = () => {
  const theme = useTheme();

  const [selectedFounder, setSelectedFounder] = useState(_founderInfo[0].name);
  const filteredFounders = _founderInfo.filter((user) =>
    user.name.includes(selectedFounder)
  );

  return (
    <>
      <Typography
        color="text.primary"
        sx={{ marginTop: theme.spacing(5), marginBottom: theme.spacing(4) }}
        variant="h4">
        Meet the Araemis Founder Team
      </Typography>
      <Typography
        variant="body2"
        textAlign="left"
        color="text.primary"
        sx={{
          marginBottom: theme.spacing(3),
          marginTop: theme.spacing(2)
        }}>
        Araemis Consulting is founded by visionary leaders who have had the
        opportunity to work in diverse markets across the globe. We bring forth
        experience from this varied markets to ensure rich solutions are
        delivered to our clientele. We walk the journey with you, allowing you
        to refine your requirements as we refine the solution.
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="left"
        sx={{ marginBottom: 2 }}>
        {_founderInfo.map((f) => (
          <Grid item id={f.id} sx={2}>
            <CircularCard
              width="50"
              height="50"
              active={selectedFounder === f.name}
              onClick={() => setSelectedFounder(f.name)}>
              <Typography>{getInitials(f.name)}</Typography>
            </CircularCard>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={0}>
        {filteredFounders.map((founderInfo) => (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <FounderCard founderInfo={founderInfo} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FoundersList;
