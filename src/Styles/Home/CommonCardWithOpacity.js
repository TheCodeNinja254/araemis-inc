import { Card, styled } from '@mui/material';

const CommonCardWithOpacity = styled(Card)(({ theme }) => ({
  color: theme.palette.common.white,
  borderColor: theme.palette.background.paper,
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(2),
  borderRadius: 20,
  opacity: 0.7
}));

export default CommonCardWithOpacity;
