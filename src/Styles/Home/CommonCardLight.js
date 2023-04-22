import { Card, styled } from '@mui/material';
import bounceInTop from '../../animation/bounceInTop';

const CommonCardLight = styled(Card)(({ theme, animate }) => ({
  color: theme.palette.common.white,
  marginTop: theme.spacing(2),
  borderRadius: 20,
  backgroundColor: theme.palette.secondary.main,
  animation:
    animate &&
    `${bounceInTop} 2.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`
}));

export default CommonCardLight;
