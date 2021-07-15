import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <>
      <Navbar />

        <Switch>
          <Route path="/tickets">

          </Route>

          <Route path="/history">

          </Route>

          <Route path="/profile">

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
