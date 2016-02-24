import {List, Map} from 'immutable';

export const INITIAL_STATE = Map();

export function setLocations(state, locations) {
  return state.set('locations', Map(locations));
}

export function setCenter(state, location) {
  return state.remove('center')
              .set('center', location);
}

export function setDestination(state, location) {
   return state.remove('destination')
                .set('destination', location);
}

export function setTravelMode(state, mode) {
  return state.remove('mode')
              .set('mode', mode);
}
