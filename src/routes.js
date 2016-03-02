import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import GMap from './components/GMap';
import List from './components/List';

const routes = (
    <Route path="/" component={ App }>
      <IndexRoute component={ GMap } />
      <Route path="list" component={ List } />
    </Route>
);

export default routes;
