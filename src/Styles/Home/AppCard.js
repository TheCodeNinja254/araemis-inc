import { Card, styled } from '@mui/material';

const AppCard = styled(Card)(({ theme }) => ({
  color: theme.palette.white,
  backgroundImage: "url('/images/display.jpg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: 300,
  marginTop: theme.spacing(0)
}));

export default AppCard;
