import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';

const Main = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" render={props => <Homepage {...props} />} />
      <Route
        exact
        path="/signin"
        render={props => (
          <AuthForm onAuth={authUser} buttonText="Log in" heading="Welcome Back." {...props} />
        )}
      />
      <Route
        exact
        path="/signup"
        render={props => (
          <AuthForm onAuth={authUser} signUp buttonText="Sign me up!" heading="Join Warbler today." {...props} />
        )}
      />
    </Switch>
  </div>
);

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default withRouter(connect(mapStateToProps, { authUser })(Main));
