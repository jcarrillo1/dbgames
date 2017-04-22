import React, { Component } from 'react';
import axios from 'axios';
import Spinner from 'react-spinkit';
import moment from 'moment';
import EditProductForm from '../components/forms/EditProduct';

class EditProductPage extends Component {
  state = {
    loading: true,
    game: {},
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
  onSubmit = (data) => {
    axios.patch(`http://localhost:8080/api/games/${this.props.match.params.id}`, data)
      .then(result => result.data)
      .then(data => console.log(data))
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
