import React from 'react';

import './App.css';
import { createBrowserHistory } from 'history';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

// eslint-disable-next-line import/no-cycle
import Navbar from './components/Navbar';
// eslint-disable-next-line import/no-cycle
import History from './pages/History';
// eslint-disable-next-line import/no-cycle
import Login from './pages/Login';
// eslint-disable-next-line import/no-cycle
import Profile from './pages/Profile';
// eslint-disable-next-line import/no-cycle
import Projects from './pages/Projects';
// eslint-disable-next-line import/no-cycle
import Tickets from './pages/Tickets';
// eslint-disable-next-line import/no-cycle
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
            classNames="fade"
          >
            <Switch location={location}>
              <Route path="/projects" component={Projects} />

              <Route path="/tickets" component={Tickets} />

              <Route path="/history" component={History} />

              <Route path="/profile" component={Profile} />

              <Route path="/signup" component={Welcome} />

              <Route exact path="/" component={Login} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
      />
    </Router>
  );
}

export default App;
