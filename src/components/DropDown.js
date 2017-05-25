import React from 'react';

export default React.createClass({
  displayName: 'Dropdown',

  render() {
    return (
      <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
  <span className="caret"></span></button>
  <ul className="dropdown-menu">
    {this.props.hobbies.map(function(hobby, i){
       return <li key={i}>{hobby}</li>
     }
  </ul>
</div>
      );
  }
});
