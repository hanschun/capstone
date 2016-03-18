import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/lib/Button';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <Button>Start:
    <select id="start">
      {this.props.locs.map((location, i) => {
        return (
          <option key={i+1} value={location.address}>{location.name}</option>
        );
      })}
    </select></Button>
},
componentWillReceiveProps: function(nextProps) {
    this.props = nextProps;
    this.forceUpdate();
}
});
