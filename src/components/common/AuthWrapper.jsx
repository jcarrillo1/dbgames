import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Spinner from 'react-spinkit';
import { getUserInfo } from '../../redux/auth';

function AuthWrapper(AuthenticatedComponent, roles, redirectPath) {
  class AuthenticatedRoute extends Component {

    static propTypes = {
      authenticated: PropTypes.bool.isRequired,
      user: PropTypes.shape({}),
      dispatch: PropTypes.func.isRequired,
      fetching: PropTypes.bool.isRequired,
    }

    static defaultProps = {
      user: {},
    }

    state = {
      redirect: false,
    }

    componentWillMount() {
      const { authenticated, user, dispatch } = this.props;
      if (authenticated && (!user || Object.keys(user).length < 0)) {
        dispatch(getUserInfo());
      }
    }

    checkRole = () => {
      const { user } = this.props;
      if (!user) return false;
      return roles.find(role => user.role === role);
    }
    render() {
      const { authenticated, user, fetching } = this.props;
      if (fetching || (authenticated && !user)) {
        return (
          <Spinner spinnerName="three-bounce" />
        );
      }
      if (!authenticated || !this.checkRole()) {
        return (
          <Redirect to={redirectPath} />
        );
      }
      return <AuthenticatedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    ...state.auth,
  });

  return connect(mapStateToProps)(AuthenticatedRoute);
}

export default AuthWrapper;
