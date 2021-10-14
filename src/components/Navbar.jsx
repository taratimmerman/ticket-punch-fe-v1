import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

// eslint-disable-next-line import/no-cycle
import { logoutUserAction } from '../actions/userActions';

const Navbar = ({ loggedIn, logout }) => (
  <header>
    <h1>Ticket Punch</h1>

    {loggedIn ? (
      <nav>
        <Link to="/projects">Projects</Link>

        <Link to="/tickets">Tickets</Link>

        <Link to="/history">History</Link>

        <Link to="/profile">Profile</Link>

        <button
          type="button"
          className="purple secondary"
          onClick={() => logout()}
          text="Log Out"
        >
          Log Out
        </button>
      </nav>
    ) : null}
  </header>
);

Navbar.propTypes = {
  loggedIn: PropTypes.bool,
  logout: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loggedIn: state.loginReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logout: logoutUserAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
