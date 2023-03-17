import React from 'react';
import { Container, styled } from '@mui/material';
import PropTypes from 'prop-types';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10)
}));

const Page = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
