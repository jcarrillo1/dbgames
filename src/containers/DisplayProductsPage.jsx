import React, { Component } from 'react';
import axios from 'axios';
import Spinner from 'react-spinkit';
import { Row } from 'react-bootstrap';
import GameDisplayPanel from '../components/admin/GameDisplayPanel';

class DisplayProductsPage extends Component {
  state = {
    loading: true,
    games: [],
  }
  componentDidMount() {
    axios.get('http://localhost:8080/api/games')
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
  render() {
    const { loading, games } = this.state;
    if (loading) {
      return <Spinner spinnerName="three-bounce" />;
    }
    const GamePanels = games.map((game, index) => <GameDisplayPanel game={game} key={index} />)
    return (
      <div>
        <Row>
          {GamePanels}
        </Row>
      </div>
    );
  }
}

export default DisplayProductsPage;
