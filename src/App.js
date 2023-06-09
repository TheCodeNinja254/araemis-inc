import React, { Suspense } from 'react';
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import Loader from './components/Loader';
import ThemeContext from './context/ThemeContext';
import shadows from './theme/shadows';
import typography from './theme/typography';
import overrides from './theme/overrides';
import { darkTheme, lightTheme } from './theme/palette';
import { ContactUsModalProvider } from './context/ContactUsModalContext';

function App() {
  // Check system-wide or OS theme preference.
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: mode === 'light' ? lightTheme : darkTheme,
        shadows,
        typography,
        overrides
      }),
    [mode]
  );
  return (
    <ThemeContext.Provider value={colorMode}>
      <ContactUsModalProvider>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<Loader />}>
            <BrowserRouter basename={process.env.REACT_APP_BASENAME || '/'}>
              <Routes />
            </BrowserRouter>
          </Suspense>
        </ThemeProvider>
      </ContactUsModalProvider>
    </ThemeContext.Provider>
  );
}

export default App;
