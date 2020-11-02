import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';
import './navbar.css';

const Navbar = ({auth: {isAuthenticated, loading}, logout,handleClick}) => {
  const authLinks = (
    <header className="toolbar">
      <nav className="nav">
        <div className="hamburger">
          <i className="fas fa-bars" onClick={handleClick} ></i>
        </div>
        <div className="brand">
          <Link className="blockbuster" to="/">
            {' '}
            Blockbuster Max
          </Link>
        </div>
        <div className='spacer'/>

        <div className="nav-right">
          <ul> 
          
          <Link to='/profile'>
            <i className="fas fa-search"></i>
              Search
            </Link>
            <Link to='/wishlist'>
            <i className="fas fa-bookmark"></i> 
            My wishlist
            </Link>
            <Link to="#!" onClick={logout}>
              <i className="fas fa-sign-out-alt"></i>{' '}
              <span className="hide-sm">Logout</span>
            </Link>
           
          </ul>
        </div>
      </nav>
    </header>
  );

  const guestLinks = (
    <header className="toolbar">
      <nav className="nav">
        <div className="hamburger">
          <i className="fas fa-bars" onClick={handleClick}></i>
        </div>

        <div className=" brand">
          <Link className="blockbuster" to="/">
            {' '}
            Blockbuster Max
          </Link>
        </div>
        <div className='spacer'/>

      

        <div className="nav-right">
          <ul>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </ul>
        </div>
      </nav>
    </header>
  );

  return (
    <nav >
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {logout})(Navbar);
