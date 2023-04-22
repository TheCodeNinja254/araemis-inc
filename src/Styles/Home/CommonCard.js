import { Card, styled } from '@mui/material';

const CommonCard = styled(Card)(({ theme }) => ({
  color: theme.palette.common.white,
  borderColor: theme.palette.background.paper,
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(2),
  borderRadius: 40
}));

export default CommonCard;
