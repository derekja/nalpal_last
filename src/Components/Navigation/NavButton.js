//@flow
import React from 'react'
import { Text, StyleSheet, TouchableOpacity} from 'react-native'
import {NavButtonType} from './Nav'
import {SettingsIcon, EmergencyIcon, ChatIcon, InformationIcon} from "../Icons/NavIcons"
import {colours} from "../UI/colours"
import { Route} from '../../Routing'


type Props = {
  type: NavButtonType,
  title: string,
  updateSelectedNavToggle: (NavButtonType) => void,
  active: boolean,
  history: any
}

class NavButton extends React.Component<Props, State> {

  state = {
  }

  onPress = (history) => {
    history.push('/' + this.props.type)
  }

  render() { 
    let icon = {};
    switch(this.props.type) {
      case "emergency":
        icon = <EmergencyIcon active={this.props.active}/>
        break;
      case "chat":
        icon = <ChatIcon active={this.props.active}/>
        break;
      case "information":
        icon = <InformationIcon active={this.props.active}/>
        break;
      case "settings":
        icon = <SettingsIcon active={this.props.active}/>
        break;
      default:
        break;
    }
    let style = [styles.buttonStyle];
    if (this.props.emergencyInProgress) {
      style = [styles.emergencyBackground, ...style]
    }
    return (
        <Route render={({history}) => (
           <TouchableOpacity 
           activeOpacity={0.7}
           style={this.props.active? [styles.activeStyle, ...style]  : [styles.inactiveStyle, ...style]}
           onPress={() => this.onPress(history)}
          >
              {icon}
              <Text style={this.props.emergencyInProgress? styles.emergencyInProgress : styles.buttonText}>
              {this.props.title}
              </Text>
          </TouchableOpacity>
        )}/>
    );
  }

}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignItems: "center",
    padding: 5
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10
  },
  emergencyInProgress: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10
  },
  inactiveStyle: {
    backgroundColor: colours.primary
  },
  activeStyle: {
    backgroundColor: colours.primary,
    borderBottomWidth: 3,
    borderBottomColor: colours.navActive
  },
  emergencyBackground: {
    backgroundColor: colours.emergency
  },
  icon: {
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default NavButton;