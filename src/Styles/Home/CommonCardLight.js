import { Card, styled } from '@mui/material';

const CommonCardLight = styled(Card)(({ theme }) => ({
  color: theme.palette.white,
  marginTop: theme.spacing(2),
  borderRadius: 20,
  backgroundColor: theme.palette.secondary.main
}));

export default CommonCardLight;
