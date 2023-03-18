import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import typography from './typography';
import palette from './palette';
import overrides from './overrides';

const theme = createTheme({
  palette,
  shadows,
  typography,
  overrides
});

export default theme;