import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Projects from './pages/Projects';
import Tickets from './pages/Tickets';
import History from './pages/History';
import Profile from './pages/Profile';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

function App() {
  return (
    <Router>
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
