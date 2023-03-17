import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/joy';
import { Fab, useTheme } from '@mui/material';
import { Phone } from '@mui/icons-material';
import { Footer, Topbar } from './components';

const StyledWrapper = styled('div')(({ theme }) => ({
  paddingTop: 0,
  backgroundColor: theme.palette.background.default,
  height: '100%'
}));

const StyledMain = styled('main')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.background.default
}));

const HomeLayout = (props) => {
  const { children = false } = props;
  const theme = useTheme();

  return (
    <StyledWrapper>
      <Topbar />
      <StyledMain>
        {children}
        <Footer />
      </StyledMain>
      <Fab
        variant="extended"
        size="medium"
        aria-label="add"
        sx={{
          position: 'fixed',
          backgroundColor: theme.palette.primary.lighter,
          bottom: () => theme.spacing(4),
          right: () => theme.spacing(2),
          textTransform: 'capitalize'
        }}>
        <Phone sx={{ mr: 1 }} />
        Contact Us
      </Fab>
    </StyledWrapper>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default HomeLayout;
