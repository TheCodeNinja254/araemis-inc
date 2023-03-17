import React from 'react';
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useTheme
} from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import {
  CircularCard,
  CommonCard,
  CommonCardLight
} from '../../../Styles/Home';
import _ourProducts from '../../../_mockData/_ourProducts';
import imageSrc from '../../../assets/Graphics/about.jpg';

const About = () => {
  const theme = useTheme();

  return (
    <CommonCard elevation={0} variant="outlined">
      <CardContent>
        <Typography
          variant="h3"
          textAlign="left"
          sx={{
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(3),
            fontWeight: 700
          }}>
          ...Araemis Inc.
        </Typography>
        <Grid spacing={2} container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <CommonCardLight elevation={0}>
              <CardContent>
                <Typography variant="h5" textAlign="center">
                  <strong>Our Gallery/Showcase</strong>
                </Typography>
                <Typography textAlign="center" variant="body2">
                  ...Our solutions
                </Typography>
              </CardContent>
            </CommonCardLight>

            <Typography
              variant="body2"
              textAlign="center"
              sx={{
                marginBottom: theme.spacing(3),
                marginTop: theme.spacing(2)
              }}>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {_ourProducts.map((p) => (
                <Grid item id={p.id} sx={3}>
                  <CircularCard width="50" height="50">
                    <Typography>{p.letter}</Typography>
                  </CircularCard>
                </Grid>
              ))}
            </Grid>
            <CommonCardLight elevation={0}>
              <CardMedia
                sx={{ height: 160 }}
                image={imageSrc}
                title="green iguana"
              />
              <CardContent>
                <Typography variant="body1">
                  <strong>Improvement Steering</strong>
                </Typography>
                <Typography sx={{ mt: 1 }} variant="body2" color="secondary">
                  Company Name
                </Typography>
                <Typography sx={{ mt: 1 }} variant="body2">
                  Lorem ipsum lorem istamet lorem ipsoum Lorem ipsum lorem
                  istamet lorem ipsoum Lorem ipsum lorem istamet lorem ipsoum
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  sx={{
                    borderRadius: 10
                  }}>
                  Explore Solution <NavigateNext color="secondary" />
                </Button>
              </CardActions>
            </CommonCardLight>
          </Grid>
        </Grid>
      </CardContent>
    </CommonCard>
  );
};

export default About;
