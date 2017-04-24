import React, { Component } from 'react';
import axios from 'axios';
import Spinner from 'react-spinkit';
import EditUserForm from '../components/forms/EditUser';

class EditUserPage extends Component {
  state = {
    loading: true,
    user: {},
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/api/users/${this.props.match.params.id}`)
      .then(result => result.data)
      .then(data => {
        const { user } = data;
        this.setState({
          user,
          loading: false,
        })
      })
      .catch(error => console.log(error));
  }
  onSubmit = (data) => {
    axios.patch(`http://localhost:8080/api/users/${this.props.match.params.id}`, data)
      .then(result => result.data)
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }
  render() {
    const { loading, user } = this.state;
    if (loading) {
      return <Spinner spinnerName="three-bounce" />;
    }
    console.log(user);

    return (
      <div>
        <EditUserForm initialValues={user} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default EditUserPage;
