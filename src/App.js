import React, { Component } from 'react'
import {Main} from './Components/Main'
import { Router, Switch, Route} from './Routing'
import {Auth} from './Components/Auth/Auth'

export default class App extends Component {

  state = {
    loggedIn: false,
    id: null
  };

  setLoggedIn = (id) => {
    this.setState({loggedIn: true, id:id})
  }

  render() { 
    return (
      <Router>
        <Switch>
              {this.state.loggedIn && <Route exact path="/*" component={Main} />}
              {!this.state.loggedIn && <Route exact path="/*"  render={(props) => (<Auth setLoggedIn={this.setLoggedIn}/>)} />}
          </Switch>
        </Router>
    )
  }
}


