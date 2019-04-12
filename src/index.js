import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Manage from './Manage';
import BookList from './BookList'
import Book from './Book'
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Home" component={Home} />
            <Route path="/Register" component={Register} />
            <Route path="/Manage" component={Manage} />
            <Route path="/BookList" component={BookList} />
            <Route path="/detail/:id" component={Book} />

        </Switch>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
