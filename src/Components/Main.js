import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Emergency} from './Emergency/Emergency'
import {Chat} from './Chat/Chat'
import {Settings} from './Settings'
import {Information} from './Information'
import {NavButtonType} from './Navigation/Nav'
import {NavWrapper} from './Navigation/NavWrapper'
import { Route, Redirect} from '../Routing'
import has from 'lodash/has'

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
    id: "8308a4c0315cbf6c25568be241d4afc5",
    displayNav: true,
    userLocation: {
      latitude: 48.427325,
      longitude: -123.356122
    },
    requester: {

    },
    responder : {

    },
    contacts: []
  }

  setResponderState = (responder) => {
    this.setState({responder: responder});
  }
  setRequesterState = (requester) => {
    this.setState({requester: requester});
  }

  changeState = (changedStateObjects) => {
      let newState = Object.assign(this.state, changedStateObjects)
      this.setState(newState)
  }


  render() {
    let emergencyInProgress = false
    if (has(this.state.requester, 'requestLocation') || has(this.state.responder, 'requestLocation')) {
      emergencyInProgress = true
      console.log("yes")
    }

    return (
      <View style={styles.contentContainer}>
      <Route render={() => (
        !this.props.loggedIn ? (
          <Redirect to="/auth"/>
          ) : (
          <NavWrapper
          emergencyInProgress={emergencyInProgress} 
          displayNav={this.state.displayNav}
          {...this.props}
          >
            <View style={styles.contentContainer}>
              <MainRouting
                  requester={this.state.requester}
                  responder={this.state.responder}
                  userLocation={this.state.userLocation}
                  changeState = {this.changeState}
                  id={this.state.id}
                  contacts={this.state.contacts}
              />
            </View>
          </NavWrapper>
          )
      )}/>
      </View>
    );
  }

}

const MainRouting = (props) => (
  <View style={styles.contentContainer}>
    <Route path="/chat" render={() => (<Chat  id={props.id} contacts={props.contacts} changeState={props.changeState}/>)}/>
    <Route path="/information" component={Information} />
    <Route path="/settings" component={Settings} />
    <Route path="/emergency" render={() => (<Emergency  {...props} />)}/>
  </View>
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  }
});