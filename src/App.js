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
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

function App() {
  return (
    <Router>
      <Navbar />
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={250}
            classNames="fade">
            <Switch location={location}>
              <Route path="/tickets">
                <Tickets />
              </Route>

              <Route path="/history">
                <History />
              </Route>

              <Route path="/profile">
                <Profile />
              </Route>

              <Route exact path="/">
                <Projects />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </Router>
  );
}

export default App;
