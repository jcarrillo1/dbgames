import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ProductEntry from '../components/forms/ProductEntry';

class AddProductPage extends Component {
  onSubmit = (values) => {
    console.log(values);
  }
  render() {
    return (
      <div>
        <Col smOffset={3}><h3>Add a Product</h3></Col>
        <ProductEntry onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default AddProductPage;
