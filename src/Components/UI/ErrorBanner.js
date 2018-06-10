import React from 'react'
import {View, StyleSheet, Text} from "react-native"
import {CloseButton} from "./CloseButton"


export class ErrorBanner extends React.Component<Props, State> {

  clearErrorText = () => {
    this.props.setGlobalError(null)
  }
  render() { 
    return (
      <View style={styles.bannerContainer}>
        <CloseButton onPress={this.clearErrorText}/>
        <Text style={styles.errorText}>{this.props.errorText}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: "red",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: 20
  },
  errorText: {
    color: "#ffffff",
    fontWeight: "bold",
  }
});