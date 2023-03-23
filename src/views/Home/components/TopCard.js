import {
  Box,
  CardContent,
  Grid,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import React from 'react';
import { DarkMode, LightMode, Mail } from '@mui/icons-material';
import {
  AppCard,
  AppCardContent,
  CircularCard,
  CommonCardLight
} from '../../../Styles/Home';
import _speciality from '../../../_mockData/_speciality';
import ThemeContext from '../../../context/ThemeContext';

const TopCard = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ThemeContext);

  return (
    <AppCard elevation={0}>
      <AppCardContent>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={8} sm={8} md={12} lg={12} xl={12}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignContent="center"
                  alignItems="center">
                  <div>
                    <Typography
                      variant="h4"
                      color={theme.palette.common.white}
                      sx={{
                        padding: theme.spacing(2),
                        [theme.breakpoints.up('md')]: {
                          marginTop: theme.spacing(2)
                        }
                      }}>
                      <strong>Araemis Consulting Inc.</strong>
                    </Typography>
                    <Typography
                      variant="body2"
                      color={theme.palette.common.white}
                      sx={{ marginTop: theme.spacing(1) }}>
                      Meeting you at the point of your need! <br /> Innovating
                      the future with bespoke software solutions.
                    </Typography>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={4} sm={4} md={8} lg={8} xl={8}>
                <div
                  style={{
                    marginTop: theme.spacing(1),
                    [theme.breakpoints.up('md')]: {
                      marginTop: theme.spacing(4)
                    }
                  }}>
                  <Stack
                    direction="row"
                    alignContent="center"
                    justifyContent="center">
                    <div style={{ padding: theme.spacing(1) }}>
                      <CircularCard onClick={() => {}}>
                        <Mail color={theme.palette.secondary.contrastText} />
                      </CircularCard>
                      <Typography
                        sx={{
                          fontSize: 9,
                          color: theme.palette.common.white
                        }}>
                        Contact Us
                      </Typography>
                    </div>
                    <div style={{ padding: theme.spacing(1) }}>
                      <CircularCard onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'light' ? (
                          <DarkMode
                            color={theme.palette.secondary.contrastText}
                          />
                        ) : (
                          <LightMode
                            color={theme.palette.secondary.contrastText}
                          />
                        )}
                      </CircularCard>
                      <Typography
                        sx={{
                          fontSize: 9,
                          color: theme.palette.common.white
                        }}>
                        {theme.palette.mode === 'light'
                          ? 'Lights Out'
                          : 'Lights On'}
                      </Typography>
                    </div>
                  </Stack>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Typography
              textAlign="center"
              sx={{
                marginTop: theme.spacing(1),
                fontWeight: 700,
                textDecoration: 'underline',
                [theme.breakpoints.up('md')]: {
                  marginTop: theme.spacing(4)
                }
              }}>
              Experts in
            </Typography>
            <Grid container spacing={1} justifyContent="center">
              {_speciality.map((item) => (
                <Grid item xs={4} key={item.id}>
                  <CommonCardLight elevation={0}>
                    <CardContent>
                      <Typography textAlign="center" sx={{ fontSize: 10 }}>
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </CommonCardLight>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </AppCardContent>
    </AppCard>
  );
};

export default TopCard;
