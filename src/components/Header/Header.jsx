import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../hoc/withAuth';
import UserMenu from './UserMenu';

function Header({ auth, authActions }) {
  return (
    <nav className='navbar navbar-light bg-secondary'>
      <div className='container'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
        </ul>
        <>
        {auth.error !== null && <div style={{color:'purple', fontStyle:'italic'}}>something went wrong, you are not logged in, try again.</div>}
        </>
        {auth.user ? (
          <UserMenu />
        ) : (
          <button
            className='btn btn-outline-info'
            type='button'
            onClick={authActions.toggleLoginModal}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default withAuth(Header);
