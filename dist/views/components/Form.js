import React from 'react';

export default React.createClass({
  displayName: 'UserForm',

  render() {
    return (
    <div className="container-fluid">
     <div className="row">
      <div className="col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
        <div className="panel panel-default">
          <form>
            {this.props.children}
          </form>
        </div>
      </div>
      </div>
    </div>
    );
  }
});
