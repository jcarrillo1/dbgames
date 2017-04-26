import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import moment from 'moment';
import api from '../../api';
import Rating from '../../components/common/RatingComponent';

class Product extends Component {
  state = {
    loading: true,
    product: {},
  }
  componentDidMount() {
    const { match } = this.props;
    api.getProduct(match.params.id)
      .then(result => result.data)
      .then(data => {
        const { product } = data;
        product.release_date = product.release_date ?
          moment(product.release_date).format('DD/MM/YYYY') :
          moment().format('DD/MM/YYYY');
        this.setState({
          product,
          loading: false,
        })
      })
      .catch(error => console.log(error));
  }

  render() {
    const { loading, product } = this.state;
    if (loading) {
      return <Spinner spinnerName="three-bounce" />;
    }
    return (
      <main>
        <div className="row game-panels-container">
          <div className="col-xs-8">
            <div className="game-panel-title">{product.title}</div>
            <div className="game-panel-details">
              <ul>
                <li>
                  <span className="game-panel-details-label">Developer: </span>
                  <span className="game-panel-details-value">{product.developer}</span>
                </li>
                <li>
                  <span className="game-panel-details-label">Publisher: </span>
                  <span className="game-panel-details-value">{product.publisher}</span>
                </li>
                <li>
                  <span className="game-panel-details-label">Release Date: </span>
                  <span className="game-panel-details-value">{product.release_date}</span>
                </li>
                <li>
                  <span className="game-panel-details-label">Platform: </span>
                  <span className="game-panel-details-value">{product.name}</span>
                </li>
                {/* <li>
                  <span className="game-panel-details-label">Rating: </span>
                  <span className="game-panel-details-value"><Rating value={4} size={20}/></span>
                </li> */}
              </ul>
            </div>
            <div className="game-panel-image media media-middle">
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className="col-xs-4">
            <div className="panel">
              <div className="panel-body">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="game-panel-price">
                      ${product.price}
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="game-panel-quantity">
                      {product.quantity} available.
                    </div>
                  </div>
                  {/* <div className="col-xs-12">
                    <button className="btn btn-primary btn-lg btn-block">
                      Add to Cart
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="panel panel-default product-details">

          <div className="panel-body">
            <h3>Product Description</h3>
            <p>{product.description}</p>
          </div>

        </div>
      </main>
    );
  }
}

export default Product;
