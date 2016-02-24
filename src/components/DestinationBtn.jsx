import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <button>End:
    <select id="end">
      {this.props.locs.map((location, i) => {
        return (
          <option key={i} value={location.address}>{location.name}</option>
        );
      })}
    </select></button>
  }
});
