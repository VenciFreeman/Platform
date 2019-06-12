import React, { Component } from 'react';
import WrappedLogin from "./Login";
import HomePage from "./Home";
import WrappedRegistrationForm from "./Register";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import "./App.css";


class App extends Component {
  constructor()
  {
    super();
    this.state = { userid: 0, username: "" };
  }
  setUserId = (id, name) => {
    this.setState({ userid: id, username: name });
  }
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" render={() => <WrappedLogin setUser={this.setUserId} />} />
            <Route path="/Login" render={() => <WrappedLogin setUser={this.setUserId} />} />
            <Route path="/Register" component={ WrappedRegistrationForm } />
            <Route path="/Home" render={() => <HomePage userid={this.state.userid} username={this.state.username} />} />
          </Switch>
        </Router> 
    );
  }
}

export default App;
