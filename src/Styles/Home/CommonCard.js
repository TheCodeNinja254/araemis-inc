import { Card, styled } from '@mui/material';

const CommonCard = styled(Card)(({ theme }) => ({
  color: theme.palette.white,
  marginTop: theme.spacing(2),
  borderRadius: 20
}));

export default CommonCard;
