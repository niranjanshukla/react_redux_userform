import React, {PropTypes} from 'react';

const defaultNone = () => undefined;

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

  childContextTypes: {
    update: PropTypes.func,
    reset: PropTypes.func,
    submit: PropTypes.func,
    values: PropTypes.object,
  },

  getDefaultProps() {
    return {
      onSubmit: defaultNone
    };
  },

  submit(){
    this.props.onSubmit(assign({}, this.props.values));
    this.props.reset();
  },

  getChildContext() {
    return {
      update: this.props.update,
      reset: this.props.reset,
      submit: this.submit,
      values: this.props.values,
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
