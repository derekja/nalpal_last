import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {colours} from "./colours"


export class WideButton extends React.Component<Props, State> {

  render() { 
    return (
        <View
          style={styles.container}
        >
           <TouchableOpacity
            style={this.props.buttonStyleType === "main"? [styles.button, styles.buttonMain] : [styles.button, styles.buttonSecondary]}
            onPress={this.props.onPress}
          >
              <Text style={this.props.buttonStyleType === "main"? [styles.text, styles.textMain] : [styles.text, styles.textSecondary]}>
              {this.props.title}
              </Text>
            </TouchableOpacity>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  button: {
    borderRadius: 20,
  },
  buttonMain: {
    backgroundColor: colours.emergency,
  },
  buttonSecondary: {
    backgroundColor: colours.primary,
    width: '100%',
  },
  text: {
    textAlign: "center",
    color: "#FAFAFA",
    padding: 20
  },
  textMain: {
    fontSize: 40
  },
  textSecondary: {
    fontSize: 25
  }
});