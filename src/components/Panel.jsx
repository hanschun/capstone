import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div id="floating-panel">
    <b>Mode of Travel: </b>
    <select id="mode">
      <option value="TRANSIT">Transit</option>
      <option value="WALKING">Walking</option>
      <option value="BICYCLING">Bicycling</option>
      <option value="DRIVING">Driving</option>
    </select>
    <br />
    <strong>Start:</strong>
    <select id="start">
      <option value="1351 N C St, Sacramento, CA 95811">Loaves and Fishes</option>
      <option value="2469 Rio Linda Blvd, Sacramento, CA 95815">Sacramento Food Bank - Rio Linda Blvd</option>
      <option value="3333 3rd Ave, Sacramento, CA 95817">Sacramento Food Bank -3rd Ave</option>
    </select>
    <br />
    <strong>End:</strong>
    <select id="end">
      <option value="3333 3rd Ave, Sacramento, CA 95817">Sacramento Food Bank -3rd Ave</option>
      <option value="1351 N C St, Sacramento, CA 95811">Loaves and Fishes</option>
      <option value="2469 Rio Linda Blvd, Sacramento, CA 95815">Sacramento Food Bank - Rio Linda Blvd</option>
      <option value="1800 28th St, Sacramento, CA 95816">River City Food Bank</option>
    </select>
    </div>
  }
});
