import React, { Component } from 'react'
import {Main} from './Components/Main'
import { Router, Switch, Route, Redirect} from './Routing'
import {Auth} from './Components/Auth/Auth'
import {clearLoginInfo} from "./Helpers/storage"

export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      id: null,
      welcome: false
    };
  }

  setLoggedIn = (id) => {
    this.setState({loggedIn: true, id:id})
  }

  setLoggedOut = () => {
    this.setState({loggedIn: false, id:null})
  }

  setWelcomeState = (welcomeState) => {
    this.setState({welcome: welcomeState})
  }

  logOut = () => {
    clearLoginInfo().then(() => {
      this.setLoggedOut()
    })
  }

  render() { 
    return (
      <Router>
        <Switch>
            <Route exact path="/" render={() => (<Redirect to="/emergency"/>)}/>
            <Route path="/auth"  render={(props) => (<Auth 
                      setWelcomeState={this.setWelcomeState} 
                      setLoggedIn={this.setLoggedIn} 
                      loggedIn={this.state.loggedIn}/>)} />
            <Route exact path="/*" render={(props) => (<Main {...props} 
                      logOut={this.logOut} 
                      setWelcomeState={this.setWelcomeState} 
                      welcome={this.state.welcome}
                      loggedIn={this.state.loggedIn}/>)} />
        </Switch>
    </Router>
    )
  }
}


