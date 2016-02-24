import React from 'react';
import ReactDOM from 'react-dom';
// import makeStore from '../src/store';
import Router, {Route} from 'react-router';
// import {createStore} from 'redux';
import createHistory from 'history/lib/createHashHistory';
// import {Provider} from 'react-redux';
// import reducer from './reducer';
import locations from './locations';
// const store = createStore(reducer);
// store.dispatch({
//   type: 'SET_STATE',
//   state: {
//       locations: locations
//   }
// });
// import {setState} from './action_creators';
// import App from './components/App';
import Panel from './components/Panel';
import GMap from './components/GMap';
import routes from './routes';

ReactDOM.render(
  <Router history={createHistory({ queryKey: false })}
  onUpdate={() => window.scrollTo(0, 0)}>
  {routes}
  </Router>,
  document.getElementById('app')
);
