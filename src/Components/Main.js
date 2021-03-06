import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Emergency} from './Emergency/Emergency'
import {Chat} from './Chat/Chat'
import {Settings} from './Settings/Settings'
import {Information} from './Information'
import {NavWrapper} from './Navigation/NavWrapper'
import { Route} from '../Routing'
import {Welcome} from './Settings/Welcome'
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



  render() {
    let emergencyInProgress = false
    if (has(this.state.requester, 'requestLocation') || has(this.state.responder, 'requestLocation')) {
      emergencyInProgress = true
    }

    if (this.props.welcome) {
        return (<View style={styles.contentContainer}>
            <Welcome setWelcomeState={this.props.setWelcomeState} changeState={this.changeState}/>
        </View>)

    }else {
        return (<View style={styles.contentContainer}>
            <NavWrapper
                emergencyInProgress={emergencyInProgress} 
                displayNav={this.state.displayNav}
                {...this.props}
              >
                  <View style={styles.contentContainer}>
                    <MainRouting
                        emergencyInProgress={emergencyInProgress}
                        requester={this.state.requester}
                        responder={this.state.responder}
                        changeState = {this.changeState}
                        id={this.props.id}
                        contacts={this.state.contacts}
                        pendingContacts={this.state.pendingContacts}
                        logOut={this.props.logOut}
                        getLocation={this.getLocation}
                        defaultMessage={this.state.defaultMessage}
                        setGlobalError={this.props.setGlobalError}
                        userLocation={this.state.userLocation}
                    />
                  </View>
            </NavWrapper>
        </View>)

    }

  }

}

const MainRouting = (props) => (
  <View style={styles.contentContainer}>
    <Route path="/chat" render={() => (<Chat  
                  emergencyInProgress={props.emergencyInProgress}
                  id={props.id} contacts={props.contacts} 
                  pendingContacts={props.pendingContacts} 
                  setGlobalError={props.setGlobalError}
                  changeState={props.changeState}/>)}/>
    <Route path="/information" render={() => (<Information  emergencyInProgress={props.emergencyInProgress} />)} />
    <Route path="/settings" render={() => (<Settings emergencyInProgress={props.emergencyInProgress} defaultMessage={props.defaultMessage} logOut={props.logOut} changeState={props.changeState}/>)} />
    <Route path="/emergency" render={() => (<Emergency  {...props} />)}/>
  </View>
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  }
});