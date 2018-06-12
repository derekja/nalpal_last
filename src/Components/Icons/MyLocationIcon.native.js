import React from 'react'
import {StyleSheet} from "react-native"
import {Icon} from 'react-native-elements'
import {colours} from '../UI/colours'


export class MyLocationIcon extends React.Component<Props, State> {


  render() { 
    return (
        <Icon
        onPress={this.props.onPress}
        name="my-location"/>
    );
  }

}