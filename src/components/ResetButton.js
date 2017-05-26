import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

export default React.createClass({

  displayName: 'ResetButton',

  propTypes: {
    label: PropTypes.string
  },

  contextTypes: {
    reset: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      label: 'Reset'
    };
  },

  render() {
    return (
      <RaisedButton
        secondary={true}
        label={this.props.label}
        onTouchTap={this.context.reset}/>
      );
    }
  });
