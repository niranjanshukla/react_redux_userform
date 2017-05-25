import React from 'react';

export default React.createClass({
  displayName: 'Text Field',

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input type="text" className="form-control" id={this.props.id} placeholder={this.props.placeholder} />
      </div>
      );
  }
});
