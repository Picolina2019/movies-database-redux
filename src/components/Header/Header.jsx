import React from 'react'
import Login from '../Login/Login'

import UserMenu from './UserMenu';


function Header({handleSessionId, handleUser,updateAuth, user, onLogout, session_id, toggleLoginModal, showModal}) {
  return (
    <nav className='navbar navbar-light bg-secondary'>
      <div className='container'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <a className='nav-link'>Home</a>
          </li>
        </ul>
        {user ? (
          <UserMenu user={user} onLogout={onLogout} session_id={session_id} />
        ) : (
          <Login handleSessionId={handleSessionId} handleUser={handleUser} showModal={showModal} toggleLoginModal={toggleLoginModal} updateAuth={updateAuth} />
        )}
      </div>
    </nav>
  );
}

export default Header
