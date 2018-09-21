import axios from 'axios';

export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => axios[method](path, data)
    .then(res => resolve(res.data))
    .catch(err => reject(err.response.data.error)));
}

export function newAuthUser(type) {
  axios.post(`http://localhost:8081/api/auth/signin`)
    .then(() => {
      console.log('axios');
    });
}
