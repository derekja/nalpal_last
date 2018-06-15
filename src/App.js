import React, { Component } from 'react'
import {Main} from './Components/Main'
import { Router, Switch, Route, Redirect} from './Routing'
import {Auth} from './Components/Auth/Auth'
import {clearLoginInfo} from "./Helpers/storage"
import {ThemeWrapper} from "./Components/ThemeWrapper"
import {ErrorBanner} from "./Components/UI/ErrorBanner"

export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      id: null,
      welcome: false,
      globalError: null
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

  setGlobalError = (error) => {
    this.setState({globalError: error})
  }

  logOut = () => {
    clearLoginInfo().then(() => {
      this.setLoggedOut()
    })
  }

  render() { 
    return (
      <ThemeWrapper>
        {this.state.globalError && <ErrorBanner 
                        errorText={this.state.globalError} 
                        setGlobalError={this.setGlobalError}/>}
          <Router>
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/emergency"/>)}/>
                <Route path="/auth"  render={ (props) => (
                          this.state.loggedIn ? (
                            <Redirect to="/emergency"/>
                          ) : (<Auth {...props}
                                setWelcomeState={this.setWelcomeState}
                                setGlobalError={this.setGlobalError} 
                                setLoggedIn={this.setLoggedIn} 
                                loggedIn={this.state.loggedIn}/>
                          )
                      )}
                />
                <Route exact path="/*"  render={(props) => (
                          !this.state.loggedIn ? (
                            <Redirect to="/auth"/>
                          ) : (<Main {...props}
                                logOut={this.logOut} 
                                setGlobalError={this.setGlobalError}
                                setWelcomeState={this.setWelcomeState} 
                                welcome={this.state.welcome}
                                id={this.state.id}
                                loggedIn={this.state.loggedIn}/>
                          )
                      )}
                />
            </Switch>
          </Router>
      </ThemeWrapper>
    )
  }
}


