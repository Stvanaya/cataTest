import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import Header from 'DS/Header/Header';
import Footer from 'DS/Footer/Footer';
import Router from 'Pages/index';

import store from 'Store/store';

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
          <Footer />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
