import { Card, styled } from '@mui/material';

const AppCard = styled(Card)(({ theme }) => ({
  backgroundImage: "url('/images/display1.jpg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  marginTop: theme.spacing(0),
  backgroundColor: `linear-gradient(135deg, ${theme.palette.error.main} 0%, ${theme.palette.success.main} 100%)`,
  color: theme.palette.common.white,
  margin: '0 auto',
  position: 'relative',
  overflow: 'hidden'
}));

export default AppCard;
