import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AuthForm.css';

class AuthForm extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    profileImageUrl: '',
  }

  handleChange = e => (
    this.setState({
      [e.target.name]: e.target.value,
    })
  )

  render() {
    const {
      email,
      username,
      password,
      profileImageUrl,
    } = this.state;
    const { heading, buttonText, signUp } = this.props;

    return (
      <React.Fragment>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              <label htmlFor="email">
                Email:
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={this.handleChange}
                  value={email}
                  type="text"
                />
              </label>
              <label htmlFor="password">
                Password:
                <input
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={this.handleChange}
                  type="password"
                />
              </label>
              {signUp && (
                <div>
                  <label htmlFor="username">
                   username:
                    <input
                      className="form-control"
                      id="username"
                      name="username"
                      onChange={this.handleChange}
                      value={username}
                      type="text"
                    />
                  </label>
                  <label htmlFor="image-url">
                  Image URL:
                    <input
                      className="form-control"
                      id="image-url"
                      name="profileImageUrl"
                      onChange={this.handleChange}
                      type="text"
                      value={profileImageUrl}
                    />
                  </label>
                </div>
              )}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

AuthForm.defaultProps = {
  signUp: false,
};

AuthForm.propTypes = {
  heading: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  signUp: PropTypes.bool,
};

export default AuthForm;
