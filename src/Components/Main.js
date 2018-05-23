import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Emergency} from './Emergency/Emergency'
import {Chat} from './Chat/Chat'
import {Settings} from './Settings'
import {Information} from './Information'
import {NavButtonType} from './Navigation/Nav'
import {NavWrapper} from './Navigation/NavWrapper'

type State = {
  UI: {
    selectedNavToggle?: NavButtonType
  },
  requester: {
      requestLocation?: {
          latitude: number,
          longitude: number
      }
  },
  responder: {
      accepted: boolean,
      requestLocation?: {
        latitude: number,
        longitude: number
      }
  }
}

export class Main extends React.Component<Props, State> {

  state: State = {
    emergencyInProgress: false,
    selectedNavToggle: "Emergency",
    displayNav: true,
    userLocation: {
      latitude: 48.427325,
      longitude: -123.356122
    },
    requester: {

    },
    responder : {

    }
  }

  updateSelectedNavToggle = (toggle: NavButtonType) => {
    this.setState({selectedNavToggle: toggle});
  }

  setEmergencyInProgress = (emergencyInProgress: boolean) => {
    this.setState({emergencyInProgress: emergencyInProgress});
  }

  setResponderState = (responder) => {
    this.setState({responder: responder});
  }
  setRequesterState = (requester) => {
    this.setState({requester: requester});
  }


  render() {

    let page = {};
    switch(this.state.selectedNavToggle) {
      case "Emergency":
        page = <Emergency 
                  setEmergencyInProgress={this.setEmergencyInProgress}
                  setResponderState={this.setResponderState}
                  setRequesterState={this.setRequesterState}
                  requester={this.state.requester}
                  responder={this.state.responder}
                  userLocation={this.state.userLocation}
                />
        break;
      case "Chat":
        page = <Chat/>
        break;
      case "Information":
        page = <Information/>
        break;
      case "Settings":
        page = <Settings/>
        break;
      default:
        break;
    }

    return (
      <NavWrapper
          updateSelectedNavToggle={this.updateSelectedNavToggle} 
          emergencyInProgress={this.state.emergencyInProgress} 
          selectedNavToggle={this.state.selectedNavToggle}
          displayNav={this.state.displayNav}

      >
        <View style={styles.contentContainer}>
          {page}
        </View>
      </NavWrapper>
    );
  }

}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  },
  nalpalHeader: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});