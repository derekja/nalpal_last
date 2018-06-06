import React from 'react'
import {StyleSheet, TouchableHighlight} from "react-native"
import {Icon} from 'react-native-elements'


export class CloseIcon extends React.Component<Props, State> {

  state = {
  }

  render() { 
    return (
        <Icon
        color={"#000000"}
        onPress={this.props.onPress}
        size={45}
        name="close"/>
    );
  }

}

