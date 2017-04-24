import React, { Component } from 'react';
import axios from 'axios';
import Spinner from 'react-spinkit';
import { Table } from 'react-bootstrap';
import UsersTableRow from '../components/admin/UsersTableRow';
class DisplayUsersPage extends Component {
  state = {
    loading: true,
    users: [],
  }
  componentDidMount() {
    axios.get('http://localhost:8080/api/users')
      .then(result => result.data)
      .then(data => {
        const { users } = data;
        this.setState({
          users,
          loading: false,
        })
      })
      .catch(error => console.log(error));
  }
  render() {
    const { loading, users } = this.state;
    if (loading) {
      return <Spinner spinnerName="three-bounce" />;
    }
    const UsersRows = users.map((user, index) => <UsersTableRow user={user} key={index} />)
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {UsersRows}
        </tbody>
      </Table>
    );
  }
}

export default DisplayUsersPage;
