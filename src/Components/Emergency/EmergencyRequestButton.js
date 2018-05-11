import React  from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {colours} from "../colours"

export class EmergencyRequestButton extends React.Component<Props, State> {


  render() {

      return (
           <TouchableOpacity
            style={this.props.confirm? [styles.button, styles.buttonConfirm] : [styles.button, styles.buttonCancel]}
            onPress={this.props.onPress}
          >
              <Text style={this.props.confirm? [styles.text, styles.textConfirm] : [styles.text, styles.textCancel]}>
              {this.props.title}
              </Text>
            </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffffff",
    width: "50%",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  buttonConfirm: {
    backgroundColor: colours.emergency,
  },
  text: {
    textAlign: "center",
    color: colours.primary,
    fontWeight: "500",
    fontSize: 18
  },
  textConfirm: {
    color: "#ffffff"
  },
});