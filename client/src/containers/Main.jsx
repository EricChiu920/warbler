import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';

const Main = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" render={props => <Homepage {...props} />} />
      <Route
        exact
        path="/signin"
        render={props => (
          <AuthForm buttonText="Log in" heading="Welcome Back." {...props} />
        )}
      />
      <Route
        exact
        path="/signup"
        render={props => (
          <AuthForm signUp buttonText="Sign me up!" heading="Join Warbler today." {...props} />
        )}
      />
    </Switch>
  </React.Fragment>
);

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default withRouter(connect(mapStateToProps)(Main));
