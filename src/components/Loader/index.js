import React from 'react';
import { CircularProgress, styled } from '@mui/material';

const StyledWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  margin: theme.spacing(2),
  color: theme.palette.primary.main
}));

export default function Loader() {
  return (
    <StyledWrapper>
      <StyledCircularProgress color="info" size="lg" />
    </StyledWrapper>
  );
}
