import React from 'react'
import {StyleSheet} from "react-native"
import {Icon} from 'react-native-elements'
import {colours} from '../UI/colours'


export class LocationOnIcon extends React.Component<Props, State> {


  render() { 
    return (
        <Icon
        color={colours.grey}
        onPress={this.props.onPress}
        name="location-on"/>
    );
  }

}