import React from 'react'
import {colours} from "./colours"
import Checkbox from 'material-ui/Checkbox'


export class CheckboxComponent extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  onValueChange = (event, isInputChecked) => {
    this.setState({checked: isInputChecked})
  	//this.props.onChange(this.props.id, value)
  }

  render() {
    return (
      	<Checkbox
          onCheck={this.onValueChange}
          checked={this.state.checked}
          style={styles.checkbox}
          labelStyle={styles.labelStyle}
          inputStyle={styles.inputStyle}
          iconStyle={styles.iconStyle}
      	/>
    );
  }

}

const styles = {
	checkbox: {
    width: 0
  },
  labelStyle: {
    width: 0
  },
  inputStyle: {
    backgroundColor: colours.primary,
    margin: 0
  },
  iconStyle: {
    fill: colours.primary,
  }
}