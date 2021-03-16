export const updateAuth=(payload)=>{
  return{
    type:'UPDATE_AUTH',
    payload
  }
}
export const onLogout = () => {
  return {
    type: 'LOGOUT'
  };
};

export const toggleLoginModal=()=>{
  return {
    type: 'TOGGLE_LOGIN_MODAL',
  };
}
