import React from 'react'
import {View, StyleSheet, TouchableHighlight} from "react-native"
import {AddIcon} from "../Icons/AddIcon"
import {colours} from './colours'


export class ErrorBanner extends React.Component<Props, State> {


  render() { 
    return (
      <TouchableHighlight 
        style={styles.containerStyle}
        onPress={this.props.onPress}
      >
      <View>
        <AddIcon/>
      </View>
      </TouchableHighlight>
    );
  }

}

const styles = StyleSheet.create({
  containerStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: colours.primary,
    borderRadius: 100,
    padding: 5,
    margin: 10
  },
});