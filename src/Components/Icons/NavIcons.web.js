//@flow
import React from 'react'
import Settings from 'material-ui/svg-icons/action/settings'
import InfoOutline from 'material-ui/svg-icons/action/info-outline'
import Warning from 'material-ui/svg-icons/alert/warning'
import ChatBubbleOutline from 'material-ui/svg-icons/communication/chat-bubble-outline'
import {colours} from "../UI/colours"

export class ChatIcon extends React.Component<Props, State> {

  render() { 
    return (
      <ChatBubbleOutline color={this.props.active? colours.navActive : colours.navInactive} style={styles.icon}/>
    );
  }

}


export class SettingsIcon extends React.Component<Props, State> {


  render() { 
    return (
      <Settings color={this.props.active? colours.navActive : colours.navInactive} style={styles.icon}/>
    );
  }

}

export class InformationIcon extends React.Component<Props, State> {

  state = {
  }

  render() { 
    return (
      <InfoOutline color={this.props.active? colours.navActive : colours.navInactive} style={styles.icon}/>
    );
  }

}

export class EmergencyIcon extends React.Component<Props, State> {

  state = {
  }

  render() { 
    return (
      <Warning color={this.props.active? colours.navActive : colours.navInactive} style={styles.icon}/>
    );
  }

}

const styles = {
	icon: {
		width: 34,
		height: 34
	}
};