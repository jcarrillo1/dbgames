import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import { Row } from 'react-bootstrap';
import api from '../../api';
import GameCarousel from '../../components/common/GameCarousel';

function makePlatformPage(platform) {
  return class PlatformPage extends Component {
    state = {
      loading: true,
      games: [],
    }
    componentDidMount() {
      console.log(console);
      api.getProducts({ platform_abv: platform })
        .then(result => result.data)
        .then(data => {
          const { games } = data;
          this.setState({
            games,
            loading: false,
          })
        })
        .catch(error => console.log(error));
    }
    onSubmit = (data) => {
      console.log(data);
      this.setState({
        loading: true,
        games: [],
      })
      api.getProducts(data)
        .then(result => result.data)
        .then(data => {
          const { games } = data;
          this.setState({
            games: games || [],
            loading: false,
          })
        })

    }
    render() {
      const { loading, games } = this.state;
      if (loading) {
        return <Spinner spinnerName="three-bounce" />;
      }
      return (
        <div>
          {/* <Row>
            <GameFilterForm onSubmit={this.onSubmit} />
          </Row> */}
          <br />
          <Row>
            <GameCarousel games={games} link="/product/" />
          </Row>
        </div>
      );
    }
  }
}

export default makePlatformPage;
