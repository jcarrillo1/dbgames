import axios from 'axios';
import querystring from 'querystring';

function getProducts(query) {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/games/?${query ? querystring.stringify(query) :
  ''}`)
}

function getProduct(id) {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/games/${id}`);
}

function editProduct(id, updatedProduct) {
  return axios.patch(`${process.env.REACT_APP_API_URL}/api/games/${id}`, updatedProduct);
}

function addProducts(products) {
  return axios.post(`${process.env.REACT_APP_API_URL}/api/games`, products);
}

export default { getProducts, getProduct, editProduct, addProducts };
