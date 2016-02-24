import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import CenterBtn from './CenterBtn';
import DestinationBtn from './DestinationBtn';
import ModeBtn from './ModeBtn';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div id="floating-panel">
    <ModeBtn />
    <CenterBtn  locs={this.props.locs}/>
    <DestinationBtn locs={this.props.locs} />
    </div>
  },
  componentDidMount(){
    console.log('Panel locations',this.props.locs);
  }
});

// <button><strong>End:</strong>
// <select id="end">
//   <option value="3333 3rd Ave, Sacramento, CA 95817">Sacramento Food Bank -3rd Ave</option>
//   <option value="1351 N C St, Sacramento, CA 95811">Loaves and Fishes</option>
//   <option value="2469 Rio Linda Blvd, Sacramento, CA 95815">Sacramento Food Bank - Rio Linda Blvd</option>
//   <option value="1800 28th St, Sacramento, CA 95816">River City Food Bank</option>
// </select></button>
