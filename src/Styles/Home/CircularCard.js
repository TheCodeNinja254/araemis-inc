import React from 'react';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import PropTypes from 'prop-types';
import { CardActionArea, colors } from '@mui/material';

const StyledCardActionArea = styled(CardActionArea)(({ theme, active }) => ({
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  border: active && `3px solid ${colors.yellow[900]}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(1)
}));

const CircularCard = (props) => {
  const { children, onClick, active } = props;
  return (
    <StyledCardActionArea onClick={onClick} active={active}>
      <CardContent>{children}</CardContent>
    </StyledCardActionArea>
  );
};

CircularCard.defaultProps = {
  active: false
};

CircularCard.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool
};

export default CircularCard;
