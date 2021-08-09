import React from 'react';

import './App.css';
import { createBrowserHistory } from 'history';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Navbar from './components/Navbar';
import History from './pages/History';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Tickets from './pages/Tickets';
import Welcome from './pages/Welcome';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Navbar />
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={250}
            classNames="fade">
            <Switch location={location}>
              <Route path="/projects" component={Projects} />

              <Route path="/tickets" component={Tickets} />

              <Route path="/history" component={History} />

              <Route path="/profile" component={Profile} />

              <Route path="/login" component={Login} />

              <Route exact path="/" component={Welcome} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </Router>
  );
}

export default App;
