import React, {Component} from "react";
import './App.css';
import Home from './Home';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
          </Switch>
        </Router>
    );
  }
}
