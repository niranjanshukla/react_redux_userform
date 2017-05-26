import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

export default React.createClass({

  displayName: 'SubmitButton',

  propTypes: {
    label: PropTypes.string
  },

  contextTypes: {
    submit: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      label: 'Submit'
    };
  },

  render() {
    return (
      <RaisedButton
        primary={true}
        label={this.props.label}
        onTouchTap={this.context.submit}/>
      );
    }
  });
