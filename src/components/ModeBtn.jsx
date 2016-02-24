import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <button><b>Mode of Travel: </b>
      <select id="mode">
        <option value="TRANSIT">Transit</option>
        <option value="WALKING">Walking</option>
        <option value="BICYCLING">Bicycling</option>
        <option value="DRIVING">Driving</option>
      </select></button>
    );
  }
});
