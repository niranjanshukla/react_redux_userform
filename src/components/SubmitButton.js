import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default React.createClass({

  displayName: 'SubmitButton',

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
      <Button bsStyle="primary" type="submit" onClick={this.context.submit}>Submit</Button>
    );
  }
});
