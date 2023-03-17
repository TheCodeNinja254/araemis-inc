import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/joy';
import { Container } from '@mui/material';
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

  return (
    <Container>
      <StyledWrapper>
        <Topbar />
        <StyledMain>
          {children}
          <Footer />
        </StyledMain>
      </StyledWrapper>
    </Container>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default HomeLayout;
