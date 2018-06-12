import React from 'react'
import {View, StyleSheet, TouchableOpacity} from "react-native"
import {CloseIcon} from "../../Icons/CloseIcon"


export class CloseButton extends React.Component<Props, State> {

  render() { 
    return (
      <TouchableOpacity
        style={styles.containerStyle}
        onPress={this.props.onPress}
      >
      <View>
        <CloseIcon/>
      </View>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  containerStyle: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 5,
    margin: 10
  },
});