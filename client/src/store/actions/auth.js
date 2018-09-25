import axios from 'axios';
import { SET_CURRENT_USER } from '../actionTypes';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function authUser(type, userData) {
  axios.post(`http://localhost:8081/api/auth/${type}`, userData)
    .then(() => {
      console.log('axios');
    })
    .catch((err) => {
      console.log(err);
    });
}
