import { Card, styled } from '@mui/material';

const CommonCard = styled(Card)(({ theme }) => ({
  color: theme.palette.common.white,
  borderColor: theme.palette.background.paper,
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(2),
  borderRadius: 20
  // borderWidth: 8
}));

export default CommonCard;
