import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import Header from 'DS/Header/Header';
import Router from 'Pages/index';

/* STORE */
import store from 'Store/store';

/* STYLES */
import GlobalStyles from 'GlobalStyles';
import theme from 'theme/theme';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <Router />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
