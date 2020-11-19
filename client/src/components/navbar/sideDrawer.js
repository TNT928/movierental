import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';
import './sideDrawer.css';

const SideDrawer = ({auth: {isAuthenticated, loading}, logout}) => {
  const guestLinks = (
    <nav className="sidedrawer">
      <ul>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </ul>
    </nav>
  );

  const authLinks = (
    <nav className="sidedrawer">
      <ul>
        <Link to="#!" onClick={logout}>
          <i className="fas fa-sign-out-alt"></i>{' '}
          <span className="hide-sm">Logout</span>
        </Link>
        <Link to='/profile'>
            <i className="fas fa-search"></i>
              Search
            </Link>
            <Link to='/wishlist'>
            <i className="fas fa-bookmark"></i> 
            My wishlist
            </Link>
      </ul>
    </nav>
  );

  return (
    <nav >
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

SideDrawer.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {logout})(SideDrawer);
