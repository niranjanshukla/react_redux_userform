  import React, { PropTypes } from 'react';
  import DropDownMenu from 'material-ui/lib/drop-down-menu';
  import MenuItem from 'material-ui/lib/menus/menu-item';

  export default React.createClass({

    displayName: 'DropDown',

    propTypes: {
      name: PropTypes.string.isRequired
    },

    contextTypes: {
      update: PropTypes.func.isRequired,
      values: PropTypes.object.isRequired
    },

    updateValue(value) {
      this.context.update(this.props.name, value);
    },

    onChange(event, index, value) {
      this.updateValue(value)
    },

    render() {
      return (
          <DropDownMenu value={this.context.values[this.props.name]} onChange={this.onChange}>
            {this.props.hobbies.map(function(hobby,i){
              return <MenuItem key={i} value={hobby} primaryText={hobby} />;
            })}
          </DropDownMenu>
    );
   }
  });
