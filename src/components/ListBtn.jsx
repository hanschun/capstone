import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import { Link } from 'react-router';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <Link to="/list"><button id="tolist">List View</button></Link>;
  }
});
