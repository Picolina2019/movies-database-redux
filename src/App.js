import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { API_KEY_3, API_URL, fetchApi } from './api/api';
import Header from './components/Header/Header';
import MoviePage from './pages/MoviesPage/MoviePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';

const cookies = new Cookies();

class App extends React.Component {
  //   state = {
  //   user: null,
  //   session_id: cookies.get('session_id'),
  //   isAuth: false,
  //   showLoginModal: false,
  // };
  // componentDidMount() {
  //   // const { session_id, updateAuth } = this.props;
  //   if (this.state.session_id) {
  //     fetchApi(
  //       `${API_URL}/account?api_key=${API_KEY_3}&session_id=${this.state.session_id}`
  //     ).then((user) => {
  //       updateAuth(user, this.state.session_id);
  //     });
  //   }
  // }

  state = {
    user: null,
    session_id: null,
  };

  handleUser = (user) => {
    this.setState({ user });
  };

  handleSessionId = (session_id) => {
    cookies.set('session_id', session_id, {
      path: '/',
      maxAge: 2592000,
    });
    this.setState({
      session_id,
    });
  };
  componentDidMount() {
    const session_id = cookies.get('session_id');
    if (session_id) {
      fetchApi(
        `${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`
      ).then((user) => {
        this.handleUser(user);
      });
    }
  }

  render() {
    const {
      user,
      session_id,
      updateAuth,
      onLogout,
      toggleLoginModal,
      showLoginModal,
    } = this.state;
    console.log(user);
    console.log(session_id);
    return (
      <BrowserRouter>
        <Header
          handleSessionId={this.handleSessionId}
          handleUser={this.handleUser}
          user={user}
          updateAuth={updateAuth}
          onLogout={onLogout}
          session_id={session_id}
          toggleLoginModal={toggleLoginModal}
          showModal={showLoginModal}
        />

        <Route exact path='/' component={MoviesPage} />
        <Route path='/movie/:id' component={MoviePage} />
      </BrowserRouter>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     user: state.auth.user,
//     session_id: state.auth.session_id,
//     isAuth: state.auth.isAuth,
//     showLoginModal: state.auth.showLoginModal,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateAuth: (user, session_id) =>
//       dispatch(actionCreatorUpdateAuth({ user, session_id })),
//     onLogout: () => dispatch(actionCreatorLogOut()),
//     toggleLoginModal: () => dispatch(actionCreatorToggleLoginModal()),
//   };
// };
// export default connect(mapStateToProps, {
//   updateAuth,
//   onLogout,
//   toggleLoginModal,
// })(App);
export default App;
