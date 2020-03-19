
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/shared/Header/Header';
import Router from './router/Router';

import './app.module.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
};

export default App;