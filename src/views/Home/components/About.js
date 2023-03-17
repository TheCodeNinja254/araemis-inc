import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import Image from '../../../components/Image';
import aboutImage from '../../../assets/Graphics/about.jpg';

const About = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ marginTop: theme.spacing(5), marginBottom: theme.spacing(3) }}>
        About Us
      </Typography>
      <Grid spacing={2} container>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Image src={aboutImage} height={200} />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
          <Typography variant="h4">Our Mission & Vision</Typography>
          <Typography variant="h5">
            <strong>Our Mission</strong>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginBottom: theme.spacing(3),
              marginTop: theme.spacing(2)
            }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
          <Typography variant="h5">
            <strong>Our Vision</strong>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginBottom: theme.spacing(3),
              marginTop: theme.spacing(2)
            }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>

          <Typography variant="h5">
            <strong>Learn More</strong>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginBottom: theme.spacing(3),
              marginTop: theme.spacing(2)
            }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like. This impressive paella is a perfect party
            dish and a fun meal to cook together with your guests. Add 1 cup of
            frozen peas along with the mussels, if you like.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
