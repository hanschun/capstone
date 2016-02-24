import React from 'react';
import ReactDOM from 'react-dom';
// import makeStore from '../src/store';
// import Router, {Route} from 'react-router';
import {createStore} from 'redux';
// import {Provider} from 'react-redux';
import reducer from './reducer';
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

let center = {
  lat: 38.578934,
  lon: -121.4920968
};

ReactDOM.render(
  <div>
    <Panel locs={locations}/>
    <GMap coords={center} locs={locations}/>
  </div>,
  document.getElementById('app')
);
