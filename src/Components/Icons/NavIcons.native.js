//@flow
import React from 'react'
import {Icon} from 'react-native-elements'
import {colours} from "../UI/colours"

type Props = {
  active: boolean
}

type State = {}


export class EmergencyIcon extends React.Component<Props, State> {

  state = {
  }

  render() { 
    return (
      <Icon
      name="warning"
      color={this.props.active? colours.navActive : colours.navInactive}
      size={34} />
    );
  }

}


export class SettingsIcon extends React.Component<Props, State> {

  state = {
  }

  render() { 
    return (
      <Icon
      name="settings"
      color={this.props.active? colours.navActive : colours.navInactive}
      size={34}/>
    );
  }

}

export class InformationIcon extends React.Component<Props, State> {

  state = {
  }

  render() { 
    return (
      <Icon
      name="info-outline"
      color={this.props.active? colours.navActive : colours.navInactive}
      size={34}/>
    );
  }

}

export class ChatIcon extends React.Component<Props, State> {

  state = {
  }

  render() { 
    return (
      <Icon
      name="chat-bubble-outline"
      color={this.props.active? colours.navActive : colours.navInactive}
      size={34}/>
    );
  }

}
