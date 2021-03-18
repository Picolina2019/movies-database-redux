import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cookies } from '../../utils/cookies';
import { LOGOUT, FETCH_SUCCESS_AUTH } from '../auth/auth.types';
import rootReducer from '../rootReducer';

const updateCookies = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type === FETCH_SUCCESS_AUTH) {
    cookies.set('session_id', action.payload.session_id, {
      path: '/',
      maxAge: 2592000,
    });
  }
  if (action.type === LOGOUT) {
    cookies.remove('session_id');
  }
  return next(action);
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, updateCookies))
);

export default store;
