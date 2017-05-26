import React, {PropTypes} from 'react';
import without from 'lodash.without';
import assign from 'lodash.assign';

const noop = () => undefined;

export default React.createClass({
  displayName: 'Form',

  propTypes: {
    children: PropTypes.node,
    values: PropTypes.object,
    update: PropTypes.func,
    reset: PropTypes.func,
    onSubmit: PropTypes.func
  },

  childContextTypes: {
    update: PropTypes.func,
    reset: PropTypes.func,
    submit: PropTypes.func,
    values: PropTypes.object
  },

  getDefaultProps() {
    return {
      onSubmit: noop
    };
  },

  submit(){
    this.props.submit();
  },

  getChildContext() {
    return {
      update: this.props.update,
      reset: this.props.reset,
      submit: this.submit,
      values: this.props.values
    };
  },

  render() {
    return (
      <form>
        {this.props.children}
      </form>
    );
  }
});
