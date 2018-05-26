import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Emergency} from './Emergency/Emergency'
import {Chat} from './Chat/Chat'
import {Settings} from './Settings'
import {Information} from './Information'
import {NavButtonType} from './Navigation/Nav'
import {NavWrapper} from './Navigation/NavWrapper'
import { Route, Redirect} from '../Routing'

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
      <View>
      {this.props.location.pathname === "/" && <Redirect to="/Emergency"/>}
      <Route render={() => (
        !this.props.loggedIn ? (
          <Redirect to="/auth"/>
          ) : (
          <NavWrapper
          emergencyInProgress={this.state.emergencyInProgress} 
          displayNav={this.state.displayNav}
          {...this.props}
          >
            <View style={styles.contentContainer}>
              <MainRouting
                  setEmergencyInProgress={this.setEmergencyInProgress}
                  setResponderState={this.setResponderState}
                  setRequesterState={this.setRequesterState}
                  requester={this.state.requester}
                  responder={this.state.responder}
                  userLocation={this.state.userLocation}
              />
            </View>
          </NavWrapper>
          )
      )}/>
      </View>
    );
  }

}

const MainRouting = (emergencyProps) => (
  <View style={styles.contentContainesr}>
    <Route path="/chat" component={Chat}/>
    <Route path="/information" component={Information} />
    <Route path="/settings" component={Settings} />
    <Route path="/emergency" render={() => (<Emergency  {...emergencyProps} />)}/>
  </View>
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  }
});