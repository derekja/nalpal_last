import React, { Component } from 'react'
import {Main} from './Components/Main'
import { Router, Switch, Route, Redirect} from './Routing'
import {Auth} from './Components/Auth/Auth'

export default class App extends Component {

  state = {
    loggedIn: true,
    id: null
  };

  setLoggedIn = (id) => {
    this.setState({loggedIn: true, id:id})
  }

  render() { 
    return (
      <Router>
        <Switch>
            <Route exact path="/" render={() => (<Redirect to="/Emergency"/>)}/>
            <Route path="/auth"  render={(props) => (<Auth setLoggedIn={this.setLoggedIn}/>)} />
            <Route exact path="/*" render={(props) => (<Main {...props} loggedIn={this.state.loggedIn}/>)} />
        </Switch>
    </Router>
    )
  }
}


