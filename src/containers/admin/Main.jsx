import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import { Table, Row } from 'react-bootstrap';
import api from '../../api';
import UsersFilterForm from '../../components/forms/UsersFilter';
import UsersTableRow from '../../components/admin/UsersTableRow';

class DisplayUsersPage extends Component {
  state = {
    loading: true,
    users: [],
  }
  componentDidMount() {
    api.getUsers()
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
  onSubmit = (data) => {
    this.setState({ loading: true, users: [] })
    api.getUsers(data)
      .then(result => result.data)
      .then(data => {
        const { users } = data;
        this.setState({
          users: users || [],
          loading: false,
        })
      })
  }
  render() {
    const { loading, users } = this.state;
    if (loading) {
      return <Spinner spinnerName="three-bounce" />;
    }
    const UsersRows = users.map((user, index) => <UsersTableRow user={user} key={index} />)
    return (
      <div>
        <Row>
          <UsersFilterForm onSubmit={this.onSubmit} />
        </Row>
        <br />
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
      </div>
    );
  }
}

export default DisplayUsersPage;
