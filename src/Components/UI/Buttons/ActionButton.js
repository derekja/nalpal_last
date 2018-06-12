import React  from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import {colours} from "../colours"

export class ActionButton extends React.Component<Props, State> {


  render() {

    let buttonStyle = [styles.button]
    if (this.props.single) {
      buttonStyle = [styles.button, styles.singleButton]
    }

      return (
           <TouchableOpacity
            style={[buttonStyle, styles[this.props.type + "Button"]]}
            onPress={this.props.onPress}
          >
              <Text style={[styles.text, styles[this.props.type + "Text"]]}>
              {this.props.title}
              </Text>
            </TouchableOpacity>
    );
  }

}


const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffffff",
    flexBasis: "50%",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  singleButton: {
    flexBasis: "100%"
  },
  text: {
    textAlign: "center",
    color: colours.primary,
    fontWeight: "500",
    fontSize: 18
  },
  emergencyButton: {
    backgroundColor: colours.emergency
  },
  darkButton: {
    backgroundColor: colours.primary
  },
  lightButton: {
    backgroundColor: colours.white
  },
  emergencyText: {
    color: colours.white
  },
  darkText: {
    color: colours.white
  },
  lightText: {
    color: colours.primary
  }
});