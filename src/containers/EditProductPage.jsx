import React, { Component } from 'react';
import axios from 'axios';
import Spinner from 'react-spinkit';
import moment from 'moment';
import api from '../api';
import { blobToImage } from '../utilities';
import EditProductForm from '../components/forms/EditProduct';

class EditProductPage extends Component {
  state = {
    loading: true,
    product: {},
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/api/games/${this.props.match.params.id}`)
      .then(result => result.data)
      .then(data => {
        console.log(data);
        const { product } = data;
        product.release_date = product.release_date ?
          moment(product.release_date).format('YYYY-MM-DD') :
          moment().format('YYYY-MM-DD');
        this.setState({
          product,
          loading: false,
        })
      })
      .catch(error => console.log(error));
  }
  onSubmit = async (data) => {
    const { product } = this.state;
    if (product.image && data.image && data.image !== product.image) {
      const convertedImage = await blobToImage(data.image);
      let result = await api.uploadImage(convertedImage);
      data.image = result.secure_url;
    }
    axios.patch(`http://localhost:8080/api/games/${this.props.match.params.id}`, data)
      .then(result => result.data)
      .then(data => {
        console.log(data);
        this.props.history.push("/employee");
      })
      .catch(error => console.log(error));
  }
  render() {
    const { loading, product } = this.state;
    if (loading) {
      return <Spinner spinnerName="three-bounce" />;
    }
    return (
      <div>
        <EditProductForm initialValues={product} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default EditProductPage;
