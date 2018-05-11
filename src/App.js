import React, { Component } from 'react'
import {Main} from './Components/Main'
import { Router, Switch, Route} from './Routing'
//import {Auth} from './Components/Auth/Auth'

export default class App extends Component {

  state = {
    loggedIn: true,
  };

  setLoggedIn = () => {
    this.setState({loggedIn: true})
  }

  render() { 
    return (
      <Router>
        <Switch>
              {this.state.loggedIn && <Route exact path="/*" component={Main} />}
          </Switch>
        </Router>
    )
  }
}


//{!this.state.loggedIn && <Route exact path="/*"  render={(props) => (<Auth setLoggedIn={this.setLoggedIn}/>)} />}

