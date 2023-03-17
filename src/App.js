import React, { Suspense } from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DefaultTheme from './theme';
import Routes from './Routes';
import Loader from './components/Loader';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Suspense fallback={<Loader />}>
        <BrowserRouter basename={process.env.REACT_APP_BASENAME || '/'}>
          <Routes />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
