import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Emergency} from './Emergency/Emergency'
import {Chat} from './Chat/Chat'
import {Settings} from './Settings/Settings'
import {Information} from './Information'
import {NavWrapper} from './Navigation/NavWrapper'
import { Route, Redirect} from '../Routing'
import {getCurrentLocation} from "../Helpers/location"
import {Welcome} from './Settings/Welcome'
import has from 'lodash/has'
// import {fetchDistance} from "../Helpers/googleMapsApi"


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
      defaultMessage: null,
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
    // const origin = {
    //   latitude: "48.460199", 
    //   longitude: "-123.350668"
    // }
    // const destination = {
    //   latitude: "48.461579", 
    //   longitude: "-123.355045"
    // }
    // fetchDistance(origin, destination)
  }

  render() {
    let emergencyInProgress = false
    if (has(this.state.requester, 'requestLocation') || has(this.state.responder, 'requestLocation')) {
      emergencyInProgress = true
    }

    return (
      <View style={styles.contentContainer}>
        <Route render={() => (
          !this.props.loggedIn ? (
            <Redirect to="/auth"/>
            ) : (
              this.props.welcome ? (
                <Welcome setWelcomeState={this.props.setWelcomeState}/>
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
                        defaultMessage={this.state.defaultMessage}
                        setGlobalError={this.props.setGlobalError}
                    />
                  </View>
                </NavWrapper>
              )
            )
        )}/>
      </View>
    );
  }

}

const MainRouting = (props) => (
  <View style={styles.contentContainer}>
    <Route path="/chat" render={() => (<Chat  
                  id={props.id} contacts={props.contacts} 
                  pendingContacts={props.pendingContacts} 
                  setGlobalError={props.setGlobalError}
                  changeState={props.changeState}/>)}/>
    <Route path="/information" component={Information} />
    <Route path="/settings" render={() => (<Settings  defaultMessage={props.defaultMessage} logOut={props.logOut} changeState={props.changeState}/>)} />
    <Route path="/emergency" render={() => (<Emergency  {...props} />)}/>
  </View>
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  }
});