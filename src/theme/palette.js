import { red, blue, green, orange } from '@mui/material/colors';

const white = '#EEEEEE';
const black = '#262626';

// Dark Theme Colors
const appBlueDark = '#1C1B1E';
const appBlue = '#2A282D';
const appLightBlue = '#4F3789';
const appLighterBlue = '#CFBCFF';
// const appSecondaryDark = '#301221';
const appSecondary = '#7C5265';
const appSecondaryLight = '#FFD8E6';
const appSecondaryLighter = '#FFFFFF';
const appContrastText = '#E6E1E6';

// Light Theme Colors
// const background = '#c8c6c8';
// const backgroundDefault = '#fffdfd';
// const lightAppBlueDark = '#312028';
// const lightAppBlue = '#7C5265';
// const lightAppLightBlue = '#8b737d';
// const lightAppLighterBlue = '#FFFBFF';
// const lightAppSecondaryDark = '#BC014B';
// const lightAppSecondary = '#BC014B';
// const lightAppSecondaryLight = '#FBF2F5';
// const lightAppSecondaryLighter = '#FFFBFF';
// const lightAppContrastText = '#BC014B';

// Dark Theme Color Opposites
const appBlueDarkOpposite = '#F5F5F5';
const appBlueOpposite = '#EDEDED';
const appLightBlueOpposite = '#B5A5FF';
const appLighterBlueOpposite = '#5E4F8F';
const appSecondaryDarkOpposite = '#FFD8E6';
const appSecondaryOpposite = '#dfafc0';
const appSecondaryLightOpposite = '#E57C9D';
const appSecondaryLighterOpposite = '#7C5265';
const appContrastTextOpposite = '#1C1B1E';

export const darkTheme = {
  mode: 'dark',
  black,
  background: {
    dark: appBlueDark,
    default: appBlueDark,
    paper: appBlue
  },
  primary: {
    contrastText: white,
    dark: appBlueDark,
    main: '#826874',
    light: appLightBlue,
    lighter: appLighterBlue
  },
  secondary: {
    contrastText: appContrastText,
    dark: '#E6E1E6',
    main: appSecondary,
    light: appSecondaryLight,
    lighter: appSecondaryLighter
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
  icon: appSecondaryLight,
  divider: appSecondary
};

export const lightTheme = {
  mode: 'light',
  black,
  background: {
    dark: appBlueDarkOpposite,
    default: appBlueDarkOpposite,
    paper: appBlueOpposite
  },
  primary: {
    contrastText: appContrastTextOpposite,
    dark: '#7C5265',
    main: '#1C1B1E',
    light: appLightBlueOpposite,
    lighter: appLighterBlueOpposite
  },
  secondary: {
    contrastText: appContrastTextOpposite,
    dark: appSecondaryDarkOpposite,
    main: appSecondaryOpposite,
    light: appSecondaryLightOpposite,
    lighter: appSecondaryLighterOpposite
  },
  text: {
    primary: black,
    secondary: appSecondaryOpposite,
    link: appContrastTextOpposite
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
  icon: appSecondaryLight,
  divider: appSecondary
};
