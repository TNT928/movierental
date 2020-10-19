import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../actions/auth';

const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {
  const authLinks = (
    <nav className="nav">
      <h1>
        <i className="fas fa-ticket-alt fa-2x"></i>
        <Link className="blockbuster" to="/">
          Blockbuster Max
        </Link>
      </h1>
      <ul>
        <Link to="#!" onClick={logout}>
          <i className="fas fa-sign-out-alt"></i>{' '}
          <span className="hide-sm">Logout</span>
        </Link>
      </ul>
    </nav>
  );

  const guestLinks = (
    <nav className="nav">
      <h1>
        <i className="fas fa-ticket-alt fa-2x"></i>
        <Link className="blockbuster" to="/">
          Blockbuster Max
        </Link>
      </h1>
      <ul>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </ul>
    </nav>
  );

  return (
    <nav className='nav'>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps  = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps , {logout})(Navbar);
