import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MoviePage from './components/pages/MoviesPage/MoviePage';
import MoviesPage from './components/pages/MoviesPage/MoviesPage';
import { withAuth } from './hoc/withAuth';

class App extends React.Component {
  componentDidMount() {
    const { auth, authActions } = this.props;
    if (auth.session_id) {
      authActions.fetchAuth(auth.session_id);
    }
  }
 
//error on movies load and movie page
  render() {
    const { auth } = this.props;
    return (
      <BrowserRouter>
      {auth.isLoading ? <div>Loading...</div> :
        <div>
          <Header />
          {auth.showLoginModal && <Login />}

          <Route exact path='/' component={MoviesPage} />
          <Route path='/movie/:id' component={MoviePage} />
        </div>}
      </BrowserRouter>
    );
  }
}
export default withAuth(App);
