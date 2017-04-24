import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignUp from '../components/forms/SignUp';
import { signup } from '../redux/auth';

class DefaultSignUp extends Component {
  onSubmit = (data) => {
    const { dispatch } = this.props;
    dispatch(signup(data));
  }

  render() {
    const { fetching, authenticated } = this.props;
    if (authenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Col smOffset={3} sm={7}><h3>Sign Up</h3></Col>
        <SignUp onSubmit={this.onSubmit} loading={fetching} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
});

export default connect(mapStateToProps)(DefaultSignUp);
