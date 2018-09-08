import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';

const Main = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" render={props => <Homepage {...props} />} />
    </Switch>
  </React.Fragment>
);

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default withRouter(connect(mapStateToProps)(Main));
