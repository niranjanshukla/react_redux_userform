import React from 'react';

export default React.createClass({
  displayName: 'Button',

  render() {
    return (
      <div className="form-group">
        <input type="submit" className="btn btn-info" value={this.props.name} />
      </div>
      );
  }
});
