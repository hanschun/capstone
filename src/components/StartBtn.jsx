import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <button>Start:
    <select id="start">
      {this.props.locs.map((location, i) => {
        return (
          <option key={i+1} value={location.address}>{location.name}</option>
        );
      })}
    </select></button>
},
componentWillReceiveProps: function(nextProps) {
    this.props = nextProps;
    this.props.locs.map(location => console.log('Btn loc: ', location));
    this.forceUpdate();
}
});
