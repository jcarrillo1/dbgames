import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import api from '../../api';
import rootReducer from '../reducers';

const middleware = compose(
  applyMiddleware(thunk.withExtraArgument(api)),
  process.env.NODE_ENV !== 'production' &&
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    middleware,
  );
}
