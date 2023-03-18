import { red, blue, green, orange } from '@mui/material/colors';

const white = '#EEEEEE';
const black = '#262626';

const appBlueDark = '#1C1B1E';
const appBlue = '#2A282D';
const appLightBlue = '#4F3789';
const appLighterBlue = '#FFB4AB';
const appSecondary = '#CFBCFF';
const appContrastText = '#E6E1E6';

export default {
  black,
  background: {
    dark: appBlueDark,
    default: appBlueDark,
    paper: appBlue
  },
  primary: {
    contrastText: white,
    dark: appBlue,
    main: appBlue,
    light: appLightBlue,
    lighter: appLighterBlue
  },
  secondary: {
    contrastText: appContrastText,
    dark: appLightBlue,
    main: appSecondary,
    light: appContrastText
  },
  text: {
    primary: white,
    secondary: appSecondary,
    link: appLighterBlue
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
  divider: appSecondary
};