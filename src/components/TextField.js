import React, {PropTypes} from 'react';

export default React.createClass({
  displayName: 'Text Field',

  propTypes: {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string
  },

  contextTypes: {
    update: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
  },

  updateValue(value) {
    this.context.update(this.props.name, value);
  },

  onChange(event) {
    this.updateValue(event.target.value)
  },

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input type="text" className="form-control" id={this.props.id} placeholder={this.props.placeholder} value={this.context.values[this.props.id]}/>
     </div>
    );
  }
});
