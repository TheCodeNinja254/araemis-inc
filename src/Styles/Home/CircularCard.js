import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PropTypes from 'prop-types';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.light,
  padding: theme.spacing(1)
}));

const CircularCard = (props) => {
  const { children } = props;
  return (
    <StyledCard elevation={0}>
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};

CircularCard.propTypes = {
  children: PropTypes.node.isRequired
};

export default CircularCard;
