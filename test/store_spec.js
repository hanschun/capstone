import {Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';
import {createStore} from 'redux';
import {locations} from '../src/locations';

describe('store', () => {
  it('is a Redux store configured with the correct reducer', () => {
    const store = createStore(reducer);
    // expect(store.getState()).to.equal({});
    store.dispatch({
      type: 'SET_STATE',
      state: {
        locations: locations
      }
    });
    console.log(store.getState());
    expect(store.getState()).to.contain(
    [{ name: 'Loaves and Fishes',
    address: '1351 N C St, Sacramento, CA 95811',
    coords: { lat: 38.5918347, lon: -121.4850515 } },
  { name: 'River City Food Bank',
    address: '1800 28th St, Sacramento, CA 95816',
    coords: { lat: 38.5648937, lon: -121.4756712 } },
  { name: 'Sacramento Food Bank',
    address: '3333 3rd Ave, Sacramento, CA 95817',
    coords: { lat: 38.552414, lon: -121.4722987 } }]
);
  });
});
