import React from 'react'
import {StyleSheet, TouchableHighlight} from "react-native"
import {Icon} from 'react-native-elements'
import {colours} from '../colours'


export class AddIcon extends React.Component<Props, State> {

  state = {
  }

  render() { 
    return (
        <Icon
        color={"#ffffff"}
        onPress={this.props.onPress}
        size={45}
        name="add"/>
    );
  }

}


