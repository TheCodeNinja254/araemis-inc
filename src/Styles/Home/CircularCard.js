import React from 'react';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import PropTypes from 'prop-types';
import { CardActionArea } from '@mui/material';

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(1)
}));

const CircularCard = (props) => {
  const { children } = props;
  return (
    <StyledCardActionArea>
      <CardContent>{children}</CardContent>
    </StyledCardActionArea>
  );
};

CircularCard.propTypes = {
  children: PropTypes.node.isRequired
};

export default CircularCard;
