import React, { PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';
import CircularProgress from 'material-ui/lib/circular-progress';

export default React.createClass({

  displayName: 'ResultArea',

  contextTypes: {
    values: PropTypes.object.isRequired
  },

  render() {
    if(typeof this.context.values !== 'undefined' && typeof this.context.values["loading"] !== 'undefined'){
      return (
        <div>
          <CircularProgress />
        </div>
      )
    }
    else if(typeof this.context.values["result"] !== 'undefined'){
      return (
        <div>
          <TextField
            rows="3"
            hintText={this.props.placeholder}
            floatingLabelText={this.props.label}
            value={this.context.values[this.props.name]}
            onChange={this.onChange}/>
          </div>
        );
      }
      else{
        return (null);
      }
    }
  });
