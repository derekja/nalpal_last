import React from 'react'
import {Avatar} from 'react-native-elements'
import { StyleSheet} from 'react-native'
import {generateAvatarColour} from "./colours"


export class AvatarComponent extends React.Component<Props, State> {


  render() { 
  	const color = generateAvatarColour(this.props.index) 
    return (
      <Avatar
      	medium
      	rounded
      	source={this.props.source}
      	title={this.props.title}
      	containerStyle={{backgroundColor: color, minWidth: 40}}
      />
    );
  }
}
