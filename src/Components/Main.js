import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Emergency} from './Emergency/Emergency'
import {Chat} from './Chat/Chat'
import {Settings} from './Settings'
import {Information} from './Information'
import {NavButtonType} from './Nav'
import { Route } from '../Routing'
import {NavWrapper} from './NavWrapper'

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
    displayNav: false,
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

    return (
      <NavWrapper
          updateSelectedNavToggle={this.updateSelectedNavToggle} 
          emergencyInProgress={this.state.emergencyInProgress} 
          selectedNavToggle={this.state.selectedNavToggle}
          displayNav={this.state.displayNav}

      >
          <MainRouting  setEmergencyInProgress={this.setEmergencyInProgress}
                        setResponderState={this.setResponderState}
                        setRequesterState={this.setRequesterState}
                        requester={this.state.requester}
                        responder={this.state.responder}
                        userLocation={this.state.userLocation}
          />
      </NavWrapper>
    );
  }

}

const MainRouting = (emergencyProps) => (
  <View style={styles.contentContainer}>
    <Route path="/chat" component={Chat}/>
    <Route path="/information" component={Information} />
    <Route path="/settings" component={Settings} />
    <Route exact path="/responder/contact" render={(props) => (<Emergency {...props} {...emergencyProps}
     triggerResponderRequest={true} contact={true}/>)}/>
    <Route exact path="/responder" render={(props) => (<Emergency {...props} {...emergencyProps}
     triggerResponderRequest={true}/>)}/>
    <Route exact path="/" render={(props) => (<Emergency {...props} {...emergencyProps} />)}/>
  </View>
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  },
  nalpalHeader: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});