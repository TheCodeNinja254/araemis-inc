import { Card, styled } from '@mui/material';

const CommonCardWithBackground = styled(Card)(({ theme }) => ({
  color: theme.palette.common.white,
  borderColor: theme.palette.primary.main,
  marginTop: theme.spacing(2),
  borderRadius: 20,
  backgroundImage: "url('/images/display1.jpg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}));

export default CommonCardWithBackground;
