import axios from 'axios';
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './errors';

export function setCurrentUser(user) {
  debugger;
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function authUser(type, userData) {
  return axios.post(`http://localhost:8081/api/auth/${type}`, userData)
    .then(({ token, ...user }) => {
      console.log('axios');
      localStorage.setItem('jwtToken', token);
      setCurrentUser(user);
      removeError();
    })
    .catch((err) => {
      addError(err.message);
      console.log(err);
    });
}
