import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import api from '../../api';
import EditUserForm from '../../components/forms/EditUser';

class EditUserPage extends Component {
  state = {
    loading: true,
    submitting: false,
    user: {},
  }
  componentDidMount() {
    api.getUser(this.props.match.params.id)
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
    this.setState({ submitting: true });
    api.editUser(this.props.match.params.id, data)
      .then(result => result.data)
      .then(data => {
        this.setState({ submitting: false });
        this.props.history.push('/admin');
      })
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
