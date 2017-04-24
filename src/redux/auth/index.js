export const initialState = {
  fetching: false,
  authenticated: !!localStorage.getItem('id_token'),
  error: false,
  message: '',
  user: null,
};

export const types = {
  AUTHENTICATION_REQUEST: 'AUTH/AUTHENTICATION_REQUEST',
  AUTHENTICATION_SUCCESS: 'AUTH/AUTHENTICATION_SUCCESS',
  AUTHENTICATION_FAILURE: 'AUTH/AUTHENTICATION_FAILURE',
  LOGOUT_REQUEST: 'AUTH/LOGOUT_REQUEST',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.AUTHENTICATION_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
        error: false,
        message: '',
      });
    case types.AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        authenticated: true,
        error: false,
        message: '',
        user: action.user,
      });
    case types.AUTHENTICATION_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        authenticated: false,
        error: true,
        message: action.message,
        user: null,
      });
    case types.LOGOUT_REQUEST:
      return Object.assign({}, state, {
        fetching: false,
        authenticated: false,
        error: false,
        message: action.message,
        user: null,
      });
    default:
      return state;
  }
}

const authRequest = () => ({ type: types.AUTHENTICATION_REQUEST });

const authSuccess = data => ({
  ...data,
  type: types.AUTHENTICATION_SUCCESS,
});

const authFailure = error => ({
  type: types.AUTHENTICATION_FAILURE,
  message: error.message,
});

const logoutRequest = () => ({ type: types.LOGOUT_REQUEST });

export function login(credentials, roles) {
  return (dispatch, getState, api) => {
    dispatch(authRequest());
    api.login(credentials)
      .then(results => results.data)
      .then((data) => {
        if (!data.user || !data.user.role || !roles.find(role => data.user.role === role)) {
          dispatch(authFailure({ message: 'Unauthorized.' }));
          return;
        }
        localStorage.setItem('id_token', data.token);
        dispatch(authSuccess(data));
      })
      .catch(error => dispatch(authFailure(error.response.data)));
  };
}

export function signup(info) {
  return (dispatch, getState, api) => {
    dispatch(authRequest())
    api.signup(info)
      .then(results => results.data)
      .then((data) => {
        if (!data.user) {
          dispatch(authFailure({ message: 'Unauthorized.' }));
          return;
        }
        localStorage.setItem('id_token', data.token);
        dispatch(authSuccess(data));
      })
      .catch(error => dispatch(authFailure(error.response.data)));
  }
}

export function getUserInfo() {
  return (dispatch, getState, api) => {
    dispatch(authRequest());
    api.getUserInfo()
      .then(result => result.data)
      .then(data => dispatch(authSuccess(data)))
      .catch((error) => {
        localStorage.removeItem('id_token');
        dispatch(authFailure(error.response.data));
      });
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('id_token');
    dispatch(logoutRequest());
  };
}
