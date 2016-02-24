import React from 'react';
import Panel from './Panel';
import locations from '../locations';

export default React.createClass({
  render: function() {
    return (
      <div>
        <Panel locs={locations}/>
        {this.props.children}
      </div>
    );
  }
});
