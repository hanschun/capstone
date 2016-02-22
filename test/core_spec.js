import {List, Map} from 'immutable';
import {expect} from 'chai';

import {INITIAL_STATE, setLocations, setCenter, setDestination} from '../src/core';

describe('application logic', () => {
  describe('set locations', () => {});
  describe('next', () => {
    it('takes the next two entries under vote', () => {
      const locations = Map([
          {
            "name": "Loaves and Fishes",
            "address": "1351 N C St, Sacramento, CA 95811",
            "coords": {
              "lat": 38.5918347,
              "lon": -121.4850515
            }
          },
          {
            "name": "River City Food Bank",
            "address": "1800 28th St, Sacramento, CA 95816",
            "coords": {
              "lat": 38.5648937,
              "lon": -121.4756712
            }
          },
          {
            "name": "Sacramento Food Bank",
            "address": "3333 3rd Ave, Sacramento, CA 95817",
            "coords": {
              "lat": 38.552414,
              "lon": -121.4722987
            }
          }
        ]);
        setLocations(INITIAL_STATE, locations);
        console.log(INITIAL_STATE);
        expect(INITIAL_STATE.locations.length).to.equal(3);

    });
    it('puts winner of current vote back to entries', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            'Trainspotting': 4,
            '28 Days Later': 2
          })
        }),
        entries: List.of('Sunshine', 'Millions', '127 Hours')
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Sunshine', 'Millions')
        }),
        entries: List.of('127 Hours', 'Trainspotting')
      }));
    });
    it('puts both from tied vote back to entries', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            'Trainspotting': 3,
            '28 Days Later': 3
          })
        }),
        entries: List.of('Sunshine', 'Millions', '127 Hours')
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Sunshine', 'Millions')
        }),
        entries: List.of('127 Hours', 'Trainspotting', '28 Days Later')
      }));
    });
    it('marks winner when just one entry left', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            'Trainspotting': 4,
            '28 Days Later': 2
          })
        }),
        entries: List()
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        winner: 'Trainspotting'
      }));
    });
  });
  describe('vote', () => {
    it('creates a tally for the voted entry', () => {
      const state = Map({
        pair: List.of('Trainspotting', '28 Days Later')
      });
      const nextState = vote(state, 'Trainspotting');
      expect(nextState).to.equal(Map({
        pair: List.of('Trainspotting', '28 Days Later'),
        tally: Map({
          'Trainspotting': 1
        })
      }));
    });
    it('adds to existing tally for the voted entry', () => {
      const state = Map({
        pair: List.of('Trainspotting', '28 Days Later'),
        tally: Map({
          'Trainspotting': 3,
          '28 Days Later': 2
        })
      });
      const nextState = vote(state, 'Trainspotting');
      expect(nextState).to.equal(Map({
        pair: List.of('Trainspotting', '28 Days Later'),
        tally: Map({
          'Trainspotting': 4,
          '28 Days Later': 2
        })
      }));
    });
  });
});
