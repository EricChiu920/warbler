import React from 'react';
import { Switch, Router, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../components/HomePage';

const Main = props => (
  <React.Fragment>
    <Switch>
      <Router exact path="/" render={props => <Homepage {...props} />} />
    </Switch>
  </React.Fragment>
);

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default withRouter(connect(mapStateToProps))(Main);
