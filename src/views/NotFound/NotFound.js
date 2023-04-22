import React from 'react';
import {
  Box,
  colors,
  Container,
  Typography,
  useTheme,
  Button
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          style={{ padding: theme.spacing(5), marginTop: theme.spacing(10) }}>
          <Typography
            style={{ color: colors.brown[400], fontSize: 25, fontWeight: 900 }}>
            404... That&apos;s an error
          </Typography>
        </Box>
        <Typography align="center" color="textPrimary">
          Looks like you&apos;re lost.
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          style={{ padding: theme.spacing(5) }}>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            disableElevation
            style={{ borderRadius: 20, textTransform: 'none' }}>
            Go Back Home
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Home;
