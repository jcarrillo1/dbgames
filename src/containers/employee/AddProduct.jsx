import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import api from '../../api';
import { blobToImage } from '../../utilities';
import ProductEntry from '../../components/forms/ProductEntry';

class AddProductPage extends Component {
  state={
    submitting: false,
  }
  onSubmit = async (values) => {
    try {
      const { history } = this.props;
      this.setState({ submitting: true })
      const { products } = values;
      if (products && products.length) {
        for (let product of products) {
          const convertedImage = await blobToImage(product.image);
          let result = await api.uploadImage(convertedImage);
          product.image = result.secure_url;
        }
      }
      await api.addProducts(values)
      this.setState({ submitting: false });
      history.push('/employee/');
    } catch (error) {
      console.log("ERROR", error);
    }

  }
  render() {
    return (
      <div>
        <Col smOffset={3}><h3>Add a Product</h3></Col>
        <ProductEntry onSubmit={this.onSubmit} sending={this.state.submitting}/>
      </div>
    );
  }
}

export default AddProductPage;
