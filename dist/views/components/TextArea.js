import React from 'react';

export default React.createClass({
  displayName: 'Text Area',

  render() {
    return (
      <div className="form-group">
        <textarea className="form-control" id={this.props.id}/>
      </div>
      );
  }
});
