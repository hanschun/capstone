import React from 'react';
import ReactDOM from 'react-dom';
// import Router, {Route} from 'react-router';
// import {createStore, applyMiddleware} from 'redux';
// import {Provider} from 'react-redux';
// import reducer from './reducer';
// import {setState} from './action_creators';
// import App from './components/App';
import GMap from './components/GMap';
let coords = {
  lat: 38.578934,
  lon: -121.4920968
};

ReactDOM.render(
  <GMap coords={coords}/>,
  document.getElementById('app')
);
