import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from 'DS/Header/Header';
import Router from 'Pages/index';

import GlobalStyles from 'GlobalStyles';
import theme from 'theme/theme';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
