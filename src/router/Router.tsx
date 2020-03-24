import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Catalogue from 'components/Catalogue/Catalogue.jsx';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact strict component={Catalogue} />
    </Switch>
  );
};

export default Router;
