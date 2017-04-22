import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from '../components/forms/Login';
import { login } from '../redux/auth';

class EmployeeLogin extends Component {
  onSubmit = (data) => {
    const { dispatch } = this.props;
    dispatch(login(data, ['employee', 'admin']));
  }

  render() {
    const { fetching, authenticated } = this.props;
    if (authenticated) {
      return <Redirect to="/employee" />;
    }
    return (
      <div>
        <Col smOffset={3} sm={7}><h3>Employee Login</h3></Col>
        <Login onSubmit={this.onSubmit} loading={fetching} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
});

export default connect(mapStateToProps)(EmployeeLogin);
