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
      id: null
    };
  }

  setLoggedIn = (id) => {
    this.setState({loggedIn: true, id:id})
    console.log("changing log in state")
  }

  setLoggedOut = () => {
    this.setState({loggedIn: false, id:null})
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
            <Route path="/auth"  render={(props) => (<Auth setLoggedIn={this.setLoggedIn} loggedIn={this.state.loggedIn}/>)} />
            <Route exact path="/*" render={(props) => (<Main {...props} logOut={this.logOut} loggedIn={this.state.loggedIn}/>)} />
        </Switch>
    </Router>
    )
  }
}


