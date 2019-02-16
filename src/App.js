import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Main from './screens/Main'
import Home from './screens/Home'
import Work from './screens/Work'
import Contact from './screens/Contact'
import './App.css';

class App extends Component {
  render() {
    return (
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route sensitive path="/work" component={Work} />
            <Route sensitive path="/contact" component={Contact} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Main>
    );
  }
}

export default withRouter(App)
