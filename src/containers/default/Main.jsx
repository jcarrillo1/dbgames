import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import { Row } from 'react-bootstrap';
import api from '../../api';
import GameFilterForm from '../../components/forms/GameFilter';
import GameDisplayPanel from '../../components/common/GameDisplayPanel';
import GameCarousel from '../../components/common/GameCarousel';

class Main extends Component {
  state = {
    loading: true,
    games: [],
  }
  componentDidMount() {
    api.getProducts()
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
    const GamePanels = games.map((game, index) =>
      <GameDisplayPanel className="col-xs-3"
        game={game} key={index} link='/product/' />
    )
    return (
      <div>
        <Row>
          <GameFilterForm onSubmit={this.onSubmit} />
        </Row>
        <br />
        <Row>
          {GamePanels}
        </Row>
      </div>
    );
  }
}

export default Main;
