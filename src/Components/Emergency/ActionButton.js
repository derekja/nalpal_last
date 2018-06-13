import React  from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import {colours} from "../UI/colours"

export class ActionButton extends React.Component<Props, State> {


  render() {

    let buttonStyle = [styles.button]
    if (this.props.single) {
      buttonStyle = [styles.button, styles.singleButton]
    }

      return (
           <TouchableOpacity
            style={this.props.confirm? [buttonStyle, styles.buttonConfirm] : [buttonStyle, styles.buttonCancel]}
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
    flexBasis: "50%",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  singleButton: {
    flexBasis: "100%"
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