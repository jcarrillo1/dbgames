import axios from 'axios';

function login(credentials) {
  return axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, credentials);
}

function signup(info) {
  return axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, info);
}

function getUserInfo() {
  const config = {
    headers: {
      Authorization: localStorage.getItem('id_token'),
    },
  };
  return axios.get(`${process.env.REACT_APP_API_URL}/api/auth`, config);
}

export default { login, signup, getUserInfo };
