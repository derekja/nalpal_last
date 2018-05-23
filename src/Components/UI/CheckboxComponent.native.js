import React from 'react'
import {colours} from "./colours"
import { CheckBox } from 'react-native-elements'
import {StyleSheet, View} from "react-native"


export class CheckboxComponent extends React.Component<Props, State> {

  state= {
    checked: false
  }

  onValueChange = () => {
    this.setState({checked: !this.state.checked})
  	//this.props.onChange(this.props.id, value)
  }

  render() {
    return (
      <View style={styles.container}>
        <CheckBox
          onPress={this.onValueChange}
          checked = {this.state.checked}
          containerStyle={styles.checkbox}
          iconType='material'
          uncheckedIcon='check-box-outline-blank'
          checkedIcon='check-box'
          checkedColor={colours.primary}
          uncheckedColor={colours.primary}
        />
      </View>
    );
  }s

}

const styles = StyleSheet.create({
  container: {
  },
	checkbox: {
    margin: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    width: 22
  },
});