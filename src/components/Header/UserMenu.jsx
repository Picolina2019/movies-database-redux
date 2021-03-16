import React, { useContext, useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import CallApi from '../../api/api';
import { AppContext } from '../../App';

export const UserMenu = () => {
  const { user, session_id, onLogout } = useContext(AppContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleLogout = () => {
    CallApi.delete('/authentication/session', {
      body: {
        session_id: session_id,
      },
    }).then(() => {
      onLogout();
    });
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag='div'
        data-toggle='dropdown'
        area-expanded={dropdownOpen}
        onClick={toggle}>
        <div onClick={toggle}> {user.username}</div>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={handleLogout}>Exit</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
