import React from 'react'
import { StyleSheet, TextInput} from 'react-native'
import {colours} from "../colours"


export class TextFieldComponent extends React.Component<Props, State> {

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
    		style={styles.roundedTextField}
    		placeholderTextColor={colours.primary}
    		underlineColorAndroid={"rgba(225, 225, 225, 0)"}
    	/>
    );
  }

}

const styles = StyleSheet.create({
	roundedTextField: {
		backgroundColor: "rgba(225, 225, 225, 0.7)",
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical: 5,
		paddingHorizontal: 20,
		textDecorationLine: "none",
		width: "80%",
		color: colours.primary
	},
});