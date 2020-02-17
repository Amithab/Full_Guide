import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Python } from './components/layout/pages/python_notes';
import { Notfound } from './notfound';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
//import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Python" component={Python} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
//
//
/*<Router>
    <div>
  <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/python">
            Python
          </NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Python" component={Python} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>*/

