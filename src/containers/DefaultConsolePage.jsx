import React, { Component } from 'react';

function consolePage(console){}
  class DefaultConsolePage extends Component {
    state = {}
    componentDidMount() {
      axios.post(`http://localhost:8080/api/games`)
    }
  }
}

export default consolePage;
