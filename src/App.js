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

function App() {
  return (
    <Router>
      <>
      <Navbar />

        <Switch>
          <Route path="/tickets">
            <Tickets />
          </Route>

          <Route path="/history">
            <History />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/">
            <Projects />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
