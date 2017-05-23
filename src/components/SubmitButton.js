import React, { PropTypes } from 'react';

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
      <button type="submit" className="btn btn-primary" onSubmit={this.context.submit}>Submit</button>
    );
  }
});
