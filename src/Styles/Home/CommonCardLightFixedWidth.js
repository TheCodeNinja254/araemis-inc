import { Card, colors, styled } from '@mui/material';

const CommonCardLightFixedWidth = styled(Card)(({ theme }) => ({
  color: theme.palette.white,
  marginTop: theme.spacing(2),
  borderRadius: 20,
  minWidth: 400,
  backgroundColor: colors.brown[300]
}));

export default CommonCardLightFixedWidth;
