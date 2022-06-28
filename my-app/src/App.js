import React, {Component} from "react";
import './App.css';
import Home from './Home';
import ClientList from "./ClientList";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/clients' exact={true} component={ClientList}/>
          </Switch>
        </Router>
    );
  }
}
