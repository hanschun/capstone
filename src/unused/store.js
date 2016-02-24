import {createStore} from 'redux';
function stateStore(state = [], action){
  console.log(action);
  switch(action.type) {
    case 'SET_LOCATIONS':
      return state = state.concat(action.locations);
    case 'SET_CENTER':
      return state.center = action.center;
    case 'SET_DESTINATION':
      return state.destination = action.destination;
    case 'SET_MODE':
      return state.mode = action.mode;
    default:
      return state;
  }
}

export default function makeStore() {
  return createStore(stateStore);
};
