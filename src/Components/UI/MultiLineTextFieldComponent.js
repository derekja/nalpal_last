import React from 'react'
import { StyleSheet, TextInput} from 'react-native'


export class MultiLineTextFieldComponent extends React.Component<Props, State> {

  state= {

  }

  onChange = (value) => {
  	this.props.onChange(this.props.id, value)
  }

  render() {
    return (
    	<TextInput
    		id={this.props.id}
    		placeholder={this.props.placeholder? this.props.placeholder : ""}
    		value={this.props.value? this.props.value : ""}
    		onChangeText={this.onChange}
    		secureTextEntry={this.props.password}
    		style={styles.textField}
        multiline={true}
    	/>
    );
  }

}

const styles = StyleSheet.create({
	textField: {
		textDecorationLine: "none",
    height: 125,
    margin: 5
	}
});