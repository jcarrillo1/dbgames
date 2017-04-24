import axios from 'axios';
import querystring from 'querystring';

function getUsers(query) {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/users/?${query ? querystring.stringify(query) :
  ''}`)
}

function getUser(id) {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/users/${id}`);
}

function editUser(id, updatedUser) {
  return axios.patch(`${process.env.REACT_APP_API_URL}/api/games/${id}`, updatedUser);
}

export default { getUsers, getUser, editUser };
