import {setLocations, setCenter, setDestination} from './core';

export default function reducer(state = INITIAL_STATE, action){
  switch(action.type){
    case 'SET_LOCATIONS':
      return setLocations(state, locations);
    case 'SET_CENTER':
      return setCenter(state, location);
    case 'SET_DESTINATION':
      return setDestination(state, location);
  }
  return state;
}
