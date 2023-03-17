import { red, blue, green, orange } from '@mui/material/colors';

const white = '#EEEEEE';
const black = '#262626';
const appBlue = '#0B1929';
const appLightBlue = '#051937';

export default {
  black,
  background: {
    dark: appBlue,
    default: appBlue,
    paper: appBlue
  },
  primary: {
    contrastText: white,
    dark: appBlue,
    main: appBlue,
    light: appLightBlue,
    lighter: '#61dafb'
  },
  secondary: {
    contrastText: white,
    dark: red[900],
    main: white,
    light: red[400]
  },
  text: {
    primary: white,
    secondary: '#61dafb',
    link: blue[100]
  },
  white: {
    main: white
  },
  success: {
    contrastText: white,
    dark: green[900],
    main: green[600],
    light: green[400]
  },
  info: {
    contrastText: white,
    dark: blue[900],
    main: blue[600],
    light: blue[400]
  },
  warning: {
    contrastText: white,
    dark: orange[900],
    main: orange[900],
    light: orange[900]
  },
  error: {
    contrastText: white,
    dark: red[900],
    main: red[600],
    light: red[400]
  },
  icon: white,
  divider: '#61dafb'
};
