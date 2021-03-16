import Cookies from 'universal-cookie';
import * as types from './auth.types'

const cookies = new Cookies();

const initialState={
  user:null,
  session_id: cookies.get('session_id'),
  isAuth:false,
  showLoginModal:false
}

const authReducer=(state= initialState,action)=>{
switch (action.type) {
  case types.UPDATE_AUTH:
    cookies.set('session_id', action.payload.session_id, {
      path: '/',
      maxAge: 2592000,
    });
    return {
      ...state,
      user: action.payload.user,
      session_id: action.payload.session_id,
      isAuth: true,
    };
  case types.LOGOUT:
    cookies.remove('session_id');
    return {
      ...state,
      user: null,
      session_id: null,
      isAuth: null,
    };
    case types.TOGGLE_LOGIN_MODAL:
      return{
        ...state,
        showLoginModal: !state.showLoginModal
      }
  default:
    return state;
}

}

export default authReducer