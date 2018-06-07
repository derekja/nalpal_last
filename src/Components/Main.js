import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Emergency} from './Emergency/Emergency'
import {Chat} from './Chat/Chat'
import {Settings} from './Settings'
import {Information} from './Information'
import {NavWrapper} from './Navigation/NavWrapper'
import { Route, Redirect} from '../Routing'
import {getCurrentLocation} from "../Helpers/location"
import has from 'lodash/has'


export class Main extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      id: "afaf0a7135e4a4dfa7389bf77676c967",
      displayNav: true,
      userLocation: {
        latitude: null,
        longitude: null
      },
      requester: {

      },
      responder : {

      },
      contacts: [],
      pendingContacts: []

    };
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

  getLocation = (onSuccess) => {
    getCurrentLocation(onSuccess, this.locationFail)
  }

  locationFail = () => {

  }

  componentWillMount = () => {
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
                  changeState = {this.changeState}
                  id={this.state.id}
                  contacts={this.state.contacts}
                  pendingContacts={this.state.pendingContacts}
                  logOut={this.props.logOut}
                  getLocation={this.getLocation}
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
    <Route path="/chat" render={() => (<Chat  id={props.id} contacts={props.contacts} pendingContacts={props.pendingContacts} changeState={props.changeState}/>)}/>
    <Route path="/information" component={Information} />
    <Route path="/settings" render={() => (<Settings  logOut={props.logOut} />)} />
    <Route path="/emergency" render={() => (<Emergency  {...props} />)}/>
  </View>
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  }
});