import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import CenterBtn from './CenterBtn';
import StartBtn from './StartBtn';
import DestinationBtn from './DestinationBtn';
import ModeBtn from './ModeBtn';
import GoBtn from './GoBtn';
import ListBtn from './ListBtn';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
    <ButtonToolbar id="floating-panel">
    <CenterBtn />
    <ModeBtn />
    <StartBtn locs={this.props.locs} />
    <DestinationBtn locs={this.props.locs} />
    <GoBtn />
    <ListBtn />
    </ButtonToolbar>
    );
  },
  componentWillReceiveProps: function(nextProps) {
      this.props = nextProps;
      this.forceUpdate();
  }
});
