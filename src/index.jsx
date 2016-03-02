import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import locations from './locations';
import Panel from './components/Panel';
import GMap from './components/GMap';
import routes from './routes';

ReactDOM.render(
  <Router history={createHistory({ queryKey: false })} onUpdate={() => window.scrollTo(0, 0)}>
  {routes}
  </Router>,
  document.getElementById('app')
);
