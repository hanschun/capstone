import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Panel from './components/Panel';
import GMap from './components/GMap';

const routes = (
    <Route path="/" component={ App }>
      <IndexRoute component={ GMap } />
    </Route>
);

export default routes;
