import React from 'react'
import {StyleSheet, TouchableHighlight} from "react-native"
import {Icon} from 'react-native-elements'
import {colours} from '../UI/colours'


export class AddIcon extends React.Component<Props, State> {


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


