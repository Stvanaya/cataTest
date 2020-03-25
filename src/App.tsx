import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from 'DS/Header/Header';
import Router from 'Pages/index';

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
