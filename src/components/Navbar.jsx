import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1>Ticket Punch</h1>
    <nav>
      <Link to="/projects">Projects</Link>

      <Link to="/tickets">Tickets</Link>

      <Link to="/history">History</Link>

      <Link to="/profile">Profile</Link>
    </nav>
  </header>
);

export default Navbar;
