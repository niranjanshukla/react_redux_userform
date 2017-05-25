import React from 'react';
import { FormControl, ControlLabel } from 'react-bootstrap';

export default React.createClass({
  displayName: 'Text Field',

  updateValue(value) {
    this.context.update(this.props.name, value);
  },

  onChange(event) {
    this.updateValue(event.target.value)
  },

  render() {
    return (
      <div>
      <ControlLabel>{this.props.label}</ControlLabel>
          <FormControl
            type="text"
            placeholder={this.props.placeholder}
          />
        </div>
    );
  }
});
