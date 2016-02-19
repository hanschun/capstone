import {List, Map} from 'immutable';

export const INITIAL_STATE = Map();

export function setLocations(state, locations) {
  return state.set('locations', List(locations));
}

export function setCenter(state, location) {
  return state.set('center', location);
}

export function setDestination(state, location) {
   return state.set('destination', location)
}
