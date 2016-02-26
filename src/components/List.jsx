import React from 'react';
import { IndexLink, Link } from 'react-router';
import locations from '../locations';

export default React.createClass({
  render() {
    return (
      <div>
        <p>Return to map: <IndexLink to="/" activeClassName="active">Home</IndexLink></p>
        <ul>
          {locations.map((location, i) => {
            return (
              <li key={i}>
                <span>{location.name}</span><br></br>
                <span>{location.address}</span><br></br>
                <span>{location.phone}</span>
              </li>

              );
          })}
        </ul>
      </div>
    );
  }
});
