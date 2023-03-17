import { Card, styled } from '@mui/material';

const AppCard = styled(Card)(({ theme }) => ({
  color: theme.palette.white,
  backgroundImage: "url('/images/display.jpg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: 400,
  marginTop: theme.spacing(10)
}));

export default AppCard;
