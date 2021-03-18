import { cookies } from '../../utils/cookies';
import * as types from './auth.types';

const initialState = {
  user: null,
  session_id: cookies.get('session_id'),
  showLoginModal: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS_AUTH:
      return {
        ...state,
        user: action.payload.user,
        session_id: action.payload.session_id,
      };
    case types.LOGOUT:
      return {
        ...state,
        user: null,
        session_id: null,
      };
    case types.FETCH_ERROR_AUTH:
      return {
        ...state,
        user: null,
        session_id: null,
        error: action.payload.error,
      };
    case types.TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: !state.showLoginModal,
      };
    default:
      return state;
  }
};

export default authReducer;
