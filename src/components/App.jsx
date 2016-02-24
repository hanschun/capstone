import React from 'react';
import locations from '../locations';

export default React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});
