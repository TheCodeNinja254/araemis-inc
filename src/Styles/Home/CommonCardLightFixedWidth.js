import { Card, colors, styled } from '@mui/material';

const CommonCardLightFixedWidth = styled(Card)(({ theme, width }) => ({
  color: theme.palette.white,
  marginTop: theme.spacing(2),
  borderRadius: 20,
  minWidth: width,
  backgroundColor: colors.brown[300]
}));

export default CommonCardLightFixedWidth;
