import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default React.createClass({

  displayName: '',

  render() {
    return (
      <DropdownButton bsStyle={this.props.name} title={this.props.name} id={this.props.id}>
        {this.props.values.map(function(listValue, i){
          return <MenuItem eventKey={i}>{listValue}</MenuItem>
        })}
      </DropdownButton>
    )
  }
});
