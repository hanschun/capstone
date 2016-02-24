import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/lib/Button';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <Button id="go">Go</Button>;
  }
});
