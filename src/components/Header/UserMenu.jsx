import React, { useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import CallApi from '../../api/api';
import { withAuth } from '../../hoc/withAuth';

const UserMenu = ({ auth, authActions }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleLogout = () => {
    CallApi.delete('/authentication/session', {
      body: {
        session_id: auth.session_id,
      },
    }).then(() => {
      authActions.onLogout();
    });
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle tag='div' data-toggle='dropdown' onClick={toggle}>
        <div style={{ cursor: 'pointer' }} onClick={toggle}>
          {' '}
          {auth.user.username}
        </div>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={handleLogout}>Exit</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default withAuth(UserMenu);
