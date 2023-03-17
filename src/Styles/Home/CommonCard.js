import { Card, styled } from '@mui/material';

const CommonCard = styled(Card)(({ theme }) => ({
  color: theme.palette.common.white,
  borderColor: theme.palette.primary.light,
  marginTop: theme.spacing(2),
  borderRadius: 20,
  borderWidth: 8
}));

export default CommonCard;
