import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  state = {
  }

  render() {
    return (
      <nav className="navbar navbar-extend">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="" alt="warbler Home" />
            Warbler Home
          </Link>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/signup">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="signin">
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps)(Navbar);
