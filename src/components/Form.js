import React, {PropTypes} from 'react';

export default React.createClass({
  displayName: 'UserForm',

  //validating vals and functions for now
  propTypes: {
    children: PropTypes.node,
    values: PropTypes.object,
    update: PropTypes.func,
    reset: PropTypes.func,
    onSubmit: PropTypes.func
  },

  render() {
    return (
      <form>
        {this.props.children}
      </form>
    );
  }
});
